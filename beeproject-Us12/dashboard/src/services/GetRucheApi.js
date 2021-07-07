import axios from 'axios';

export const getData = async (data) => {
    try {
        const response = await axios.get('http://localhost:4000/app/rouche')
        const All =[]
        for (let i =0 ; i<response.data.length ; i++)
        {
             
            if (response.data[i].Rucher === data) {
                All.push(response.data[i])
            }
            
        }
        console.log(All)
        return All
        // if(data.success){
        //     //
        // }else{
        //     // data.message
        // }
    }
    catch (err) {
        return err
    }
}

export const getvisite = async()=> {
    try {
        const res = await axios.get('http://localhost:4000/app/visite')
        console.log(res.data)
        return res.data

    }
    catch (err) {
        return err
    }

}
export const GetRucher = async (input)=>{
    try{
        const res = await axios.get('http://localhost:4000/app/rucher')
        
        for (let i=0 ; i<res.data.length;i++) {
            if (res.data[i].NumRucher === input){
                
                return res.data[i].NumRucher
                
            }  

        }
        return false


        
    }
    catch (err){
        return err
    }
}
export const postvisite = async()=> {
    try {

        
    }
    catch (err){
        return err
    }
}

export const roucher = async (ruche)=> {
    try{
            const po = axios.post('http://localhost:4000/app/rouche',{ruche})
            return true
    }
    catch (err) {
        return false
        console.log(err)

    }

}

