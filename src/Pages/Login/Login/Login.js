import React from 'react';
import useAuths from '../../../Hooks/useAuths';
import './Login.css';

const Login = () => {

    const {handleGoogleLogin, user, handleSignOut } = useAuths();

    return (
        <section id="authentication">
            <div>
                <button onClick={handleGoogleLogin} className="auth-btn">Sign-in with Google</button>
                <button onClick={handleSignOut} className="auth-btn">Logout</button>
                <h2 className="username">{user?.displayName}</h2>
                <div className="userphoto"><img src={user.photoURL} alt="" /></div>
                <h3 className="useremail">{user?.email}</h3>
            </div>
        </section>
    );
};

export default Login;