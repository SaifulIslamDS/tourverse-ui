import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import './Login.css';

const Login = () => {

    const {handleGoogleLogin, user } = useFirebase();

    return (
        <section id="authentication">
            <div>
                <button onClick={handleGoogleLogin} className="auth-btn">Sign-in with Google</button>
                <button  className="auth-btn">Logout</button>
                <h2 className="username">{user?.displayName}</h2>
                <div className="userphoto"><img src={user.photoURL} alt="" /></div>
                <h3 className="useremail">{user?.email}</h3>
            </div>
        </section>
    );
};

export default Login;