const mongoose = require('mongoose')

const RucheTemplate = new mongoose.Schema({ 
   
    Rucher: {
        type : Number, 
        required : true 
    },
    NumRuche :{
        type:Number,
        required:true
    },
    TypeRuche :{
        type:String,
        required:true
    },
    DateMiseEnService :{
        type: Date,
        required:true
    },
    NumReine :{
        type:Number,
        required:true
    },
    NumCadre :{
        type:Number,
        required:true
    },
    Hausse :{
        type:String,
        required:true
    },
    GrilleAReine :{
        type:String,
        required:true
    },
    PlaqueDeFond :{
        type:String,
        required:true
    },
    Nourriseur :{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('rouche',RucheTemplate)

