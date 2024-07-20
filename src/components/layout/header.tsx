import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from 'react-icons/io';

function Dashboard() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleMyPageClick = () => {
    navigate('/mypage');
  };
  return (
    <div className="flex flex-row w-screen justify-between pl-36 pr-36 my-16">
      <span>Logo</span>
      <span>
        {login ? (
          <span>로그인</span>
        ) : (
          <span>
            <span className="flex flex-row items-center">
              로그인
              <span onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </span>

            {isOpen && (
              <div className="absolute top-24 justify-end right-36 border-2 border-slate-200 p-5 rounded-2xl w-44 bg-white">
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
