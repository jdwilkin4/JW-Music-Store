import React from 'react';
import Faq from 'react-faq-component';
import data from './data';

const FAQ = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">F.A.Q.</h1>
            <div className="faq">
                <Faq
                    data={data}
                    styles={{
                        rowTitleTextSize: '1.5rem',
                        rowContentTextSize: '1.2rem',
                        rowContentPaddingTop: '10px',
                        rowContentPaddingBottom: '10px',
                        rowContentPaddingLeft: '50px',
                        rowContentPaddingRight: '150px',
                        arrowColor: "#043352",
                    }}
                />
            </div>

        </div>
    )
}
export default FAQ