
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const path = require(`path`)
const howtoController= require('./controller/howtocontroller');
const Howto = require('./model/answer-model');


app.use(express.static(path.join(__dirname,`public`)))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs')
app.use('/',howtoController)

const port = process.env.PORT || 5555

app.listen((port), ()=>{
    console.log(`App on port: ${port}`)})


