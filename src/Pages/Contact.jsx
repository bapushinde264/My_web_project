import { useState } from 'react';
import '../assets/css/contact.css';

const Contact = () => {

    const [requirement, setRequirement] = useState('');

    const [location, setLocation] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
    });

    const [submitted, setSubmitted] = useState(false);

    // Handle Input Changes
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };


    // Requirement Change
    const handleRequirement = (e) => {

        setRequirement(e.target.value);

        setLocation('');

    };


    // Location Options
    const locations = requirement === 'buy'
        ? ['Moshi', 'Chikhali']
        : requirement === 'rent'
            ? ['Akurdi', 'Ravet']
            : [];


    // Form Submit
    const handleSubmit = (e) => {

        e.preventDefault();

        setSubmitted(true);

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const contactPattern = /^[0-9]{10}$/;

        const valid =
            formData.name.trim() !== '' &&
            emailPattern.test(formData.email.trim()) &&
            contactPattern.test(formData.contact.trim()) &&
            requirement !== '' &&
            location !== '';

        if (valid) {

            alert('Registration submitted successfully!');

            setFormData({
                name: '',
                email: '',
                contact: ''
            });

            setRequirement('');

            setLocation('');

            setSubmitted(false);

        }

    };


    return (

        <>

            {/* HEADER */}

            <header className="main-header">

                <h1>
                    Find Your Dream Home With Us
                </h1>

            </header>


            {/* CONTACT SECTION */}

            <section className="container-fluid">

                <div className="row g-0">

                    {/* Instagram */}

                    <div className="col-12 col-md-4 bg-success text-white">

                        <div className="contact-box">

                            <i className="bi bi-instagram"></i>

                            <h4>
                                real_estate
                            </h4>

                        </div>

                    </div>


                    {/* Email */}

                    <div className="col-12 col-md-4 bg-warning">

                        <div className="contact-box">

                            <a href="mailto:bapushinde264@gmail.com">

                                <i className="bi bi-envelope-fill"></i>

                                <h4>
                                    bapushinde264@gmail.com
                                </h4>

                            </a>

                        </div>

                    </div>


                    {/* Phone */}

                    <div className="col-12 col-md-4 bg-info">

                        <div className="contact-box">

                            <a href="tel:+918767020988">

                                <i className="bi bi-telephone-fill"></i>

                                <h4>
                                    8767010988
                                </h4>

                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* REGISTRATION FORM */}

            <div className="form-container">

                <h2 className="text-center form-title mb-4">
                    Register
                </h2>


                <form onSubmit={handleSubmit} noValidate>


                    {/* ROW 1 */}

                    <div className="row">

                        {/* Name */}

                        <div className="col-12 col-md-6 mb-3">

                            <label className="form-label">
                                Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                className={`form-control ${
                                    submitted
                                        ? formData.name.trim() === ''
                                            ? 'is-invalid'
                                            : 'is-valid'
                                        : ''
                                }`}
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <div className="invalid-feedback">
                                Please enter your name.
                            </div>

                        </div>


                        {/* Email */}

                        <div className="col-12 col-md-6 mb-3">

                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                className={`form-control ${
                                    submitted
                                        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
                                            ? 'is-valid'
                                            : 'is-invalid'
                                        : ''
                                }`}
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <div className="invalid-feedback">
                                Please enter a valid email.
                            </div>

                        </div>

                    </div>


                    {/* ROW 2 */}

                    <div className="row">

                        {/* Contact */}

                        <div className="col-12 col-md-6 mb-3">

                            <label className="form-label">
                                Contact Number
                            </label>

                            <input
                                type="tel"
                                name="contact"
                                className={`form-control ${
                                    submitted
                                        ? /^[0-9]{10}$/.test(formData.contact.trim())
                                            ? 'is-valid'
                                            : 'is-invalid'
                                        : ''
                                }`}
                                placeholder="Enter 10-digit number"
                                maxLength="10"
                                inputMode="numeric"
                                value={formData.contact}
                                onChange={handleChange}
                            />

                            <div className="invalid-feedback">
                                Enter a valid 10-digit number.
                            </div>

                        </div>


                        {/* Requirement */}

                        <div className="col-12 col-md-6 mb-3">

                            <label className="form-label">
                                Requirement
                            </label>

                            <select
                                className={`form-select ${
                                    submitted
                                        ? requirement === ''
                                            ? 'is-invalid'
                                            : 'is-valid'
                                        : ''
                                }`}
                                value={requirement}
                                onChange={handleRequirement}
                            >

                                <option value="">
                                    Select Requirement
                                </option>

                                <option value="buy">
                                    Buy
                                </option>

                                <option value="rent">
                                    Rent
                                </option>

                            </select>

                            <div className="invalid-feedback">
                                Please select requirement.
                            </div>

                        </div>

                    </div>


                    {/* ROW 3 */}

                    <div className="row">

                        {/* Location */}

                        <div className="col-12 col-md-6 mb-3">

                            <label className="form-label">
                                Location
                            </label>

                            <select
                                className={`form-select ${
                                    submitted
                                        ? location === ''
                                            ? 'is-invalid'
                                            : 'is-valid'
                                        : ''
                                }`}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            >

                                <option value="">
                                    Select Location
                                </option>

                                {locations.map((item, index) => (

                                    <option key={index} value={item}>
                                        {item}
                                    </option>

                                ))}

                            </select>

                            <div className="invalid-feedback">
                                Please select location.
                            </div>

                        </div>


                        {/* Submit Button */}

                        <div className="col-12 col-md-6 mb-3 d-flex align-items-end submit-wrapper">

                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                            >
                                Submit
                            </button>

                        </div>

                    </div>

                </form>

            </div>

        </>

    );

};

export default Contact;