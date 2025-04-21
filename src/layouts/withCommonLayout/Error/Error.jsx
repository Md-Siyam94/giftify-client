import Lottie from "lottie-react";
import animationData from '../../../lottie/404 Page not found.json';
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-center p-6">
            <div className="w-72 sm:w-96 mb-6">
                <Lottie animationData={animationData} loop={true} autoplay={true} />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                Oops! Page Not Found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <NavLink
                to="/"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium px-6 py-3 rounded-lg transition-all duration-300"
            >
                <FaArrowLeft /> Go Back Home
            </NavLink>
        </div>
    );
};

export default Error;
