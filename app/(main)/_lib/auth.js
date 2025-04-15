// "use client";

// import { createContext, useContext, useState } from 'react';

// // Simulated user database
// const users = [
//   { username: 'admin', password: 'admin123', role: 'admin' },
//   { username: 'user', password: 'user123', role: 'user' },
// ];

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const login = (username, password) => {
//     const foundUser = users.find(u => u.username === username && u.password === password);
//     if (foundUser) {
//       setUser(foundUser);
//       return true;
//     }
//     return false;
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);

// AWS Cognito Integration (Future)

import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_WKTTNvVvd',
  ClientId: '2r1tp6jii2sdi6d4uj8krt0lri'
};

const userPool = new CognitoUserPool(poolData);

export function login(username, password) {
  return new Promise((resolve, reject) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        resolve(result);
      },
      onFailure: (err) => {
        reject(err);
      }
    });
  });
}

export function logout() {
  const cognitoUser = userPool.getCurrentUser();
  if (cognitoUser) {
    cognitoUser.signOut();
  }
}

// import { CognitoUserPool } from "amazon-cognito-identity-js";

// const poolData = {
//   UserPoolId: "us-east-1_WKTTNvVvd", // Replace with your User Pool ID
//   ClientId: "2r1tp6jii2sdi6d4uj8krt0lri", // Replace with your App Client ID
// };

// export default new CognitoUserPool(poolData);