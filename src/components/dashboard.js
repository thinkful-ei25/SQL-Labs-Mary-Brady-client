import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import './dashboard.css'

import { Link } from 'react-router-dom';

export class Dashboard extends React.Component {
  render() {
    return (
      <div class="dashboard-layout">
        <div class="layout-content">
            <div class="row">
                    <div className="message-left">
                        Welcome: {this.props.username}
                    </div>
                    <div className="message-right">
                        STATS GO HERE
                    </div>
            </div>
            <div class="main-content">
                <div className="section-title">
                
                </div>

                </div>
          <div className="desc">
            SQL Learning Labs is a platform made to test your knowledge of SQL
            Bash commands, and to help you accelerate your learning.
          </div>

          <div className="Update">
            <p className="headertext">UPDATES 1/10/2019</p>
            <p>
              Launched site & excited to present to you our first SQL Basics
              series. Click below to get started. Questions or feedback? We'd
              love to hear from you:{' '}
              <a
                href="mailto:sqllearninglabs@gmail.com?Subject=SQL%20is%20Awesome"
                target="_top"
              >
                Email Us!
              </a>
            </p>
          </div>
          <div className="dashboard-name">
            Let's get started: {this.props.name}
          </div>

          <Link to="/frontofcard">
            <button>SQL Basics</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.authReducer;
  return {
    username: state.authReducer.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
