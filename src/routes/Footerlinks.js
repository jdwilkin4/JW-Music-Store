import React from 'react';
import { Route } from 'react-router-dom';
import FAQ from '../components/faq/FAQ';

const FooterLinks = () => {
    return (
        <div>
            <Route path="/faq" exact component={FAQ} />
        </div>
    )
}
export default FooterLinks