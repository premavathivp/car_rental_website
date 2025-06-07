import React, { useState } from 'react';
import axios from 'axios';


const AdminDashboard = () => {
  // Vehicle State
  const [vehicleForm, setVehicleForm] = useState({ make: '', model: '', year: '', pricePerDay: '' });
  const [editVehicleId, setEditVehicleId] = useState(null);

  // Member State
  const [deleteMemberId, setDeleteMemberId] = useState('');
  const [members, setMembers] = useState([]);

  // VEHICLE HANDLERS
  const handleVehicleChange = (e) => {
    const { name, value } = e.target;
    setVehicleForm({ ...vehicleForm, [name]: value });
  };

  const handleVehicleSubmit = () => {
    const url = `http://localhost:5000/api/admin/vehicle${editVehicleId ? `/${editVehicleId}` : ''}`;
    const method = editVehicleId ? 'put' : 'post';

    axios[method](url, vehicleForm)
      .then(() => {
        alert(`Vehicle ${editVehicleId ? 'updated' : 'added'} successfully!`);
        setVehicleForm({ make: '', model: '', year: '', pricePerDay: '' });
        setEditVehicleId(null);
      })
      .catch((err) => {
        console.error('Vehicle operation failed:', err);
        alert('Vehicle operation failed.');
      });
  };

  const handleDeleteVehicle = () => {
    if (!editVehicleId) {
      alert('Please enter a Vehicle ID to delete.');
      return;
    }

    axios
      .delete(`http://localhost:5000/api/admin/vehicle/${editVehicleId}`)
      .then(() => {
        alert('Vehicle deleted successfully!');
        setEditVehicleId(null);
      })
      .catch((err) => {
        console.error('Error deleting vehicle:', err);
        alert('Delete failed.');
      });
  };

  // MEMBER HANDLERS
  const handleDeleteMember = () => {
    if (!deleteMemberId) {
      alert('Please enter Member ID to delete.');
      return;
    }

    axios
      .delete(`http://localhost:5000/api/admin/member/${deleteMemberId}`)
      .then(() => {
        alert('Member deleted successfully!');
        setDeleteMemberId('');
      })
      .catch((err) => {
        console.error('Error deleting member:', err);
        alert('Delete member failed.');
      });
  };

  const handleGetAllMembers = () => {
    axios
      .get('http://localhost:5000/api/admin/members')
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        console.error('Error fetching members:', err);
        alert('Failed to fetch members.');
      });
  };

  return (
      <div className="admin-dashboard" style={{ display: "flex",
  flexDirection: "column",
  alignItems:" center",
  color:"green",
  justifyContent: "center",
  textAlign: "center"}}>
    <h2 style={{color:"blueviolet"}}>Admin Dashboard</h2>
      <h2 style={{marginTop:"3%"}}>🚗 Vehicle Management</h2>
      <input name="make" placeholder="Make" value={vehicleForm.make} style={{marginTop:"10px"}} onChange={handleVehicleChange} />
      <input name="model" placeholder="Model" value={vehicleForm.model} onChange={handleVehicleChange} />
      <input name="year" placeholder="Year" value={vehicleForm.year} onChange={handleVehicleChange} />
      <input name="pricePerDay" placeholder="Price Per Day" value={vehicleForm.pricePerDay} onChange={handleVehicleChange} />
      <br />
      <button style={{ backgroundColor:"rgb(20, 104, 194)", 
  border: "none",
  padding: "8px 14px",
  margin: "4px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease"}}onClick={handleVehicleSubmit}>{editVehicleId ? 'Update' : 'Add'} Vehicle</button>
      <input
        placeholder="Vehicle ID for Edit/Delete"
        value={editVehicleId || ''}
        style={{marginTop:"30px"}}
        onChange={(e) => setEditVehicleId(e.target.value)}
      />
      <button style={{marginTop:"20px",backgroundColor:"rgb(20, 104, 194)", 
  border: "none",
  padding: "8px 14px",
  margin: "4px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease"}} onClick={handleDeleteVehicle}>Delete Vehicle</button>

      <hr />

      <h2>👤 Member Management</h2>
      <input
        placeholder="Member ID to Delete"
        value={deleteMemberId}
        style={{marginTop:"30px"}}
        onChange={(e) => setDeleteMemberId(e.target.value)}
      />
      <button style={{marginTop:"15px",backgroundColor:"rgb(20, 104, 194)", 
  border: "none",
  padding: "8px 14px",
  margin: "4px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease"}} onClick={handleDeleteMember}>Delete Member</button>
      <br /><br />
      <button style={{backgroundColor:"rgb(20, 104, 194)", 
  border: "none",
  padding: "8px 14px",
  margin: "4px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease"}}onClick={handleGetAllMembers}>Get All Members</button>

      {members.length > 0 && (
        <div>
          <h3 style={{marginTop:"10px"}}>📋 Members List</h3>
          <ul style={{color:"black",marginTop:"20px"}}>
            {members.map((member) => (
              <li key={member._id}>{member.name} - {member.email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};



export default AdminDashboard;
