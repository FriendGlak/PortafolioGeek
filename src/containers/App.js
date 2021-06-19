import React from 'react';
import GlobalStyle from '../globalStyles.js';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import Home from '../pages/Home/Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Header>
    </Router>
  );
};

export default App;
