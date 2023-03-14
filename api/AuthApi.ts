import axios from "axios";


const authApi = axios.create({
    // baseURL:'localhost:4000/api/'
    baseURL:'http://localhost:4000/api/'
});

authApi.interceptors.request.use(
    (reponse)=>{
        console.log('🌚 interceptor')
        return reponse
    },(error)=>{

        const originalRequest = error.config;
        const errMessage = error.response.data.message as string;

        return Promise.reject(error);
    }

)

export default authApi;