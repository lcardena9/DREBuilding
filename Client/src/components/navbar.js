import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../photos/dre.png'


class Navbar extends Component {
    render() {
        return (

            <div className= "navbar">
                    <img className= "header-logo" src ={logo} />
                    <Link to="/"><a className="home-btn btn btn-link">Home</a></Link>
                    <Link to="/about"><a className="btn btn-link">About</a></Link>
                    <Link to="/services"><a className="btn btn-link">Services</a></Link>
                    <Link to="/contact"><a className="more-button">Contact</a></Link>
            </div>
        );
    }
}
export default Navbar;  