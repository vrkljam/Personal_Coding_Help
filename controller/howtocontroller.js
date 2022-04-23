const express = require('express');
const router = express.Router();
const Howto = require('../model/answer-model');
const moment = require('moment');
const res = require('express/lib/response');

//Read -all route
router.get('/', (req,res)=>{
    Howto.find({})
    .then((b)=>{res.render('index',{b})
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
    .then((c)=>res.render('show', c))
    .catch(console.error)
})

//the get for delete
router.get('/:id/delete', (req,res)=>{
    Howto.findById(req.params.id)
    .then((j)=>{res.render('delete',j)})
})
//delete
router.delete('/:id', (req,res)=>{
    Howto.findByIdAndRemove(req.params.id)
     .then (()=> {res.redirect('/')})
     .catch(console.error)
})

//the get for updating
router.get('/edit/:id',(req,res)=>{
    Howto.findById(req.params.id)
    .then(m=>res.render('edit',m))
})

//update
router.put('/:id', (req,res)=>{
    Howto.findByIdAndUpdate (
        req.params.id,
        req.body,
        {new:true}
            )
    .then(()=>{res.redirect('/')})
    .catch(console.error)

})

router.get('/search', (req,res)=>{
    Howto.find({$text})
    .then((b)=>{res.render('search',{b})
    })
    .catch(console.error)
})


module.exports=router;