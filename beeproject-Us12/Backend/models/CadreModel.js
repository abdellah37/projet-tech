const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({ 
    NumCadre :{
        type:Number, 
        required:true
    },   
    DateEntre:{
        type:Date, 
        required:true
    }, 
    Ciré:{
        type:String, 
        required:true
    }, 
    Miel:{
        type:String, 
        required:true
    }, 
    Pollen:{
        type:String, 
        required:true
    }, 
    Couvain:{
        type:String, 
        required:true
    }, 
    BâtiVide:{
        type:String, 
        required:true
    }, 
    DateSortie:{
        type:Date, 
        required:true
    }, 
    CauseSortie:{
        type:String, 
        required:true
    }, 
    EtatCadre :{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('cadres',signUpTemplate)
