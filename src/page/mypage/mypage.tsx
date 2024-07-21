import React, { Suspense, useEffect, useState } from 'react';
import ReviewList from '../../components/list/reviewList';
function Dashboard() {
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-center">
            <img
              src={'../../../image/basicImg.png'}
              alt={''}
              className="rounded-full w-32 h-32 object-cover my-4 "
            />
          </div>

          <div className=" flex justify-center text-2xl font-bold ">
            박태강님
          </div>
          <div className=" flex justify-center text-xl text-gray-500 mb-16">
            nick**** @gmail.com
          </div>
        </div>

        <div className="border-2 border-gray-200 "></div>
        <div className="flex justify-between my-5">
          <div className="font-bold text-2xl">작성한 후기</div>
          <div className="text-gray-500 ">총 30개</div>
        </div>
      </div>
      <ReviewList />
    </div>
  );
}
export default Dashboard;
