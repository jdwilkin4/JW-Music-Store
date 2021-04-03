import React from 'react';
import { Route } from 'react-router-dom';
import AngelicoGuitar from '../components/guitar-products/DAngelicoGuitarPage';

const GuitarProducts = () => <Route path="/angelico" exact component={() => <AngelicoGuitar />} />


export default GuitarProducts;