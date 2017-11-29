import React from 'react';
import { Link } from 'react-router-dom';

const Trip = (props) => {

    const activityCount = () => {
        if(typeof props.trip.activities !== "undefined"){
            const activityCount = props.trip.activities.length
            const activityWord = activityCount === 1 ? "activity" : "activities"
            if(activityCount > 0){
                return <div className="activity-count">{activityCount} {activityWord}</div>
            }
        }
    }

    const style = { backgroundImage: `url(${props.trip.image})` }

    return (
        <Link key={props.trip.id} to={`/trips/${props.trip.id}`}>
        <div className="trip-item">
            <div className="trip-info">
                <h3>{props.trip.location}</h3>
                <div className="trip-date">{props.trip.date}</div>
                {activityCount()}
            </div>

            <div className="trip-item-inner" style={style}>

            </div>
        </div>
        </Link>
    )
}

export default Trip