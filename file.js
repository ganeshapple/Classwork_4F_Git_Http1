const fs = require('fs');
fs.readFile('http1.js', 'utf-8', (err, data) => {
    if (err) {
        console.log(err); 
    } else {
        console.log(data);
    }
});
console.log("File reading is initiated");