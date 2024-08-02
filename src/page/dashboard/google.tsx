import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function GoogleRedirectHandler() {
  const query = useQuery();
  const code = query.get('code');

  useEffect(() => {
    if (code) {
      const fetchToken = async () => {
        try {
          const response = await axios.post(
            'http://localhost:8080/oauth2/authorization/google',
            { code }
          );
          console.log('Server response:', response);
        } catch (error) {
          console.error('Error fetching token from server:', error);
        }
      };

      fetchToken();
    }
  }, [code]);

  return <div>{code ? <p>로그인 중...</p> : <p>로그인 실패</p>}</div>;
}

export default GoogleRedirectHandler;
