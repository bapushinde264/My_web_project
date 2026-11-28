import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/moshi.css';
import MoshiKitchen from '../assets/images/Chikhali_kitchen.jpeg';
import Bedroom from '../assets/images/Bedroom_img.jpg';
import Hall from '../assets/images/Hall_img.jpg';


const Moshi = () => {
    return (
        <>
            {/* ================= HALL SECTION ================= */}
           <section className="property-section bg-warning">
               <div className="container">
                    <div className="row align-items-center">
                       <div className="col-md-5 mb-3 mb-md-0">
                           <img src={Hall}  alt="Moshi Apartment Hall"  className="property-img"/>
                      </div>
                     <div className="col-md-7">
                          <div className="property-content">
                              <h2> Spacious & Comfortable Hall </h2>
                                  <p> <i className="bi bi-geo-alt-fill text-danger"></i> Moshi, Pune</p>
                               <p>
                                    The 1 BHK apartment in Moshi features a spacious and
                                    well-designed hall that offers a comfortable and welcoming
                                    space for everyday living. The hall provides enough room
                                    for a sofa set, TV unit, center table, and other essential
                                    furniture, making it ideal for relaxing with family or
                                    spending quality time with friends.
                                </p>
                                 <p>
                                    Large windows allow plenty of natural light and fresh air
                                    into the room, creating a bright and pleasant atmosphere
                                    throughout the day. The practical layout also provides easy
                                    movement and can be arranged according to your personal
                                    style and requirements.
                                </p>
                                <Link to="/contact" className="register-btn">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
               </div>
          </section>

          {/* ================= BEDROOM SECTION ================= */}

            <section className="property-section bg-primary text-white">
                <div className="container">
                    <div className="row align-items-center">
 
                       <div className="col-md-5 mb-3 mb-md-0">
                          <img  src={Bedroom} alt="Moshi Apartment Bedroom" className="property-img"/>
                       </div>
 
                        <div className="col-md-7">
                            <div className="property-content">
                             <h2>Cozy & Peaceful Bedroom </h2>
                               <p>
                                    The 1 BHK apartment in Moshi features a comfortable and
                                    spacious bedroom designed to provide a peaceful and
                                    relaxing environment.
                                </p>
                                <p>
                                    The room offers enough space for a double bed, wardrobe,
                                    side tables, and other essential furniture while maintaining
                                    a comfortable layout. The bedroom receives good natural
                                    light and ventilation, creating a fresh and pleasant
                                    atmosphere throughout the day.
                                </p>
                                <p>
                                    Its simple and practical design makes it easy to personalize
                                    the space according to your lifestyle and preferences.
                                    Whether you are relaxing after a long day or enjoying a
                                    peaceful night's sleep, the bedroom provides the comfort
                                    and privacy you need.
                                </p>
                           </div>
                       </div>
                    </div>
                </div>
           </section>

           {/* ================= KITCHEN SECTION ================= */}

           <section className="property-section bg-success text-white">
               <div className="container">
                   <div className="row align-items-center">
                       <div className="col-md-5 mb-3 mb-md-0">
                          <img  src={MoshiKitchen}  alt="Moshi Apartment Kitchen" className="property-img"/>
                       </div>
                       <div className="col-md-7">
                           <div className="property-content">
                                <h2>Modern Kitchen</h2>
                                 <h5>Modern Functional Kitchen </h5>
                                  <p>
                                    The 1 BHK apartment in Moshi features a spacious, modern,
                                    and well-planned kitchen designed for comfortable everyday
                                    cooking.
                                  </p>
                                  <p>
                                    The kitchen provides sufficient counter space and storage
                                    areas, making it easy to keep cooking essentials organized.
                                    Good ventilation and natural light create a fresh and
                                    comfortable environment while preparing meals.
                                   </p>
                               <p>
                                    With its clean finish, convenient design, and
                                    easy-to-maintain space, this kitchen adds to the overall
                                    comfort of the apartment.
                                </p>
                            </div>
                        </div>
                    </div>

                   {/* ================= PAGINATION ================= */}

<nav aria-label="Property pages">

    <ul className="pagination justify-content-center mt-4">

        {/* Previous - Chikhali */}

        <li className="page-item">
            <Link className="page-link" to="/chikhali">
                Previous
            </Link>
        </li>

        {/* Current Page */}

        <li className="page-item active">
            <Link className="page-link" to="/moshi"> 2 </Link>
       </li>
    </ul>
</nav>
               </div>  {/* container */}
          </section>  {/* Kitchen Section */}
        </>
    );
};
export default Moshi;
