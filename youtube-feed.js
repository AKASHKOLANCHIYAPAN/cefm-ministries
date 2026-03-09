document.addEventListener('DOMContentLoaded', () => {
    const channelId = 'UCi0JnXpAXe9pBWyqrTMWA3Q';
    const rssUrl = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
    const fetchUrl = `https://corsproxy.io/?url=${rssUrl}`;

    const grid = document.getElementById('recent-sermons-grid');
    const loadingText = document.getElementById('sermons-loading');

    if (!grid) return;

    fetch(fetchUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const entries = Array.from(data.querySelectorAll('entry')).slice(0, 3);

            if (entries.length === 0) {
                if (loadingText) loadingText.textContent = 'No recent sermons found.';
                return;
            }

            if (loadingText) loadingText.style.display = 'none';
            grid.innerHTML = '';

            entries.forEach((entry, index) => {
                const title = entry.querySelector('title').textContent;
                const link = entry.querySelector('link').getAttribute('href');
                let videoId = entry.querySelector('id').textContent.replace('yt:video:', '');

                const pubDateStr = entry.querySelector('published').textContent;
                const pubDate = new Date(pubDateStr);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = pubDate.toLocaleDateString('en-US', options);

                const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                // Calculate transition delay to stagger child animations
                const delay = index * 0.15;

                const cardHTML = `
                    <a href="${link}" target="_blank" rel="noopener" class="ministry-card visible"
                        style="text-align: left; text-decoration: none; color: inherit; cursor: pointer; display: flex; flex-direction: column; height: 100%; transition-delay: ${delay}s;">
                        <div style="aspect-ratio: 16/9; border-radius: 12px; margin-bottom: 20px; overflow: hidden; position: relative; flex-shrink: 0;">
                            <img src="${thumbnail}" alt="${title.replace(/"/g, '&quot;')}" style="width: 100%; height: 100%; object-fit: cover;">
                            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.25); display: flex; align-items: center; justify-content: center; transition: background 0.3s;">
                                <span style="font-size: 3rem; color: #fff; opacity: 0.9; text-shadow: 0 4px 12px rgba(0,0,0,0.3);">▶</span>
                            </div>
                        </div>
                        <p style="font-size: 0.78rem; color: var(--gold); font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px;">
                            ${formattedDate}
                        </p>
                        <h3 style="font-size: 1.1rem; margin-bottom: 8px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${title}</h3>
                        <div style="flex-grow: 1;"></div>
                        <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 12px; font-weight: 500;">
                            <span style="display:inline-block; width:8px; height:8px; background:var(--gold); border-radius:50%; margin-right:6px;"></span>CEFM Ministries
                        </p>
                    </a>
                `;

                grid.innerHTML += cardHTML;
            });
        })
        .catch(error => {
            console.error('Error fetching YouTube feed:', error);
            if (loadingText) loadingText.textContent = 'Unable to load recent sermons at this time.';
        });
});
