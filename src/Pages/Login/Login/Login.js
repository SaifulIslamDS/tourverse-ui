import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuths from '../../../Hooks/useAuths';
import './Login.css';

const Login = () => {

    const {handleGoogleLogin, user, handleSignOut } = useAuths();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from;

    const googleLoginBtn = () => {
        handleGoogleLogin()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <section id="authentication">
            <div>
                { (user.email) ? ( <button onClick={handleSignOut} className="auth-btn">Logout</button>) 
                : 
                (<button onClick={googleLoginBtn} className="auth-btn">Sign-in with Google</button>)
                }

                <h2 className="username">{user?.displayName}</h2>
                <h3 className="useremail">{user?.email}</h3>
            </div>
        </section>
    );
};

export default Login;