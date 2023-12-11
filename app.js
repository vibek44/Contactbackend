const config=require('./utils/config')
const express=require('express')
const app=express()
const cors=require('cors')
const router=require('./controller/route')
const logger=require('./utils/logger')
const { unknownEndpoint,errorHandler }=require('./utils/middleware')
const mongoose=require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connection succesful')  
  })
  .catch(err => {
    console.log('unsuccessful connection',err) 
  })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(logger)
app.use('/',router)
app.use(unknownEndpoint)
app.use(errorHandler)


module.exports=app