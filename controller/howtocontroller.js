const express = require('express');
const router = express.Router();
const Howto = require('../model/answer-model');
const moment = require('moment');
const res = require('express/lib/response');

//landing page route
router.get('/',(req,res)=>{
    res.render('landingpage')
})

//Read -all html index route
router.get('/htmlindex', (req,res)=>{
    Howto.find({category: /html/i})
    .then((b)=>{res.render('htmlindex',{b})
    })
    .catch(console.error)
})

//Read -all css index route
router.get('/cssindex', (req,res)=>{
    Howto.find({category: /CSS/i})
    .then((b)=>{res.render('cssindex',{b})
    })
    .catch(console.error)
})

//Read -all js index route
router.get('/jsindex', (req,res)=>{
    Howto.find({category: /js/i})
    .then((b)=>{res.render('jsindex',{b})
    })
    .catch(console.error)
})

//Read -all bootstrap index route
router.get('/bootstrapindex', (req,res)=>{
    Howto.find({category: /bootstrap/i})
    .then((b)=>{res.render('bootstrapindex',{b})
    })
    .catch(console.error)
})

//Read -all js mongmon route
router.get('/mongmonindex', (req,res)=>{
    Howto.find({category: /mong/i})
    .then((b)=>{res.render('mongmonindex',{b})
    })
    .catch(console.error)
})


//Read -all misc index route
router.get('/miscindex', (req,res)=>{
    Howto.find({category: /misc/i})
    .then((b)=>{res.render('miscindex',{b})
    })
    .catch(console.error)
})

//Read -all route
router.get('/all', (req,res)=>{
    Howto.find({})
    .then((b)=>{res.render('allindex',{b})
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

module.exports=router;