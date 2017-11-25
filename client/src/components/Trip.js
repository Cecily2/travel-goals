import React from 'react';

const Trip = (props) => {
    return (
        <div className="trip-item">
        <div className="trip-image">
            <img src={props.trip.image} alt={props.trip.location} />
        </div>

            <div className="trip-info">
                <h3>{props.trip.location} <span className="trip-date">{props.trip.date}</span></h3>

                <div>{props.trip.notes}</div>
            </div>

        </div>
    )
}

export default Trip