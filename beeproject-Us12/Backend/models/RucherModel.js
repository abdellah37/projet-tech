const mongoose = require('mongoose')

const createRucher = new mongoose.Schema({ 
    NumAPI :{
        type:String, 
        required:false
    },   
    Localisation:{
        type:String, 
        required:true
    }, 
    NumRucher :{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model('ruchers',createRucher)