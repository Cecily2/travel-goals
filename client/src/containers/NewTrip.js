import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createTrip } from '../actions/tripActions'
import UnsplashApi from '../api/UnsplashApi'
import '../stylesheets/new-trip-form.css';

class NewTrip extends Component {

    constructor(props) {
        super(props)
        this.state = {
            location: '',
            date: '',
            image: '',
            notes: '',
            photoOptions: [],
            selectedPhoto: null,
            expanded: false
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    onLocationClick = (event) => {
        this.setState({
            expanded: true
        })
    }

    onLocationBlur = (event) => {
        if(this.state.location !== ""){
            UnsplashApi.searchPhotos(this.state.location)
            .then(response => {
                console.log("onLocationBlur:")
                console.log(response)
                this.setState({
                    photoOptions: response.results.map((photo) => {
                        return {
                            links: photo.urls,
                            user: {
                                name: photo.user.name,
                                url: photo.user.links.html
                            }
                        }
                    })
                })
            })
        }

    }

    photoChoiceChange = (event) => {
        this.setState({
            selectedPhoto: event.target.value
        })
    }

    cancelForm = () => {
        this.setState({
            location: '',
            date: '',
            image: '',
            notes: '',
            photoOptions: [],
            selectedPhoto: null,
            expanded: false
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const trip = {
            location: this.state.location,
            date: this.state.date,
            image: this.state.photoOptions[this.state.selectedPhoto],
            notes: this.state.notes
        }

        this.props.createTrip(trip)

        this.setState({
            location: '',
            date: '',
            image: '',
            notes: '',
            photoOptions: [],
            selectedPhoto: null,
            expanded: false
        })

    }



    render(){

        const images = this.state.photoOptions.map((photo, index) => {
            const style = { backgroundImage: `url(${photo.links.thumb})` }
            return (
                <span key={index}>
                    <input type="radio" name="photo" className="photo-choice" id={index} value={index} onChange={this.photoChoiceChange} />
                    <label style={style} htmlFor={index}></label>
                </span>
            )
        })

        const extraFieldsClass = () => {
            return this.state.expanded === false ?  "extra-fields" : "extra-fields expanded"
        }

        const imageSelectionClass = () => {
            return this.state.photoOptions.length === 0 ?  "photo-options" : "photo-options photo-expanded"
        }

        return (
            <form className='trips-form' onSubmit={this.handleSubmit}>
                <h2>Where would you like to go?</h2>
                <input type="text" name="location" value={this.state.location} onChange={this.handleInput} onClick={this.onLocationClick} onBlur={this.onLocationBlur} placeholder="Location" />

                <div className={extraFieldsClass()}>
                    <input type="text" name="date" value={this.state.date} onChange={this.handleInput} placeholder="Approximate date (optional)" />
                    <textarea type="text" name="notes" value={this.state.notes} onChange={this.handleInput} placeholder="Any other notes" />

                    <div className={imageSelectionClass()}>
                        <h3>Select a photo to represent your trip:</h3>
                        {images}
                    </div>


                    <input type="submit" />

                    <div className="cancel-button" onClick={this.cancelForm}>
                        Cancel
                    </div>


                </div>

            </form>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createTrip: createTrip}, dispatch)
}

export default connect(null, mapDispatchToProps)(NewTrip)