
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ServicesPage from './pages/servicesPage';
import ContactPage from './pages/contactPage'
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'


class App extends Component {

  render() {
    return (
      <div className="app-container">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" render={() => <HomePage/>} />
            <Route path="/about" render={() => <AboutPage />} />
            <Route path="/services" render={() => <ServicesPage />} />
            <Route path="/contact" render={() => <ContactPage />} />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}


export default App;

