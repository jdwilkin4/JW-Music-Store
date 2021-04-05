import React from 'react';
import { Route } from 'react-router-dom';
import AngelicoGuitar from '../components/guitar-product-pages/DAngelicoGuitarPage';

const GuitarProducts = () => {
    return (
        <div>
            <Route path="/angelico" exact component={() => <AngelicoGuitar />} />
        </div>
    )
}

export default GuitarProducts;