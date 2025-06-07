import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  SearchBar, LocationDatePicker, Header } from "./components/Homepage";
import PerfectCar, { TopCars,TrendingOffers} from "./components/Cars";
import {  Cities, Explore } from "./components/ExplorePlaces";
import { Banner,DownloadApp,Places } from "./components/Banner";
import Footer,{ FAQ } from "./components/Footer";



function App() {
  return (
    
    <div className="flex" style={{backgroundColor:"bisque"}}>
   
    
      <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold" style={{  backgroundColor:"pink",}}>
  <span className=" px-2" style={{color:"green",fontFamily:"-moz-initial"}}>WELCOME TO </span>  
  <span className="px-2"style={{color:"blue",fontFamily:"inherit"}}>CAR RENTAL WEBSITE</span>
</h1>
<hr className="line" style={{ width: "100%",
    border: "1px solid black", 
  
    margin: "0" }}/>

 </div> 
     <Header/>
    {/* <SidebarMenu/> */}
    <LocationDatePicker/>
     <SearchBar/>
     <TopCars/>
     <PerfectCar/>
     <TrendingOffers/>
     <Explore/>
     <Cities/>
      <Banner />
      <Places/>
      <DownloadApp/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App


