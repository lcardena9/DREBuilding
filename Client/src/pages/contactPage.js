import React, { Component } from 'react';
import BizMap from '../components/map'


class ContactPage extends Component {


    render() {
        return (
            <div className="about-page">
            <div className="header-bar">
                <h1 className="headers page-bar">Contact</h1>
            </div >
            <div className="info-row">
                <div className="two-column titles">
                    
                    
                        <div className="contact-info-column">
                            <BizMap/>
                        </div>
                    
                    
                    
                        <div className="contact-info-column">
                        <h1>D.R.E. Design & Build</h1>
                            <p className = "paragraph-info">
                                Serving Long Beach, South Bay, Orange County, and the surrounding areas
                                </p>
                                <p><a href="tel:+1-562-506-5315">562.506.5315</a></p>
                                <a href="mailto:Dominick.Espinoza17@gmail.com?Subject=Quote%20Request" target="_top">Dominick.Espinoza17@gmail.com</a>
                        </div>
                    

                </div>
            </div>
        </div>
        );
    }

}



export default ContactPage;