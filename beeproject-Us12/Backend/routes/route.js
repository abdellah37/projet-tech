const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signUpModel')
const visiteTemplate = require('../models/VisiteModel')
const RucheTemplate = require('../models/ruchersModel')
const createRucher = require('../models/RucherModel')
const createReine = require('../models/ReineModel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
const users = []
router.post('/signup', (req, res) => {
    try {
        //const salt = await bcrypt.genSalt()
        //const hashedPassword = await bcrypt.hash(req.body.password, salt )
        const signedUpUser = new signUpTemplateCopy({
            adresse: req.body.adresse,
            numerotel: req.body.numerotel,
            email: req.body.email,
            password: req.body.password,
            token: req.body.token
        })

        signedUpUser.save()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    }
    catch {
        res.status(500).send()
    }
})


const user = mongoose.model('ruches')

router.get('/signIn', (req, res) => {

    user.findOne({})
        .then((data) => {
            const user = [data.email, data.password, data.token]
            users.push(user)
            console.log(data)
            res.json(user)
        })
        .catch((err) => {
            console.log('error', err)
        })
})

router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const user = { email: email, password: password }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})

router.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null)
        return res.sendStatus(401)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.json(err)
        const accessToken = generateAccessToken({ accessToken: accessToken })
    })
})



const visite = mongoose.model('visites')
router.post('/visite', (req, res) => {
    try {
        //const salt = await bcrypt.genSalt()
        //const hashedPassword = await bcrypt.hash(req.body.password, salt )
        const visiteTemplateCopy = new visiteTemplate({
            Localisation: req.body.Localisation,
            NumRuche: req.body.NumRuche,
            Date: req.body.Date,
            CR: req.body.CR,
            Nourriture: req.body.Nourriture,
            PonteDuJour: req.body.PonteDuJour,
            PresenceDeCR: req.body.PresenceDeCR,
            ForceDeColonie: req.body.ForceDeColonie,
            Poids: req.body.Poids,
            Comportement: req.body.Comportement,
            TailleCouvain: req.body.TailleCouvain,
            EtatRuche: req.body.EtatRuche,
            NbrVaroa: req.body.NbrVaroa,
            Commentaire: req.body.Commentaire,
            ActionRéalisé: req.body.ActionRéalisé,
            actionAPrevoir: req.body.actionAPrevoir
        })

        visiteTemplateCopy.save()
            .then(data => {
                if (data !== null)
                    res.json(data)
                else res.json(401)
            })
            .catch(err => {
                res.json(err)
            })
    }
    catch {
        res.status(500).send()
    }

})
router.get('/visite', (req, res) => {
    Visite = visite.find()

    Visite
        .then((data) => {
            res.json(data)

        })
        .catch((err) => {
            res.json(err)
        })

})



router.get('/verifytoken', authenticateJWT, (req, res) => {
    res.status(400)
})




function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
}
function authenticateJWT(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, email) => {
            if (err) {
                console.log(err)
                return res.sendStatus(403);
            }

            req.email = email;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
const rouche = mongoose.model('rouche')
router.post('/rouche', (req, res) => {

    const RucheTemplateCopy = new RucheTemplate({

        Rucher: req.body.Rucher,
        NumRuche: req.body.NumRuche,
        TypeRuche: req.body.TypeRuche,
        DateMiseEnService: req.body.DateMiseEnService,
        NumReine: req.body.NumReine,
        NumCadre: req.body.NumCadre,
        Hausse: req.body.Hausse,
        GrilleAReine: req.body.GrilleAReine,
        PlaqueDeFond: req.body.PlaqueDeFond,
        Nourriseur: req.body.Nourriseur

    })
    RucheTemplateCopy.save()
        .then(data => {
            if (data !== null)
                res.json(data)
            else res.json(401)
        })
        .catch(err => {
            res.json(err)
        })



})

router.get('/rouche', (req, res) => {
    ruche = rouche.find({})

    ruche
        .then((data) => {
            res.json(data)

        })
        .catch((err) => {
            res.json(err)
        })

})

router.post('/rucher', (req, res) => {
    const createRuchercopy = new createRucher({
        NumAPI: req.body.NumAPI,
        Localisation: req.body.Localisation,
        NumRucher: req.body.NumRucher
    })
    createRuchercopy.save()
        .then(data => {
            if (data !== null)
                res.json(data)
            else res.json(401)
        })
        .catch(err => {
            res.json(err)
        })
})

const rucher = mongoose.model('ruchers')
router.get('/rucher', (req, res) => {
    roucher = rucher.find({})

    roucher
        .then((data) => {
            res.json(data)

        })
        .catch((err) => {
            res.json(err)
        })

})

router.post('/Reine', (req,res)=>{
    const createReinecopy =new createReine({
        NumReine:req.body.NumReine, 
        CodeGénéalogique:req.body.CodeGénéalogique, 
        Marquée:req.body.Marquée, 
        Clippée:req.body.Clippée,
        DateNaissance:req.body.DateNaissance
    })
    createReinecopy.save()
    .then(data => {
        if (data !== null)
            res.json(data)
        else res.json(401)
    })
    .catch(err => {
        res.json(err)
    })
})

const reine= mongoose.model('reines')
router.get('/Reine', (req, res) => {
    Reine = reine.find({})

    Reine
        .then((data) => {
            res.json(data)

        })
        .catch((err) => {
            res.json(err)
        })

})






module.exports = router
