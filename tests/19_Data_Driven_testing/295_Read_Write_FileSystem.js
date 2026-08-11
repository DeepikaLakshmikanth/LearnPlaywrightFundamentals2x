const fs = require('fs');
const fileData = fs.readFileSync("D:/LearnPlaywrightFundamentals2x/tests/19_Data_Driven_testing/293_User.json", 'utf-8');

const UserData = JSON.parse(fileData);

console.log(UserData.user);
console.log(UserData.password);


