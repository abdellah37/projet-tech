const mongoose = require('mongoose')

const visiteTemplate = new mongoose.Schema({ 
    Localisation :{
        type:String, 
        required:true
    },   
    NumRuche:{
        type:Number, 
        required:true
    }, 
    Date :{
        type:Date,
        required:true
    },
    CR :{
        type:String, 
        required:true
    },   
    Nourriture:{
        type:String, 
        required:true
    }, 
    PonteDuJour :{
        type:String,
        required:true
    },
    PresenceDeCR :{
        type:String, 
        required:true
    },   
    ForceDeColonie:{
        type:Number, 
        required:true
    }, 
    Poids :{
        type:Number,
        required:true
    },
    Comportement :{
        type:String, 
        required:true
    },   
    TailleCouvain:{
        type:String, 
        required:true
    }, 
    EtatRuche :{
        type:String,
        required:true
    },
    NbrVaroa :{
        type:Number, 
        required:true
    },   
    Commentaire:{
        type:String, 
        required:true
    }, 
    ActionRéalisé :{
        type:String,
        required:true
    },

    actionAPrevoir :{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('visites',visiteTemplate)
