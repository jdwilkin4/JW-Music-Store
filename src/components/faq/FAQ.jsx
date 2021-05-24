import React from 'react';
import Faq from 'react-faq-component';
import data from './data';

const FAQ = () => {
    return (
        <div>
            <h1 className="text-center">F.A.Q.</h1>
            <Faq data={data} />
        </div>
    )
}
export default FAQ