const fs = require('fs');
const path = require('path');

// Table data arrays
const codes = ["202", "220", "211", "303", "330", "312", "321", "404", "440", "422", "413", "431", "505", "550", "523", "532", "514", "541", "606", "660", "633", "624", "643", "615", "651", "707", "770", "734", "743", "725", "752", "716", "761"];
const labels = ["regs", "rals", "rald"];
const positions = ["0", "1", "2", "3"];
const repeat1 = ["bwa", "chr", "ral"];
const repeat2 = ["bw", "ch", "ra"];
const repeat3 = ["bw", "ch", "ra"];
const repeat4 = ["bw", "ch", "ra"];

// Function to generate unique code
function generateUniqueCode(code, label, position, repeat1, repeat2, repeat3, repeat4) {
    return `${code}${label}${position}${repeat1}${repeat2}${repeat3}${repeat4}`;
}

// Generate JSON data
const jsonData = {
    items: []
};

for (const code of codes) {
    for (const label of labels) {
        for (const position of positions) {
            for (const r1 of repeat1) {
                for (const r2 of repeat2) {
                    for (const r3 of repeat3) {
                        for (const r4 of repeat4) {
                            jsonData.items.push({
                                uniqueCode: generateUniqueCode(code, label, position, r1, r2, r3, r4) + "p1234"
                            });
                        }
                    }
                }
            }
        }
    }
}
const downloadFolder = path.join(__dirname, '../downloads');
if (!fs.existsSync(downloadFolder)) {
    fs.mkdirSync(downloadFolder, { recursive: true });
}
const filePath = path.join(downloadFolder, 'codes_-_pricesoneline2.json');
// Write to file
fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

console.log(`JSON file has been created successfully! at ${filePath}`);