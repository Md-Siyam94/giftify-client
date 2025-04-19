import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";
import AuthContext from "./AuthContext";



const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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
            setLoading(false);

        })

        return () => {
            unSubscribe();
        }

    }, [])



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