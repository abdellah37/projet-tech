const mongoose = require('mongoose')

const ReineTemplate = new mongoose.Schema({ 
    NumReine :{
        type:String, 
        required:true
    },   
    CodeGénéalogique :{
        type:String, 
        required:true
    },   
    Marquée :{
        type:String, 
        required:true
    },   
    Clippée:{
        type:String, 
        required:true
    }, 
    DateNaissance :{
        type:Date,
        required:true
    }

})

module.exports = mongoose.model('reines',ReineTemplate)