import React, { Component } from 'react';
import bedroom from '../photos/servicesPhotos/bedroom.jpg'
import cabinents from '../photos/servicesPhotos/cabinents.jpg'
import hardwood from '../photos/servicesPhotos/hardwood.png'
import exterior from '../photos/servicesPhotos/exterior.jpg'
import fence from '../photos/servicesPhotos/woodenFence.png'
import shower from '../photos/servicesPhotos/shower.jpg'


class ServicesPage extends Component {

    render() {
        return (
            <div className="about-page">
                <div className="header-bar">
                    <h1 className="headers page-bar" m>Services</h1>
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
                            <img className="services-column-icon" src={hardwood} />
                            <div className="overlay">
                                <div class="overlay-text">Hardwood</div>
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
                                <img className="services-column-icon" src={fence} />
                                <div className="overlay">
                                    <div class="overlay-text">Fencing</div>
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