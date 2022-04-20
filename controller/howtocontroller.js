const express = require('express');
const router = express.Router();
const Howto = require('../model/answer-model');
const moment = require('moment')

//Read -all route
router.get('/', (req,res)=>{
    Howto.find({})
    .then((b)=>{
       res.render('index',{b})
    })
    .catch(console.error)
})

//create a new one
router.get('/new', (req,res)=>{
    res.render('new')
})
router.post('/add', (req,res)=>{
   Howto.create(req.body)
    .then(()=>res.redirect('/'))
})

//read one entry
router.get('/:id', (req,res)=>{
    Howto.findById(req.params.id)
    .then((c)=>res.render('show',c))
    .catch(console.error)
})


//delete
router.delete('/:id', (req,res)=>{
    Howto.findByIdAndRemove({_id:req.params.id})
     .then (()=> {res.redirect('/')})
     .catch(console.error)
})

//update
// router.put('/:id', (req,res)=>{
//     Howto.findOneAndUpdate ({_id: req.params.id}, req.body)
//     .then((e)=>res.send(e))
    
// })




module.exports=router;