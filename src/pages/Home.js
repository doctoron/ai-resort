import React from 'react';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms';


const Home = () => {
    return (
        <>
            <StyledHero>
                <Banner
                    title="luxurious rooms"
                    subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms"
                        className="btn-primary">
                        our rooms</Link>
                </Banner>
            </StyledHero>
            <Services />
            <FeaturedRooms />
        </>
    );
}
export default Home;
