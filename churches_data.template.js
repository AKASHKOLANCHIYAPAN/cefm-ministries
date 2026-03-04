/* ============================================
   CEFM Churches Data & Rendering
   State → District → Church Name → Pastor with Address
   ============================================ */

const CHURCHES_DATA = __DATA_PLACEHOLDER__;

// ── Churches Rendering (Classic & Responsible style) ──

function renderChurches() {
    const container = document.getElementById('churchesContainer');
    if (!container) return;

    let html = '';

    for (const [stateName, stateData] of Object.entries(CHURCHES_DATA)) {
        const totalMissionaries = stateData.missionaries.length;

        // Group missionaries by district
        const districtGroups = {};
        stateData.missionaries.forEach(m => {
            const dist = m.district || 'Other';
            if (!districtGroups[dist]) districtGroups[dist] = [];
            districtGroups[dist].push(m);
        });

        const districtCount = Object.keys(districtGroups).length;

        html += `
    <div class="state-panel" id="state-${stateName.replace(/\s/g, '-')}">
      <div class="state-panel-header" onclick="toggleStatePanel(this)">
        <h3>${stateName}</h3>
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="state-count">${totalMissionaries} Churches · ${districtCount} Districts</span>
          <span class="chevron">&#9660;</span>
        </div>
      </div>
      <div class="state-panel-body">`;

        // Render each district
        for (const [distName, pastors] of Object.entries(districtGroups)) {
            html += `
        <div class="district-section" style="margin-bottom: 30px;">
          <div class="district-header" style="border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 8px; margin-bottom: 16px;">
            <h4 style="color: var(--midnight-blue); font-size: 1.25rem;">${distName} District</h4>
            <span class="district-count" style="color: #666; font-size: 0.9rem;">${pastors.length} ${pastors.length === 1 ? 'Church' : 'Churches'}</span>
          </div>
          <div class="church-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">`;

            pastors.forEach(pastor => {
                html += `
            <div class="church-list-item classic-card" style="background: #fff; border: 1px solid rgba(212,175,55,0.3); border-radius: 8px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); border-top: 4px solid var(--gold-light); transition: transform 0.3s ease;">
              <h5 class="church-name-text" style="color: var(--midnight-blue); font-size: 1.15rem; margin-bottom: 12px; font-weight: 700;">⛪ ${pastor.churchName || 'CEFM Church'}</h5>
              <div class="pastor-details-wrapper" style="display: flex; flex-direction: column; gap: 8px;">
                <span class="pastor-name-text" style="color: #333; font-weight: 600; font-size: 0.95rem;">Pastor: Pr. ${formatName(pastor.name)}</span>
                <span class="pastor-address-text" style="color: #555; font-size: 0.9rem; line-height: 1.5;">📍 Address: ${formatAddress(pastor.address)}</span>
              </div>
            </div>`;
            });

            html += `</div></div>`;
        }

        html += `</div></div>`;
    }

    container.innerHTML = html;
}

function formatName(name) {
    if (!name) return '';
    return name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

function formatAddress(addr) {
    if (!addr) return '';
    return addr.toLowerCase().replace(/(^|\s|,|-)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
}

function toggleStatePanel(header) {
    const headerEl = header;
    const panel = headerEl.parentElement;

    // Auto-close others (optional) - let's keep it simple and just toggle the current one
    panel.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if the required elements exist before trying to attach things to them.
    if (document.getElementById('churchesContainer')) {
        renderChurches();
    }

    // Auto-open state from ?state= query parameter (from leadership page)
    const params = new URLSearchParams(window.location.search);
    const stateParam = params.get('state');
    if (stateParam) {
        // Map display names to CHURCHES_DATA keys
        const stateMap = {
            'Tamil Nadu': 'TAMIL NADU',
            'Andhra Pradesh': 'ANDHRA PRADESH',
            'Telangana': 'TELANGANA',
            'Chhattisgarh': 'CHHATTISGARH',
            'Odisha': 'ODISHA',
            'Maharashtra': 'MAHARASHTRA'
        };
        const dataKey = stateMap[stateParam] || stateParam.toUpperCase();
        const panelId = 'state-' + dataKey.replace(/\s/g, '-');
        const panel = document.getElementById(panelId);
        if (panel) {
            panel.classList.add('open');
            setTimeout(() => {
                panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    }
});
