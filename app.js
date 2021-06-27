const express = require("express")
const path= require("path");
const app= express();
const fs= require('fs')
const port= 80;

app.use('/static' ,express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res)=>{
    res.status(200).render('index.pug')
})

app.post('/' ,(req,res)=> {
    name= req.body.name
        age = req.body.age
         gender= req.body.gender
        address = req.body.address
        more = req.body.more
let outputToWrite = `The name of the client is ${name} , ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more} \n`;
fs.appendFileSync('output.txt' , outputToWrite)
//   const params= {'message' : 'Your form has been submitted succesfully'}
    res.render('demo.pug');
})

app.listen(port,()=> { 
    console.log(`The application started successfully on port ${port}`);
})