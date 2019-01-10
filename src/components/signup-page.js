import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import SignupForm from './signup-form';

export function SignupPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home">
            <h2>Sign Up for SQL Learning Labs</h2>
            <SignupForm />
            <Link to="/login">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);
