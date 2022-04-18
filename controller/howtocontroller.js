const express = require('express');
const router = express.Router();
const Howto = require('../model/answer-model');

//Read -all route
router.get('/', (req,res)=>{
    Howto.find({})
    .then((b)=>res.render('index',{b}))
    // .then((a)=> {res.json(a)})
    .catch(console.error)
})

router.get('/:id', (req,res)=>{
    Howto.findById(req.params.id)
    .then((c)=>{res.render('show', c)})
    .catch(console.error)
})
//create a new one
// router.post('/', (req,res)=>{
//     Howto.create(req.body)
//     .then((b)=>res.json(b))
// })

//read one route
// router.get('/:id', (req,res)=>{
//     Howto.findById(req.params.id)
//     .then((c)=>{res.render('show', c)})
//     // .then(b=>res.send(b))
//     .catch(console.error)
// })

//update
// router.put('/', (req,res)=>{
//     Howto.findByIdAndUpdate ({})
//     .then
//     .catch
// })


//delete
// router.delete('/', (req,res)=>{
//     Howto.findByIdAndDelete({})
//     .then (()=> res.redirect('/home'))
//     .cathch
// })





module.exports=router;