import React from 'react'


function Hero() {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner">
                    <div className="col-md-12">
                        <div class="carousel-item active">
                            <img src="./img/banner-bg.png" class="d-block w-100 h-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <div className="ctp-banner-content">
                                    <h2>BEST FOREX AND <span>REMITTANCE</span>PARTNER</h2>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./img/2.png" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <div className="ctp-banner-content">
                                    <h2>BEST FOREX AND <span>REMITTANCE</span>PARTNER</h2>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./img/3.png" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <div className="ctp-banner-content">
                                    <h2>BEST FOREX AND <span>REMITTANCE</span>PARTNER</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-inner3 col-lg-4 col-md-12">
                        <form className="ctp-banner-form">
                            <div className="form-header">
                                <h3>Get a Free Quote.</h3>
                            </div>
                            <div className="form-content">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" id="form5Example1" class="form-control" />
                                </div>
                            </div>
                            <div className="form-content">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" id="form5Example2" class="form-control" />
                                </div>
                            </div>
                            <div className="form-content">
                                <div className="form-group">
                                    <label>Mobile</label>
                                    <input type="Mobile" id="form5Example3" class="form-control" />
                                </div>
                            </div>
                            <div className="form-content">
                                <div className="form-group">
                                    <label>Our Services</label>
                                    <select class="form-select" aria-label="">
                                        <option selected></option>
                                        <option value="1">Bank Transfer</option>
                                        <option value="2">Send Money</option>
                                        <option value="3">Interest Money</option>
                                        <option value="4">Invest Money</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-content">
                                <div className="form-group">
                                    <label>Message</label>
                                    <input type="Message" id="form5Example3" class="form-control" />
                                </div>
                            </div>
                            <div class="form-check d-flex justify-content-center mb-4">
                                <input class="form-check-input me-2" type="checkbox" value="" id="form5Example3" checked />
                                <label class="form-check-label" for="form5Example3">
                                    I have read and agree to the terms
                                </label>
                            </div>
                            <button type="submit" className="button">Send Now</button>
                        </form>
                    </div>

                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Hero
