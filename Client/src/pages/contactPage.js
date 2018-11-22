import React, { Component } from 'react';
import logo from '../photos/templogo.png'
import BizMap from '../components/map'

class ContactPage extends Component {


    render() {
        return (
            <div className="about-page">
            <div className="header-bar">
                <h1 className="headers titles page-bar">About</h1>
            </div >
            <div className="info-row">
                <div className="two-column titles">
                    <div>

                        <div className="info-column">
                            <BizMap/>
                        </div>
                    </div>
                    <div>
                        <h1>D.R.E. Design & Build</h1>
                        <div className="info-column">
                            <p className = "paragraph-info">
                                Serving Long Beach, South Bay, Orange County, and the surrounding areas
                                <br/><br/>
                                <a href="tel:+1-562-506-5315">562.506.5315</a>
                                <br/><br/>
                                <a href="mailto:Dominick.Espinoza17@gmail.com@gmail.com?Subject=Quote%20Request" target="_top">Dominick.Espinoza17@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }

}



export default ContactPage;