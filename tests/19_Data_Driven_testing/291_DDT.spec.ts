import { test, expect } from '@playwright/test';

import userData from './293_User.json'; // modern Javascript way of importing  the json file 



test('Verify the testdata', async () => {
    // const UserData = require('./293_User.json');    --- oldway of importing the data from json file

    const username = userData.user;
    const password = userData.password;

    console.log(userData.user);
    console.log(userData.password);
    //  ---------------------------------------------------------------

    /* Using File system can also used to import data 
    
        // const fs = require("fs");  this line should go below the import statement 
        // const fileData = fs.readFileSync("293_Users.json", "utf-8");
        // const user = JSON.parse(fileData);
    
    
    */

})



