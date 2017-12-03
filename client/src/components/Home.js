import React from 'react';
import { Link } from 'react-router-dom';
import RedirectContainer from '../containers/RedirectContainer'

const Home = (props) => {

    return (
            <RedirectContainer>
                <h2>Where would you like to go?</h2>
                <p>Travel Goals is a convenient web app for tracking where we want
                to travel and what we'd like to do there. To get started, login
                or sign up for a new account.</p>
                <Link to='/login' className='home-button'>Login</Link>
                <Link to='/signup' className='home-button'>Sign Up</Link>
            </RedirectContainer>
    )
}

export default Home