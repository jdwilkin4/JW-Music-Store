import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Navigation, Footer } from './components/component-exports';
import LandingPages from './routes/LandingPages';
import GuitarProducts from './routes/GuitarProducts';
import './custom-css.css';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />

        <Navigation />
        <Switch>
          <LandingPages />
        </Switch>
        <Switch>
          <GuitarProducts />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
