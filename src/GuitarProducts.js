import React from 'react';
import { Route } from 'react-router-dom';
import { AngelicoGuitar } from './components/component-exports';

const GuitarProducts = () => {
    return (
        <div>
            <Route path="/angelico" exact component={() => <AngelicoGuitar />} />
        </div>
    )
}
export default GuitarProducts;