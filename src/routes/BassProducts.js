import React from 'react';
import { Route } from 'react-router-dom';
import { CremonaSb3BassPage } from '../components/component-exports';


const BassProducts = () => {
    return (
        <div>
            <Route path="/cremonasb3bass" exact component={CremonaSb3BassPage} />
        </div>
    )

}
export default BassProducts