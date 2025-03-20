import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                // console.log('Login successful: ', result.user.email);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Google Login Successful',
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate('/');

            })
            .catch(error => {
                console.log('ERROR', error.message);
            })
    }


    return (
        <div className='my-3 text-center'>
            {/* <div className="divider">OR</div> */}
            <button onClick={handleGoogleSignIn} className='btn'>
                <FaGoogle className="font-bold md:text-lg"></FaGoogle>
                SignUp with Google</button>
        </div>
    );
};

export default SocialLogin;