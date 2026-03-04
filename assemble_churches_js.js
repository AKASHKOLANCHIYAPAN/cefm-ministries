const fs = require('fs');
try {
    const rawJson = fs.readFileSync('new_churches_data.json', 'utf-8');
    let template = fs.readFileSync('churches_data.template.js', 'utf-8');
    const finalContent = template.replace('__DATA_PLACEHOLDER__', rawJson);
    fs.writeFileSync('churches_data.js', finalContent);
    console.log('Successfully wrote churches_data.js!');
} catch (e) {
    console.error(e);
}
