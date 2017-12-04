import React, { Component } from 'react';
import { signUp } from '../actions/userActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import RedirectContainer from '../containers/RedirectContainer'

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

        return (
            <RedirectContainer>
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
            </RedirectContainer>
        )
    }
}

export default withRouter(
    connect(null, {signUp})(SignUp)
)