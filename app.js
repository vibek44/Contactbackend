const express=require('express')
const cors=require('cors')
const router=require('./controller/route')
const app=express()
const logger=require('./utils/logger')
const {unknownEndpoint,errorHandler}=require('./utils/middleware')

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(logger)
app.use('/',router)
app.use(unknownEndpoint)
app.use(errorHandler)


module.exports=app