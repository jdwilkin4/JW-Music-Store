import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Navigation, Footer } from './components';
import LandingPages from './LandingPages'
import './custom-css.css';
function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <LandingPages />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
