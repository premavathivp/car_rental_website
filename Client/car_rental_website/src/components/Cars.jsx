import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Pagination} from 'swiper/modules';
import { Container, Card, Button, CardGroup } from 'react-bootstrap';

export function TopCars() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="h1 fw-bold mt-5" style={{ color: "green" }}>•••   TOP CARS IN CHENNAI     •••</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                style={{ padding: "20px" }}
            >
                <SwiperSlide>
                    <img src="/car1.jpg" style={{ width: "200px", borderRadius: "5px" }} alt="Car 1" />
                    <h3 className="card-text">Celerio 2024</h3>
                    <h6 className="card-text">₹219/hr</h6>
                    <p>Automatic. Petrol. 5 Seats</p>
                    <Button variant="btn btn-light">⭐⭐⭐⭐⭐ 4.1</Button>
                    <footer>
                    <small className="text-body-secondary">44.3 km away</small>
                    </footer>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/car2.jpg" style={{ width: "200px", borderRadius: "5px" }} alt="Car 2" />
                    <h3 className="card-text">Swift 2024</h3>
                    <h6 className="card-text">₹249/hr</h6>
                    <p>Manual. Diesel. 5 Seats</p>
                    <Button variant="btn btn-light">⭐⭐⭐⭐⭐ 4.8</Button>
                    <footer>
                    <small className="text-body-secondary">47.8 km away</small>
                    </footer>
                    
                </SwiperSlide>
             
            </Swiper>
            <button 
                  style={{ 
                      marginTop: "20px", 
                      padding: "10px 20px", 
                      backgroundColor: "#28a745", 
                      color: "white", 
                      border: "none", 
                      borderRadius: "5px", 
                      cursor: "pointer" 
                  }}
                  onClick={() => alert("Browse more cars")}
              >
                  BROWSE ALL CARS
              </button>
        </div>
    );
  }

   export default function PerfectCar ()  {
     return (
       <div className="text-center mt-4">
         {/* Title Section */}
         <h1 className="h1 fw-bold mt-2 mb-1" style={{ color: "green"}}> ••• Perfect Car for Every Journey in Chennai ••• </h1>
         <p className="text-gray-600 mt-5">
           The perfect car depends on your journey, but Chennai offers something for everyone.</p>
          <p> Choose smart, drive safe, and make every journey memorable.
         </p>
  
         {/* Card Group */}
         <Container className="mt-0 pt-0"style={{marginTop:"100%"}}>
           <CardGroup>
             {/* SUVs and Family Cars */}
             <Card className="m-2 shadow-sm">
               <Card.Body>
                 <Card.Title>SUVs and Family Cars</Card.Title>
                 <Card.Text>
                   Perfect for family trips and group outings, including smooth ride quality. 
                   Check Abitourcar rental details for the best rates.
                 </Card.Text>
                 <Button variant="dark">SUVs IN CHENNAI</Button>
               </Card.Body>
             </Card>
  
             {/* Sedans */}
             <Card className="m-2 shadow-sm">
               <Card.Body>
                 <Card.Title>Sedans</Card.Title>
                 <Card.Text>
                   Ideal for business travel or longer drives. Visit Abitourcar Chennai on our app for more details.
                 </Card.Text>
                 <Button variant="dark">RENT SEDANS IN CHENNAI</Button>
               </Card.Body>
             </Card>
  
             {/* Electric Cars */}
             <Card className="m-2 shadow-sm">
               <Card.Body>
                 <Card.Title>Electric Cars</Card.Title>
                 <Card.Text>
                   Go green with electric vehicles. Experience the latest in eco-friendly technology while 
                   saving on fuel costs. Perfect for city commutes and ideal for Abitourcar monthly rental Chennai plans.
                 </Card.Text>
                 <Button variant="dark">EVs IN CHENNAI</Button>
               </Card.Body>
             </Card>
           </CardGroup>
         </Container>
       </div>
     );
   };
  

   export const TrendingOffers = () => {
     return (
       <div className="w-full max-w-xl mx-auto">
          <h1 className="h1 fw-bold mt-0 text-center mb-5" style={{ color: "green" }}>•••   TRENDING OFFERS   •••</h1>
       <div className="offer-container" style={{display: "flex",
               justifyContent: "center",
               gap: "20px",
               overflowX: "auto"}}>
                  
         <div className="offer-card" style={{  minWidth: "300px", 
      padding: "10px",
      backgroundColor: "green",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(47, 192, 132, 0.2)",
      textAlign: "center"}}>
        <img src="/carLogo.jpg" style={{width:"70px",borderRadius:"5px"}} /> 
           <h3>FREE AIRPORT</h3>
           <p>Get Abitourcar delivered to the Airport terminal for free</p>
            <button onClick={() => alert("Book Now Successfully")}>Book Now</button>
         </div>
         <div className="offer-card" style={{  minWidth: "300px", 
      padding: "10px",
      backgroundColor: "green",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(47, 192, 132, 0.2)",
      textAlign: "center"}}>
   
   <img src="/carLogo.jpg" style={{width:"70px",borderRadius:"5px"}} /> 
           <h3>FREE HD</h3>
           <p>Get Abitourcar delivered to your doorstep for free</p>
           <button onClick={() => alert("Book Now Successfully")}>Book Now</button>
         </div>
       </div>
       </div>
     );
   };