import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";
import AuthContext from "./AuthContext";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic=useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }


    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
            .then(() => {
                // console.log("Password reset email sent");
                // You can return a success message here or show a toast
                return "Password reset email sent";
            })
            .catch((error) => {
                console.error("Error sending password reset email:", error.message);
                throw new Error(error.message);
            });
    };



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current User", currentUser);
            if(currentUser){
                // TODO: Get  Token  and store client
                const userInfo={ email: currentUser.email};
                axiosPublic.post('/giftify/jwt', userInfo)
                .then((res)=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }

                })

            }else{
                // TODO: Token Removed(if token stored in client side:Local storage)
                localStorage.removeItem('access-token')
            }
            
            setLoading(false);

        })

        return () => {
            unSubscribe();
        }

    }, [ axiosPublic])



    const authInfo = {
        user,
        loading,
        signInUser,
        signInWithGoogle,
        signOutUser,
        createUser,
        updateUserProfile,
        forgotPassword,

    }

    // console.log(user);


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;