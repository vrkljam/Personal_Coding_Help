const express = require('express');
const app = express();




app.get('/', (req,res)=>{
    res.send('the wind is back')
})

const port = process.env.PORT || 5555

app.listen((port), ()=>{
    console.log(`App on port: ${port}`)})


    //  "url": "www.blah.com",
//  "dateAdded": Date,
//  "img":"",
