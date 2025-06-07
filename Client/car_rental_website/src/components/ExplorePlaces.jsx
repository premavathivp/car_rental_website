import React from "react";
import{Card,CardGroup} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const Explore = () => {
    return (
         <div className="mt-2 text-center" style={{backgroundColor:"#b2beb5"}}>
         <h1 className="h1 font-bold text-center mt-5 mb-4"style={{ color: "green" }}>•••   Explore Chennai like a Local   •••</h1>
         
            <img src="/city.jpg" style={{width:"300px",borderRadius:"6px"}} />
            <p className="text-gray-700 mt-2">
              Discover the freedom of driving around Tamil Nadu's capital on your schedule. 
              With rental services starting at just ₹799, Abitourcar gives you the perfect 
              way to experience the city for business, leisure, and everything in between.
            </p>
            <button className="bg-black text-white px-6 py-2 mt-4 rounded-md shadow-lg hover:bg-gray-800" onClick={() => alert("Booked Successfully")}>
              BOOK CAR IN CHENNAI
            </button>
            
            
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold">Short-term rentals starting at <span className="bg-gray-400 px-2 py-1 rounded">₹799</span></h3>
          <p className="text-gray-600 mt-1">
            Get convenience, comfort, and privacy with Abitourcar in Chennai rental services.
          </p>
          <CardGroup>
        <Card>
          <Card.Img variant="top" src="rental1.jpg" style={{width:"300px"}}/>
          <Card.Body>
            <Card.Title>Discover Chennai's Local Attractions</Card.Title>
            <Card.Text>
            Drive to iconic spots like Lalbagh Gardens, Cubbon Park, and MG Road with Abitourcar Chennai.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="rental2.jpg" style={{width:"200px"}}/>
          <Card.Body>
            <Card.Title>Get Cars for Business Travel and Work Meetings</Card.Title>
            <Card.Text>
            Navigate seamlessly between meetings or conferences with a Abitourcar that works around your needs.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="rental3.jpg" style={{width:"200px"}}/>
          <Card.Body>
            <Card.Title>Convenient Pickup Locations</Card.Title>
            <Card.Text>
            Skip the cab queues and get a comfortable car to or from Kempegowda International Airport with Abitourcar.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
        </div>
      </div>
   
    );
  };

  export const Cities = () => {
    return (
        <div className="carousel-container">
            <h1 className="h1 font-bold text-center mt-5 mb-4"style={{ color: "green" }}>•••   Places to explore around Chennai   ••• </h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                modules={[Navigation]}
                className="mySwiper"
            >
       <SwiperSlide style={{ display: "flex",
      justifyContent: "center",
      alignItems: "center"}}>
                    <div className="card bg-gray-100 p-4 rounded-xl shadow-lg">
                        <img src="place1.jpg" style={{width:"200px"}} alt="Chennai" className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-xl font-semibold mt-2">Explore the Best of Chennai and Beyond</h3>
                        <p>Chennai, the cultural heart of South India, is a fascinating blend of tradition, technology, and coastal charm.</p>
                        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Discover More    </button>
                              
                    </div>
                </SwiperSlide>
  
      <SwiperSlide style={{ display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign:"ce"}}>
                    <div className="card bg-gray-100 p-4 rounded-xl shadow-lg">
                        <img src="place2.jpg" style={{width:"200px"}} alt="Hidden Gems" className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-xl font-semibold mt-2">Exploring Chennai's Hidden Gems</h3>
                        <p>Chennai, a city with a rich cultural tapestry, is home to iconic landmarks and hidden gems waiting to be discovered.</p>
                    <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Discover More    </button>
                    </div>
                </SwiperSlide>
                </Swiper>
                
        </div>
    );
  };
  