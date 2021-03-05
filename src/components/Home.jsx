import React from 'react';

function Home() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={process.env.PUBLIC_URL + '/home-guitars.jpeg'} className="d-block img-fluid home-img" alt="Guitars" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/home-recording-img.jpeg'} className="d-block  img-fluid home-img" alt="Recording gear" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/home-keyboard.jpeg'} className="d-block  img-fluid home-img" alt="Piano keyboard" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/home-strings.jpeg'} className="d-block  img-fluid home-img" alt="Strings" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/home-dj-gear.jpeg'} className="d-block  img-fluid home-img" alt="Dj gear" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/home-drumset.jpeg'} className="d-block  img-fluid home-img" alt="Drumset" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
export default Home