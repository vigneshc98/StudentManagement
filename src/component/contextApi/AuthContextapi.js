import { createContext, useState, useEffect, useContext } from "react";
import {signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged  } from 'firebase/auth';
import { auth } from "./Firebase";

export let AuthContextApi = createContext();

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState("");

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    console.log('in contextapi-',user); 

    useEffect(() => {
        
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('currentUser in contextapi:',currentUser);
        });
    }, [])

    const logOut = () => {
        return signOut(auth);
    }

    return <AuthContextApi.Provider value={{user, login, logOut}} >{children}</AuthContextApi.Provider>
}

export default AuthContextProvider
