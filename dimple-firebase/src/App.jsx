import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './FireBase/Firebase.config';

function App() {

  const [user , setUser] = useState(null);
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()

  const handleSignInGoogle = () => {
    signInWithPopup(auth , googleProvider)
    .then(result => {
      const loggedInUser = result.user;
      setUser(loggedInUser);
      console.log(loggedInUser);
    })
    .catch(e => {
      console.log(e.message);
    })
  }

  const handleSignInGithub = () => {
    signInWithPopup(auth , githubProvider)
    .then(result => {
      const loggedInUser = result.user;
      setUser(loggedInUser)
      console.log(loggedInUser);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      setUser([])
    })
    .catch(e => {
      console.log(e.message);
    })
  }


  return (
    <div className="App">
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fire_Base + React</h1>
      <div className="card">


{
  user ?  <button onClick={handleSignOut}>Sign out</button> 
  :
  <div>
    <button onClick={handleSignInGoogle}>Sign In Google</button> 
    <button onClick={handleSignInGithub}>Sign In Github</button> 
  </div>
}

    
    
        {
          user && <div>
            <h2>{user.displayName || 'Mehetaj Khandaker'}</h2>
            <p>{user.email || 'mehetajkhandaker@gmail.com'}</p>
            <img src={user.photoURL} alt="" />
          </div>
        }
      </div>
     
    </div>
  )
}

export default App
