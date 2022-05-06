const fs = require('fs')
function button_click()
{
    fs.appendFileSync('data.txt', String(Math.random())+ '\n');
}