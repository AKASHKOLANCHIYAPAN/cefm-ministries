/* ============================================
   CEFM Churches Data & Rendering
   State → District → Pastor with Address
   ============================================ */

const CHURCHES_DATA = {
    "ANDHRA PRADESH": {
        missionaries: [
            { no: 1, name: "P. NARASANNA (TITUS)", address: "2-346, CHINNATUMBALAM, PEDDUKADABUR, KURNOOL(DIST)", district: "Kurnool" },
            { no: 2, name: "A. RAVAM RAMU", address: "16-450, VENUGOPALPURAM, RENIGUNTA, TIRUPATI", district: "Tirupati" },
            { no: 3, name: "G. DEVAPRASAD", address: "RICE GOWDOWN, VENLATAGIRI, NELLORE", district: "Nellore" },
            { no: 4, name: "MADIVI LAXMAN RAO", address: "6-68, SHITHAIGUDEM, MULAKALAPALLI, KHAMMAM", district: "Khammam" },
            { no: 5, name: "GADDA VARAPRASAD", address: "SIT COLONY, MANDADHI, VELDHURI, GUNTUR", district: "Guntur" },
            { no: 6, name: "A. JOSHUA", address: "MILITORY COLONY, VENKATAGIRI TOWN, NELLORE", district: "Nellore" },
            { no: 7, name: "A. JAYAKUMAR", address: "16-9-70, 3RD STREET, RAMALINGAPURAM, NELLORE", district: "Nellore" },
            { no: 8, name: "M. PRABHU DASS", address: "AVUNDATTI WADA, DAGEDAVTHI, NELLORE", district: "Nellore" },
            { no: 9, name: "A. N. JOSEPH", address: "26-8-583, 9TH STREET, VMR NAGAR, NELLORE", district: "Nellore" },
            { no: 10, name: "L. JOHN PETER", address: "4-1929/2, DURGANAGER COLONY, CHITTOOR", district: "Chittoor" },
            { no: 11, name: "K. YACOB", address: "VELKUR, CHITTOOR", district: "Chittoor" },
            { no: 12, name: "L.JAMES. L.SENNAVARAYA PERUMAL", address: "8-16, SUNDHARAJA PURAM, YELAMARAGU PALLI, G.D.NELLORE, CHITTOOR", district: "Chittoor" },
            { no: 13, name: "T. SUBRAMANAYAM (JOHN)", address: "ERIKAMBATTU. VILL, NARAYANAVARAM MADAL, TIRUPATI", district: "Tirupati" },
            { no: 14, name: "A. SATHISH BABU", address: "18/73-4, JOTHI NAGER, RENIGUNTA", district: "Tirupati" },
            { no: 15, name: "K. KORNELI (ETHIRAJU)", address: "10-463, KRANTHI NAGAR, RAJEEV NAGAR, TIRUPATI", district: "Tirupati" },
            { no: 16, name: "R. ASEERVADAM", address: "RAMA SAMUDRAM(V), THIRUMALAKUPPAM, PUTTUR MANDAL, TIRUPATI", district: "Tirupati" },
            { no: 17, name: "V. NATARAJAN", address: "17-504-1, PATHNIKULAM, RENIGUNTA, CHITTOOR", district: "Chittoor" },
            { no: 18, name: "PAUL JOSHI, SABBITI", address: "20-49,5/8,3050, MARUTHI NAGAR, KOVLA GUNTA, TIRUPATI", district: "Tirupati" },
            { no: 19, name: "M. JEEVA RATNAM", address: "28-1480, RAJIV NAGAR, THENE BANDA, CHITTOOR", district: "Chittoor" },
            { no: 20, name: "M. EZEKIEL ANANDARAJ", address: "28-1410, GANGANA PALLE ROAD, RAMNAGAR COLONY, CHITTOOR", district: "Chittoor" },
            { no: 21, name: "A. EASAK", address: "G.D, NELLORE NEW COLONY, G.D, NELLOOR MANDAL, CHITTOOR", district: "Chittoor" },
            { no: 22, name: "C. THOMAS (VADIVELU)", address: "G.D, NELLORE NEW COLONY, G.D, NELLOOR MANDAL, CHITTOOR", district: "Chittoor" },
            { no: 23, name: "H. ARUMUGAM (ABRAHAM)", address: "5/21-1A, NGO'S COLONY, PUTTUR POST& MANDAL, TIRUPATI", district: "Tirupati" },
            { no: 24, name: "J. JYOTHIKUMAR", address: "THIPPINALDUPALLI, DEVALAM PET, CHITTOOR", district: "Chittoor" },
            { no: 25, name: "DARA. PRASADU", address: "3/315, SHANTHI NAGER, KONDA PURAM, KADAPA(DIST)", district: "Kadapa" },
            { no: 26, name: "G. VENKATAIA", address: "S.C COLONY, RACHAKONDA, PULLALA CHRUVU, PRAKASHAM", district: "Prakasam" },
            { no: 27, name: "PANJAM MASTHANAYYA (YEHOSHUVA)", address: "JAYAMPU, BALAYAPALLI(M), TIRUPATI", district: "Tirupati" }
        ]
    },
    "TELANGANA": {
        missionaries: [
            { no: 1, name: "CHARAPA LAXMAIAH", address: "BATHULANAGARAM, BURGAMPAHAD, BHADRADRIKOTHAGUDEM(DIST)", district: "Bhadradri Kothagudem" },
            { no: 2, name: "CHARAPA RAJARATNAM", address: "BATHULANAGARAM, BURGAMPAHAD, BHADRADRIKOTHAGUDEM(DIST)", district: "Bhadradri Kothagudem" },
            { no: 3, name: "SODI CHANDRAYYA", address: "RAEEGUDEM, KUKKUNURU, ELURU(DIST)", district: "Eluru" },
            { no: 4, name: "ERPA VENKATESH", address: "KOTHURU, DUMMAGUDEM, B.KOTHAGUDEM(DIST)", district: "Bhadradri Kothagudem" },
            { no: 5, name: "MARMAM VENKARA RAJU", address: "1-39/8, ADAVI RAMAVARAM, ARLAGUDEM, KHAMMAM, DUMMUGUDEM", district: "Khammam" },
            { no: 6, name: "IRPA MADHUBABU", address: "1-44,YERRAGATTU, TETAPAKA(M), ALLURI SEETHARAMARAJU(DIST)", district: "Alluri Sitharama Raju" },
            { no: 7, name: "SONDE NAGARAJU", address: "1-25, KRISHNAVARAM VI, YATAPAKA (M), E.GODAVARI", district: "East Godavari" },
            { no: 8, name: "KANITHI JANAKAIAH", address: "1-43, KOMANAPALLY GRAMAM, DUMMUGUDEM, B.KOTHAGUDEM(DIST)", district: "Bhadradri Kothagudem" },
            { no: 9, name: "KURSAM SURIBABU", address: "1-59,KUSUMANAPALLI (V),YETAPAKA MANDALAM, ALLURI SITHARAMA RAJU", district: "Alluri Sitharama Raju" },
            { no: 10, name: "ULKA SINGAIAH", address: "1-24/1, NELLIPAKA, TATAPAKA, EAST GODAVARI", district: "East Godavari" },
            { no: 11, name: "JULKAM BHEEMAIAH", address: "VISSAPURAM, YETAPAKA, ALLURI SHITARAMA RAJU(DIST)", district: "Alluri Sitharama Raju" },
            { no: 12, name: "PINNABOINA SAMBASIVARAO", address: "TATISUBANA GUDEM, DAMMAPETA, B. KOTTAGUDEM(DIST)", district: "Bhadradri Kothagudem" },
            { no: 13, name: "P. BIEMUDU SAMUEL", address: "JALAWAGU, DAMMAPETA, B.KOTHAGUDEM(DIST)", district: "Bhadradri Kothagudem" },
            { no: 14, name: "JAIPAUL NAIK", address: "TIMMAPURAM, DHAMARCHERLA, NALGONDA(DIST)", district: "Nalgonda" },
            { no: 15, name: "JONNALAGADDA RAVI", address: "LACHAPURAM, DAMMAPETA, B.KOTHAGUDEM", district: "Bhadradri Kothagudem" },
            { no: 16, name: "KURASAM DAIVA PRASAD", address: "BONTA GUDEM, MULAKALA PALLY(M.D), B. KOTHAGUDEM(DIST)", district: "Bhadradri Kothagudem" },
            { no: 17, name: "GADDA PHILIP", address: "SANTHI NAGAR, HALIYA, ANUMULA(M.D), NALGONDA(DIST)", district: "Nalgonda" },
            { no: 18, name: "ENAPANOORI NAGESWARAO", address: "PATVARI GUDEM, DHAMMAPETA, B. KOTHGUDEM(DIST)", district: "Bhadradri Kothagudem" },
            { no: 19, name: "G. RAJARATNAM", address: "PETA CHEROOVU(COLONY), KOTTURU VI, PALVANCHA, B. KOTHAGUDEM", district: "Bhadradri Kothagudem" },
            { no: 20, name: "KANGALA VENKATESH", address: "1-256, PALAMADUGU, YETAPAKA(M), EAST GODAVARI", district: "East Godavari" },
            { no: 21, name: "SUNNAM RAJU", address: "BANDRI GUDEM, YETAPAKA, ALLURI SHITHARAMA RAJU", district: "Alluri Sitharama Raju" },
            { no: 22, name: "SAVALAM JOHN", address: "NADIKUDI(VI), DUMMUGUDEM(M), B. KOTHAGUDEM(DIST)", district: "Bhadradri Kothagudem" },
            { no: 23, name: "KOMARAM NAGESH", address: "ADAVIRAMAVARAM, DHUMMUGUDEM(M), B. KOTHGUDEM(DIST)", district: "Bhadradri Kothagudem" }
        ]
    },
    "CHHATTISGARH": {
        missionaries: [
            { no: 1, name: "ANIT KUMAR MARKAM", address: "KURALATHEMALI, BHANASULI, NARHARPUR TK, KANKER(DIST)", district: "Kanker" },
            { no: 2, name: "GHANSHYAM HIRAWANI", address: "DHANALIKANHAR, KORAR, KANKER(DIST)", district: "Kanker" },
            { no: 3, name: "TITUS MASHI", address: "CHOKAWADA, DHANPUJI, BASTER", district: "Bastar" },
            { no: 4, name: "DIGAMBAR PRASAD", address: "211, DHANESARA, KANKER(DIST)", district: "Kanker" },
            { no: 5, name: "SHISPAL KAWADE", address: "BASTARBUDRA PO, KHALLARI, KONDAGAON(DIST)", district: "Kondagaon" },
            { no: 6, name: "ARVIND KUMAR KODOPI", address: "104, AWASPARA, JEPRA, CHARMA, KANKER(DIST)", district: "Kanker" },
            { no: 7, name: "DHANESHWAR KUMAR", address: "178/1, NARI, KURUD TK, DHAMTARI(DIST)", district: "Dhamtari" },
            { no: 8, name: "A. KARUNAKARAN", address: "HATGUDA PARA, BASTAR, JAGDALPUR(PO)", district: "Bastar" },
            { no: 9, name: "MANASAN BAGH", address: "DHANDRA, KONDAGAN(DIST)", district: "Kondagaon" },
            { no: 10, name: "FULSING", address: "14, BEDMAMARI, KESHKAL, KONDAGAON", district: "Kondagaon" },
            { no: 11, name: "ARJUN SING", address: "CHURA (VI), GARIYABAND(DIST)", district: "Gariyaband" },
            { no: 12, name: "UMESH KUMAR", address: "MANDROUD(VI), KURUD, DHAMTARI(DIST)", district: "Dhamtari" },
            { no: 13, name: "JAGESHWAR NISHAD", address: "49, PASHCHIM, KORMUD, DHAMTARI", district: "Dhamtari" },
            { no: 14, name: "SILAS KANDULA", address: "51, KANHANPURI, MARKATOLA, KANKER(DIST)", district: "Kanker" },
            { no: 15, name: "DILIP KUMAR CHAKRADHARI", address: "DOMPADAR, NARHARPUR, KANKER", district: "Kanker" },
            { no: 16, name: "BALIRAM JHADI", address: "161, MAHRA PARA, CHOKWADA, JAGDALPUR, BASTAR(DIST)", district: "Bastar" },
            { no: 17, name: "RANJAN MURGO", address: "DOHI KONGE, KONDAGEON(DIST)", district: "Kondagaon" },
            { no: 18, name: "SANATAN PRADHAN", address: "KESHKAL, KONDAGAON-DIST", district: "Kondagaon" }
        ]
    },
    "MAHARASHTRA": {
        missionaries: [
            { no: 1, name: "RAMRAJ KASHIRAM CHOUDHARY", address: "AT- MAHULI PO, BOPABODI, SADAK ARJUNI, GONDIA(DIST)", district: "Gondia" },
            { no: 2, name: "VINOD SUKARAM PARASGADE", address: "PANCHASHIL WARD, DURGA CHOUK, SAKOLI, BHANDARA(DIST)", district: "Bhandara" },
            { no: 3, name: "NIRANJAN MURGO", address: "BEHIND THE REST HOUSE, SALEKASA-PO, GONDIA-DIST", district: "Gondia" },
            { no: 4, name: "PANDURANG TUNKALWAR", address: "AT-POST-TA-LAKHANDUR, BHANDARA-DIST", district: "Bhandara" },
            { no: 5, name: "RAJKUMAR KALLU JAGNE", address: "SANT RAVIDAS NAGAR, WARDNO-1, GONDIA", district: "Gondia" },
            { no: 6, name: "GARIBA DAMAJI GUDIMESHRAM", address: "WARDNO-3, GANESHWARD, SADAK ARJUNI, GONDIA", district: "Gondia" },
            { no: 7, name: "LALA BISENJI BAGMARE", address: "MOHAENA, LAKHANDUR, BHANDARA-DIST", district: "Bhandara" }
        ]
    },
    "ODISHA": {
        missionaries: [
            { no: 1, name: "LAXMI KANTA PANJIA", address: "AMBABELI, BORIGUMMA, RANASPUR, KORAPUT", district: "Koraput" },
            { no: 2, name: "NABINAGANDA", address: "ATIGAM, RANIGUDA, KORAPUT-DIST", district: "Koraput" },
            { no: 3, name: "ANIL KUMAR BAGH", address: "AT-BATKUHUDI, KOTPAD, KORAPAT-DIST", district: "Koraput" },
            { no: 4, name: "BIJAY CHALKI", address: "BASULI, KOTPAD-PO, KORAPAT-DIST", district: "Koraput" },
            { no: 5, name: "MAHADEB HARIJAN", address: "NEIKKARA(WEST), KORAPET-DIST", district: "Koraput" },
            { no: 6, name: "KAMLOCHAN HARIJAN", address: "HARISAHI, BETAL, NABARANGAPUR-DIST", district: "Nabarangapur" },
            { no: 7, name: "BABULA HARIJAN", address: "AT-PAKHANA GUDA, KOTPAD, KORAPAT-DIST", district: "Koraput" },
            { no: 8, name: "NARAHARI MAJHI", address: "B.DHARGUDI, KOTPAD, KORAPUT-DIST", district: "Koraput" },
            { no: 9, name: "KAMALI HARIJAN (KAMALA BAGH)", address: "KALEGAM, JHARIGAM, NABARANGAPUR-DIST", district: "Nabarangapur" },
            { no: 10, name: "UMESH BAGH", address: "AT-BATKUHUDI, KOTPAD, KORAPAT-DIST", district: "Koraput" },
            { no: 11, name: "ARUJUN HARIJAN (GABRIEL)", address: "GIRLIGUDA, BHUSANGAGUDA, KORAPUT", district: "Koraput" },
            { no: 12, name: "DHANSAE HARIJAN (ASAW)", address: "AT-GUMUNDA, GIRLLA, KOTPAD, KORAPUT-DIST", district: "Koraput" }
        ]
    },
    "TAMIL NADU": {
        missionaries: [
            { no: 1, name: "S. DANIEL", address: "KESINGAN, MAILADUTHURAI, NAGAI-DIST", district: "Nagapattinam" },
            { no: 2, name: "P. SATHROCK", address: "ERUMOOLI MELA WELI, THIRUVADIMARUZHUR, TANJORE", district: "Thanjavur" },
            { no: 3, name: "S. PETER", address: "MAIN ROAD, NAMASIVAYAPURAM, NAGAI-DIST", district: "Nagapattinam" },
            { no: 4, name: "B. BASKAR", address: "KILINSEL STREET, CHIDAMBARAM, CUDALORE", district: "Cuddalore" },
            { no: 5, name: "K. PHILIP VIJENDRAN", address: "NO.7, INDRANAGAR, MAILADUDHURAI, NAGAI", district: "Nagapattinam" },
            { no: 6, name: "S. SARAL", address: "MELATHERU, KONULAM PALLAM, ANAKKARAI, TANJAVORE", district: "Thanjavur" },
            { no: 7, name: "S. JOHNWESLEY", address: "55A, BITTHAR, GANDHINAGAR, VELLORE", district: "Vellore" },
            { no: 8, name: "M. GIDEON MOORTHY", address: "HOSPITAL STREET, PALANGUR, TIRUKOILLUR, VILLUPURAM", district: "Villupuram" },
            { no: 9, name: "C. DAVID KANNAYIRAM", address: "KRISHNAGIRI ROAD, SINGARAPETTAI, DHARMAPURI", district: "Dharmapuri" },
            { no: 10, name: "V. CHANDRA JAYASINGH", address: "1638/9, KANNAGI ST, SATHUVACHARI, VELLORE", district: "Vellore" },
            { no: 11, name: "ANNA JOTHI CHANDRAN", address: "VELLORE-DIST", district: "Vellore" },
            { no: 12, name: "VIMALRAJ", address: "NADUVELI, KATHIRAMANGALAM, TANJORE-DIST", district: "Thanjavur" },
            { no: 13, name: "R. DANIEL", address: "PUTHU THERU, KADDUMANNARKOVIL, CUDDALORE", district: "Cuddalore" },
            { no: 14, name: "P. SAMUELMANI", address: "2/160, BHARATHIYAR ST, MELVISHARAM, VELLORE", district: "Vellore" },
            { no: 15, name: "R. ISSAC", address: "96/3, AMMANATHANGLE, WALLAJA, VELLORE", district: "Vellore" },
            { no: 16, name: "R. SEKAR (DANIEL)", address: "MAIN ROAD, KOMAL-PO, KUTTALAM", district: "Cuddalore" },
            { no: 17, name: "Rev.S. HUBERT SUBIN RAJ", address: "KARTUMANNARKOVIL, VEERANATHAM, CUDALORE", district: "Cuddalore" },
            { no: 18, name: "K.K. DEVASELVAM", address: "1/76E, MANTHAKARI, CHIDAMBARAM, CUDALORE", district: "Cuddalore" },
            { no: 19, name: "T. SATHRAK", address: "ATHINARAYANAPURAM, KURINPADI, CUDDALORE", district: "Cuddalore" },
            { no: 20, name: "STEPHAN P NAGARAJ", address: "303, SC STREET, THALIGAIVIDUTHY, THANJUR", district: "Thanjavur" },
            { no: 21, name: "M. ARULDASS", address: "BETHEL ST, SIKKALNAYAKKAN PATTAI, THANJAVUR", district: "Thanjavur" },
            { no: 23, name: "S. SIMEON JEBARAJ", address: "MAANA RAJA KOVIL ST, THISAYANVILAI, TIRUNELVELI", district: "Tirunelveli" },
            { no: 24, name: "S. SIMEON JEBARAJ", address: "5/5, RAILWAY STATION, POONGULATHUVILLAI, KANYAKUMAI", district: "Kanyakumari" },
            { no: 26, name: "K. SANTHOSAM", address: "KAMPAR ST, NAMACCHIVAYAPURAM, MAILADUTHURAI, NAGAI", district: "Nagapattinam" },
            { no: 27, name: "G. MAGIMAI DASS", address: "ATTIKUPPAM, NEMANDAPURAM, VELLORE", district: "Vellore" },
            { no: 28, name: "S. JEBAKUMAR", address: "MALLIPATTY, SINGARAPETTAI, KRISHNAGIRI", district: "Krishnagiri" },
            { no: 30, name: "R. KALAISELVI", address: "3/6, PALLIKOODATHERU, KATTUMANNARKOVIL, CUDDALORE", district: "Cuddalore" },
            { no: 31, name: "P. GIDEON MUNIYANDI", address: "1/14, MATHA KAVELI ST, AAGARAM, ARANI, T.V.MALAI", district: "Tiruvannamalai" }
        ]
    }
};

// ── Churches Rendering (Text-only: State → District → Pastor Name + Address) ──

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
          <span class="state-count">${totalMissionaries} Pastors · ${districtCount} Districts</span>
          <span class="chevron">&#9660;</span>
        </div>
      </div>
      <div class="state-panel-body">`;

        // Render each district
        for (const [distName, pastors] of Object.entries(districtGroups)) {
            html += `
        <div class="district-section">
          <div class="district-header">
            <h4>${distName} District</h4>
            <span class="district-count">${pastors.length} ${pastors.length === 1 ? 'Pastor' : 'Pastors'}</span>
          </div>
          <div class="church-list">`;

            pastors.forEach(pastor => {
                html += `
            <div class="church-list-item">
              <span class="pastor-name-text">Pr. ${formatName(pastor.name)}</span>
              <span class="pastor-address-text">${formatAddress(pastor.address)}</span>
            </div>`;
            });

            html += `</div></div>`;
        }

        html += `</div></div>`;
    }

    container.innerHTML = html;
}

function formatName(name) {
    return name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

function formatAddress(addr) {
    return addr.toLowerCase().replace(/(^|\s|,|-)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
}

function toggleStatePanel(header) {
    const panel = header.parentElement;
    panel.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', renderChurches);
