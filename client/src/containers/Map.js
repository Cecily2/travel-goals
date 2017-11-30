import React from 'react'
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"
import GoogleMapsKey from "../googleMapsKey.js"
import '../stylesheets/map.css';

export default class MapContainer extends React.Component {

    render(){

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
                                          <a href="/trips/${trip.id}"><h3>${trip.location}<h3></a>
                                          <div>
                                            <strong>${trip.date}</strong>
                                          </div>
                                          <div>
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

            })
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
