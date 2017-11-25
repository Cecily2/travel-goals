import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { logIn } from '../actions/userActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


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
            <form className="login" onSubmit={this.handleSubmit}>
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

const mapStateToProps = (state) => {
    return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({logIn: logIn}, dispatch)
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(LogIn)
)