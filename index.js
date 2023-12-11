const config=require ('./utils/config')
const mongoose=require('mongoose')
const app=require('./app')

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
  .then(() =>{
    console.log('connection succesful')  
  })
  .catch(err=>{
    console.log('unsuccessful connection',err) 
  })

const PORT=config.PORT || 3001

app.listen(PORT, ()=>console.log(`server is running on ${PORT}`))
