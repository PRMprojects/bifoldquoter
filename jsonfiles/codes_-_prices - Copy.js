const fs = require('fs');
const path = require('path');

// Table data
const tableData = [
    { code: "202", label: "regs", position: "0", repeat: ["bw", "bw", "bw", "bw"] },
    { code: "220", label: "rals", position: "1", repeat: ["ch", "ch", "ch", "ch"] },
    { code: "211", label: "rald", position: "2", repeat: ["ra", "ra", "ra", "ra"] },
    { code: "303", position: "2" },
    { code: "330" },
    { code: "312" },
    { code: "321" },
    { code: "404" },
    { code: "440" },
    { code: "422" },
    { code: "413" },
    { code: "431" },
    { code: "505" },
    { code: "550" },
    { code: "523" },
    { code: "532" },
    { code: "514" },
    { code: "541" },
    { code: "606" },
    { code: "660" },
    { code: "633" },
    { code: "624" },
    { code: "643" },
    { code: "615" },
    { code: "651" },
    { code: "707" },
    { code: "770" },
    { code: "734" },
    { code: "743" },
    { code: "725" },
    { code: "752" },
    { code: "716" },
    { code: "761" }
];

// Function to generate a 16-digit alphanumeric code
function generateUniqueCode(entry) {
    let base = entry.code || '';
    if (entry.label) base += entry.label;
    if (entry.position) base += entry.position;
    if (entry.repeat) base += entry.repeat.join('');
    
    // Pad or truncate to exactly 16 characters
    while (base.length < 16) {
        base += Math.random().toString(36).substring(2, 15);
    }
    return base.substring(0, 16);
}

// Create the JSON structure
const jsonData = {
    items: tableData.map(entry => ({
        uniqueCode: generateUniqueCode(entry),
        originalCode: entry.code,
        label: entry.label || '',
        position: entry.position || '',
        repetitions: entry.repeat || [],
        price: 1234.00
    }))
};
const downloadFolder = path.join(__dirname, '../downloads');
if (!fs.existsSync(downloadFolder)) {
    fs.mkdirSync(downloadFolder, { recursive: true });
}
const filePath = path.join(downloadFolder, 'codes_-_prices.json');
// Write to file
fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

console.log(`JSON file has been created successfully! at ${filePath}`);