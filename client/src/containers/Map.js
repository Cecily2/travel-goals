import React from 'react'
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"
import GoogleMapsKey from "../googleMapsKey.js"
import '../stylesheets/map.css';

import { bindActionCreators } from 'redux';
import { getTrips } from '../actions/tripActions'
import { connect } from 'react-redux'


class Map extends React.Component {

    componentDidMount(){
        if(this.props.trips.length === 0){
          this.props.getTrips()
        }
      }

      render(){

        if(this.props.trips.length === 0) {
            return (
                <div className="map-page">
                    <div className="map-no-trips">
                        <h2>Add some trips to view your map</h2>
                    </div>
                </div>
            )
        }

        const mapCoordinates = () => {
            return this.props.trips.map((trip) => {
                return {
                    title: trip.location,
                    position: {
                        lat: trip.latitude,
                        lng: trip.longitude
                    },
                    onLoaded: (googleMaps, map, marker) => {
                                  const infoWindow = new googleMaps.InfoWindow({
                                      content: `
                                        <div class="map-item">
                                          <h3><a href="/trips/${trip.id}">${trip.location}</a></h3>
                                          <div class="map-date">
                                            <strong>${trip.date}</strong>
                                          </div>
                                          <div class="map-activties">
                                            ${trip.activities.length} ${trip.activities.length === 1 ? "activity" : "activities"}
                                          </div>
                                        </div>
                                      `,
                                    })
                                    googleMaps.event.addListener(marker, "click", () => {
                                        infoWindow.open(map, marker)
                                    })
                                } // end of onLoaded
                    }
                }) // end of map
        }

        return(
            <ReactGoogleMapLoader
            params={{
                key: GoogleMapsKey(),
                libraries: "places,geometry",
            }}
            render={googleMaps =>
                googleMaps && (
                <div className="map-page">
                    <div className="map-container">
                        <ReactGoogleMap
                        googleMaps={googleMaps}
                        autoFitBounds={true}
                        coordinates={mapCoordinates()}
                        />
                    </div>
                </div>
                )}
            />
        )

      }

}

const mapStateToProps = (state) => {
    return { trips: state.trips }
    }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getTrips: getTrips}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)