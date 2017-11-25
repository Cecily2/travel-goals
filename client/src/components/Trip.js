import React from 'react';

const Trip = (props) => {
    return (
        <div className="trip-item">
            <h3>{props.trip.location}</h3>
            <div className="trip-date">{props.trip.date}</div>
            <div>{props.trip.notes}</div>
        </div>
    )
}

export default Trip