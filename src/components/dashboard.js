import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import {Link} from 'react-router-dom';

export class Dashboard extends React.Component {
    

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>

                <Link to="/frontofcard"><button>Get Started</button></Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.authReducer;
    return {
        username: state.authReducer.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
