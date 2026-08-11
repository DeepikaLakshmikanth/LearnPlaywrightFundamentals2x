const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '293_User.json');
console.log('File Path :', filepath);

const fileData = fs.readFileSync(filepath, 'utf-8');

const UserData = JSON.parse(fileData);

console.log(UserData.user);
console.log(UserData.password);

// we can use import path from 'path'; provided we configure  "type": "mjs" in the package.json file

// Write to Json

const user = {
    name: "Deepika",
    role: " QA Engineer"
};

const jsonData = JSON.stringify(user, null, 2);
fs.writeFileSync("output.json", jsonData);

