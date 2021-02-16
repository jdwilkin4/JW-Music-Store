import React from 'react';

function Home() {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_AT_guitar_acoustics.png"
                            alt="Placeholder"
                        />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Home</h1>
                        <p>
                            Welcome to JW Music Store.
                            You will find an extensive collection of instruments, sheet music, audio gear and more!
                            You can also find a lesson teacher to help you get started in jamming out.
                            If you need an instrument repaired, we have you covered!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home