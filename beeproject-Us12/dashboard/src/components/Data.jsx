import React, { useEffect } from 'react'
import { GetRuche, test } from '../services/GetRucheApi';
import { Card, Icon } from 'semantic-ui-react'
import ReactHtmlParser from 'react-html-parser';

const Data = ({ data }) => {
    useEffect(() => {
        console.log("data", data)
    }, [])
    // const data1 = [
    //     { label: "name", value: data.Agriname },
    // ]
    
const html = ReactHtmlParser("</br>test html parser")
    return (
        <>

    {data && data.map((item, index) => (

                <Card centered
                link 
                

                description={ReactHtmlParser(
                `<strong>NumRuche : ${item.NumRuche} </strong><br>
                Date demise en service  : ${item.DateMiseEnService.substring(0,10)} 
                <br>Grille A Reine : ${item.GrilleAReine} 
                <br> Hausse : ${item.Hausse} 
                <br> Nourriseur : ${item.Nourriseur}
                
                <br> NumCadre : ${item.NumCadre}
                <br> NumReine : ${item.NumReine}
                <br> NumRuche : ${item.NumRuche}
                <br> PlaqueDeFond : ${item.PlaqueDeFond}
                
                <br> Type de Ruche : ${item.TypeRuche}
                <br> `)} 
              />
               )
           )}


        </>
    )
}

export default Data


