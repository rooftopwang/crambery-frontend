import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavC from './Components/NavC.js'
import HomeC from './Pages/HomeC.js'
import CarouselC from './Components/CarouselC.js'
import FooterC from './Components/FooterC.js'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="preloader">
          <div className="sk-spinner sk-spinner-pulse"></div>
        </div>
        <NavC />
        <CarouselC />
        <BrowserRouter>
          <Route path="/" exact component={HomeC} />
        </BrowserRouter>
        <FooterC />
      </Fragment>
    );
  }
}

export default App;
