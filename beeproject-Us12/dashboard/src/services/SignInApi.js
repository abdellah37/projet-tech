import axios from 'axios'
export const fetchUser = async (email,password)=> {
    try{ 
        const res = await axios.get("http://localhost:4000/app/signIn") 
        console.log(res.data)
        if(res.data!=null) {
            if(res.data[0]=== email && res.data[1]=== password ){
                // const log = await axios.post("http://localhost:4000/app/login", {email})
                // console.log(log)
                return true
            }
            else console.log("user doesn't exist ")
            }
         else 
            return console.log("error",res.data)

        
        }
    catch (err) {
            console.log(err,'false')
            
    }
} 

export const token = async (email,password)=> { 
    try {
        const id=  await axios.post("http://localhost:4000/app/login", {email,password})
        return id 

    }
    catch (err) {
        console.log(err)

    }

}









