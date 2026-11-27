import home1 from '../assets/images/home1.jpg';
import home3 from '../assets/images/home3.jpg';
import home4 from '../assets/images/home4.jpg';
import proimg1 from '../assets/images/proimg1.png';
import '../assets/css/home.css'; 

// const headingColor = {

// }
const Home = () => {
    return (
        <>
            {/* Slider */}
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

            {/* About Us */}
            <section className="mt-4">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <h1>About Us</h1>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, voluptatibus. Doloribus, quidem! Accusamus,
                                molestias. Voluptatibus, neque.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <img src={proimg1} className="img-fluid" alt="About Us" />
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Products */}
            <section className="container mt-5">
                <div className="row">

                    <h2 className="mb-4">Our Products</h2>

                    <div className="col-md-4">
                        <div className="card">
                            <img src={proimg1} className="card-img-top" alt="Product 1" />

                            <div className="card-body">
                                <h5 className="card-title">Product 1</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title.
                                </p>
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img src={proimg1} className="card-img-top" alt="Product 2" />

                            <div className="card-body">
                                <h5 className="card-title">Product 2</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title.
                                </p>
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img src={proimg1} className="card-img-top" alt="Product 3" />

                            <div className="card-body">
                                <h5 className="card-title">Product 3</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title.
                                </p>
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>

                    <h1 style={{color:"red", backgroundColor:"yellow"}}> Hello How are you</h1>
                    <h1 className="my-text">Hello How are you 2</h1>

                </div>
            </section>

        </>
    );
};

export default Home;