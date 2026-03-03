import json, openpyxl

# Load Excel
wb = openpyxl.load_workbook(r'd:\CEFM CHURCH\churches-state and district wise\MISSIONARY DETAILS ALL FINAL.xlsx')

state_icons = {
    'TAMILNADU': ('🌴', 'Tamil Nadu', '#1a4a2a'),
    'ANDHRA PRADESH': ('🏔️', 'Andhra Pradesh', '#1a2a4a'),
    'TELUGANA': ('💧', 'Telangana', '#2a1a4a'),
    'CHHATTISGARH': ('🌿', 'Chhattisgarh', '#4a2a1a'),
    'MAHARASHTRA': ('⛰️', 'Maharashtra', '#4a1a2a'),
    'ODISHA': ('🌊', 'Odisha', '#1a3a4a'),
}

states_data = {}
totals = {}
for sheet in wb.sheetnames:
    ws = wb[sheet]
    rows = []
    for row in ws.iter_rows(min_row=2, values_only=True):
        no = row[0]
        name = str(row[1]).strip() if row[1] else ''
        addr = str(row[2]).strip() if row[2] else ''
        if name:
            rows.append((no, name, addr))
    states_data[sheet] = rows
    totals[sheet] = len(rows)

total_missionaries = sum(totals.values())

# Build state tabs HTML
tabs_html = ''
for sheet in wb.sheetnames:
    icon, label, _ = state_icons[sheet]
    tabs_html += f'                <button class="state-tab" onclick="showState(\'{sheet}\')" id="tab-{sheet}">{icon} {label} <span class="tab-count">({totals[sheet]})</span></button>\n'

# Build state panels HTML
panels_html = ''
for sheet in wb.sheetnames:
    icon, label, bg = state_icons[sheet]
    rows = states_data[sheet]
    cards = ''
    for no, name, addr in rows:
        cards += f'''                    <div class="missionary-card reveal">
                        <div class="m-number">{no}</div>
                        <div class="m-info">
                            <h4>{name}</h4>
                            <p>📍 {addr}</p>
                        </div>
                    </div>
'''
    panels_html += f'''            <div class="state-panel" id="panel-{sheet}" style="display:none;">
                <div class="state-header" style="background: linear-gradient(135deg, {bg} 0%, #0a1628 100%);">
                    <span style="font-size:2.5rem;">{icon}</span>
                    <div>
                        <h3>{label}</h3>
                        <p>{totals[sheet]} Missionaries</p>
                    </div>
                </div>
                <div class="missionary-grid">
{cards}                </div>
            </div>
'''

# Read existing nav/footer from another page for consistency
nav_html = '''    <nav class="navbar scrolled" id="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">
                <img src="images/logo.png" alt="CEFM Logo" class="logo-img" />
                <div class="logo-text">
                    <span class="logo-name">CHRISTIAN EVANGELICAL FELLOWSHIP MISSION</span>
                </div>
            </a>
            <div class="nav-links" id="navLinks">
                <a href="index.html">Home</a>
                <a href="leadership.html">Leadership</a>
                <a href="ministries.html">Ministries</a>
                <a href="churches.html" class="active">Churches</a>
                <a href="prayer.html">Prayer Wall</a>
                <a href="service.html">Service</a>
                <a href="live.html">Live Stream</a>
                <a href="contact.html">Contact Us</a>
                <a href="donate.html" class="nav-donate">♥ Donate</a>
            </div>
            <div class="nav-toggle" id="navToggle"><span></span><span></span><span></span></div>
        </div>
    </nav>'''

footer_html = '''    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="logo-name">CHRISTIAN EVANGELICAL FELLOWSHIP MISSION</div>
                    <p>Founded in 1997, CEFM is dedicated to spreading the Gospel to every unreached soul across India.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <div class="footer-links">
                        <a href="index.html">Home</a>
                        <a href="leadership.html">Leadership</a>
                        <a href="ministries.html">Ministries</a>
                        <a href="churches.html">Churches</a>
                        <a href="prayer.html">Prayer Wall</a>
                        <a href="donate.html">Donate</a>
                    </div>
                </div>
                <div>
                    <h4>Ministries</h4>
                    <div class="footer-links">
                        <a href="ministries.html">Church Planting</a>
                        <a href="ministries.html">Bible Seminary</a>
                        <a href="ministries.html">Literature Ministry</a>
                        <a href="ministries.html">Social Welfare</a>
                    </div>
                </div>
                <div>
                    <h4>Headquarters</h4>
                    <div class="footer-contact">
                        <p><span class="icon">📍</span> CEFM Worship Tabernacle, Near Railway Station, Kanyakumari, Tamil Nadu – 629702</p>
                        <p><span class="icon">📧</span> cefmindia@gmail.com</p>
                        <p><span class="icon">📞</span> +91 9894940064 | +91 7502128063</p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <span>© 2025 CEFM Ministries. All rights reserved.</span>
                <span>Made with ♥ for the Kingdom of God</span>
            </div>
        </div>
    </footer>'''

html = f'''<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="CEFM Missionaries — {total_missionaries} missionaries serving across 6 states of India. Tamil Nadu, Andhra Pradesh, Telangana, Chhattisgarh, Maharashtra, and Odisha." />
    <title>Our Missionaries — Christian Evangelical Fellowship Mission</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✝</text></svg>">
    <style>
        .state-tabs {{
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            justify-content: center;
            margin-bottom: 40px;
        }}
        .state-tab {{
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(212,175,55,0.25);
            color: rgba(255,255,255,0.75);
            border-radius: 50px;
            padding: 10px 22px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
        }}
        .state-tab:hover, .state-tab.active {{
            background: linear-gradient(135deg, var(--gold-light), var(--gold-deep));
            color: var(--midnight);
            border-color: transparent;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(212,175,55,0.3);
        }}
        .tab-count {{
            opacity: 0.7;
            font-size: 0.8rem;
        }}
        .state-header {{
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 32px;
            border-radius: 16px;
            margin-bottom: 32px;
            color: var(--white);
        }}
        .state-header h3 {{
            font-size: 1.6rem;
            color: var(--gold-light);
            margin-bottom: 4px;
        }}
        .state-header p {{
            color: rgba(255,255,255,0.7);
        }}
        .missionary-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 16px;
        }}
        .missionary-card {{
            background: var(--white);
            border-radius: 14px;
            padding: 20px;
            display: flex;
            align-items: flex-start;
            gap: 16px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.06);
            border-left: 3px solid var(--gold-light);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }}
        .missionary-card:hover {{
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(0,0,0,0.1);
        }}
        .m-number {{
            min-width: 36px;
            height: 36px;
            background: linear-gradient(135deg, var(--gold-light), var(--gold-deep));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.85rem;
            color: var(--midnight);
            flex-shrink: 0;
        }}
        .m-info h4 {{
            color: var(--deep-blue);
            font-size: 0.95rem;
            margin-bottom: 4px;
            font-weight: 600;
        }}
        .m-info p {{
            color: var(--text-muted);
            font-size: 0.82rem;
            line-height: 1.5;
        }}
        .stats-bar {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 16px;
            max-width: 900px;
            margin: 0 auto 48px;
        }}
        .stat-chip {{
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(212,175,55,0.2);
            border-radius: 12px;
            padding: 16px;
            text-align: center;
        }}
        .stat-chip .num {{
            font-size: 1.6rem;
            font-weight: 700;
            color: var(--gold-light);
        }}
        .stat-chip .lbl {{
            font-size: 0.8rem;
            color: rgba(255,255,255,0.6);
            margin-top: 4px;
        }}
    </style>
</head>

<body>

{nav_html}

    <!-- PAGE HEADER -->
    <section class="page-header">
        <span class="section-subtitle">His Hands, His Feet</span>
        <h1>Our Missionaries</h1>
        <p class="breadcrumb"><a href="index.html">Home</a> / Missionaries</p>
    </section>

    <!-- STATS -->
    <section class="section" style="background: linear-gradient(135deg, #0a1628 0%, #1a2744 100%);">
        <div class="container text-center">
            <span class="section-subtitle reveal" style="color: var(--gold-light);">Spreading the Light</span>
            <h2 class="section-title center reveal" style="color: var(--white);">Missionaries Across India</h2>
            <p class="section-desc reveal" style="margin: 0 auto 40px; color: rgba(255,255,255,0.7); max-width: 600px;">
                "Go therefore and make disciples of all nations." — Matthew 28:19
            </p>
            <div class="stats-bar reveal">
                <div class="stat-chip"><div class="num">{total_missionaries}</div><div class="lbl">Total Missionaries</div></div>
                <div class="stat-chip"><div class="num">6</div><div class="lbl">States</div></div>
                <div class="stat-chip"><div class="num">{totals['TAMILNADU']}</div><div class="lbl">Tamil Nadu</div></div>
                <div class="stat-chip"><div class="num">{totals['ANDHRA PRADESH']}</div><div class="lbl">Andhra Pradesh</div></div>
                <div class="stat-chip"><div class="num">{totals['TELUGANA']}</div><div class="lbl">Telangana</div></div>
                <div class="stat-chip"><div class="num">{totals['CHHATTISGARH'] + totals['MAHARASHTRA'] + totals['ODISHA']}</div><div class="lbl">Other States</div></div>
            </div>

            <!-- STATE TABS -->
            <div class="state-tabs">
{tabs_html}            </div>

            <!-- STATE PANELS -->
{panels_html}
        </div>
    </section>

    <!-- CTA -->
    <section class="cta-banner">
        <div class="container text-center">
            <span class="section-subtitle" style="position:relative;">Support His Servants</span>
            <h2>Partner with a Missionary</h2>
            <p style="max-width: 600px; margin: 0 auto 32px; color: rgba(255,255,255,0.7);">
                Each missionary serves sacrificially in remote villages. Your partnership of ₹1,500/month sustains a missionary on the field.
            </p>
            <a href="donate.html" class="btn btn-gold">♥ Donate Now</a>
            <a href="prayer.html" class="btn btn-outline" style="margin-left: 12px; color: var(--gold-light); border-color: var(--gold-light);">🙏 Pray for Them</a>
        </div>
    </section>

{footer_html}
    <script src="script.js"></script>
    <script>
        // State tab switching
        function showState(stateId) {{
            document.querySelectorAll('.state-panel').forEach(p => p.style.display = 'none');
            document.querySelectorAll('.state-tab').forEach(t => t.classList.remove('active'));
            document.getElementById('panel-' + stateId).style.display = 'block';
            document.getElementById('tab-' + stateId).classList.add('active');
        }}
        // Show first state by default
        showState('{list(wb.sheetnames)[0]}');
    </script>

</body>

</html>'''

with open(r'd:\CEFM CHURCH\churches.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f'churches.html written with {total_missionaries} missionaries across {len(wb.sheetnames)} states.')
