const fs = require('fs');
let code = fs.readFileSync('churches_data.js', 'utf8');

const districtMap = {
    // Cuddalore variants
    "Cudalore": "Cuddalore",
    "Kadallor": "Cuddalore",
    "Kurinpaditk kadalore-": "Cuddalore",
    "Cadallore": "Cuddalore",

    // Tanjore variants
    "Thanjur": "Tanjore",
    "Thanjavur": "Tanjore",

    // Others
    "Kanyakumai": "Kanyakumari",
    "Mali": "T.V. Mali"
};

for (const [key, val] of Object.entries(districtMap)) {
    // We match EXACTLY `"district": "OldName"`
    const rx = new RegExp(`"district": "${key}"`, 'g');
    code = code.replace(rx, `"district": "${val}"`);
}

fs.writeFileSync('churches_data.js', code);
console.log("Districts cleaned up successfully.");
