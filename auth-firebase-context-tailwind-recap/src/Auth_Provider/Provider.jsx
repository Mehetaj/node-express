import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Fire_base/Fire_base.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const Provider = ({children}) => {
    // const [user , setUser] = useState(null);

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth ,(currentUser) => {
    //         console.log(currentUser);
    //         setUser(currentUser) 
    //     })
    //     return () => {unsubscribe()}
    // },[])

    const authInfo = {
        
        createUser
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Provider;