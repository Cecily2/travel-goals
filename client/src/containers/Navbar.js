import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render(){

        return (
            <div>
                <span>LOGO</span>
                | {this.props.userName} |  <Link to="/logout">Logout</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
            </div>
        )

    }
}

function mapStateToProps(state, ownProps) {
    console.log("MAPPIN")
    return {
        loggedIn: state.user.session,
        userName: state.user.name
    }
}

export default connect(mapStateToProps, null)(Navbar)