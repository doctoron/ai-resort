import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';


class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "lQui ut ut laborum qui ipsum veniam velit exercitation ex tempor non."
            },
            { 
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "lQui ut ut laborum qui ipsum veniam velit exercitation ex tempor non."
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "lQui ut ut laborum qui ipsum veniam velit exercitation ex tempor non."
            },
            {
                icon: <FaBeer />,
                title: "Bottomless Beer",
                info: "lQui ut ut laborum qui ipsum veniam velit exercitation ex tempor non."
            }
        ]
    };
    render () {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service" >
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    };
}
export default Services;