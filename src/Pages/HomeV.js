import React from 'react'

const HomeV = (props) => {
    return (
        <section id="portfolio">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-sm-12">

                        {/* iso section */}
                        <div className="iso-section wow fadeInUp" data-wow-delay="2.6s">

                            <ul className="filter-wrapper clearfix">
                                <li><a href="#" data-filter="*" className="selected opc-main-bg">All</a></li>
                                <li><a href="#" className="opc-main-bg" data-filter=".graphic">Graphic</a></li>
                                <li><a href="#" className="opc-main-bg" data-filter=".template">Web template</a></li>
                                <li><a href="#" className="opc-main-bg" data-filter=".photoshop">Photoshop</a></li>
                                <li><a href="#" className="opc-main-bg" data-filter=".branding">Branding</a></li>
                            </ul>

                            {/* iso box section */}
                            <div className="iso-box-section wow fadeInUp" data-wow-delay="1s">
                                <div className="iso-box-wrapper col4-iso-box">

                                    <div className="iso-box photoshop branding col-md-4 col-sm-6">
                                        <div className="portfolio-thumb">
                                            <img src="images/portfolio-img1.jpg" className="img-responsive" alt="Portfolio" />
                                            <div className="portfolio-overlay">
                                                <div className="portfolio-item">
                                                    <a href="single-project.html"><i className="fa fa-link"></i></a>
                                                    <h2>Project One</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="iso-box graphic template col-md-4 col-sm-6">
                                        <div className="portfolio-thumb">
                                            <img src="images/portfolio-img2.jpg" className="img-responsive" alt="Portfolio" />
                                            <div className="portfolio-overlay">
                                                <div className="portfolio-item">
                                                    <a href="single-project.html"><i className="fa fa-link"></i></a>
                                                    <h2>Project Two</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="iso-box template graphic col-md-4 col-sm-6">
                                        <div className="portfolio-thumb">
                                            <img src="images/portfolio-img3.jpg" className="img-responsive" alt="Portfolio" />
                                            <div className="portfolio-overlay">
                                                <div className="portfolio-item">
                                                    <a href="single-project.html"><i className="fa fa-link"></i></a>
                                                    <h2>Project Three</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="iso-box graphic template col-md-4 col-sm-6">
                                        <div className="portfolio-thumb">
                                            <img src="images/portfolio-img4.jpg" className="img-responsive" alt="Portfolio" />
                                            <div className="portfolio-overlay">
                                                <div className="portfolio-item">
                                                    <a href="single-project.html"><i className="fa fa-link"></i></a>
                                                    <h2>Project Four</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="iso-box photoshop branding col-md-4 col-sm-6">
                                        <div className="portfolio-thumb">
                                            <img src="images/portfolio-img5.jpg" className="img-responsive" alt="Portfolio" />
                                            <div className="portfolio-overlay">
                                                <div className="portfolio-item">
                                                    <a href="single-project.html"><i className="fa fa-link"></i></a>
                                                    <h2>Project Five</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="iso-box graphic branding col-md-4 col-sm-6">
                                        <div className="portfolio-thumb">
                                            <img src="images/portfolio-img6.jpg" className="img-responsive" alt="Portfolio" />
                                            <div className="portfolio-overlay">
                                                <div className="portfolio-item">
                                                    <a href="single-project.html"><i className="fa fa-link"></i></a>
                                                    <h2>Project Six</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default HomeV; 