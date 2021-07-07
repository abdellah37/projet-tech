import React from 'react'

import NewHead from "../../components/shared/Header"

const MainLayout = ({ children }) => {
    return (
        <>
            <NewHead />
            {children}
        </>
    )
}

export default MainLayout;