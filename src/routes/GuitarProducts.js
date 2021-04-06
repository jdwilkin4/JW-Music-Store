import React from 'react';
import { Route } from 'react-router-dom';
import { AngelicoGuitar, FenderFA135CEPage } from '../components/component-exports';

const GuitarProducts = () => {
    return (
        <div>
            <Route path="/angelico" exact component={() => <AngelicoGuitar />} />
            <Route path="/fender135" exact component={() => <FenderFA135CEPage />} />
        </div>
    )
}

export default GuitarProducts;