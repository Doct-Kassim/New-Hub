// // src/context/AuthContext.js

// import React, { createContext, useState } from 'react';

// const AuthContext = createContext();
// export default AuthContext;

// export const AuthProvider = ({ children }) => {
//   const [authTokens, setAuthTokens] = useState(
//     localStorage.getItem('authTokens')
//       ? JSON.parse(localStorage.getItem('authTokens'))
//       : null
//   );

//   const [user, setUser] = useState(
//     localStorage.getItem('user')
//       ? JSON.parse(localStorage.getItem('user'))
//       : null
//   );

//   const loginUser = async (username, password) => {
//     const response = await fetch('http://127.0.0.1:8000/api/login/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       setAuthTokens({
//         access: data.access,
//         refresh: data.refresh,
//       });

//       const userData = {
//         id: data.id,
//         username: data.username,
//         role: data.role,
//         email: data.email,
//         first_name: data.first_name,
//         last_name: data.last_name,
//       };

//       setUser(userData);

//       localStorage.setItem('authTokens', JSON.stringify({ access: data.access, refresh: data.refresh }));
//       localStorage.setItem('user', JSON.stringify(userData));

//       return true;
//     } else {
//       alert('Invalid credentials');
//       return false;
//     }
//   };

//   const logoutUser = () => {
//     setAuthTokens(null);
//     setUser(null);
//     localStorage.removeItem('authTokens');
//     localStorage.removeItem('user');
//   };

//   const contextData = {
//     user,
//     authTokens,
//     loginUser,
//     logoutUser,
//   };

//   return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
// };
