//Getting all our dependencies

const translate = require('translate');
const putData = require('../putdata')
const getData = require('../getdata')
const express = require('express')
const app=express()
const route = express.Router()

//route to convert text
route.get('/:source/:target',async(req,res)=>{
    
    const text = req.body.text;
    const src = req.params.source;
    const tar = req.params.target;
    result = text;
    
    getData(result,async function(err,data){
        if (err) {
            // error handling code goes here
            console.log(err);// to check if the reuested sentence is not in the database         
        }           
        if(data !== null){
        
        res.send(data)//if data exists send data to the user
        }
        else{
            try{
                const resp = await translate(text,{to:tar,from:src});
                const result = text;
                
                putData(result,resp)
                res.send(resp)

            }
            catch(err){
                res.send("Theres some error with your query")
            }
        }
    });
})
module.exports = route