import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from 'react-icons/io';
import { GoogleOAuthProvider } from '@react-oauth/google';
import useGoogleLogin from '../../components/login/googleLogin';

function Dashboard() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  if (!clientId) {
    throw new Error('VITE_GOOGLE_CLIENT_ID is not defined');
  }
  const handleMyPageClick = () => {
    navigate('/mypage');
  };
  const handleSuccess = (response) => {
    console.log('Login Success:', response);
    // 여기서 백엔드로 JWT 토큰을 전송하거나, 로그인 상태를 관리하는 작업을 수행합니다.
  };

  const handleError = (error) => {
    console.error('Login Failed:', error);
  };
  const GoogleLoginButton = useGoogleLogin(handleSuccess, handleError);
  return (
    <div className="flex flex-row w-screen justify-between px-56  my-16">
      <span className="flex items-center">Logo</span>
      <span>
        {login ? (
          <span>로그인</span>
        ) : (
          <span>
            <span className="flex flex-row items-center">
              <GoogleOAuthProvider clientId={clientId}>
                <div className="App">
                  <h1>Google Login with React</h1>
                  <GoogleLoginButton />
                </div>
              </GoogleOAuthProvider>
              <img
                src={'../../../image/basicImg.png'}
                alt={''}
                className="rounded-full w-5 h-5 object-cover my-4 mr-2 "
              />
              <span className="mr-1">로그인</span>
              <span onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </span>

            {isOpen && (
              <div className="absolute top-28 justify-end right-36 border-2 border-slate-200 p-5 rounded-2xl w-44 bg-white">
                <div
                  className="flex items-center justify-between"
                  onClick={handleMyPageClick}
                >
                  마이페이지 <IoIosArrowForward />
                </div>
                <div className="border-2 border-gray-200 mt-3 mb-3"></div>
                <div>로그아웃</div>
              </div>
            )}
          </span>
        )}
      </span>
    </div>
  );
}
export default Dashboard;
