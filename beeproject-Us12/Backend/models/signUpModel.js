const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({ 
    numerotel : {
        type:Number,
        required:true

    },
    adresse : {
        type:String, 
        required:true
    }, 
    email:{
        type:String, 
        required:true
    }, 
    password:{
        type:String, 
        required:true 

    }, 
    token:{
        type:String ,
        required:true 

    },
    date:{
        type:Date, 
        default:Date.now

    }

})

module.exports = mongoose.model('ruches',signUpTemplate)
