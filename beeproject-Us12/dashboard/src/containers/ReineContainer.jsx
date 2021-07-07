import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Reine from '../components/Reine'

const ReineContainer = ()=>{

    const addReine = (NumReine,CodeGénéalogique,Marquée,Clippée,DateNaissance)=>{ 
        let reine = {
            NumReine:NumReine,
            CodeGénéalogique:CodeGénéalogique,
            Marquée:Marquée,
            Clippée:Clippée,
            DateNaissance:DateNaissance
        }

        const areine=axios.post('http://localhost:4000/app/Reine',reine)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })



    }

    return (
       <>
        <Reine addReine={addReine}/>
       </>
    )
}
export default ReineContainer