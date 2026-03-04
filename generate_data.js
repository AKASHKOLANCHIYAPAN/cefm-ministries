const xlsx = require('xlsx');
const fs = require('fs');

try {
    const workbook = xlsx.readFile('churches-state and district wise/MISSIONARY DETAILS ALL FINAL.xlsx');

    const CHURCHES_DATA = {};

    const sheetMapping = {
        'ANDHRA PRADESH': 'ANDHRA PRADESH',
        'TELUGANA': 'TELANGANA',
        'CHHATTISGARH': 'CHHATTISGARH',
        'MAHARASHTRA': 'MAHARASHTRA',
        'ODISHA': 'ODISHA',
        'TAMILNADU': 'TAMIL NADU'
    };

    for (const sheetName of workbook.SheetNames) {
        const canonicalState = sheetMapping[sheetName] || sheetName;
        const sheet = workbook.Sheets[sheetName];
        const rawData = xlsx.utils.sheet_to_json(sheet, { header: 1 }).slice(1);

        const missionaries = [];

        rawData.forEach(row => {
            if (!row || row.length < 3) return;
            if (!row[1] || typeof row[1] !== 'string' || row[1].trim() === '') return;

            const no = row[0];
            const name = row[1].trim();
            const address = String(row[2]).trim();
            const churchName = row[3] ? String(row[3]).trim() : 'CEFM Church';

            let district = 'Other';
            const addressParts = address.split(/[,.]/);
            let lastPart = addressParts[addressParts.length - 1].trim();
            if (lastPart === '') {
                lastPart = addressParts.length >= 2 ? addressParts[addressParts.length - 2].trim() : address;
            }

            lastPart = lastPart.replace(/\(DIST\)/i, '').replace(/DIST/i, '').replace(/-/, '').trim();

            if (lastPart) {
                district = lastPart.charAt(0).toUpperCase() + lastPart.slice(1).toLowerCase();
            }

            missionaries.push({
                no: Number(no) || missionaries.length + 1,
                name,
                churchName,
                address,
                district
            });
        });

        if (missionaries.length > 0) {
            CHURCHES_DATA[canonicalState] = { missionaries };
        }
    }

    // Write just the JSON to a file so we can view it
    fs.writeFileSync('new_churches_data.json', JSON.stringify(CHURCHES_DATA, null, 2));
    console.log('Successfully wrote new_churches_data.json');
} catch (err) {
    console.error('Error:', err.message);
}
