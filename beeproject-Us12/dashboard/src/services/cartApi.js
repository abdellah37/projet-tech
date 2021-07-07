import axios from 'axios'
import { API_HOST } from '../config/constants'

export const getLineChartData = (dataChart) => {
    return dataChart
}

export const testApi = async () => {
    try {
        const data = await axios.get(`${API_HOST}/user/login`, {
            withCredentials: true
        });
        return data;
        //localstorage  sol 1
        // localStorage.setItem("dashboard-token", "skdjfhsldflskdflsdklfldsklf");
        // cookie sol 2`
    }
    catch (er) {
        return false;
    }

}