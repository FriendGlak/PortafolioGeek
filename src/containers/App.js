import React from 'react';
import GlobalStyle from '../globalStyles.js';
import Navbar from '../components/Navbar.jsx';
import Home from '../pages/Home/Home';
import Proyect from '../pages/Proyects/Proyect'
import Testimonials from '../pages/Testimonials/Testimonials'
import ScrollToTop from '../components/ScrollToTop'
import "../images/image1.png";
import "../images/testimonial/testimonial1.png"
import "../images/testimonial/testimonial2.png"
import "../images/testimonial/testimonial3.png"
import "../images/testimonial/testimonial4.png"
import "../images/testimonial/testimonial5.png"
import "../images/testimonial/testimonial6.png"
import { BrowserRouter as Router, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import Footer from '../components/Footer.jsx';


const App = () => {
  return (
    <HashRouter basename="/">
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/inicio" component={Home} />
          </Route>
          <Route path='/inicio' exact component={Home} />
          <Route path='/proyects' component={Proyect} />
          <Route path='/testimonios' component={Testimonials} />
        </Switch>
        <Footer />
      </Router >
    </HashRouter>
  );
};

export default App;
