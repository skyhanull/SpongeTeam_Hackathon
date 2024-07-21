import React from 'react';
import { FaSearch } from 'react-icons/fa';

const ListSearch = ({ state }: any) => {
  return (
    <div className="flex items-center justify-center flex-grow my-3">
      <input
        className={`border-gray-200 border-2 rounded-full w-full px-3 ${
          state ? 'bg-slate-100' : 'bg-white'
        }`}
        placeholder="검색어 입력"
        readOnly={state ? true : false}
      />
    </div>
  );
};

export default ListSearch;
