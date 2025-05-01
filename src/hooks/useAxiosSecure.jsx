import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";

const axiosSecure = axios.create({
    baseURL: 'https://giftify-server-kappa.vercel.app'
})

const useAxiosSecure = () => {
    const navigate=useNavigate();
    const{signOutUser}=useContext(AuthContext);
    // interceptors using request the secure api calling
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        console.log('Request stop by interceptors', token);
        config.headers.authorization = `Bearer${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })

    //   interceptors for 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
    }, async (error)=> {
        // Do something with response error
        const status=error.response.status;
        console.log('status error', status)
        if(status === 401 || status === 403){
            await signOutUser();
            navigate('/signIn')

        }
        return Promise.reject(error);
      })

    return axiosSecure;
};

export default useAxiosSecure;