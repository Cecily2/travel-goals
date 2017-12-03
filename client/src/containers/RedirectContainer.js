import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class RedirectContainer extends Component {

    render(){
        if(this.props.loggedIn){
            return (
                <Redirect to="/trips" />
            )
        }

        return (
            <div className="home-background">
                <div className="home">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { loggedIn: state.user.session }
}

export default connect(mapStateToProps, null)(RedirectContainer)