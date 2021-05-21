import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';

const HSSHelpbotCard = () => {
    return (

        <div className="card-recommendation">
            <Link to="/HSSguitar"><img src={process.env.PUBLIC_URL + '/Guitars-images/Fender Player Stratocaster HSS Plus Top Maple Fingerboard Limited-Edition Electric Guitar Blue Burst.jpg'} alt="guitar" className="img-thumbnail" /></Link>
            <div>
                <h2 className="text-center">$809.99</h2>
                <p className="card-title">Fender Stratocaster HSS</p>
                <FiveStars />
                <div class="col text-center">
                    <Link to="/HSSguitar" className="btn product-description btn-link">Product info</Link>
                </div>
            </div>
        </div>

    )
}
export default withRouter(HSSHelpbotCard)
