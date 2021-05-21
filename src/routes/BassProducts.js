import React from 'react';
import { Route } from 'react-router-dom';
import { CremonaSb3BassPage, FenderTonyFranklinBassPage, IbanezSRH505BassPage } from '../components/component-exports';


const BassProducts = () => {
    return (
        <div>
            <Route path="/cremonasb3bass" exact component={CremonaSb3BassPage} />
            <Route path="/fenderfretlessbass" exact component={FenderTonyFranklinBassPage} />
            <Route path="/ibanezbass" exact component={IbanezSRH505BassPage} />
        </div>
    )

}
export default BassProducts