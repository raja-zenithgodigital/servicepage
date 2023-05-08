import React from 'react'
import { Row, Col } from 'react-bootstrap';


function Personal() {
    return (

        <div>
            <div className="ctp-services-area pb-75">
                <div className="shadow-inner">
                    <div className="container">
                        <div className="section-title ctp-title">
                            <h2> Currency Transfers Services</h2>
                        </div>
                        <Row>

                            <div className="row justify-content-center">
                                <Col>
                                    <div className="shadow-inner2">
                                        <div className="ctp-services-card">
                                            <h3>
                                                <div className="icon">
                                                    <img src="/img/Personal/payment.jpg" alt="image" />
                                                </div>
                                                Send Money to Family & Friends
                                            </h3>
                                            <p>Send money to loved ones who are living abroad and support family members back home with our fast and secure way to send money to family & friends.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="shadow-inner2">
                                        <div className="ctp-services-card">
                                            <h3>
                                                <div className="icon">
                                                    <img src="/img/Personal/alert.png" alt="image" />
                                                </div>
                                                Pay College Fee Abroad
                                            </h3>
                                            <p>Pay college fees from anywhere in the world. Transfer money more quickly and securely, ensuring tuition fees and other expenses are paid on time.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="shadow-inner2">
                                        <div className="ctp-services-card">
                                            <h3>
                                                <div className="icon">
                                                    <img src="/img/Personal/marketing.png" alt="image" />
                                                </div>
                                                Send Money for Tour & Travel
                                            </h3>
                                            <p>Send money to your travel partners, ensuring that everyone has access to the funds they need while on the road.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="shadow-inner2">
                                        <div className="ctp-services-card">
                                            <h3>
                                                <div className="icon">
                                                    <img src="/img/Personal/contract.jpg" alt="image" />
                                                </div>
                                                Business Transactions
                                            </h3>
                                            <p>Make International Payments for various Business Purposes such as paying for goods and services, salaries, and investments in a more convenient and affordable way.</p>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Personal
