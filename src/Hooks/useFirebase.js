import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;  
            setUser(user);
        })
        .catch(error => {
            setError(error.message);
        })

    };

    return {
        user,
        error,
        handleGoogleLogin
    };
};

export default useFirebase; 
