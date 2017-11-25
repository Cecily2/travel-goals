import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createTrip } from '../actions/tripActions'

class NewTrip extends Component {

    constructor(props) {
        super(props)
        this.state = {
            location: '',
            date: '',
            image: '',
            notes: ''
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
        this.props.createTrip(this.state)
    }

    render(){
        return (
            <form className='trips-form' onSubmit={this.handleSubmit}>
                <h2>Where would you like to go?</h2>
                <input type="text" name="location" value={this.state.location} onChange={this.handleInput} placeholder="Location" />
                <input type="text" name="date" value={this.state.date} onChange={this.handleInput} placeholder="Approximate date" />
                <input type="text" name="image" value={this.state.image} onChange={this.handleInput} placeholder="Image URL" />
                <input type="text" name="notes" value={this.state.notes} onChange={this.handleInput} placeholder="Any other notes" />
                <input type="submit" />
            </form>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createTrip: createTrip}, dispatch)
}

export default connect(null, mapDispatchToProps)(NewTrip)