import React from 'react'

const TripList = (props) => {

    const heading = () => {
        if(props.children.length === 0) {
            return( <h3>You don't have any trips yet</h3> )
        } else {
            return ( <h2>Your Trips</h2> )
        }
    }

    return (
        <div className="trips-body">
        {heading()}
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default TripList