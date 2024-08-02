// import React, { useEffect } from 'react';
// import {
//   GoogleOAuthProvider,
//   GoogleLogin,
//   CredentialResponse,
// } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';

// interface GoogleUserPayload {
//   sub: string;
//   picture: string;
//   email: string;
//   name: string;
//   given_name: string;
//   family_name: string;
// }

// const App: React.FC = () => {
//   const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID; // Google Cloud Console에서 생성한 클라이언트 ID

//   const handleLoginSuccess = (response: CredentialResponse) => {
//     if (response.credential) {
//       const userObject = jwtDecode<GoogleUserPayload>(response.credential);

//       console.log('Login Success: currentUser:', userObject);

//       const googleId = userObject.sub;
//       const imageUrl = userObject.picture;
//       const email = userObject.email;
//       const name = userObject.name;
//       const givenName = userObject.given_name;
//       const familyName = userObject.family_name;

//       console.log('Google ID:', googleId);
//       console.log('Profile Picture URL:', imageUrl);
//       console.log('Email:', email);
//       console.log('Full Name:', name);
//       console.log('Given Name:', givenName);
//       console.log('Family Name:', familyName);
//     }
//   };

//   const handleLoginFailure = (error: any) => {
//     console.log('Login Failed:', error);
//   };

//   useEffect(() => {
//     /* global google */
//     google.accounts.id.initialize({
//       client_id: clientId,
//       callback: handleLoginSuccess,
//     });
//   }, [clientId]);

//   const handleButtonClick = () => {
//     google.accounts.id.prompt();
//   };

//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//       <div>
//         <button onClick={handleButtonClick}>Login with Google</button>
//         {/* Google Login button */}
//         {/* <GoogleLogin
//           onSuccess={handleLoginSuccess}
//           onFailure={handleLoginFailure}
//           buttonText="Login"
//         /> */}
//       </div>
//     </GoogleOAuthProvider>
//   );
// };

// export default App;

import React from 'react';

const GoogleLoginButton = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  };

  return <button onClick={handleLogin}>Login with Google</button>;
};

export default GoogleLoginButton;
