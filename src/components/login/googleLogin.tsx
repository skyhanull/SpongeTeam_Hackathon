import React, { useEffect } from 'react';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function GoogleLogin() {
  useEffect(() => {
    if (clientId && window.google) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });
    } else {
      console.error(
        'Google client ID is missing or Google API script is not loaded.'
      );
    }
  }, [clientId]);

  const handleCredentialResponse = (response: any) => {
    console.log('Login Success:', response);
    localStorage.setItem('login', 'true');
    // Handle the credential response here
    // if (onLoginSuccess) {
    //   onLoginSuccess(response);
    // }
  };

  const handleLoginClick = () => {
    window.google.accounts.id.prompt();
  };

  return (
    <div>
      <button onClick={handleLoginClick} className="bg-white border-none">
        로그인
      </button>
    </div>
  );
}

export default GoogleLogin;
