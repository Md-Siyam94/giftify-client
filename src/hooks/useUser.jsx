import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import AuthContext from "../context/AuthContext/AuthContext";
import { useQuery } from "@tanstack/react-query";



const useUser = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { refetch, data: userInformation = {} } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/giftify/users/${user.email}`);
            return res.data;
        },
        enabled: !!user?.email
    });

    return [userInformation, refetch];
};

export default useUser;