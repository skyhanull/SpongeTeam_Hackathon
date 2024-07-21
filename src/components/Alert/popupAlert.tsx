import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import React from 'react';

function MainButton({ title, text }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white py-6 px-28 rounded-xl shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          // onClick={handleClose}
        >
          &times;
        </button>
        <div className="text-xl font-bold my-4 flex justify-center">
          {title}
        </div>
        <p className="mb-6">{text}</p>
        <div className="flex justify-center my-4 w-full">
          <button
            className="bg-white text-gray-500 px-7  mr-6 rounded-3xl border-gray-300"
            // onClick={handleClose}
          >
            취소
          </button>
          <button
            className="bg-blue-500 text-white  px-7  rounded-3xl"
            // onClick={handleClose}
          >
            {'신청'}
          </button>
        </div>
      </div>
    </div>
  );
}
export default MainButton;
