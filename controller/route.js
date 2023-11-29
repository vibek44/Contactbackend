const express=require('express')

const router=express.Router()

let persons=[
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

router.get('/info',(req,res)=>{
  res.send(`<div><p>phonebook has info for ${persons.length} people</p>
    <p>${new Date()}<p/><div/>`
  )
})


router.get('/api/persons' ,(req,res)=>{
  res.json(persons)
})

router.get('/api/persons/:id',(req,res)=>{
  const id=Number( req.params.id);
  const person=persons.find(person=>person.id===id)
  if(person){
    res.json(person)
  }else{
    res.status(404).end()
  }
  
}) 

router.delete('/api/persons/:id',(req,res)=>{
  const id=Number(req.params.id)
   persons=persons.filter(person=>person.id!==id)
   res.status(204).end()

})

router.post('/api/persons', (req,res)=>{
  //console.log(req.body);
  const createId=()=>{
    return Math.floor(Math.random()*800)
  }
  
  const {name,number}=req.body;
  if(!(name.trim()&&number.trim())){
     return res.status(400).json({err:"name or number is missing"})
  }

  const result=persons.find(person=>person.name.toLowerCase().includes(name.toLowerCase()))
  if(result){
    return res.status(400).json({ msg:"Name must be unique" })
  }
  const createdPerson={name,number,id:createId()}
  persons=persons.concat(createdPerson)
  res.json(createdPerson)
})

module.exports=router