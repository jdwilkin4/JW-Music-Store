import React from 'react';
import { Route } from "react-router-dom";
import { Guitars, Basses, Amps, Drums, Keyboards, LiveSound, Recording } from "../components/component-exports";
import { Home, Accessories, DJ, Band, Classroom } from '../components/component-exports';

const LandingPages = () => {
    return (
        <div>
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
            <Route path="/band" exact component={() => <Band />} />
            <Route path="/classroom" exact component={() => <Classroom />} />
        </div>
    )
}
export default LandingPages