import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/logo2.png';
import './header-bar.css';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let buttonMenu;
    if (this.props.loggedIn) {
      buttonMenu = (
        <div className="button-position">
          <a className="login-signup-button" onClick={() => this.logOut()}>
            Log out
          </a>
        </div>
      );
    } else {
      buttonMenu = (
        <div>
          <div className="button-position">
            <Link to="/sign-up">
              <button className="login-signup-button join-position">
                Join
              </button>
            </Link>
          </div>

          <div className="button-position">
            <Link to="/login">
              <button className="login-signup-button">Login</button>
            </Link>
          </div>
        </div>
      );
    }
    return (
      <header role="banner">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-container">
              <Link to="/">
                <img src={mainLogo} alt="SQL Learning Labs Logo" />
              </Link>
            </div>
          </div>
          <nav role="navigation ">{buttonMenu}</nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
