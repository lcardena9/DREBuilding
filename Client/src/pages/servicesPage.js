import React, { Component } from 'react';
import bedroom from '../photos/servicesPhotos/bedroom.jpg'
import cabinents from '../photos/servicesPhotos/cabinents.jpg'
import trophyCase from '../photos/servicesPhotos/case.jpg'
import exterior from '../photos/servicesPhotos/exterior.jpg'
import plumbing from '../photos/servicesPhotos/plumbing.jpg'
import shower from '../photos/servicesPhotos/shower.jpg'


class ServicesPage extends Component {

    render() {
        return (
            <div className="about-page">
                <div className="header-bar">
                    <h1 className="headers titles page-bar">Services</h1>
                </div >

                <div className="info-row">
                    <div className="three-column titles">

                        <div className="services-column">
                            <img className="services-column-icon" src={bedroom} />
                            <div className="overlay">
                                <div class="overlay-text">Painting</div>
                            </div>
                        </div>

                        <div className="services-column">
                            <img className="services-column-icon" src={cabinents} />
                            <div className="overlay">
                                <div class="overlay-text">Cabinetry</div>
                            </div>
                        </div>

                        <div className="services-column">
                            <img className="services-column-icon" src={shower} />
                            <div className="overlay">
                                <div class="overlay-text">Bathroom Remodel</div>
                            </div>
                        </div>

                        <div className="services-column">
                            <img className="services-column-icon" src={trophyCase} />
                            <div className="overlay">
                                <div class="overlay-text">Brick Work</div>
                            </div>
                        </div>

                        <div>
                            <div className="services-column">
                                <img className="services-column-icon" src={exterior} />
                                <div className="overlay">
                                    <div class="overlay-text">Stucco</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="services-column">
                                <img className="services-column-icon" src={plumbing} />
                                <div className="overlay">
                                    <div class="overlay-text">Foundation</div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        );
    }

}
export default ServicesPage;