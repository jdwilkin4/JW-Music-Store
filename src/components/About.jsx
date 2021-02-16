import React from "react";

function About() {
    return (
        <div className="about">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">About</h1>
                        <p>
                            JW Music Store has been a staple in the community for 40 years.
                            What started as a simple store in Irvine, Ca has now grown to a fleet of stores all across Southern California.
                            Looking for new gear? We've got you covered.
                            Looking to learn an instrument? We've got you covered.
                            Need help with financing new equipment? We've got you covered.
                        </p>
                    </div>
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="https://www.whatsonstage.com/dyn/photos/whatsonstage/v1finw1200x0y0w1200h607/a-singer-with-a-microphone-in-their-left-hand-143496.jpg"
                            alt="placeholder singer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;