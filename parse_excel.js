const xlsx = require('xlsx');

try {
    const workbook = xlsx.readFile('churches-state and district wise/MISSIONARY DETAILS ALL FINAL.xlsx');

    // Let's just print the sheet names and the first few rows of the first sheet to understand the structure
    console.log('Sheet Names:', workbook.SheetNames);

    for (const sheetName of workbook.SheetNames) {
        console.log(`\n--- Sheet: ${sheetName} ---`);
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
        console.log(data.slice(0, 5)); // print first 5 rows
    }

} catch (err) {
    console.error('Error:', err.message);
}
