// useGoogleLogin.js
import React from 'react';
import { useCallback } from 'react';
import { GoogleLogin } from '@react-oauth/google';

const useGoogleLogin = (onSuccess, onError) => {
  const handleSuccess = useCallback(
    (response) => {
      console.log('Login Success:', response);
      if (onSuccess) {
        onSuccess(response);
      }
    },
    [onSuccess]
  );

  const handleError = useCallback(
    (error) => {
      console.error('Login Failed:', error);
      if (onError) {
        onError(error);
      }
    },
    [onError]
  );

  const GoogleLoginButton = () => (
    <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
  );

  return GoogleLoginButton;
};

export default useGoogleLogin;
