const express = require('express');
const app = express();
const howtoController= require('./controller/howto-controller')

app.set('view engine', 'hbs')
app.use(express.json())
app.use(howtoController)



const port = process.env.PORT || 5555

app.listen((port), ()=>{
    console.log(`App on port: ${port}`)})


    //  "url": "www.blah.com",
//  "dateAdded": Date,
//  "img":"",
