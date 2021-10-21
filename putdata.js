const con = require('./connection')
function putData(name,val){
    
    con.query("INSERT into caches (`keys`,`value`) VALUES ("+`"${name}"`+","+`"${val}"`+")", function(err, result)
    {
        if (err) 
        console.log("Error"+ err)
        else
         console.log("")//to check if the item is inserted
    });
}
module.exports = putData