import React from "react";
import car1 from '../pages/car1.png';
import car2 from '../pages/car2.png';
import car3 from '../pages/about1.jpg';
import car4 from '../pages/car4.jpg';
const Services = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">OUR SERVICES</h3>
                            <h1 className="display-6 text-center mb=0">Our <b>Awesome </b>Services</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col md-4">
                            <div class="card text-bg-dark mb-3">
                            <img src={car1} className="card-img-top" alt="service 1" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">RENT CAR</h5>
                                    <p class="card-text lead">Rent any car of your choice including the model and colour.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col md-4">
                            <div class="card text-bg-dark mb-3">
                            <img src={car2} className="card-img-top" alt="service 2" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">HOST A CAR</h5>
                                    <p class="card-text lead">Host your car on rent and earn money </p>

                                </div>
                            </div>
                        </div>
                        <div className="col md-4">
                            <div class="card text-bg-dark mb-3">
                            <img src={car3} className="card-img-top" alt="service 3" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">SELF-DRIVING</h5>
                                    <p class="card-text lead">You can drive the car by yourself.</p>

                                </div>
                            </div>

                        </div>
                        

                    </div>
                    <div className="row">
                        <div className="col md-4">
                            <div class="card text-bg-dark mb-3">
                            <img src={car3} className="card-img-top" alt="service 4" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">LOW COST</h5>
                                    <p class="card-text lead">Travel more kms at low cost per km.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col md-4">
                            <div class="card text-bg-dark mb-3">
                                <img src={car1} class="card-img-top" alt="service5" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">FLEXIBLE TIME for rent</h5>
                                    <p class="card-text lead">Rent car at your ease for flexible amount of time from 1 hr to upto 2 days.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col md-4">
                            <div class="card text-bg-dark mb-3">
                                <img src={car2} class="card-img-top" alt="service6" />
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-3 fs-4 fw-bold">SAFETY ASSURANCE</h5>
                                    <p class="card-text lead">Security is provided to the car.</p>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Services;