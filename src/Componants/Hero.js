import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
    return (
        <div>
            <div className="ctp-banner-area jarallax">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <Carousel variant="dark" className="container1">
                            <Carousel.Item>
                                <img className="d-block w-30" src="./img/Slider/1.png" alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-30" src="./img/Slider/2.png" alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-30" src="./img/Slider/3.png" alt="Third slide" />
                            </Carousel.Item>

                            <div className="col-lg-4 col-md-12">
                                <div className="shadow-inner">
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
                                                <label>Services</label>
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
                        </Carousel>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Hero
