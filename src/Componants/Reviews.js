import React from 'react'
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Reviews() {
    return (
        <>
            <div className="shadow-inner">
                <div classNameName="section-title ">
                    <h2 className="text-center">Reviews and Rating</h2>
                </div>
                <Container>
                    <Carousel autoPlay autoPlaySpeed={2000} showDots={true} arrows={false} infinite={true} responsive={responsive}>

                        <div className="testimonial-item">
                            <h5> Neha Singh</h5>
                            <h6>digital &amp; marketing</h6>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>I recently started using Zenith Forex Money Transfer service to send money to my daughter who is studying abroad. The process is easy to navigate and their exchange rates are very competitive. I appreciate their low transfer fees. The customer support team is always available to answer my questions, I am very happy with their service and would highly recommend it to anyone in a similar need.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <ul className="list-unstyled d-flex mb-0">
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                                <h5 className="text-center1">4.9 Rating</h5>
                            </ul>
                        </div>

                        <div className="testimonial-item">
                            <h5> Nadeem Hasan</h5>
                            <h6>Ceo &amp; Founder</h6>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i> When my friend had a financial emergency while traveling abroad, I needed to send him money quickly. I decided to use Zenith Forex Money Transfer service and was pleased with the speed and security of the transaction. The peace of mind that came with the secure transaction made it worth it. Overall, I was happy with the service and would use it again in a similar situation.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <ul className="list-unstyled d-flex mb-0">
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                                <h5 className="text-center1">4.9 star</h5>
                            </ul>
                        </div>

                        <div className="testimonial-item">
                            <h5> Ayushi kumari</h5>
                            <h6>Ceo &amp; Founder</h6>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i> I needed to send a large sum of money for a business transaction. While their exchange rates were competitive, the transfer process was reliable and secure. Overall, it was a good experience, and I would consider exploring other services from Zenith Forex.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <ul className="list-unstyled d-flex mb-0">
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                                <h5 className="text-center1">4.9 star</h5>
                            </ul>
                        </div>

                        <div className="testimonial-item">
                            <h5> Sonu kumar</h5>
                            <h6>Ceo &amp; Founder</h6>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i> It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containin
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <ul className="list-unstyled d-flex mb-0">
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                                <h5 className="text-center1">4.9 star</h5>
                            </ul>
                        </div>

                        <div className="testimonial-item">
                            <h5>Apprajaya bhatacharya</h5>
                            <h6>Ceo &amp; Founder</h6>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i> It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containin
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <ul className="list-unstyled d-flex mb-0">
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                                <h5 className="text-center1">4.9 star</h5>
                            </ul>
                        </div>
                        <div className="testimonial-item">
                            <h5> Neha Singh</h5>
                            <h6>digital &amp; marketing</h6>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>I recently started using Zenith Forex Money Transfer service to send money to my daughter who is studying abroad. The process is easy to navigate and their exchange rates are very competitive. I appreciate their low transfer fees. The customer support team is always available to answer my questions, I am very happy with their service and would highly recommend it to anyone in a similar need.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <ul className="list-unstyled d-flex mb-0">
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                                <h5 className="text-center1">4.9 Rating</h5>
                            </ul>
                        </div>

                        <div className="testimonial-item">
                            <h5> Nadeem Hasan</h5>
                            <h6>Ceo &amp; Founder</h6>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i> When my friend had a financial emergency while traveling abroad, I needed to send him money quickly. I decided to use Zenith Forex Money Transfer service and was pleased with the speed and security of the transaction. The peace of mind that came with the secure transaction made it worth it. Overall, I was happy with the service and would use it again in a similar situation.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <ul className="list-unstyled d-flex mb-0">
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                                <h5 className="text-center1">4.9 star</h5>
                            </ul>
                        </div>

                        <div className="testimonial-item">
                            <h5> Ayushi kumari</h5>
                            <h6>Ceo &amp; Founder</h6>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i> I needed to send a large sum of money for a business transaction. While their exchange rates were competitive, the transfer process was reliable and secure. Overall, it was a good experience, and I would consider exploring other services from Zenith Forex.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <ul className="list-unstyled d-flex mb-0">
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                                <h5 className="text-center1">4.9 star</h5>
                            </ul>
                        </div>

                        <div className="testimonial-item">
                            <h5> Sonu kumar</h5>
                            <h6>Ceo &amp; Founder</h6>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i> It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containin
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <ul className="list-unstyled d-flex mb-0">
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                                <h5 className="text-center1">4.9 star</h5>
                            </ul>
                        </div>

                        <div className="testimonial-item">
                            <h5>Apprajaya bhatacharya</h5>
                            <h6>Ceo &amp; Founder</h6>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i> It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containin
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <ul className="list-unstyled d-flex mb-0">
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                                <h5 className="text-center1 bg-light">4.9 star</h5>
                            </ul>
                        </div>
                    </Carousel>
                </Container >
            </div>
        </>
    )
}


export default Reviews
