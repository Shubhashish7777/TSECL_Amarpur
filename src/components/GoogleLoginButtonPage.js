import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

import DataInputForm from './DataInputForm';

const GoogleLoginPage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLoginSuccess = (response) => {
    const decodedToken = jwtDecode(response.credential);
    const email = decodedToken.email;
    const username = decodedToken.name;

    if (email === 'shubhashish.saha.biz@gmail.com' || email==='bhowmikdipayanudp@gmail.com') {
      setUser({ email, username });
      setError(null);
    } else {
      setError('Access denied. Unauthorized email.');
    }
  };

   const OauthKey = process.env.REACT_APP_Oauth_Key;
  return (
    <GoogleOAuthProvider clientId={OauthKey}>
      <div>
        {user ? (
          <div>
            <h2>Welcome, {user.username}!</h2>
            <p>Email: {user.email}</p>
            <DataInputForm/>
          </div>
        ) : (
          <div>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => {
                console.log('Login Failed');
              }}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginPage;
