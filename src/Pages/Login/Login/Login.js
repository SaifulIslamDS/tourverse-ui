import React, { useEffect, useState } from 'react';
import './Login.css';
import initializeAuthentication from '../Firebase/firebase.init';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
  } from "firebase/auth";

initializeAuthentication();

const Login = () => {
    
    const [user, setUser] = useState ({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            // console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            // const uid = user.uid;
          } else {
            // User is signed out
          }
        });
      }, []);
      
      const handleLogout = () => {
        signOut(auth)
          .then(() => {
            setUser({});
          })
          .catch((err) => {
            console.log(err);
          });
      };

    return (
        <section id="authentication">
            <div>
                <button onClick={signInWithGoogle} className="auth-btn">Sign-in with Google</button>
                <button onClick={handleLogout} className="auth-btn">Logout</button>
                <h2 className="username">{user.displayName}</h2>
                <div className="userphoto"><img src={user.photoURL} alt="" /></div>
                <h3 className="useremail">{user.email}</h3>
            </div>
        </section>
    );
};

export default Login;