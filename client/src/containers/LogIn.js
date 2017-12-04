import React, { Component } from 'react';
import { logIn } from '../actions/userActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import RedirectContainer from '../containers/RedirectContainer'


class LogIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
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
        this.props.logIn(this.state, this.props.history, '/trips')
    }

    render(){
        return (
            <RedirectContainer>
                <h2>Login</h2>
                <form className="login" onSubmit={this.handleSubmit}>
                    <p>
                        Email
                        <input type="text" name="email" value={this.state.email} onChange={this.handleInput} />
                    </p>
                    <p>
                        Password
                        <input type="password" name="password" value={this.state.password} onChange={this.handleInput} />
                    </p>
                        <input type="submit" />
                </form>
            </RedirectContainer>
        )
    }
}

export default withRouter(
    connect(null, {logIn})(LogIn)
)