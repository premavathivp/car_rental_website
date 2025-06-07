// import React, { useState } from 'react';
// import axios from 'axios';

// const AuthPage = () => {
//   const [isRegister, setIsRegister] = useState(false);
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: ''
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     const url = isRegister
//       ? 'http://localhost:5000/api/auth/register'
//       : 'http://localhost:5000/api/auth/login';

//     const payload = isRegister
//       ? form
//       : { email: form.email, password: form.password };

//     try {
//       const res = await axios.post(url, payload);
//       alert(`${isRegister ? 'Registration' : 'Login'} successful!`);
//       console.log('Token:', res.data.token);
//     } catch (err) {
//       alert(`${isRegister ? 'Registration' : 'Login'} failed`);
//       console.error(err.response?.data || err.message);
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>{isRegister ? '📝 Register' : '🔐 Login'}</h2>

//       {isRegister && (
//         <>
//           <input
//             name="name"
//             placeholder="Name"
//             value={form.name}
//             onChange={handleChange}
//           />
//           <br />
//         </>
//       )}

//       <input
//         name="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       <br />

//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={handleChange}
//       />
//       <br />

//       {isRegister && (
//         <>
//           <input
//             name="role"
//             placeholder="Role (e.g., admin or dealer)"
//             value={form.role}
//             onChange={handleChange}
//           />
//           <br />
//         </>
//       )}

//       <button onClick={handleSubmit}>
//         {isRegister ? 'Register' : 'Login'}
//       </button>

//       <br /><br />
//       <button onClick={() => setIsRegister(!isRegister)}>
//         Switch to {isRegister ? 'Login' : 'Register'}
//       </button>
//     </div>
//   );
// };

// export default AuthPage;


import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const url = isRegister
      ? 'http://localhost:5000/api/auth/register'
      : 'http://localhost:5000/api/auth/login';

    const payload = isRegister
      ? form
      : { email: form.email, password: form.password };

    try {
      const res = await axios.post(url, payload);
      alert(`${isRegister ? 'Registration' : 'Login'} successful!`);
      console.log('Token:', res.data.token);
    } catch (err) {
      alert(`${isRegister ? 'Registration' : 'Login'} failed`);
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="text-center mb-4">
            {isRegister ? '📝 Register' : '🔐 Login'}
          </h3>

          {isRegister && (
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                value={form.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {isRegister && (
            <div className="mb-3">
              <label className="form-label">Role</label>
              <input
                name="role"
                type="text"
                className="form-control"
                value={form.role}
                onChange={handleChange}
                placeholder="member or admin or dealer"
              />
            </div>
          )}

          <button onClick={handleSubmit} className="btn btn-primary w-100">
            {isRegister ? 'Register' : 'Login'}
          </button>

          <div className="text-center mt-3">
            <button
              className="btn btn-link"
              onClick={() => setIsRegister(!isRegister)}
            >
              Switch to {isRegister ? 'Login' : 'Register'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
