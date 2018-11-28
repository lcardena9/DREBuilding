import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../photos/dreBlueLogo.png'


class Navbar extends Component {
    render() {
        return (

            <div className= "navbar">
                <div className="header-logo-box ">
                    <img className= "header-logo" src ={logo} />
                </div>
                    <div className= "nav-box">
                        <Link to="/"><a className="home-btn btn btn-link active">Home</a></Link>
                        <Link to="/about"><a className="btn btn-link active">About</a></Link>
                        <Link to="/services"><a className="btn btn-link active">Services</a></Link>
                        <Link to="/contact"><a className="more-button active">Contact</a></Link>
                    </div>
            </div>
        );
    }
}
export default Navbar;  