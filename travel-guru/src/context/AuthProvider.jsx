import React, { createContext, useEffect, useState } from 'react';
import {getAuth,  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app)
// const [user, setUser] = useState(null)
export const AuthContext = createContext(null)


const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}


const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

// useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, createdUser => {
//         setUser(createdUser)
//     })
//     return () => unsubscribe();
// }, [])

const authInfo = {  createUser, signIn }


const AuthProvider = ({ children }) => {
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;