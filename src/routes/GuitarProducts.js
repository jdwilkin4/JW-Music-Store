import React from 'react';
import { Route } from 'react-router-dom';
import { AngelicoGuitar, FenderFA135CEPage, StratocasterHSSGuitarPage } from '../components/component-exports';

const GuitarProducts = () => {
    return (
        <div>
            <Route path="/angelico" exact component={() => <AngelicoGuitar />} />
            <Route path="/fender135" exact component={() => <FenderFA135CEPage />} />
            <Route path="/HSSguitar" exact component={() => <StratocasterHSSGuitarPage />} />
        </div>
    )
}

export default GuitarProducts;