import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Fire_Base/FireBase.init';

const Login = () => {
    const [users, setUsers] = useState({})
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider()
    const handleGoogle = () => {
        // console.log('Google mama I am coming');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUsers(user)
            })
            .catch(error => {
                console.log("Error:", error.message);
            })
    }

    const handleGitHub = () => {
        signInWithPopup(auth, gitProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(result);
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                setUsers(null);
                console.log(result);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div>
            {
                users ?
                    <button onClick={handleSignOut}>Sign Out</button> 
                    :
                    <div>
                        <button onClick={handleGoogle}>Google login</button>
                        <button onClick={handleGitHub}>GitHub login</button>
                    </div>
            }
            {
                users && <div>
                    <h2>{users?.displayName}</h2>
                    <p>{users?.email}</p>
                </div>
            }
        </div>
    );
};

export default Login;