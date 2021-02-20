import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Guitars, Basses, Amps, Drums, Keyboards, LiveSound, Recording, Accessories, DJ } from "./components";
import './custom-css.css';
function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/guitars" exact component={() => <Guitars />} />
          <Route path="/basses" exact component={() => <Basses />} />
          <Route path="/amps" exact component={() => <Amps />} />
          <Route path="/drums" exact component={() => <Drums />} />
          <Route path="/keyboards" exact component={() => <Keyboards />} />
          <Route path="/live" exact component={() => <LiveSound />} />
          <Route path="/recording" exact component={() => <Recording />} />
          <Route path="/accessories" exact component={() => <Accessories />} />
          <Route path="/DJ" exact component={() => <DJ />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
