import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const useCart = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/giftify/carts?email=${user.email}`);
            return res.data;
        }
    });


    return [cart, refetch]
};

export default useCart;