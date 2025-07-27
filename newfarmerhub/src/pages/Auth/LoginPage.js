// // src/components/Auth/LoginPage.js

// import React, { useState, useContext } from 'react';

// import { useNavigate } from 'react-router-dom';

// import AuthContext from '../../context/AuthContext';

// const LoginPage = () => {
//   const { loginUser } = useContext(AuthContext);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const success = await loginUser(username, password);
//     if (success) {
//       navigate('/dashboard');
//     }
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: '400px' }}>
//       <h2 className="mb-4">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label>Username:</label>
//           <input type="text" className="form-control" value={username}
//             onChange={(e) => setUsername(e.target.value)} required />
//         </div>
//         <div className="mb-3">
//           <label>Password:</label>
//           <input type="password" className="form-control" value={password}
//             onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit" className="btn btn-primary w-100">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
