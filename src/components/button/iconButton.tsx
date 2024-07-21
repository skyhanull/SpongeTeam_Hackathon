import React from 'react';
import Button from '@mui/material/Button';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';

function IconButton() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row items-center">
        <button className="bg-white rounded-full border-gray-200 font-bold px-4 py-2 mx-2  my-3 flex items-center">
          이 학원을 추천해요
          <GoThumbsup className="ml-2" />
        </button>
      </div>
      <div className="flex flex-row items-center">
        <button className="bg-white rounded-full border-gray-200 font-bold px-4 mx-2 py-2 my-3 flex items-center">
          이 학원을 추천해요
          <GoThumbsdown className="ml-2" />
        </button>
      </div>
    </div>
  );
}
export default IconButton;
