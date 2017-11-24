import React, { Component } from 'react';

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        }
        // add form errors to state?
    }

    handleInput = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("Submit clicked")
    }

    render(){
        return (
            <form class="signup" onSubmit={this.handleSubmit}>
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
        )
    }
}

export default SignUp