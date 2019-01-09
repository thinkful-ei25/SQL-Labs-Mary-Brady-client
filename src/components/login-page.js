import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import placeholderimg from '../assets/placeholder.png';

import LoginForm from './login-form';

export function LoginPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
        
            <h2 className="heading">Login to SQL Learning Labs!</h2>
            <p>Login Here
            </p>
            <img src={placeholderimg} className="x" alt="x" />
            <LoginForm />
            <Link to="/sign-up"><button>Sign Up</button></Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
