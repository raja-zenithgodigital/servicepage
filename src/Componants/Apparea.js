import React from 'react'

function Apparea() {
    return (
        <div>
            <div className="ctp-app-area">
                <div className="shadow-inner">
                    <div className="container-fluid">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="ctp-app-content">
                                    <span className="sub">Download App</span>
                                    <h3>Let’s get your free copy from apple and play store</h3>
                                    <p>Instant free download from store cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose.</p>
                                    <div className="btn-box">
                                        <a href="#" className="app-store-btn">
                                            <i className="fa fa-apple"></i>
                                            Download on
                                            <span>App Store</span>
                                        </a>

                                        <a href="#" className="play-store-btn">
                                            <i className="fa fa-google-play"></i>
                                            Download on
                                            <span>Google play</span>
                                        </a>
                                    </div>
                                    <div className="info">
                                        <span>Over 10 million downloads worldwide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="ctp-app-image">
                                    <img className="img" src="/img/app.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apparea
