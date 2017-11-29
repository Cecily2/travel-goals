import React from 'react';
import { Link } from 'react-router-dom';

const Trip = (props) => {

    const activityCount = () => {
        const activityCount = props.trip.activities.length
        const activityWord = activityCount === 1 ? "activity" : "activities"
        if(activityCount > 0){
            return <div>{activityCount} {activityWord}</div>
        }
    }

    const style = { backgroundImage: `url(${props.trip.image})` }

    return (
        <div className="trip-item" style={style}>
            <div className="trip-info">
                <h3>{props.trip.location} <span className="trip-date">{props.trip.date}</span></h3>

                <div>{props.trip.notes}</div>
                {activityCount()}
                <div>
                    <Link key={props.trip.id} to={`/trips/${props.trip.id}`}>Show page</Link>
                </div>
            </div>

        </div>
    )
}

export default Trip