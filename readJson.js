"use strict"
const fs = require('fs');

fs.readFile('jsonRead.json', function (err, data) {
    if (err) throw err;
     let details = JSON.parse(data);
     console.log (details);
    details.company = 'WiproLtd';
    data = JSON.stringify(details);
    let newinfo = JSON.parse(data);
    fs.writeFileSync('readJsonnew.json', data);
    console.log(newinfo);

});