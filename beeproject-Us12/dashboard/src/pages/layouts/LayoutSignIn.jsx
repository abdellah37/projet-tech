import React from 'react'
import HeaderSignIn from "../../components/HeaderSignIn"

const LayoutSignIn = ({ children }) => {
    return (
        <>
            <HeaderSignIn />
            {children}
        </>
    )
}

export default LayoutSignIn;