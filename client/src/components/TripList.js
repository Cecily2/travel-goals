import React from 'react'

const TripList = (props) => {

    const heading = props.children === 0 ? "You don't have any trips yet" : "Your Trips"

    return (
        <div className="trips-body">
        <h2>{heading}</h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default TripList