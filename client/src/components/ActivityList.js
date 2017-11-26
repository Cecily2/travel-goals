import React from 'react';
import Activity from './Activity'


const ActivityList = (props) => {
    if(!!props.activities && props.activities.length !== 0) {
        return (
            <div>
                <h3>Activities</h3>
                {props.activities.map(activity => <Activity activity={activity} />)}
            </div>
        )
    } else {
        return (
            <div>No activities</div>
        )
    }
}

export default ActivityList