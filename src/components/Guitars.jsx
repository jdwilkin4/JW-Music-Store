import React from 'react';

const Guitars = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Guitars</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <h2 className="card-header text-center">$499.00</h2>
                        <div className="card-body">
                            <img src="https://www.dropbox.com/s/lzmu0huullv1why/Guild-Acoustic-Electric.jpg?raw=1" alt="guitar" className="img-thumbnail" />
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
                            <img src="https://www.dropbox.com/s/thcpry52hi81q88/G-L-Limited-Edition-Tribute.jpg?raw=1" alt="guitar" className="img-thumbnail" />
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
                            <img src="https://www.dropbox.com/s/l0ols5hsgr2rtge/Rogue-RD80-Dreadnought.jpg?raw=1" alt="guitar" className="img-thumbnail" />
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
                            <img src="https://www.dropbox.com/s/5hfpozyv0kbwhrc/G-L-Tribute-Legacy-Electric.jpg?raw=1" alt="guitar" className="img-thumbnail" />
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