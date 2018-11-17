import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (

            <div className= "navbar">
                <div id="button-links-container">
                    <Link to="/"><a className="btn btn-link">Home</a></Link>
                    <Link to="/about"><a className="btn btn-link">About</a></Link>
                    <Link to="/services"><a className="btn btn-link">Services</a></Link>
                    <Link to="/contact"><a className="more-button">Contact</a></Link>
                   
                </div>
            </div>
        );
    }
}
export default Navbar;  