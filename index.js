const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const config=require('./utils/config')
const  app=express()
const router=require('./controller/route')
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

morgan.token('content',function(req,res){ return JSON.stringify(req.body)})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

app.use(router)


const PORT=config.PORT || 3001

app.listen(PORT, ()=>console.log(`server is running on ${PORT}`))

