const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const router=require('./controller/route')
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

morgan.token('content',function(req,res){ return JSON.stringify(req.body)})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

app.use(router)

module.exports=app