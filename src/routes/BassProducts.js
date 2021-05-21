import React from 'react';
import { Route } from 'react-router-dom';
import { CremonaSb3BassPage, FenderTonyFranklinBassPage } from '../components/component-exports';


const BassProducts = () => {
    return (
        <div>
            <Route path="/cremonasb3bass" exact component={CremonaSb3BassPage} />
            <Route path="/fenderfretlessbass" exact component={FenderTonyFranklinBassPage} />
        </div>
    )

}
export default BassProducts