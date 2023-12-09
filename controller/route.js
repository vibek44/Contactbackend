const express=require('express')
const router=express.Router()
const Contact=require('../model/contact')
const mongoose=require('mongoose')


router.get('/info',(req,res)=>{
  Contact.find({})
         .then(result=>{
           res.send(`<div><p>phonebook has info for the ${result.length} people</p>
                     <p>${new Date()}<p/><div/>`)
          }) 
})

router.get('/api/persons', (req,res)=>{
  Contact.find({})
         .then(result=>res.json(result))  
})

router.get('/api/persons/:id', (req,res,next)=>{
  Contact.findById(req.params.id)
         .then(result=>{ 
            if(result){
              res.send(result)
            }else{
              res.status(404).end()
            }  
          })
          .catch(err=>next(err))  
}) 

router.delete('/api/persons/:id',(req,res)=>{
  Contact.findByIdAndDelete(req.params.id)
          .then(result=>{         
            res.status(204).end()
           })
})

router.post('/api/persons', (req,res,next)=>{
  const {name,number}=req.body;

  if(!(name&&number)){
     return res.status(400).json({err:"name or number is missing"})
  }
  const contact=new Contact({name,number})

  contact.save()
         .then(savedContact=>{
            res.json(savedContact)
          })
          .catch(err=>next(err))
})

router.put('/api/persons/:id',(req,res,next)=>{
  const {name,number}=req.body
  const person={name,number}
  Contact.findByIdAndUpdate(
    req.params.id,
    person,
    { new:true, runValidators:true, context:'query'})
    .then((updatedPerson)=>res.json(updatedPerson))
    .catch(err=>next(err))
})


module.exports=router
