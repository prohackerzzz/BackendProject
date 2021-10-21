//Getting all our dependencies

const express= require('express');
const app=express();
const routes = require('./Router/route')


app.use(express.json());

const PORT = 8080;



app.get("/",(req,res)=>{
    res.send("hello world");//just to check if server is working
})
//main route for application
app.use("/",routes)

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
  });
  