import React, { useState } from 'react';
import axios from 'axios';

const DealerDashboard = () => {
  const [dealerId, setDealerId] = useState('');
  const [vehicleForm, setVehicleForm] = useState({ make: '', model: '', year: '', pricePerDay: '' });
  const [vehicles, setVehicles] = useState([]);
  const [deleteId, setDeleteId] = useState('');

  // Handle vehicle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleForm({ ...vehicleForm, [name]: value });
  };

  // Add vehicle
  const handleAddVehicle = () => {
    axios.post('http://localhost:5000/api/dealer/vehicle', vehicleForm)
      .then(() => {
        alert('Vehicle added successfully');
        setVehicleForm({ make: '', model: '', year: '', pricePerDay: '' });
      })
      .catch((err) => {
        console.error('Error adding vehicle:', err);
        alert('Add failed');
      });
  };

  // Delete vehicle
  const handleDeleteVehicle = () => {
    if (!deleteId) return alert('Enter Vehicle ID to delete');

    axios.delete(`http://localhost:5000/api/dealer/vehicle/${deleteId}`)
      .then(() => {
        alert('Vehicle deleted successfully');
        setDeleteId('');
      })
      .catch((err) => {
        console.error('Error deleting vehicle:', err);
        alert('Delete failed');
      });
  };

  // Get all vehicles by dealer ID
  const handleGetVehicles = () => {
    if (!dealerId) return alert('Enter Dealer ID');

    axios.get(`http://localhost:5000/api/dealer/vehicles/${dealerId}`)
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err) => {
        console.error('Error fetching vehicles:', err);
        alert('Fetch failed');
      });
  };

  return (
    <div style={{ display: "flex",
  flexDirection: "column",
  alignItems:" center",
  color:"Green",
  justifyContent: "center",
  textAlign: "center"}}>
      <h2 style={{color:"blueviolet"}}>🚗 Dealer Dashboard</h2>

      {/* Add Vehicle */}
      <h3 style={{marginTop:"20px"}}>Add Vehicle</h3>
      <input name="make" placeholder="Make"style={{marginTop:"10px"}} value={vehicleForm.make} onChange={handleChange} />
      <input name="model" placeholder="Model" value={vehicleForm.model} onChange={handleChange} />
      <input name="year" placeholder="Year" value={vehicleForm.year} onChange={handleChange} />
      <input name="pricePerDay" placeholder="Price/Day" value={vehicleForm.pricePerDay} onChange={handleChange} />
      <button style={{marginTop:"10px",backgroundColor:"rgb(20, 104, 194)", 
  border: "none",
  padding: "8px 14px",
  margin: "4px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease"}} onClick={handleAddVehicle}>Add Vehicle</button>

      <hr />

      {/* Delete Vehicle */}
      <h3 style={{marginTop:"17px"}}>Delete Vehicle</h3>
      <input placeholder="Vehicle ID to Delete" value={deleteId} style={{marginTop:"6px"}} onChange={(e) => setDeleteId(e.target.value)} />
      <button style={{marginTop:"1%",backgroundColor:"rgb(20, 104, 194)", 
  border: "none",
  padding: "8px 14px",
  margin: "4px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease"}} onClick={handleDeleteVehicle}>Delete</button>

      <hr />

      {/* Get Dealer Vehicles */}
      <h3 style={{marginTop:"1%"}}>Get Dealer's Vehicles</h3>
      <input placeholder="Dealer ID" value={dealerId} style={{marginTop:"1.5%"}}onChange={(e) => setDealerId(e.target.value)} />
      <button style={{marginTop:"1%",backgroundColor:"rgb(20, 104, 194)", 
  border: "none",
  padding: "8px 14px",
  margin: "4px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease"}} onClick={handleGetVehicles}>Get Vehicles</button>

      {/* Show Vehicles */}
      {vehicles.length > 0 && (
        <div>
          <h4>Vehicle List:</h4>
          <ul>
            {vehicles.map((v) => (
              <li key={v._id}>{v.make} {v.model} ({v.year}) - ₹{v.pricePerDay}/day</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DealerDashboard;
