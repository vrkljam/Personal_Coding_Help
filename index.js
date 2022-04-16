const express = require('express');
const app = express();
const howtoController= require('./controller/howto-controller')

app.set('view engine', 'hbs')
app.use(express.json())
app.use(howtoController)

let testcode ="router.put('/', (req,res)=>{"
let testCode2 ="router.put('/', (req,res)=>{"

app.get('/:name', (req,res)=>{  

    res.render('page2',{kristi:req.params.name,
    testCode: testcode,
    testcode2: testCode2})
})


const port = process.env.PORT || 5555

app.listen((port), ()=>{
    console.log(`App on port: ${port}`)})


    //  "url": "www.blah.com",
//  "dateAdded": Date,
//  "img":"",
