import React from 'react';
const Activity = (props) => {

    const handleDeleteActivity = () => {
        props.deleteActivity(props.activity.id, props.activity.trip_id)
    }

    return (
            <div className="activity">
                <div className="activity-content">
                    <h4>{props.activity.name} <span className="delete-activity" onClick={handleDeleteActivity}>Delete</span></h4>
                    <div className="description">{props.activity.description}</div>
                    <div className="activity-link"><i className="fa fa-external-link" aria-hidden="true"></i> <a href={props.activity.link}>{props.activity.link}</a></div>
                </div>
            </div>
    )
}

export default Activity