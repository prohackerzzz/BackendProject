const con = require('./connection')
function getData(val,callback)
{
    
    con.query("SELECT value FROM caches WHERE " +"`keys`"+ "="  + `"${val}"`, function(err, result)
    {
        try{
            callback(null,result[0].value);
        }
        catch(err){
            callback("some error",null);
        }
    });

}
module.exports = getData