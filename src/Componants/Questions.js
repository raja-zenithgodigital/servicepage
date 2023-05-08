import React from 'react'

function Questions() {
    return (
        <div>
            <div className="ctp-faq-area pb-100">
                <div className="shadow-inner">
                    <div className="container">
                        <div className="section-title ctp-title">
                            <h2>Frequently Asked Questions</h2>
                        </div>

                        <div className="ctp-faq-accordion">
                            <div className="accordion" id="FaqAccordion">
                                <div className="accordion-item">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How long does it take to process a money transfer through Zenith Forex Online?
                                        <i class="fa fa-arrow-circle-o-down " style={{ float: "right" }}></i>
                                    </button>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#FaqAccordion">
                                        <div className="accordion-body">
                                            <p>The processing time for money transfers depends on the recipient's location, the amount being transferred, and the method of transfer. Typically, transfers can take anywhere from a few minutes to a few business days. However, Zenith Forex Online offers expedited transfer options for urgent transactions.</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Are there any limits on the amount that can be transferred through Zenith Forex Online?
                                        <i class="fa fa-arrow-circle-o-down" style={{ float: "right" }}></i>
                                    </button>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#FaqAccordion">
                                        <div className="accordion-body">
                                            <p>Yes, there are limits on the amount that can be transferred through Zenith Forex Online. These limits vary depending on the recipient's location, the currency being transferred, and the method of transfer. However, Zenith Forex Online offers higher transfer limits for verified customers and can customize transfer options for larger transactions.</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What currencies can I transfer through Zenith Forex Online?
                                        <i class="fa fa-arrow-circle-o-down" style={{ float: "right" }}></i>
                                    </button>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#FaqAccordion">
                                        <div className="accordion-body">
                                            <p>Zenith Forex Online supports a wide range of currencies for money transfers. You can transfer currencies such as US Dollars, Euros, British Pounds, Japanese Yen, Australian Dollars, and many others.</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How do I track the status of my money transfer?
                                        <i class="fa fa-arrow-circle-o-down " style={{ float: "right" }}></i>
                                    </button>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#FaqAccordion">
                                        <div className="accordion-body">
                                            <p>Zenith Forex Online provides customers with a unique transaction ID that can be used to track the status of their money transfer. Customers can log into their Zenith Forex Online account to view the status of their transfer, including when it was sent, when it was received, and when it was completed. Additionally, Zenith Forex Online sends email or text notifications to customers throughout the transfer process.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        How does Luvion protect your money?
                                        <i class="fa fa-arrow-circle-o-down" style={{ float: "right" }}></i>
                                    </button>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#FaqAccordion">
                                        <div className="accordion-body">
                                            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions
