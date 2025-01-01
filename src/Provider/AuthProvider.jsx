import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const authContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoadding] = useState(true)

    // register
    const handleRegister = (email, password) => {
        setLoadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin
    const handleLogin = (email, password) => {
        setLoadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const handleLogout = () => {
        setLoadding(true)
        return signOut(auth)
    }





    useEffect(()=> {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("current user", currentUser);
            setLoadding(false)
        })
        return ()=> {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        handleRegister,
        handleLogin,
        handleLogout,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;