 import React, { useState } from 'react'; 
 import axios from 'axios'
 import './Homepage.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaUserCircle, FaCar, FaClipboardList, FaPhone, FaBook } from "react-icons/fa";
  
    
  export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    

    const validateForm = () => {
      let newErrors = {};
  
      if (!username.trim()) {
        newErrors.username = "Username is required!";
      }
  
      if (!password) {
        newErrors.password = "Password is required!";
      } else if (password.length < 6) {
        newErrors.password = "Password must be at least 6 characters long!";
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0; 
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('https://final-backend-5r0g.onrender.com');
      if (validateForm()) {
        alert("Login successful!");
        setIsLoginVisible(false);
        //Reset field
        setUsername("");
      setPassword("");
      setErrors({});
      }
    };

    

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  
    return (
      <>
        <nav style={styles.nav}>
          
          <nav style={{ display: "flex", alignItems: "center", gap: "50px", padding: "10px" }}>
          <img src="/carLogo.jpg" style={{ width: "200px", borderRadius: "5px" }} alt="Logo" />

<div style={styles.header}>
  
  <input type="text" placeholder="🔍︎ Search for model, features, etc " style={styles.searchBar} />
  <div style={styles.menuRight}>

  <button onClick={() => setIsLoginVisible(true)} style={styles.loginButton}>
        <FaUserCircle /> Login or Signup
      </button>

      {isLoginVisible && (
        <div style={styles.modal}>
          <h2>Login or Signup</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ ...styles.input, borderColor: errors.username ? "red" : "#ccc" }}
            />
           
            {errors.username && <span style={styles.errorText}>{errors.username}</span>}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ ...styles.input, borderColor: errors.password ? "red" : "#ccc" }}
            />
            {errors.password && <span style={styles.errorText}>{errors.password}</span>}

            <button type="submit" style={styles.submitButton}>Submit</button>
          </form>

          <button onClick={() => setIsLoginVisible(false)} style={styles.closeButton}>×</button>
        </div>
      )}
    </div>
    <span style={styles.menuIcon} onClick={toggleSidebar}>☰</span>
  </div>
        </nav>

        <div style={{ ...styles.sidebar, left: isOpen ? "0" : "-250px" }}>
          <button style={styles.closeBtn} onClick={toggleSidebar}>×</button>
          <div style={styles.menuContent}>
            <div className="menu-item"><FaUserCircle /> Login or Signup</div>
            <div className="menu-item"><FaCar /> Become a Host</div>
            <hr style={styles.separator} />
            <div className="menu-item"><FaClipboardList /> Investor Relations</div>
            <div className="menu-item"><FaClipboardList /> Press Releases</div>
            <hr style={styles.separator} />
            <div className="menu-item"><FaCar /> Abitourcar Cabs</div>
            <div className="menu-item"><FaClipboardList /> Abitourcar Cabs Policies</div>
            <div className="menu-item"><FaPhone /> Help & Support</div>
            <div className="menu-item"><FaBook /> Blogs</div>
            
          </div>
        </div>
  
        {isOpen && <div style={styles.overlay} onClick={toggleSidebar}></div>}
        </nav>
        
      </>
      
    );
  };

  const styles = {

    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
   
    },
    searchBar: {
      flex: "1",
    maxWidth: "900px", 
    minWidth: "800px", 
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center",
      borderRadius: "5px",
      marginRight: "75px",
    },
    menuRight: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      marginLeft:"auto",
    },

    loginButton: { 
      background: "#007bff", 
      color: "white",
       padding: "8px 16px", 
       borderRadius: "5px",
        border: "none",
         cursor: "pointer" 
        },
    modal: { 
      position: "absolute", 
      top: "100px", right: "20px", 
      padding: "20px", 
      background: "white", 
      boxShadow: "0px 0px 10px rgba(0,0,0,0.2)", 
      borderRadius: "5px", 
      width: "250px" 
    },
    input: { 
      display: "block", 
      width: "100%", 
      margin: "10px 0", 
      padding: "8px", 
      borderRadius: "5px", 
      border: "1px solid #ccc" 
    },
    submitButton: { 
      width: "100%", 
      background: "#28a745", 
      color: "white", 
      padding: "8px", 
      borderRadius: "5px", 
      border: "none", 
      cursor: "pointer" 
    },
    closeButton: { 
      position: "absolute", 
      top: "10px", 
      right: "10px", 
      background: "red", 
      color: "white", 
      border: "none", 
      padding: "5px 10px", 
      borderRadius: "50%", 
      cursor: "pointer" 
    },
    errorText: { 
      color: "red", 
      fontSize: "12px", 
      marginBottom: "5px", 
      display: "block" 
    },
    menuIcon: {
      cursor: "pointer",
      fontSize: "24px",
      padding: "6px",
      color: "black",
      borderRadius: "5px",
    },
    sidebar: {
      position: "fixed",
      top: "0",
      left: "-250px",
      width: "250px",
      height: "100%",
      backgroundColor: "pink",
      color: "#000",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      transition: "0.3s",
      boxShadow: "2px 0 5px rgba(0,0,0,0.5)",
    },
    closeBtn: {
      fontSize: "24px",
      alignSelf: "flex-end",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
    overlay: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
     
    },
    menuContent: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
  };

   export function LocationDatePicker(){
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
   
    return(
      <header style={{ display: "flex",justifyContent:"center", alignItems: "center", gap: "70px", padding: "20px" }}>
  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
  <label className="block mt-1 text-gray-500 text-sm mb-1 mr-4">Location: </label>
    
     <select
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    style={{width:"90%",marginLeft:"6%"}}
    className="w-40 md:w-64 p-2 border rounded-md text-gray-800"
  >
    <option value="chennai">Chennai</option>
    <option value="bangalore">Bangalore</option>
    <option value="mumbai">Mumbai</option>
    <option value="delhi">Delhi</option>
    <option value="hyderabad">Hyderabad</option>
    <option value="kolkata">Kolkata</option>
    <option value="pune">Pune</option>
    <option value="coimbatore">Coimbatore</option>
  </select>
  </div>
  
  <div className="mb-3 flex items-center">
          <label className="block text-gray-500 mt-4 text-sm mb-1 mr-4">Start Date: </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
         style={{width:"50%",marginLeft:"3%"}}
            className="w-full p-2 border rounded-md text-gray-800"
          />
       </div>


<div className="mb-3">
          <label className="block text-gray-500 mt-4 text-sm mb-1 mr-4">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{width:"50%",marginLeft:"5%"}}
            className="w-full p-2 border rounded-md text-gray-800"
          />
          </div>

  <button
    style={{
      backgroundColor: "black",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}   onClick={() => {
    const carAvailable = true;

    if (carAvailable) {
      alert("Available");
    } else {
      alert("Not Available");
    }
  }}
> SEARCH CAR </button> 
</header>

    );
};
  

export function SearchBar() {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [delivery, setDelivery] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!location) newErrors.location = "Location is required.";
    if (!startDate) newErrors.startDate = "Start date is required.";
    if (!endDate) newErrors.endDate = "End date is required.";
    if (startDate && endDate && new Date(endDate) <= new Date(startDate)) {
      newErrors.endDate = "End date cannot be earlier than start date.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert(`Form submitted successfully!\nDelivery Option: ${delivery ? "Yes" : "No"}`);
       // Reset form fields
          setLocation("");
          setStartDate("");
          setEndDate("");
          setDelivery(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center p-6 bg-gray-100 rounded-lg shadow-lg shadow-green" style={{backgroundColor:"#2ecc71"}}>
      <div className="form-container" style={{width:"30%",justifyContent:"center", margin:"0 auto",padding:"20px",borderRadius:"8px"}}>
        <p className="text-gray-500 text-sm"style={{marginLeft:"18%"}}>Drive anywhere, anytime with</p>
        <h2 className="text-2xl font-semibold mb-4">Car rentals in Chennai </h2>

        {/* Location Field */}
        <div className="mb-3 flex items-center">
          <label className="block text-gray-500 text-sm mb-1 mr-8 ">Location:</label>
          <select
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    style={{width:"50%",marginLeft:"6%"}}
    className="w-40 md:w-64 p-2 border rounded-md text-gray-800"
  >
    <option value="chennai">Chennai</option>
    <option value="bangalore">Bangalore</option>
    <option value="mumbai">Mumbai</option>
    <option value="delhi">Delhi</option>
    <option value="hyderabad">Hyderabad</option>
    <option value="kolkata">Kolkata</option>
    <option value="pune">Pune</option>
    <option value="coimbatore">Coimbatore</option>
  </select>
  {errors.location && (
    <p className="text-red-500 text-xs">{errors.location}</p>
  )}
</div>

        {/* Start Date Field */}
        <div className="mb-3 flex items-center">
          <label className="block text-gray-500 text-sm mb-1 mr-4">Start Date: </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
         style={{width:"50%",marginLeft:"3%"}}
            className="w-full p-2 border rounded-md text-gray-800"
          />
          {errors.startDate && <p className="text-red-500 text-xs">{errors.startDate}</p>}
        </div>

        {/* End Date Field */}
        <div className="mb-3">
          <label className="block text-gray-500 text-sm mb-1 mr-4">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{width:"50%",marginLeft:"5%"}}
            className="w-full p-2 border rounded-md text-gray-800"
          />
          {errors.endDate && <p className="text-red-500 text-xs">{errors.endDate}</p>}
        </div>

        {/* Delivery Checkbox */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="delivery"
            checked={delivery}
            onChange={(e) => setDelivery(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="delivery" className="text-gray-600 text-sm">
            Delivery & Pick-up, from anywhere
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
  <button className="bg-blue-500 text-white px-4 py-2 rounded-md"style={{marginLeft:"25%"}}>SEARCH</button>
</div>
        {/* <button type="submit" className="w-full bg-gray-400 text-white py-2 rounded-full font-semibold hover:bg-black-500">SEARCH</button> */}
      </div>
      <a href="#" target="_blank">
      <img src="banner-content-1.svg" style={{ width: "600px", borderRadius: "5px",backgroundColor:"lightgreen" }} alt="banner1" />
      <img src="banner-content-2.svg" style={{ width: "650px", borderRadius: "5px",backgroundColor:"green" }} alt="banner2" />
      </a>
    </form>
  );
}
