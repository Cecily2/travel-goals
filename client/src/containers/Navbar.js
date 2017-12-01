import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';


class Navbar extends Component {

    render(){
        const welcomeMessage = () => {
            if(this.props.loggedIn){
                return (
                    <span>
                        <span className="user-welcome">Welcome, {this.props.userName}! &nbsp; | </span>
                        <span className="nav-links"><Link to="/trips">Trips</Link> | <Link to="/map">Map</Link> | <Link to="/logout">Logout</Link></span>
                    </span>
                )
            }
        }

        return (
            <div className="navbar">
                <div className="navbar-left">
                    Travel Goals
                </div>
                <div className="navbar-right">
                {welcomeMessage()}
                </div>
            </div>
        )

    }
}

function mapStateToProps(state, ownProps) {
    return {
        loggedIn: state.user.session,
        userName: state.user.name
    }
}

export default connect(mapStateToProps, null)(Navbar)



// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import '../stylesheets/navbar.css';

// class Navbar extends React.Component {

//         console.log("NAVBAR PROPS:")
//         console.log(props)

//         const displayIfLoggedIn = () => {
//             if(props.loggedIn){
//                 return (
//                     <span>
//                         <span className="user-welcome">Welcome, {props.userName}! &nbsp; | </span>
//                         <span className="nav-links"><Link to="/trips">Trips</Link> | <Link to="/map">Map</Link> | <Link to="/logout">Logout</Link></span>
//                     </span>
//                 )
//             }
//         }

//         return (
//             <div className="navbar">
//                 <div className="navbar-left">
//                     Travel Goals
//                 </div>
//                 <div className="navbar-right">
//                     {displayIfLoggedIn()}
//                 </div>
//             </div>
//         )

//     }

// export default Navbar