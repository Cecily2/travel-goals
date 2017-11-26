import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render(){

        const welcomeMessage = () => {
            if(this.props.loggedIn){
                return (
                    <span><strong>Welcome, {this.props.userName}!</strong> | <Link to="/logout">Logout</Link> | <Link to="/trips">Trips</Link></span>
                )
            }
        }

        return (
            <div className="navbar">
                <div className="navbar-left">
                    Travel Goals
                </div>
                <div className="navbar-right">
                {welcomeMessage()}
                </div>
            </div>
        )

    }
}

function mapStateToProps(state, ownProps) {
    return {
        loggedIn: state.user.session,
        userName: state.user.name
    }
}

export default connect(mapStateToProps, null)(Navbar)