import React from 'react';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';


const Rooms = () => {
    return (
        <StyledHero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    return home</Link>
            </Banner>
        </StyledHero>
    );
};

export default Rooms;
