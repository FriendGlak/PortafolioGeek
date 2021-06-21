import React from 'react';
import GlobalStyle from '../globalStyles.js';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import Home from '../pages/Home/Home.js';
import Testimonials from '../pages/Testimonials/Testimonials.js';
import "../images/image1.png";
import "../images/testimonial/testimonial1.png"
import "../images/testimonial/testimonial2.png"
import "../images/testimonial/testimonial3.png"
import "../images/testimonial/testimonial4.png"
import "../images/testimonial/testimonial5.png"
import "../images/testimonial/testimonial6.png"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer.jsx';


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header>
        <Navbar />
      </Header>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Testimonials />

      <Footer />
    </Router>
  );
};

export default App;
