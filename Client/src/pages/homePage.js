import React, { Component } from 'react';
import bedroom from '../photos/bedroom.jpeg';
import livingroom from '../photos/livingroom.jpeg';
import patio from '../photos/patio.jpeg';
import logo from '../photos/drelogo.png';
import { Link } from 'react-router-dom';

class HomePage extends Component {


    render() {
        return (
            <div className="home-page">
                <div className="home-page-header">
                    <img className="dre-logo" src={logo} />
                </div >
                <div className="info-row">
                    <div>
                        <div className="divider">
                            <h1 className="headers titles">A Contractor You Can Trust</h1>
                           
                        </div>

                    </div>
                    <div className="three-column titles">
                        <div>
                            <h1>About</h1>
                            <div className="info-column">
                            <img className="column-icon" src={bedroom}/>
                            <Link to="/about"><a className="more-button">About</a></Link>
                            </div>
                        </div>
                        <div>
                            <h1>Services</h1>
                            <div className="info-column">
                            <img className="column-icon" src={livingroom}/>
                            <Link to="/services"><a className="more-button">Services</a></Link>
                            </div>
                        </div>
                        <div>    
                            <h1>Contact</h1>
                            <div className="info-column">
                            <img className="column-icon" src={patio}/>
                            <Link to="/contact"><a className="more-button">Contact</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}



export default HomePage;