import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


export const Banner = () => {
    return (
      <div className="bg-gray-800 text-black mt-5 p-6 rounded-xl shadow-lg flex justify-between items-center space-x-4" style={{backgroundColor:"#b2beb5"}}>
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/carLogo.jpg" style={{width:"140px",marginTop:"3%",marginLeft:"10%",borderRadius:"5px"}} /> 
          <p className="ml-4" style={{marginLeft:"10%"}}>Your next ride’s on us!</p>
        </div>
  
        {/* Offer Section */}
        <div className="text-center ">
          <h2 className="text-xl font-semibold">Book Now, Get Next Ride Free</h2>
          <p className="text-sm">Get ₹700 Z-credits for next</p>
          <button className="mt-2 px-4 py-2 bg-black text-gray-800 rounded-md shadow hover:bg-gray-300" onClick={() => alert("Get Free Ride Successfully")}> Get Free Ride   </button>
        </div>
      </div>
    );
  };

  export const Places = () => {
    return (
        <div className="carousel-container">
            <h1 className="h1 font-bold text-center mt-5 mb-4"style={{color: "green" }}>•••    Abitourcar around all over India    ••• </h1>
            {/* <h2 className="text-2xl font-bold mb-4">Places to explore around Chennai</h2> */}
            <Swiper
                spaceBetween={30}
                slidesPerView={2}
                navigation
                modules={[Navigation]}
                className="mySwiper"
            >
       <SwiperSlide style={{ display: "flex",
      justifyContent: "center",
      alignItems: "center"}}>
                    <div className="card bg-gray-100 p-4 rounded-xl shadow-lg">
                        <img src="bangalore.jpg" style={{width:"290px"}} alt="Bangalore" className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-xl font-semibold mt-2">Bangalore</h3>
                        
                    </div>
                </SwiperSlide>
  
      <SwiperSlide style={{ display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign:"center"}}>
                    <div className="card bg-gray-100 p-4 rounded-xl shadow-lg">
                        <img src="kolkata.jpg" style={{width:"290px"}} alt="Kolkata" className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-xl font-semibold mt-2">Kolkata</h3>
                      </div>
                </SwiperSlide>
  
                <SwiperSlide style={{ display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign:"center"}}>
                    <div className="card bg-gray-100 p-4 rounded-xl shadow-lg">
                        <img src="Chennai.jpg" style={{width:"290px"}} alt="Chennai" className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-xl font-semibold mt-2">Chennai</h3>
                      </div>
                </SwiperSlide>
                </Swiper>
        </div>
    );
  };

    
  export const DownloadApp=() =>{
    return (
        <div className="flex justify-center items-center mt-5 p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto"style={{backgroundColor:"#b2beb5"}}>
            <div className="w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-2">Download The App</h2>
                <p className="text-gray-600 mb-4">Scan the QR code and get the mobile app!</p>
                <img src="QRcode.png" style={{width:"150px"}} alt="playstore"/>
                <img src="google-play.png" style={{width:"150px"}} alt="playstore"/>
                <img src="app-store.png" style={{width:"150px"}} alt="appstore"/>
                <img src="QR.jpg" style={{width:"300px",marginLeft:"30%"}} alt="mobile"/>
        </div>
        </div>
    );
  }