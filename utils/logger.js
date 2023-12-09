const morgan=require('morgan')   //request logger

morgan.token('content',function(req,res){ return JSON.stringify(req.body)})

const logger=morgan(':method :url :status :res[content-length] - :response-time ms :content')

module.exports=logger