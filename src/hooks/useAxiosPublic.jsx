import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'http://localhost:5000/giftify'
    baseURL: 'https://giftify-server-kappa.vercel.app/giftify'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;