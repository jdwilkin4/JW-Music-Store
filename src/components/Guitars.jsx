import React from 'react';

function Guitars() {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Guitars</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <h2 className="card-header text-center">$499.00</h2>
                        <div className="card-body">
                            <img src="https://media.guitarcenter.com/is/image/MMGS7//OM-240CE-Orchestra-Acoustic-Electric-Guitar-Charcoal-Burst/L48602000001000-00-1600x1600.jpg" alt="guitar" className="img-thumbnail" />
                            <p className="card-title">Guild OM-240CE Acoustic-Electric</p>
                            <div class="col text-center">
                                <button className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <h2 className="card-header text-center">$499.00</h2>
                        <div className="card-body">
                            <img src="https://media.sweetwater.com/api/i/q-82__ha-62307cf2a2f7e1b8__hmac-f2d3010c871042f378acbcfdaa107c05d93321a2/images/items/750/LegyTBN-large.jpg" alt="guitar" className="img-thumbnail" />
                            <p className="card-title">G&amp;L Limited Edition Tribute</p>
                            <div class="col text-center">
                                <button className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <h2 className="card-header text-center">$99.00</h2>
                        <div className="card-body">
                            <img src="https://media.guitarcenter.com/is/image/MMGS7//RD80-Dreadnought-Acoustic-Guitar-Sunburst/H80040000001000-00-1600x1600.jpg" alt="guitar" className="img-thumbnail" />
                            <p className="card-title">Rogue RD80 Dreadnought</p>
                            <div class="col text-center">
                                <button className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <h2 className="card-header text-center">$499.00</h2>
                        <div className="card-body">
                            <img src="https://media.guitarcenter.com/is/image/MMGS7//Tribute-Legacy-Electric-Guitar-Irish-Ale/L10442000001000-00-1600x1600.jpg" alt="guitar" className="img-thumbnail" />
                            <p className="card-title">G&amp;L Tribute Legacy Electric</p>
                            <div class="col text-center">
                                <button className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )

}
export default Guitars