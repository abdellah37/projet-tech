import React, { useEffect, useState } from 'react'
import Cards from '../components/Card';

import LineChart from '../components/LineChart'
import { lineChartData,lineChartData2,lineChartData3} from '../mock/chartData'
import { getLineChartData, testApi } from '../services/cartApi';
import { getData } from '../services/GetRucheApi';
import Data from '../components/Data';

const TestContainer = () => {
    const [roucheIndex, setRoucheIndex] = useState(null);
    const [rouche1Data, setRouche1Data] = useState(null);
    const [rouche2Data, setRouche2Data] =useState(null);
    const [rouche3Data, setRouche3Data] =useState(null);
    const [user , setUser] =useState ({email:"", password:""}); 
    const [rucheData, setRucheData] = useState(null);
    // cdm
    useEffect(async () => {
        const data1 = getLineChartData(lineChartData)
        setRouche1Data(data1)
        const data2 = getLineChartData(lineChartData2)
        setRouche2Data(data2)
        const data3 = getLineChartData(lineChartData3)
        setRouche3Data(data3)
        getData().then(data => setRucheData(data))
        /*const asyncTask = async () => {
            const dataa =await testApi()
            console.log("DATATODO", dataa)*/ 
        ////}
        //asyncTask()
}, [])
    return (
        <>
             
            { roucheIndex === 0 && rucheData && <Data data={rucheData}/> }
            {roucheIndex === 1 && <LineChart data ={rouche2Data}/>}
            {roucheIndex === 2 && <LineChart data={rouche3Data}/>}
            <Cards handleRouche={setRoucheIndex} />  
            
        </>
    )
}

export default TestContainer