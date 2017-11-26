import React from 'react';

const Activity = (props) => {
    return (
            <div className="activity">
                <strong>{props.activity.name}</strong>
                <a href={props.activity.link}>Link</a>
                <div>{props.activity.description}</div>
            </div>
    )
}

export default Activity