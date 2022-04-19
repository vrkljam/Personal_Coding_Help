const express = require('express');
const router = express.Router();
const Howto = require('../model/answer-model');

//Read -all route
router.get('/', (req,res)=>{
    Howto.find({})
    .then((b)=>res.render('index',{b}))
    // .then((g)=>{res.send(g)})
    .catch(console.error)
})

router.get('/:id', (req,res)=>{
    Howto.findById(req.params.id)
    .then((c)=>res.render('show',c))
    .catch(console.error)
})
//create a new one
router.post('/add', (req,res)=>{
    Howto.create(req.body)
    .then((b)=>res.send(b))
})


//delete
// router.delete('/:id', (req,res)=>{
//     Howto.findByIdAndDelete({_id:req.params.id})
//     .then((h)=>{res.send(h)})
    // .then (()=> res.redirect('/home'))
    
// })

//update
router.put('/:id', (req,res)=>{
    Howto.findOneAndUpdate ({_id: req.params.id}, req.body)
    .then((e)=>res.send(e))
    
})




module.exports=router;