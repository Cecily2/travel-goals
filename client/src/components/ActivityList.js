import React from 'react';
import Activity from './Activity'


const ActivityList = (props) => {
    if(!!props.activities && props.activities.length !== 0) {
        return (
            <div>
                <h3>Activities</h3>
                {props.activities.map((activity, key) => <Activity key={key} activity={activity} deleteActivity={props.deleteActivity} />)}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default ActivityList