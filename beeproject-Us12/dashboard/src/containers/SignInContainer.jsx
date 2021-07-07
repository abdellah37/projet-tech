import React, { useEffect, useState } from 'react'
import FormSi from '../components/FormSi'
import { fetchUser, token } from '../services/SignInApi';
import { Redirect, useLocation } from 'react-router'
const SignInContainer = () => {
    const [connected, setConnected] = useState(false);




    const Login = async (email, password, checkbox) => {



        let user = await fetchUser(email, password)
        if (user === true
        ) {

            const log = await token(email, password)
            setConnected(true)
            console.log(email);
            console.log(password);
            console.log(checkbox)
        }
        else {
            setConnected(false);
            alert('mot de passe ou email erroné')
        }
    }



    return (
        <>

            { connected === true && <Redirect push to={{
                pathname: '/Visites'
            }
            }
            />}
            {connected === false && <FormSi Login={Login} />}
        </>
    )
}

export default SignInContainer