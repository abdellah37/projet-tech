import React, { useEffect, useState } from 'react'
import { Redirect, useLocation } from 'react-router'

import AddRucher from '../components/AddRucher'
import {GetRucher} from '../services/GetRucheApi'
import axios from 'axios'



const AddRucherContainer = ()=> {
    const [form,setform]=useState(false); 
    const [rucherNan,setrucherNan]=useState(true); 


    const addRucher = async (TypeRuche,Rucher,PlaqueDeFond,NumRuche,NumReine,NumCadre,Nourriseur,Hausse,GrilleAReine,DateMiseEnService)=>{
        let rucher =
        {
            TypeRuche:TypeRuche,
            Rucher:Rucher,
            PlaqueDeFond:PlaqueDeFond,
            NumRuche:NumRuche,
            NumReine:NumReine,
            NumCadre:NumCadre,
            Nourriseur:Nourriseur,
            Hausse:Hausse,
            GrilleAReine:GrilleAReine,
            DateMiseEnService:DateMiseEnService
            
        }
        const exists = await GetRucher(parseInt(rucher.Rucher))
        if (exists===false) 
        {
                setrucherNan(false)
                
        } 
        else {
        const req = axios.post('http://localhost:4000/app/rouche',rucher) 
            .then((res)=>{
                setform(true)
                setrucherNan(true)
                console.log(res)
            })
            .catch((err)=>{
                    console.log(err)
            })
        }

        // const va = await roucher(rucher)
        //     if(va==true) {
        //         //setform(true)
        //         console.log(va)
        //     }
        //     else console.log('err',va)
        

    }






    return (
        <>
        {rucherNan ===true && form ===true  &&  <Redirect push to={{
        pathname: '/Ruchers'
        }
         }
/> } 
        { form === false && <AddRucher addRucher={addRucher}/>}

        { rucherNan===false && <Redirect push to ={{
            pathname:'/Redirected'
        }}/> } 
        
        </>
    )
    }
export default AddRucherContainer