import React from 'react';

function Shop() {
    return (
        <div>
            <h1>Shop</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src="https://play-guitars.com/wp-content/uploads/2019/03/electric-guitar-for-beginners-01.jpg" alt="guitar" class="card-img-top" />
                        <div class="card-body">
                            <h2 class="card-title">Guitars</h2>
                            <p class="card-text">Browse</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="http://thevault.musicarts.com/wp-content/uploads/2020/10/Horns-of-Plenty-DE-47-scaled.jpg" alt="trumpet" class="card-img-top" />
                        <div class="card-body">
                            <h2 class="card-title">Brass</h2>
                            <p class="card-text">Browse</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://images.immediate.co.uk/production/volatile/sites/24/2020/05/flute_625-15bb1a0.jpg?quality=90&resize=768,574" alt="play flute" class="card-img-top" />
                        <div class="card-body">
                            <h2 class="card-title">Woodwinds</h2>
                            <p class="card-text">Browse</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/71kmnqSGVQL._AC_SL1500_.jpg" alt="drumset" class="card-img-top" />
                        <div class="card-body">
                            <h2 class="card-title">Percussion</h2>
                            <p class="card-text">Browse</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}
export default Shop