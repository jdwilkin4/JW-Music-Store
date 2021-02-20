import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Guitars } from "./components";
import './custom-css.css';
function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/guitars" exact component={() => <Guitars />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
