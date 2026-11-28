import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-section bg-dark black text-white pt-4 pb-4">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 mb-4">
                        <h4>Mahakali Developers</h4>
                        <p>
                            Your trusted partner for buying and renting
                            properties in Pune. Find your dream home
                            with us.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-4">
                        <h4>Quick Links</h4>

                        <ul className="list-unstyled">
                            <li><Link to="/buy">Buy Property</Link></li>
                            <li><Link to="/rent">Rent Property</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4 mb-4">
                        <h4>Contact Info</h4>
                        <p>📍 Pune, Maharashtra</p>
                        <p>📧 info@example.com</p>
                        <p>📞 +91 8767010988</p>
                    </div>

                </div>

                <hr />

                <div className="text-center">
                    <p className="mb-0">
                        © 2026 Mahakali Developers. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;