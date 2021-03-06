import React, { Component } from 'react';
import { Textfit } from 'react-textfit';
import owner from '../photos/owner.jpg'


class AboutPage extends Component {


    render() {
        return (
            <div className="about-page">
                <div className="header-bar">
                    <h1 className="headers page-bar">About</h1>
                </div >
                <div className="info-row">
                    <div className="two-column titles">
                            <div className="about-info-column about-info-column-1">
                                <img className="about-photo" src={owner} />
                            </div>
                            <div className="about-info-column about-info-column-2">
                                <h1>D.R.E. Design & Build</h1>
                                <p className = "paragraph-info">
                                    D.R.E. Design & Build is your go-to, licensed contractor, for any of your home remodeling needs.  Mr. Espinoza brings a customer centric philosphy,
                                    putting quality, effieciency, and satisfaction above all else. Whether interior or exterior, D.R.E. Design & Build can help bring that fresh, custom look
                                    to your home at a price designed to fit your budget. Give us a call today and let's talk about how D.R.E. can build your dream.
                                </p>
                                <a className="more-button" href="tel:+1-562-506-5315">Call Us</a>
                            </div>
                    </div>
                </div>
            </div>


        );
    }

}



export default AboutPage;