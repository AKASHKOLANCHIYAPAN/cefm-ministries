/* ============================================
   CEFM Churches Data & Rendering
   State → District → Church Name → Pastor with Address
   ============================================ */

const CHURCHES_DATA = {
  "ANDHRA PRADESH": {
    "missionaries": [
      {
        "no": 1,
        "name": "P. NARASANNA(TITUS)",
        "churchName": "CEFM Church",
        "address": "2-346, CHINNATUMBALAM, PEDDUKADABUR, KURNOOL(DIST)",
        "district": "Kurnool"
      },
      {
        "no": 2,
        "name": "A. RAVAM RAMU",
        "churchName": "CEFM Church",
        "address": "16-450, VENUGOPALPURAM, RENIGUNTA, TIRUPATI.",
        "district": "Tirupati"
      },
      {
        "no": 3,
        "name": "G. DEVAPRASAD",
        "churchName": "CEFM Church",
        "address": "RICE GOWDOWN, VENLATAGIRI, NELLORE.",
        "district": "Nellore"
      },
      {
        "no": 4,
        "name": "MADIVI LAXMAN RAO",
        "churchName": "CEFM Church",
        "address": "6-68, SHITHAIGUDEM, MULAKALAPALLI, KHAMMAM.",
        "district": "Khammam"
      },
      {
        "no": 5,
        "name": "GADDA VARAPRASAD",
        "churchName": "CEFM Church",
        "address": "SIT COLONY, MANDADHI, VELDHURI, GUNTUR.",
        "district": "Guntur"
      },
      {
        "no": 6,
        "name": "A. JOSHUA",
        "churchName": "CEFM Church",
        "address": "MILITORY COLONY, VENKATAGIRI TOWN, NELLORE.",
        "district": "Nellore"
      },
      {
        "no": 7,
        "name": "A. JAYAKUMAR",
        "churchName": "CEFM Church",
        "address": "16-9-70, 3RD STREET, RAMALINGAPURAM, NELLORE.",
        "district": "Nellore"
      },
      {
        "no": 8,
        "name": "M. PRABHU DASS",
        "churchName": "CEFM Church",
        "address": "AVUNDATTI WADA, DAGEDAVTHI, NELLORE.",
        "district": "Nellore"
      },
      {
        "no": 9,
        "name": "A. N. JOSEPH",
        "churchName": "CEFM Church",
        "address": "26-8-583, 9TH STREET, VMR NAGAR, NELLORE.",
        "district": "Nellore"
      },
      {
        "no": 10,
        "name": "L. JOHN PETER,",
        "churchName": "CEFM Church",
        "address": "4-1929/2, DURGANAGER COLONY, CHITTOOR.",
        "district": "Chittoor"
      },
      {
        "no": 11,
        "name": "K. YACOB",
        "churchName": "CEFM Church",
        "address": "VELKUR, CHITTOOR.",
        "district": "Chittoor"
      },
      {
        "no": 12,
        "name": "L.JAMES. L.SENNAVARAYA PERUMAL",
        "churchName": "CEFM Church",
        "address": "8-16, SUNDHARAJA PURAM, YELAMARAGU PALLI, G.D.NELLORE,CHITTOOR.",
        "district": "Chittoor"
      },
      {
        "no": 13,
        "name": "T. SUBRAMANAYAM(JOHN)",
        "churchName": "CEFM Church",
        "address": "ERIKAMBATTU. VILL, NARAYANAVARAM MADAL, TIRUPATI.",
        "district": "Tirupati"
      },
      {
        "no": 14,
        "name": "A. SATHISH BABU",
        "churchName": "CEFM Church",
        "address": "18/73-4, JOTHI NAGER, RENIGUNTA.",
        "district": "Renigunta"
      },
      {
        "no": 15,
        "name": "K. KORNELI (ETHIRAJU)",
        "churchName": "CEFM Church",
        "address": "10-463, KRANTHI NAGAR, RAJEEV NAGAR, TIRUPATI",
        "district": "Tirupati"
      },
      {
        "no": 16,
        "name": "R. ASEERVADAM",
        "churchName": "CEFM Church",
        "address": "RAMA SAMUDRAM(V), THIRUMALAKUPPAM, PUTTUR MANDAL,TIRUPATI",
        "district": "Tirupati"
      },
      {
        "no": 17,
        "name": "V. NATARAJAN",
        "churchName": "CEFM Church",
        "address": "17-504-1, PATHNIKULAM, RENIGUNTA, CHITTOOR.",
        "district": "Chittoor"
      },
      {
        "no": 18,
        "name": "PAUL JOSHI, SABBITI",
        "churchName": "CEFM Church",
        "address": "20-49,5/8,3050, MARUTHI NAGAR, KOVLA GUNTA, TIRUPATI",
        "district": "Tirupati"
      },
      {
        "no": 19,
        "name": "M. JEEVA RATNAM",
        "churchName": "CEFM Church",
        "address": "28-1480, RAJIV NAGAR, THENE BANDA, CHITTOOR",
        "district": "Chittoor"
      },
      {
        "no": 20,
        "name": "M. EZEKIEL ANANDARAJ",
        "churchName": "CEFM Church",
        "address": "28-1410, GANGANA PALLE ROAD, RAMNAGAR COLONY, CHITTOOR.",
        "district": "Chittoor"
      },
      {
        "no": 21,
        "name": "A. EASAK",
        "churchName": "CEFM Church",
        "address": "G.D, NELLORE NEW COLONY, G.D, NELLOOR MANDAL, CHITTOOR",
        "district": "Chittoor"
      },
      {
        "no": 22,
        "name": "C. THOMAS (VADIVELU)",
        "churchName": "CEFM Church",
        "address": "G.D, NELLORE NEW COLONY, G.D, NELLOOR MANDAL, CHITTOOR",
        "district": "Chittoor"
      },
      {
        "no": 23,
        "name": "H. ARUMUGAM (ABRAHAM)",
        "churchName": "CEFM Church",
        "address": "5/21-1A, NGO'S COLONY, PUTTUR POST& MANDAL, TIRUPATI.",
        "district": "Tirupati"
      },
      {
        "no": 24,
        "name": "J. JYOTHIKUMAR",
        "churchName": "CEFM Church",
        "address": "THIPPINALDUPALLI, DEVALAM PET, CHITTOOR.",
        "district": "Chittoor"
      },
      {
        "no": 25,
        "name": "DARA. PRASADU",
        "churchName": "CEFM Church",
        "address": "3/315, SHANTHI NAGER, KONDA PURAM, KADAPA(DIST).",
        "district": "Kadapa"
      },
      {
        "no": 26,
        "name": "G. VENKATAIA",
        "churchName": "CEFM Church",
        "address": "S.C COLONY, RACHAKONDA, PULLALA CHRUVU, PRAKASHAM.",
        "district": "Prakasham"
      },
      {
        "no": 27,
        "name": "PANJAM MASTHANAYYA (YEHOSHUVA)",
        "churchName": "CEFM Church",
        "address": "JAYAMPU, BALAYAPALLI(M), TIRUPATI",
        "district": "Tirupati"
      },
      {
        "no": 28,
        "name": "DAVID",
        "churchName": "CEFM Church",
        "address": "BANDIREVU,BHADRACHALAM MANDAL,KHAMMAM.",
        "district": "Khammam"
      },
      {
        "no": 29,
        "name": "AANJANEYALU",
        "churchName": "CEFM Church",
        "address": "BALAGI NAGAR",
        "district": "Balagi nagar"
      }
    ]
  },
  "TELANGANA": {
    "missionaries": [
      {
        "no": 1,
        "name": "CHARAPA LAXMAIAH",
        "churchName": "CEFM Church",
        "address": "BATHULANAGARAM, BURGAMPAHAD, BHADRADRIKOTHAGUDEM(DIST)",
        "district": "Bhadradrikothagudem"
      },
      {
        "no": 2,
        "name": "CHARAPA . RAJARATNAM",
        "churchName": "CEFM Church",
        "address": "BATHULANAGARAM, BURGAMPAHAD, BHADRADRIKOTHAGUDEM(DIST)",
        "district": "Bhadradrikothagudem"
      },
      {
        "no": 3,
        "name": "SODI. CHANDRAYYA",
        "churchName": "CEFM Church",
        "address": "RAEEGUDEM, KUKKUNURU, ELURU(DIST)",
        "district": "Eluru"
      },
      {
        "no": 4,
        "name": "ERPA VENKATESH",
        "churchName": "CEFM Church",
        "address": "KOTHURU, DUMMAGUDEM, B.KOTHAGUDEM(DIST)",
        "district": "Kothagudem"
      },
      {
        "no": 5,
        "name": "MARMAM VENKARA RAJU",
        "churchName": "CEFM Church",
        "address": "1-39/8, ADAVI RAMAVARAM, ARLAGUDEM, KHAMMAM, DUMMUGUDEM",
        "district": "Dummugudem"
      },
      {
        "no": 6,
        "name": "IRPA MADHUBABU",
        "churchName": "CEFM Church",
        "address": "1-44,YERRAGATTU, TETAPAKA(M), ALLURI SEETHARAMARAJU(DIST)",
        "district": "Alluri seetharamaraju"
      },
      {
        "no": 7,
        "name": "SONDE. NAGARAJU",
        "churchName": "CEFM Church",
        "address": "1-25, KRISHNAVARAM VI, KRISHNAVARAM PAN, YATAPAKA (M), E.GODAVARI.",
        "district": "Godavari"
      },
      {
        "no": 8,
        "name": "KANITHI JANAKAIAH",
        "churchName": "CEFM Church",
        "address": "1-43, KOMANAPALLY GRAMAM, KOTHAPALLY(P), DUMMUGUDEM,B.KOTHAGUDEM(DIST)",
        "district": "Kothagudem"
      },
      {
        "no": 9,
        "name": "KURSAM. SURIBABU",
        "churchName": "CEFM Church",
        "address": "1-59,KUSUMANAPALLI (V),YETAPAKA MANDALAM, ALLURI SITHARAMA RAJU.",
        "district": "Alluri sitharama raju"
      },
      {
        "no": 10,
        "name": "ULKA SINGAIAH",
        "churchName": "CEFM Church",
        "address": "1-24/1, NELLIPAKA, TATAPAKA, PATTUCHEERA, EAST GODAVARI.",
        "district": "East godavari"
      },
      {
        "no": 11,
        "name": "JULKAM BHEEMAIAH",
        "churchName": "CEFM Church",
        "address": "VISSAPURAM, YETAPAKA, ALLURI SHITARAMA RAJU(DIST).",
        "district": "Alluri shitarama raju"
      },
      {
        "no": 12,
        "name": "PINNABOINA SAMBASIVARAO",
        "churchName": "CEFM Church",
        "address": "TATISUBANA GUDEM, DAMMAPETA, B. KOTTAGUDEM(DIST)",
        "district": "Kottagudem"
      },
      {
        "no": 13,
        "name": "P. BIEMUDU SAMUEL",
        "churchName": "CEFM Church",
        "address": "JALAWAGU, DAMMAPETA, B.KOTHAGUDEM(DIST)",
        "district": "Kothagudem"
      },
      {
        "no": 14,
        "name": "JAIPAUL NAIK",
        "churchName": "CEFM Church",
        "address": "TIMMAPURAM, DHAMARCHERLA, NALGONDA(DIST)",
        "district": "Nalgonda"
      },
      {
        "no": 15,
        "name": "JONNALAGADDA RAVI",
        "churchName": "CEFM Church",
        "address": "LACHAPURAM, DAMMAPETA, B.KOTHAGUDEM",
        "district": "Kothagudem"
      },
      {
        "no": 16,
        "name": "KURASAM DAIVA PRASAD",
        "churchName": "CEFM Church",
        "address": "BONTA GUDEM, MULAKALA PALLY(M.D), B. KOTHAGUDEM(DIST)",
        "district": "Kothagudem"
      },
      {
        "no": 17,
        "name": "GADDA PHILIP",
        "churchName": "CEFM Church",
        "address": "SANTHI NAGAR, HALIYA, ANUMULA(M.D), NALGONDA(DIST)",
        "district": "Nalgonda"
      },
      {
        "no": 18,
        "name": "ENAPANOORI NAGESWARAO",
        "churchName": "CEFM Church",
        "address": "PATVARI GUDEM, DHAMMAPETA, B. KOTHGUDEM(DIST)",
        "district": "Kothgudem"
      },
      {
        "no": 19,
        "name": "G. RAJARATNAM",
        "churchName": "CEFM Church",
        "address": "PETA CHEROOVU(COLONY), KOTTURU VI, PALVANCHA, B. KOTHAGUDEM.",
        "district": "Kothagudem"
      },
      {
        "no": 20,
        "name": "KANGALA VENKATESH",
        "churchName": "CEFM Church",
        "address": "1-256, PALAMADUGU, YETAPAKA(M), LAXMIPURAM, EAST GODAVARI.",
        "district": "East godavari"
      },
      {
        "no": 21,
        "name": "SUNNAM RAJU",
        "churchName": "CEFM Church",
        "address": "BANDRI GUDEM, YETAPAKA, ALLURI SHITHARAMA RAJU.",
        "district": "Alluri shitharama raju"
      },
      {
        "no": 22,
        "name": "SAVALAM JOHN",
        "churchName": "CEFM Church",
        "address": "NADIKUDI(VI), DUMMUGUDEM(M), B. KOTHAGUDEM(DIST)",
        "district": "Kothagudem"
      },
      {
        "no": 23,
        "name": "KOMARAM NAGESH",
        "churchName": "CEFM Church",
        "address": "ADAVIRAMAVARAM, DHUMMUGUDEM(M), B. KOTHGUDEM(DIST)",
        "district": "Kothgudem"
      }
    ]
  },
  "CHHATTISGARH": {
    "missionaries": [
      {
        "no": 1,
        "name": "ANIT KUMAR MARKAM",
        "churchName": "CEFM Church",
        "address": "KURALATHEMALI, BHANASULI, NARHARPUR TK, KANKER(DIST)",
        "district": "Kanker"
      },
      {
        "no": 2,
        "name": "GHANSHYAM HIRAWANI",
        "churchName": "CEFM Church",
        "address": "DHANALIKANHAR, TELAWAT PUN, KORAR, UTTAR BASTER KANKER, KANKER(DIST)",
        "district": "Kanker"
      },
      {
        "no": 3,
        "name": "TITUS MASHI",
        "churchName": "CEFM Church",
        "address": "CHOKAWADA, DHANPUJI, BASTER.",
        "district": "Baster"
      },
      {
        "no": 4,
        "name": "DIGAMBAR PRASAD",
        "churchName": "CEFM Church",
        "address": "211, DHANESARA, KANKER(DIST)",
        "district": "Kanker"
      },
      {
        "no": 5,
        "name": "SHISPAL KAWADE",
        "churchName": "CEFM Church",
        "address": "BASTARBUDRA PO, KHALLARI, VISRAMPURI(NP), KONDAGAON(DIST)",
        "district": "Kondagaon"
      },
      {
        "no": 6,
        "name": "ARVIND KUMAR KODOPI",
        "churchName": "CEFM Church",
        "address": "104, AWASPARA, JEPRA, CHARMA, UTTAR BASTER, KANKER(DIST).",
        "district": "Kanker"
      },
      {
        "no": 7,
        "name": "DHANESHWAR KUMAR",
        "churchName": "CEFM Church",
        "address": "178/1, NARI, KURUD TK, DHAMTARI(DIST)",
        "district": "Dhamtari"
      },
      {
        "no": 8,
        "name": "A. KARUNAKARAN",
        "churchName": "CEFM Church",
        "address": "HATGUDA PARA, BASTAR, JAGDALPUR(PO)",
        "district": "Jagdalpur(po)"
      },
      {
        "no": 9,
        "name": "MANASAN BAGH",
        "churchName": "CEFM Church",
        "address": "DHANDRA, KONDAGAN(DIST)",
        "district": "Kondagan"
      },
      {
        "no": 10,
        "name": "FULSING",
        "churchName": "CEFM Church",
        "address": "14, BEDMAMARI, CHERBEDA, KESHKAL, RAOBEDA, KONDAGAON",
        "district": "Kondagaon"
      },
      {
        "no": 11,
        "name": "ARJUN SING",
        "churchName": "CEFM Church",
        "address": "CHURA (VI), GARIYABAND(DIST)",
        "district": "Gariyaband"
      },
      {
        "no": 12,
        "name": "UMESH KUMAR",
        "churchName": "CEFM Church",
        "address": "MANDROUD(VI), KURUD(S.DIST), DHAMLURI(DIST)",
        "district": "Dhamluri"
      },
      {
        "no": 13,
        "name": "JAGESHWAR NISHAD",
        "churchName": "CEFM Church",
        "address": "49, PASHCHIM, KORMUD, BHURASIDONGRI, DHAMTARI.",
        "district": "Dhamtari"
      },
      {
        "no": 14,
        "name": "SILAS KANDULA",
        "churchName": "CEFM Church",
        "address": "51, KANHANPURI, LARGAON KANHANPURI, LARGEON, MARKATOLA, KANKER(DIST)",
        "district": "Kanker"
      },
      {
        "no": 15,
        "name": "DILIP KUMAR CHAKRADHARI",
        "churchName": "CEFM Church",
        "address": "DOMPADAR, PO-JAMGAON,THE-NARHARPUR, MARKAMPARA, UTTAR BASTAR-KANKER",
        "district": "Uttar bastarkanker"
      },
      {
        "no": 16,
        "name": "BALIRAM JHADI",
        "churchName": "CEFM Church",
        "address": "161, MAHRA PARA, CHOKWADA, DHANPUJI, JAGDALPUR THESIL, BASTAR(DIST)",
        "district": "Bastar"
      },
      {
        "no": 17,
        "name": "RANJAN MURGO",
        "churchName": "CEFM Church",
        "address": "DOHI KONGE, KONDAGEON(DIST)",
        "district": "Kondageon"
      },
      {
        "no": 18,
        "name": "SANATAN PRADHAN",
        "churchName": "CEFM Church",
        "address": "KESHKAL(MUNGBADI),PO-THASIL-KESHKAL,KONDAGAON- DIST",
        "district": "Kondagaon"
      }
    ]
  },
  "MAHARASHTRA": {
    "missionaries": [
      {
        "no": 1,
        "name": "RAMRAJ KASHIRAM CHOUDHARY",
        "churchName": "CEFM Church",
        "address": "AT- MAHULI PO, BOPABODI, TA- SADAK ARJUNI, GONDIA(DIST)",
        "district": "Gondia"
      },
      {
        "no": 2,
        "name": "VINOD SUKARAM PARASGADE",
        "churchName": "CEFM Church",
        "address": "PANCHASHIL WARD, DURGA CHOUK, SAKOLI, BHANDARA(DIST)",
        "district": "Bhandara"
      },
      {
        "no": 3,
        "name": "NIRANJAN MURGO",
        "churchName": "CEFM Church",
        "address": "BEHIND THE REST HOUSE, SALEKASA-PO, GONDIA- DIST.",
        "district": "Gondia"
      },
      {
        "no": 4,
        "name": "PANDURANG TUNKALWAR",
        "churchName": "CEFM Church",
        "address": "AT-POST-TA-LAKHANDUR(AMBEDKAR WARD),BHANDARA-DIST.",
        "district": "Bhandara"
      },
      {
        "no": 5,
        "name": "RAJKUMAR KALLU JAGNE",
        "churchName": "CEFM Church",
        "address": "SANT RAVIDAS NAGAR, BANIYYA MOHALLA, WARDNO-1,DIST-GONDIA.",
        "district": "Gondia"
      },
      {
        "no": 6,
        "name": "GARIBA DAMAJI GUDIMESHRAM",
        "churchName": "CEFM Church",
        "address": "WARDNO-3,GANESHWARD,AT-PO-TA-SADAK ARJUNI, DIST-GONDIA.",
        "district": "Gondia"
      },
      {
        "no": 7,
        "name": "LALA BISENJI BAGMARE",
        "churchName": "CEFM Church",
        "address": "MOHAENA, LAKHANDUR, BHANDARA-DIST.",
        "district": "Bhandara"
      }
    ]
  },
  "ODISHA": {
    "missionaries": [
      {
        "no": 1,
        "name": "LAXMI KANTA PANJIA",
        "churchName": "CEFM Church",
        "address": "AMBABELI, BORIGUMMA, RANASPUR, BHAIRABSINGIPUR, KORAPUT",
        "district": "Koraput"
      },
      {
        "no": 2,
        "name": "NABINAGANDA",
        "churchName": "CEFM Church",
        "address": "ATIGAM, RANIGUDA, BHUSANGAGUDA(P.O), KORAPUT-DIST.",
        "district": "Koraput"
      },
      {
        "no": 3,
        "name": "ANIL KUMAR BAGH",
        "churchName": "CEFM Church",
        "address": "AT-BATKUHUDI,PO-DHAMANAHANDI,PS-KOTPAD,KORAPAT-DIST",
        "district": "Korapat"
      },
      {
        "no": 4,
        "name": "BIJAY CHALKI",
        "churchName": "CEFM Church",
        "address": "BASULI, KOTPAD-PO,KORAPAT-DIST",
        "district": "Korapat"
      },
      {
        "no": 5,
        "name": "MAHADEB HARIJAN",
        "churchName": "CEFM Church",
        "address": "NEIKKARA(WEST), KORAPET-DIST",
        "district": "Korapet"
      },
      {
        "no": 6,
        "name": "KAMLOCHAN HARIJAN",
        "churchName": "CEFM Church",
        "address": "HARISAHI,BETAL,BHURBUSI-PO,NABARANGAPUR- DIST.",
        "district": "Nabarangapur"
      },
      {
        "no": 7,
        "name": "BABULA HARIJAN",
        "churchName": "CEFM Church",
        "address": "AT-PAKHANA GUDA,PO-BOTASONA,BLOCK-KOTPAD,KORAPAT-DIST.",
        "district": "Korapat"
      },
      {
        "no": 8,
        "name": "NARAHARI MAJHI",
        "churchName": "CEFM Church",
        "address": "B.DHARGUDI,PO-DAMANA HANDI,KOTPAD,KORAPUT-DIST",
        "district": "Koraput"
      },
      {
        "no": 9,
        "name": "KAMALI HARIJAN(KAMALA BAGH)",
        "churchName": "CEFM Church",
        "address": "KALEGAM,PO-JHARIGAM, NABARANGAPUR-DIST",
        "district": "Nabarangapur"
      },
      {
        "no": 10,
        "name": "UMESH BAGH",
        "churchName": "CEFM Church",
        "address": "AT-BATKUHUDI,PO-DHAMANAHANDI,PS-KOTPAD,KORAPAT-DIST",
        "district": "Korapat"
      },
      {
        "no": 11,
        "name": "ARUJUN HARIJAN(GABRIEL)",
        "churchName": "CEFM Church",
        "address": "GIRLIGUDA,PO-BHUSANGAGUDA, DIST-KORAPUT.",
        "district": "Koraput"
      },
      {
        "no": 12,
        "name": "DHANSAE HARIJAN(ASAW)",
        "churchName": "CEFM Church",
        "address": "AT-GUMUNDA,PO-GIRLLA, KOTPAD,KORAPUT-DIST",
        "district": "Koraput"
      }
    ]
  },
  "TAMIL NADU": {
    "missionaries": [
      {
        "no": 1,
        "name": "S. DANIEL",
        "churchName": "CEFM church",
        "address": "KESINGAN,MAILADUTHURAI,T.M.KOVIL-PO,NAGAI - DIST",
        "district": "Nagai"
      },
      {
        "no": 2,
        "name": "P. SATHROCK",
        "churchName": "CEFM Magimai Rajaavin Sabai",
        "address": "ERUMOOLI MELA WELI, THIRUVADIMARUZHUR-T.K, KOZHOLAMPALLAM, TANJORE.",
        "district": "Tanjore"
      },
      {
        "no": 3,
        "name": "S. PETER",
        "churchName": "CEFM Devadarisana Thirusabai",
        "address": "MAIN ROAD,NAMASIVAYAPURAM, NAGAI-DIST",
        "district": "Nagai"
      },
      {
        "no": 4,
        "name": "B. BASKAR",
        "churchName": "CEFM Church",
        "address": "KILINSEL STREET,NATARAJAPURAM,CHIDAMBARAM,DIST-CUDALORE.",
        "district": "Cuddalore"
      },
      {
        "no": 5,
        "name": "K. PHILIP VIJENDRAN",
        "churchName": "CEFM Yesu Azhaikiraar Prayer House",
        "address": "NO.7,INDRANAGAR,MAILADUDHURAI-T.K,MANALMEDU,DIST-NAGAI.",
        "district": "Nagai"
      },
      {
        "no": 6,
        "name": "S. SARAL",
        "churchName": "CEFM church",
        "address": "MELATHERU,KONULAM PALLAM,ANAKKARAI,TANJAVORE-DIST",
        "district": "Tanjore"
      },
      {
        "no": 7,
        "name": "S. JOHNWESLEY",
        "churchName": "CEFM church",
        "address": "55A,BITTHAR,GANDHINAGAR,VELLER,SATTHUVA NAGAR,VELLER-DISTM.",
        "district": "Vellore"
      },
      {
        "no": 8,
        "name": "M. GIDEON MOORTHY",
        "churchName": "CEFM church",
        "address": "HOSPITAL STREET,PALANGUR,TIRUKOILLUR,DIST-VILLUPURAM",
        "district": "Villupuram"
      },
      {
        "no": 9,
        "name": "C. DAVID KANNAYIRAM",
        "churchName": "CEFM church",
        "address": "KRISHNAGIRI ROAD, SINGARAPETTAI, DHARMAPURI-DIST",
        "district": "Dharmapuri"
      },
      {
        "no": 10,
        "name": "V. CHANDRA JAYASINGH",
        "churchName": "CEFM church",
        "address": "1638/9,61, KANNAGI ST,SATHUVACHARI,VELLORE-DIST.",
        "district": "Vellore"
      },
      {
        "no": 11,
        "name": "ANNA JOTHI CHANDRAN",
        "churchName": "CEFM church",
        "address": "VELLORE-DIST",
        "district": "Vellore"
      },
      {
        "no": 12,
        "name": "Pr.VIMALRAJ",
        "churchName": "CEFM Yesu Azhaikiraar Prayer House",
        "address": "NARUVELI, KATHIRAMANGALAM,TANJORE-DIST",
        "district": "Tanjore"
      },
      {
        "no": 13,
        "name": "R. DANIEL",
        "churchName": "CEFM church",
        "address": "PUTHU THERU,KADDUMANNARKOVIL,VEERANANTHAPURAM, KADALLOR-DIST",
        "district": "Cuddalore"
      },
      {
        "no": 14,
        "name": "P. SAMUELMANI",
        "churchName": "CEFM church",
        "address": "2/160,BHARATHIYAR ST,VEPOOR,MELVISHARAM,VELLORE-DIST",
        "district": "Vellore"
      },
      {
        "no": 15,
        "name": "R. ISSAC",
        "churchName": "CEFM church",
        "address": "96/3, AMMANATHANGLE,KATTABAMMAN ST,WALLAJA, VELLORE-DIST.",
        "district": "Vellore"
      },
      {
        "no": 16,
        "name": "R. SEKAR(DANIEL)",
        "churchName": "CEFM church",
        "address": "MAIN ROAD, KOMAL-PO,KUTTALAM.",
        "district": "Kuttalam"
      },
      {
        "no": 17,
        "name": "Rev.S. HUBERT SUBIN RAJ",
        "churchName": "CEFM Witness Tabernacle Church",
        "address": "KARTUMANNARKOVIL ,VEERANATHAM,CUDALORE-DIST",
        "district": "Cuddalore"
      },
      {
        "no": 18,
        "name": "K.K. DEVASELVAM",
        "churchName": "CEFM Parisuthar Devalayam",
        "address": "1/76E,MANTHAKARI,KUMARAMANGALAM,CHIDAMBARAM,CUDALORE-DIST.",
        "district": "Cuddalore"
      },
      {
        "no": 19,
        "name": "T. SATHRAK",
        "churchName": "CEFM church",
        "address": "ATHINARAYANAPURAM,MELATHERU-PO,ALLAPAKKAM VALI, KURINPADI-TK KADALORE-DIST",
        "district": "Cuddalore"
      },
      {
        "no": 20,
        "name": "STEPHAN P NAGARAJ",
        "churchName": "CEFM church",
        "address": "303,SC STREET, THALIGAIVIDUTHY,THANJUR-DIST",
        "district": "Tanjore"
      },
      {
        "no": 21,
        "name": "M. ARULDASS",
        "churchName": "CEFM Vaanathin Vaasal Jebaveedu",
        "address": "BETHEL ST,SIKKALNAYAKKAN PATTAI,THANJAVUR-DIST",
        "district": "Tanjore"
      },
      {
        "no": 22,
        "name": "MARIYADAS",
        "churchName": "CEFM Karthar Jeevanullor Jebaveedu",
        "address": "KADALANGUDI,MAYILADUTHURAI,NAGAI-DIST",
        "district": "Nagai"
      },
      {
        "no": 24,
        "name": "A. SIMEON JEBARAJ",
        "churchName": "CEFM Worship Tabernacle",
        "address": "5/5, RAILWAY STATION, POONGULATHUVILLAI,KANYAKUMAI-DIST",
        "district": "Kanyakumari"
      },
      {
        "no": 26,
        "name": "K. SANTHOSAM",
        "churchName": "CEFM church",
        "address": "KAMPAR ST,MAINROAD,NAMACCHIVAYAPURAM,MAILADUTHURAI,NAGAI-DIST",
        "district": "Nagai"
      },
      {
        "no": 27,
        "name": "G. MAGIMAI DASS",
        "churchName": "CEFM church",
        "address": "ATTIKUPPAM,NEMANDAPURAM,VELLORE-DIST",
        "district": "Vellore"
      },
      {
        "no": 28,
        "name": "S. JEBAKUMAR",
        "churchName": "CEFM church",
        "address": "MALLIPATTY,SINGARAPETTAI,KRISHNAGIRI-DIST",
        "district": "Krishnagiri"
      },
      {
        "no": 29,
        "name": "YACOB",
        "churchName": "CEFM Church",
        "address": "KAATHIRUPPu,NAGAI-DIST",
        "district": "Nagai"
      },
      {
        "no": 30,
        "name": "R. KALAISELVI",
        "churchName": "CEFM church",
        "address": "3/6,PALLIKOODATHERU,ECHAMPOONDI,KATTUMANNARKOVIL,CADALLORE-DIST",
        "district": "Cuddalore"
      },
      {
        "no": 31,
        "name": "P. GIDEON MUNIYANDI",
        "churchName": "CEFM church",
        "address": "1/14,MATHA KAVELI ST,AAGARAM,ARANI,VENAMAGAIM,T.V.MALI DIST.",
        "district": "Tiruvannamalai"
      },
      {
        "no": 32,
        "name": "S. Simeon Jebaraj",
        "churchName": "CEFM Shalom Church",
        "address": "Shalom Church street, Manna Raja Kovil St, Thisayanvilai.",
        "district": "Tirunelveli"
      }
    ]
  }
};

// ── Churches Rendering (Classic & Responsible style) ──

function renderChurches() {
  const container = document.getElementById('churchesContainer');
  if (!container) return;

  let html = '';

  // 1. Sort state keys so TAMIL NADU is first
  const stateNames = Object.keys(CHURCHES_DATA).sort((a, b) => {
    if (a === 'TAMIL NADU') return -1;
    if (b === 'TAMIL NADU') return 1;
    return a.localeCompare(b);
  });

  for (const stateName of stateNames) {
    const stateData = CHURCHES_DATA[stateName];
    const totalMissionaries = stateData.missionaries.length;

    // Group missionaries by district
    const districtGroups = {};
    stateData.missionaries.forEach(m => {
      const dist = m.district || 'Other';
      if (!districtGroups[dist]) districtGroups[dist] = [];
      districtGroups[dist].push(m);
    });

    // 2. Sort Districts inside the state
    const districtNames = Object.keys(districtGroups).sort((a, b) => {
      if (stateName === 'TAMIL NADU') {
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();

        // Kanyakumari first
        const aIsKk = aLower.includes('kanyakumari') || aLower.includes('kaniyakumari');
        const bIsKk = bLower.includes('kanyakumari') || bLower.includes('kaniyakumari');
        if (aIsKk && !bIsKk) return -1;
        if (!aIsKk && bIsKk) return 1;

        // Cuddalore second
        const aIsCud = aLower.includes('cuddalore') || aLower.includes('cudalore') || aLower.includes('cadallore');
        const bIsCud = bLower.includes('cuddalore') || bLower.includes('cudalore') || bLower.includes('cadallore');
        if (aIsCud && !bIsCud) return -1;
        if (!aIsCud && bIsCud) return 1;
      }
      return a.localeCompare(b);
    });

    const districtCount = districtNames.length;

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
    for (const distName of districtNames) {
      const pastors = districtGroups[distName];
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
                <span class="pastor-name-text" style="color: #333; font-weight: 600; font-size: 0.95rem;">Pastor: ${formatName(pastor.name)}</span>
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
  return name.split(' ').map(w => {
    // preserve initials formatting like P. or S.
    if (w.length <= 2 && w.endsWith('.')) {
      return w.toUpperCase();
    }
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  }).join(' ');
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
  if (document.getElementById('churchesContainer')) {
    renderChurches();
  }

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
