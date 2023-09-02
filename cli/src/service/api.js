import axios from 'axios'

const URL="http://localhost:700"

export  const authenticatSignup=async(data)=> {
   try{
    return await axios.post(`${URL}/signup`,data)
   }catch(error){
       console.log(`error while calling signup api`,error)
   }
}
export const authenticatLogin = async (data) => {
    try {
        const response = await axios.post(`${URL}/login`, data);
        return response.data; // Extract the actual data from the response
    } catch (error) {
        console.log(`error while calling login api`, error);
    }
}
export const payUsingPaytm=async(data)=>{
    try{
       let response= await axios.post(`${URL}/payment`, data);
       return response.data;
    }catch(error){
        console.log(`error while calling paytm`, error);
    }
} 