import React from 'react';
import { Route } from 'react-router-dom';
import { FAQ } from '../components/component-exports';

const FooterLinks = () => {
    return (
        <div>
            <Route path="/faq" exact component={FAQ} />
        </div>
    )
}
export default FooterLinks