import React from 'react';
import '../assets/css/Rent.css';
import { Link } from 'react-router-dom';

import ravet from '../assets/images/Ravet.avif';
import akurdi from '../assets/images/Akurdi.jpg';

const Rent = () => {
    return (
        <>
            {/* About Rent Section */}
            <section>
                <div className="container mb-4 mt-3 border border-2 buy-intro">
                    <h2>For Rent</h2>

                    <p>
                        Finding the right home is an important decision, and we
                        are here to make your search easy and hassle-free. We
                        offer a range of 1RK and 1BHK rental properties in
                        well-connected areas of Pune, including Ravet, Akurdi,
                        Chikhali, and Moshi.

                        Whether you are a student, working professional, couple,
                        or small family, we have rental options to suit your
                        needs and budget. Choose from properties based on your
                        preferred location, lifestyle, and requirements.

                        Our goal is to provide you with a simple, convenient,
                        and reliable property search experience.

                        Find a place you’ll be happy to call home!
                    </p>
                </div>
            </section>

            {/* Product Section */}
            <section className="rent-location-section">
                <div className="container pb-4">
                    <div className="row">

                        <h2 className="text-white p-4">Our Locations</h2>

                        {/* Ravet Card */}
                        <div className="col-md-6 mb-4">
                            <div className="card buy-card">

                                <img
                                    src={ravet}
                                    className="card-img-top"
                                    alt="Ravet Room"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Ravet</h5>

                                    <p className="card-text">
                                        1RK and 1BHK flats available for rent
                                        in Ravet. Comfortable homes with
                                        convenient access to nearby facilities.
                                    </p>


                                    <Link to="/ravet" className="btn btn-primary"> View</Link>
                                </div>
                            </div>
                        </div>

                        {/* Akurdi Card */}
                        <div className="col-md-6 mb-4">
                            <div className="card buy-card">

                                <img
                                    src={akurdi}
                                    className="card-img-top"
                                    alt="Akurdi Room"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Akurdi</h5>

                                    <p className="card-text">
                                        1RK and 1BHK flats available for rent
                                        in Akurdi. Find a comfortable home in a
                                        convenient and well-connected location.
                                    </p>

                                    <Link to="/akurdi" className="btn btn-primary"> View</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Rent;