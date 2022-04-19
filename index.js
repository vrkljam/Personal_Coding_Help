
const express = require('express');
const app = express();
const howtoController= require('./controller/howtocontroller');
const Howto = require('./model/answer-model');


app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(howtoController)

const port = process.env.PORT || 5555

app.listen((port), ()=>{
    console.log(`App on port: ${port}`)})


