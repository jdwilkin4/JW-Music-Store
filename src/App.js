import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Navigation, Footer, DrumProducts, AmpProducts } from './components/component-exports';
import { LandingPages, GuitarProducts, BassProducts } from './components/component-exports';
import { KeyboardProducts, LiveSoundProducts, RecordingProducts, AccessoriesProducts } from './components/component-exports';
import { DJProducts, BandProducts, ClassroomProducts } from './components/component-exports'
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
        <Switch>
          <BassProducts />
        </Switch>
        <Switch>
          <AmpProducts />
        </Switch>
        <Switch>
          <DrumProducts />
        </Switch>
        <Switch>
          <KeyboardProducts />
        </Switch>
        <Switch>
          <LiveSoundProducts />
        </Switch>
        <Switch>
          <RecordingProducts />
        </Switch>
        <Switch>
          <AccessoriesProducts />
        </Switch>
        <Switch>
          <DJProducts />
        </Switch>
        <Switch>
          <BandProducts />
        </Switch>
        <Switch>
          <ClassroomProducts />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
