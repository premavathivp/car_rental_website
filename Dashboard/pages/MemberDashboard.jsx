import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MemberDashboard = () => {
  const [vehicles, setVehicles] = useState([]);

  // Fetch vehicles 
  useEffect(() => {
    axios.get('http://localhost:5000/api/member/vehicles') 
      .then(res => setVehicles(res.data))
      .catch(err => console.error(err));
  }, []);

  const reserveVehicle = (vehicleId) => {
    axios.post('http://localhost:5000/api/member/reserve', { vehicleId })
      .then(res => alert('Reserved!'))
      .catch(err => console.error(err));
  };

  const checkoutVehicle = (id) => {
  axios.put(`http://localhost:5000/api/member/checkout/${id}`)
    .then(res => alert('Checkout successful!'))
    .catch(err => console.error(err));
};


  return (
    <div className="center-container"style={{  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center"}}>
      <h2 style={{marginTop:"7%"}}>Available Vehicles</h2>
<ul style={{  listStyle: "none",
  padding:"0"}}>
  {vehicles.map(vehicle => (
    <li key={vehicle._id} style={{   margin: "20px 0"}}>
      <div>
       <strong>{vehicle?.make} {vehicle?.model}</strong> – {vehicle?.year}<br />
₹{vehicle?.pricePerDay} / day –
<span style={{ color: vehicle?.availability ? 'green' : 'red' }}>
  {vehicle?.availability ? 'Available' : 'Not Available'}
</span>

      </div>
      <button style={{ backgroundColor:"rgb(20, 104, 194)", 
  border: "none",
  padding: "8px 14px",
  margin: "4px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease"}} onClick={() => reserveVehicle(vehicle._id)}>Reserve</button>
     <button style={{ backgroundColor:"rgb(20, 104, 194)", 
  border: "none",
  padding: "8px 14px",
  margin: "4px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease"}}onClick={() => checkoutVehicle(vehicle._id)}>Checkout</button> 

    </li>
  ))}
</ul>

    </div>
  );
};

export default MemberDashboard;
