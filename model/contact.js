const mongoose=require('mongoose')


const contactSchema=new mongoose.Schema({
  name:{
    type:String,
    minLength:[3,'name length is short'],
    required:true
  },
  number:{
    type:String,
    minLength:8,
    required:[true,'user number required'],
    validate:{
      validator: function(v){
        return /\d{2,3}-\d{7,8}/.test(v)
      },
      message:(props)=>`${props.value} is not valid number`
    }

  }
})

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports=mongoose.model('Contact',contactSchema)
