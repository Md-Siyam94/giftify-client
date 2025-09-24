import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext/AuthContext";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Swal from "sweetalert2";
import SocialLogin from "../../../../components/SocialLogin";
import { useState } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, signOutUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const togglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {

        const imageFile = new FormData();
        imageFile.append("image", data.image[0]);

        const imageRes = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: { "content-type": "multipart/form-data" },
        });


        if (imageRes.data.success) {

            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    // console.log(loggedUser);
                    updateUserProfile({ displayName: data.name, photoURL: imageRes.data.data.display_url })
                        .then(() => {
                            // creating user entry in the database
                            const userInfo = {
                                name: data.name,
                                email: data.email,
                                role: data.role,
                                image: imageRes.data.data.display_url
                            }
                            axiosPublic.post('/giftify/users/create', userInfo)
                                .then(res => {
                                    if (res.data.success) {
                                        console.log('user added to the database');

                                        signOutUser()
                                            .then(() => {
                                                // console.log('user signOut successful');
                                                Swal.fire({
                                                    title: 'Sign Up Successful',
                                                    text: 'Now please Login to Continue',
                                                    icon: 'success',
                                                    confirmButtonText: 'ok'
                                                });
                                                reset();
                                                navigate('/signIn');
                                            })
                                            .catch(error => console.log('ERROR', error.message))

                                    }
                                })


                        })
                        .catch(error => console.log(error))
                })


        }


    };




    return (
        <>
            <div className="hero bg-base-100 min-h-[60vh] mt-3 mb-2">

                <div className="hero-content px-6 md:py-3 flex flex-col">
                    {/* heading */}
                    <div className="text-center space-y-1.5 md:mb-1">
                        <h3 className="text-xl md:text-3xl font-semibold">Create your account</h3>
                        <p className="text-gray-500 text-base md:text-lg">Start sending beautiful virtual gifts today</p>
                    </div>


                    {/* Form */}
                    <div className="card w-full max-w-lg mx-auto lg:w-96 bg-white shadow-xl rounded-xl px-8 md:py-5">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            {/* Image Upload */}
                            <div className="form-control my-2.5">
                                <label className="label">
                                    <span className="label-text">Upload Image*</span>
                                </label>
                                <input
                                    {...register("image", { required: "Image is required" })}
                                    type="file"
                                    className="file-input w-full max-w-xs"
                                />
                                {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                            </div>

                            {/* Select Role */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Select Role</span>
                                </label>
                                <select
                                    {...register("role", { required: "Role is required" })}
                                    className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="user">User</option>
                                    {/* <option value="seller">Seller</option> */}
                                </select>
                                {errors.role && <span className="text-red-600">{errors.role.message}</span>}
                            </div>


                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'}  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                <button onClick={togglePassword} className="absolute right-3 top-8 text-xl">
                                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                </button>
                                {errors.password?.type === 'required' &&
                                    <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-p w-full text-neutral-content" type="submit" value="Create Account" />
                            </div>
                        </form>



                        {/* Already have an account? */}
                        <div className="text-center">
                            <div className="flex justify-center items-center gap-0.5 md:gap-1.5">
                                <p className="text-gray-800 text-sm md:text-base">Already have an account?</p>
                                <Link to="/signIn">
                                    <h4 className="font-medium text-sm md:text-base text-p hover:underline">Sign in</h4>
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

export default SignUp;