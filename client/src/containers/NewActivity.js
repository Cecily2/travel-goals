import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createActivity } from '../actions/activityActions'

class NewActivity extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            link: '',
            description: ''
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
        this.props.createActivity( { ...this.state, trip_id: this.props.tripId} )
    }

    render(){
        return (
            <form className='activities-form' onSubmit={this.handleSubmit}>
                <h2>Add New Activity:</h2>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInput} placeholder="Name" />
                <input type="text" name="link" value={this.state.link} onChange={this.handleInput} placeholder="Link" />
                <input type="text" name="description" value={this.state.description} onChange={this.handleInput} placeholder="Description" />
                <input type="submit" />
            </form>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createActivity: createActivity}, dispatch)
}

export default connect(null, mapDispatchToProps)(NewActivity)