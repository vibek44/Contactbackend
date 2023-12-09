const unknownEndpoint=(req,res)=>{
  return res.status(404).send('unknown Endpoint : 404')
}

const errorHandler=(err,req,res,next)=>{ 
  if(err.name==='CastError'){
    return res.status(400).send({error:'malformated id'})
  }else if(err.name==='ValidationError'){
    return res.status(400).json({error:err.message}) 
  }
 
  next(err)
}

module.exports={unknownEndpoint,errorHandler}