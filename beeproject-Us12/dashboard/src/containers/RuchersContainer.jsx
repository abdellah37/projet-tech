import React, { useEffect, useState } from 'react'
import Cards from '../components/Card';
import { Redirect, useLocation } from 'react-router'
import LineChart from '../components/LineChart'
import { lineChartData, lineChartData2, lineChartData3 } from '../mock/chartData'
import { getLineChartData, testApi } from '../services/cartApi';
import { getData, GetRucher } from '../services/GetRucheApi';

import Rouchers from '../components/Rouchers';





const RuchersContainer = () => {




    return (
        <>
            <Rouchers />



        </>
    )

}

export default RuchersContainer