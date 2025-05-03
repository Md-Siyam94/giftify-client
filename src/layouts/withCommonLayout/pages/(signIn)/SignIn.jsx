import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../../../components/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../../../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";



const SignIn = () => {

    const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm();

    const { signInUser, forgotPassword } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        signInUser(data.email, data.password)
            .then(result => {
                // Login successful, so no failed count update is needed
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Signin Successful',
                    showConfirmButton: false,
                    timer: 1000
                });
                reset();
                navigate('/');
            })
            .catch(async error => {
                console.log('Firebase Error:', error.message);

                // Now it's a Firebase login error, so checking with server
                try {
                    const res = await fetch('https://v1-coffee-store-server-swart.vercel.app/auth/track-failed-login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: data.email })
                    });

                    const result = await res.json();

                    if (result.status === 'locked') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Account Locked!',
                            text: 'Too many failed attempts. Please try again later.',
                        });
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Invalid Email or Password!!',
                            icon: 'error',
                            confirmButtonText: 'Try Again'
                        });
                    }
                } catch (serverError) {
                    console.error('Server Error:', serverError);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops!',
                        text: 'Server issue. Try again later.',
                    });
                }
            });
    };



    // forgot password function
    const handleForgotPassword = () => {
        const email = getValues("email"); // Get email from form
        if (!email) {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Email',
                text: 'Please type your email first before clicking "Forgot password".',
            });
            return;
        }

        forgotPassword(email) // Call the forgotPassword function from context
            .then((message) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Reset Link Sent',
                    text: 'Check your email inbox or spam folder.',
                    timer: 2500,
                    showConfirmButton: false,
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message,
                });
            });
    };



    return (
        <>
            <div className="hero bg-base-100 min-h-[60vh] mt-3 mb-2">

                <div className="hero-content px-6 md:py-3 flex flex-col">
                    {/* heading */}
                    <div className="text-center space-y-1.5 md:mb-1">
                        <h3 className="text-xl md:text-3xl font-semibold">Welcome back</h3>
                        <p className="text-gray-500 text-base md:text-lg">Sign in to your account to continue</p>
                    </div>


                    {/* Form */}
                    <div className="card w-full max-w-lg mx-auto lg:w-96 bg-white shadow-xl rounded-xl px-8 md:py-5">

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' &&
                                    <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                            </div>

                            {/* forgot password */}
                            <h5
                                onClick={handleForgotPassword}
                                className="text-sm text-gray-700 hover:underline text-center cursor-pointer mt-2 mb-[-8px]"
                            >
                                Forgot password?
                            </h5>


                            <div className="form-control mt-5">
                                <input className="btn btn-p w-full text-neutral-content" type="submit" value="Log in" />
                            </div>
                        </form>



                        {/* Already have an account? */}
                        <div className="text-center">
                            <div className="flex justify-center items-center gap-0.5 md:gap-1.5">
                                <p className="text-gray-800 text-sm md:text-base">{`Don't have an account?`}</p>
                                <Link to="/signUp">
                                    <h4 className="font-medium text-sm md:text-base text-p hover:underline">Sign up</h4>
                                </Link>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="mt-1.5 mb-4 md:mb-0">
                            <SocialLogin />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SignIn;