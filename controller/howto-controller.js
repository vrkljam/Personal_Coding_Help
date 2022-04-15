const express = require('express');
const router = express.Router();
const Howto = require('../model/answer-model');

//Read -all route
router.get('/', (req,res)=>{
    Howto.find({})
    .then((a)=> {res.json(a)})
    .catch(console.error)
})


//create a new one
router.post('/', (req,res)=>{
    Howto.create(req.body)
    .then((b)=>res.json(b))
})

//read one route
router.get('/:id', (req,res)=>{
    Howto.findById(req.params.id)
    .then(b=>res.send(b))
    .catch(console.error)
})





module.exports=router;