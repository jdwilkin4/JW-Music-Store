import React from 'react';
import AddToCartBtn from './AddToCart';
import DetailsLink from './DetailsLink';

const DetailsAndCart = () => {
    return (
        <div>
            <div class="col text-center">
                <DetailsLink />
            </div>
            <div class="col text-center">
                <AddToCartBtn />
            </div>
        </div>
    )
}
export default DetailsAndCart