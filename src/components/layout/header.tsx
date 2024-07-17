import React, { Suspense, useEffect, useState } from 'react';
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from 'react-icons/io';

function Dashboard() {
  const [login, setLogin] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row w-screen bg-slate-300 justify-between">
      <span>Logo</span>
      <span>
        {login ? (
          <span>dd</span>
        ) : (
          <span>
            로그인
            <span onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
            {isOpen && (
              <div>
                <div>
                  마이페이지 <IoIosArrowForward />
                </div>
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
