import { useContext } from "react";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../hooks/useAxiosPublic";



const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleSignIn = () => {
        signInWithGoogle()

            .then(result => {
                console.log('Login successful: ', result.user);
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    role: 'user',
                    image: result.user?.photoURL

                }
                axiosPublic.post("/giftify/users/create", userInfo)
                    .then(res => {
                        console.log(res.data);
                        console.log('user created in db');
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: 'Google Login Successful',
                            showConfirmButton: false,
                            timer: 1000
                        });
                        navigate(location.state ? location.state : "/");
                    })

            })
            .catch(error => {
                console.log('ERROR', error.message);
            })
    }


    return (
        <div className='my-3 text-center'>
            {/* <div className="divider divider-neutral">OR</div> */}
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn'>
                <FcGoogle className="md:text-lg" />
                Continue with Google</button>
        </div>
    );
};

export default SocialLogin;