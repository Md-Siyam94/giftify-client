import axios from "axios";

<<<<<<< HEAD
const axiosPublic = axios.create({
    // baseURL: 'http://localhost:5000/giftify'
    baseURL: 'https://giftify-server-kappa.vercel.app/giftify'
})

=======
const axiosPublic=axios.create({
    baseURL:"http://localhost:5000"
})


>>>>>>> b1bbe4fee6ef88cf7db4486cd4ef14804f44f547
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;