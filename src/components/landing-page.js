import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import placeholderimg from '../assets/placeholder.png';

import LoginForm from './login-form';

export function LandingPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
        
            <h2 className="heading">Welcome to SQL Learning Labs!</h2>
            <p>SQL Learning Labs is designed for students of all skill levels
                to practice and master SQL Bash Commands!
            </p>
            <img src={placeholderimg} className="x" alt="x" />
   
            <Link to="/sign-up"><button>Sign Up</button></Link>

            <Link to="/login"><button>Login</button></Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
