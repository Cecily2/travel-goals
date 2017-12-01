import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { signUp } from '../actions/userActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';


class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signUp(this.state, this.props.history, '/trips')
    }

    render(){
        if(this.props.loggedIn){
            return (
                <Redirect to="/trips" />
            )
        }

        return (
            <div className="home-background">
            <div className="home">
            <form className="signup" onSubmit={this.handleSubmit}>
                <p>
                    Username
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput} />
                </p>
                <p>
                    Email
                    <input type="text" name="email" value={this.state.email} onChange={this.handleInput} />
                </p>
                <p>
                    Password
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInput} />
                </p>
                <p>
                    <input type="submit" />
                </p>

            </form>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({signUp: signUp}, dispatch)
}

export default withRouter(
    connect(null, mapDispatchToProps)(SignUp)
)