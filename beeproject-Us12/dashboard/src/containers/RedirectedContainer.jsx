import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Redirected from '../components/Redirected'
import { Redirect, useLocation } from 'react-router'
import { GetRucher } from '../services/GetRucheApi'

const RedirectedContainer = () => {
    const [added, setadded] = useState(false)
    const [exist, setexist] = useState(false)
    const Ajouter = async (Localisation, NumRucher) => {
        let rucher = {
            Localisation: Localisation,
            NumRucher: NumRucher
        }

        const exists = await GetRucher(parseInt(rucher.NumRucher))
        if (exists == parseInt(rucher.NumRucher)) {
            setexist(true)
            console.log('exists', exists)
        }
        else {
            setexist(false)
            const vo = axios.post('http://localhost:4000/app/rucher', rucher)
                .then((res) => {

                    setadded(true)
                    console.log(res)
                    console.log('Notexist', exists)

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <>  {exist === true && <Redirected Ajouter={Ajouter}> {alert('le Rucher existe deja')}</Redirected>}
            {exist === false && added === false && <Redirected Ajouter={Ajouter} />}
            {exist === false && added === true && <Redirect push to={{
                pathname: "/AddRucher"
            }} />}
        </>
    )
}
export default RedirectedContainer