import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-center">
        <div className="relative w-4/6 mt-10 mb-5 customBlue">
          <FaSearch
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-customBlue "
            size={24}
          />
          <input
            className="border-customBlue border-2 pl-12 pr-4 py-3 w-full text-lg  focus:ring-8 focus:ring-blue-100/50  rounded-full"
            placeholder="검색어 입력"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
