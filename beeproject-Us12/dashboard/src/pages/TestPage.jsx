import React from 'react'
import TestContainer from '../containers/TestContainer'
import MainLayout from './layouts/MainLayout'

const TestPage = () =>
    <>
        <MainLayout>
            <TestContainer />
        </MainLayout>
        {//<TestContainer1></TestContainer1>
        }
    </>

export default TestPage