const fs = require('fs');
const path = require('path');

module.exports = {
    
    users : JSON.parse(fs.readFileSync(path.join(__dirname,'usersDb.json'),'utf-8')),

    guardar : data => fs.writeFileSync(path.join(__dirname,'usersDb.json'),JSON.stringify(data,null,2),'utf-8')
} 
