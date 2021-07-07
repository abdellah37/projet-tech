import React, { useEffect, useState } from 'react'
import FaireVisite from '../components/FaireVisite'
import axios from 'axios'
import { Redirect, useLocation } from 'react-router'


const FaireVisiteTestContainer = ()=> {
    const [form,setform]=useState(false); 
    const Fairevisiter = (Localisation,NumRuche,date,CR,Nourriture,PonteDuJour,
        PresenceDeCR,ForceDeColonie,Poids,Comportement,TailleCouvain,EtatRuche,NbrVaroa,Commentaire,ActionRéalisé,actionAPrevoir)=>{
        
        let visite =
        {Localisation:Localisation,
        NumRuche:NumRuche,
        Date:date,
        CR:CR, 
        Nourriture: Nourriture,
        PonteDuJour :PonteDuJour,
        PresenceDeCR :PresenceDeCR,
        ForceDeColonie:ForceDeColonie,
        Poids :Poids,
        Comportement :Comportement,
        TailleCouvain:TailleCouvain,
        EtatRuche :EtatRuche,
        NbrVaroa :NbrVaroa,
        Commentaire:Commentaire,
        ActionRéalisé :ActionRéalisé,
        actionAPrevoir:actionAPrevoir
    }

    const data=  axios.post('http://localhost:4000/app/visite',visite)
        .then((res)=>{
            setform(true)
            console.log(res)
            
        }
        )
    }

        return (
            <>
            {form ===true  &&  <Redirect push to={{
            pathname: '/Visites'
            }
             }
    /> }
            {form === false && <FaireVisite Fairevisiter={Fairevisiter}/>}
            </>
        )
}

export default FaireVisiteTestContainer ;