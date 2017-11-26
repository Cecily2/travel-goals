import React from 'react';

const Activity = (props) => {
    return (
            <div className="activity">
                <h4>{props.activity.name}</h4>
                <div className="description">{props.activity.description}</div>
                <div className="activity-link"><i className="fa fa-external-link" aria-hidden="true"></i> <a href={props.activity.link}>{props.activity.link}</a></div>
            </div>
    )
}

export default Activity