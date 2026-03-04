const fs = require('fs');

const rawJson = fs.readFileSync('new_churches_data.json', 'utf-8');

const jsContent = `/* ============================================
   CEFM Churches Data & Rendering
   State → District → Church Name → Pastor with Address
   ============================================ */

const CHURCHES_DATA = ${rawJson};

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

        html += \\`< div class="state-panel" id = "state-$\\{stateName.replace(/\\s/g, '-')\\}" >
      <div class="state-panel-header" onclick="toggleStatePanel(this)">
        <h3>$\\{stateName\\}</h3>
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="state-count">$\\{totalMissionaries\\} Churches · $\\{districtCount\\} Districts</span>
          <span class="chevron">&#9660;</span>
        </div>
      </div>
      <div class="state-panel-body">\\`;

        // Render each district
        for (const [distName, pastors] of Object.entries(districtGroups)) {
            html += \\`<div class="district-section">
          <div class="district-header">
            <h4>$\\{distName\\} District</h4>
            <span class="district-count">$\\{pastors.length\\} $\\{pastors.length === 1 ? 'Church' : 'Churches'\\}</span>
          </div>
          <div class="church-list">\\`;

            pastors.forEach(pastor => {
                html += \\`<div class="church-list-item" style="border-left: 3px solid var(--gold-light); padding-left: 15px; margin-bottom: 20px; background: rgba(255,255,255,0.02); padding: 15px; border-radius: 8px;">
              <h5 class="church-name-text" style="color: var(--midnight-blue); font-size: 1.1rem; margin-bottom: 8px;">⛪ $\\{pastor.churchName || 'CEFM Church'\\}</h5>
              <div class="pastor-details-wrapper" style="display: flex; flex-direction: column; gap: 4px;">
                <span class="pastor-name-text" style="color: #444; font-weight: 500;"><strong>Pastor:</strong> Pr. $\\{formatName(pastor.name)\\}</span>
                <span class="pastor-address-text" style="color: #666; font-size: 0.9rem;"><strong>Address:</strong> $\\{formatAddress(pastor.address)\\}</span>
              </div>
            </div>\\`;
            });

            html += \\`</div></div>\\`;
        }

        html += \\`</div></div >\\`;
    }

    container.innerHTML = html;
}

function formatName(name) {
    if (!name) return '';
    return name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

function formatAddress(addr) {
    if (!addr) return '';
    return addr.toLowerCase().replace(/(^|\\s|,|-)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
}

function toggleStatePanel(header) {
    const panel = header.parentElement;
    panel.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    renderChurches();

    const params = new URLSearchParams(window.location.search);
    const stateParam = params.get('state');
    if (stateParam) {
        const stateMap = {
            'Tamil Nadu': 'TAMIL NADU',
            'Andhra Pradesh': 'ANDHRA PRADESH',
            'Telangana': 'TELANGANA',
            'Chhattisgarh': 'CHHATTISGARH',
            'Odisha': 'ODISHA',
            'Maharashtra': 'MAHARASHTRA'
        };
        const dataKey = stateMap[stateParam] || stateParam.toUpperCase();
        const panelId = 'state-' + dataKey.replace(/\\s/g, '-');
        const panel = document.getElementById(panelId);
        if (panel) {
            panel.classList.add('open');
            setTimeout(() => {
                panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    }
});
`;

fs.writeFileSync('churches_data.js', jsContent);
console.log('Successfully wrote churches_data.js');
