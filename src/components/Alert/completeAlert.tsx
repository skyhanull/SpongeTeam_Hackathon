import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import React from 'react';
import { BsCheck } from 'react-icons/bs';

function MainButton() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white py-6 px-28 rounded-xl shadow-lg relative">
        <div className="rounded-full bg-blue-50 inline-block p-3 ml-24 my-3">
          <BsCheck className="text-customBlue text-bold " size={30} />
        </div>
        <div className="justify-center font-bold text-2xl flex my-2">
          심사 신청 완료!
        </div>
        <p className="mb-6 font-bold text-gray-500 flex justify-center ">
          심사 완료 후 글이 등록될 예정이에요.
        </p>
        <div className="flex justify-center my-4 w-full">
          <button
            className="bg-customBlue text-white px-7  rounded-3xl border-gray-300"
            // onClick={handleClose}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
export default MainButton;
