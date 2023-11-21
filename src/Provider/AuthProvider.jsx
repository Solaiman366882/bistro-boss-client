import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebaseConfig";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Handle Create New User
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // Handle User Login by email and password
    const userLogin = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Handle User Logout
    const userLogOut = () => {
        setLoading(true);
        return signOut(auth);
    } 

    // handle update user
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
          })
    }

    // login with google
    const googleLogin = () => 
    {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }



    //handle Auth State Change
    useEffect(()=> {
        const unsubscribe =  onAuthStateChanged(auth,currenUser => {
            setUser(currenUser);
            console.log(user,currenUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        userLogin,
        createUser,
        userLogOut,
        updateUserProfile,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node,
}
export default AuthProvider;