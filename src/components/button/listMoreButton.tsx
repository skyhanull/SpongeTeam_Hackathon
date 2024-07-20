import React from 'react';
import Button from '@mui/material/Button';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';

function IconButton() {
  return (
    <button className="bg-blue-50 text-customBlue rounded-full border-customBlue font-bold  ">
      이 학원을 추천해요
    </button>
  );
}
export default IconButton;