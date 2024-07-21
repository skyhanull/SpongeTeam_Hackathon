import React from 'react';
import Button from '@mui/material/Button';

type MainButtonProps = {
  text: string;
};

function MainButton({ text }: MainButtonProps) {
  return (
    <button className="bg-customBlue py-4 px-6  text-white rounded-full font-bold  ">
      {text}
    </button>
  );
}
export default MainButton;
