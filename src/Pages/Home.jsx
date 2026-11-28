import React from 'react';
import { Link } from 'react-router-dom';

import home1 from '../assets/images/home1.jpg';
import home3 from '../assets/images/home3.jpg';
import home4 from '../assets/images/home4.jpg';
import proimg1 from '../assets/images/proimg1.png';
import developers from '../assets/images/developers_img.png';

import '../assets/css/home.css';

const Home = () => {

    // Properties Data

    const properties = [
        {
            name: 'Ravet',
            map: 'https://maps.google.com/maps?q=Ravet,Pune,Maharashtra&output=embed',
            description: '1BHK flats available for rent in Ravet. Comfortable homes with convenient access to nearby facilities.',
            link: '/ravet'
        },
        {
            name: 'Akurdi',
            map: 'https://maps.google.com/maps?q=Akurdi,Pune,Maharashtra&output=embed',
            description: '1BHK flats available for rent in Akurdi. Find a comfortable home in a convenient location.',
            link: '/akurdi'
        },
        {
            name: 'Chikhali',
            map: 'https://maps.google.com/maps?q=Chikhali,Pune,Maharashtra&output=embed',
            description: '1BHK flats available for sale in Chikhali. Choose your ideal home in a developing location.',
            link: '/chikhali'
        },
        {
            name: 'Moshi',
            map: 'https://maps.google.com/maps?q=Moshi,Pune,Maharashtra&output=embed',
            description: '1BHK flats available for sale in Moshi. Own your dream home with excellent features and connectivity.',
            link: '/moshi'
        }
    ];

    return (
        <>

            {/* ================= SLIDER ================= */}

            <div
                id="myCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
            >

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={home1} className="d-block w-100" alt="Slide 1" />
                    </div>

                    <div className="carousel-item">
                        <img src={home4} className="d-block w-100" alt="Slide 2" />
                    </div>

                    <div className="carousel-item">
                        <img src={home3} className="d-block w-100" alt="Slide 3" />
                    </div>

                </div>

            </div>


            {/* ================= ABOUT US ================= */}

            <section className="about-section mt-2">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-md-6">

                            <h1>About Us</h1>

                            <p>
                              Mahakali Developers helps you find your perfect home with ease. We offer quality residential properties for rent in Ravet and Akurdi and for sale in Chikhali and Moshi.
                              Our aim is to provide affordable properties, trusted service, and a hassle-free experience.
                              Mahakali Developers  Your Dream Home, Our Priority! We focus on providing comfortable living spaces in convenient locations to match your lifestyle and budget. Our team is committed to making your property search simple, smooth, and reliable from start to finish.
                            </p>

                        </div>

                        <div className="col-md-6">
                           <img  src={developers}   className="img-fluid" />
                       </div>
                   </div>
                </div>
            </section>

           {/* ================= OUR PROPERTIES ================= */}

            <section className="properties-section bg-dark-blue">

                <div className="container pb-4">

                    <div className="row">

                        <h2 className="text-dark p-4">
                            Our Properties
                        </h2>

                        {properties.map((property, index) => (

                            <div className="col-lg-3 col-md-6 mb-4" key={index}>

                                <div className="card property-card">

                                    {/* Google Map */}

                                    <iframe
                                        src={property.map}
                                        title={property.name + " Google Map"}
                                        width="100%"
                                        height="230"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>

                                    {/* Card Body */}

                                    <div className="card-body">

                                        <h5 className="card-title">
                                            {property.name}
                                        </h5>

                                        <p className="card-text">
                                            {property.description}
                                        </p>

                                        <Link
                                            to={property.link}
                                            className="btn btn-primary mt-auto"
                                        >
                                            View
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </>
    );
};

export default Home;