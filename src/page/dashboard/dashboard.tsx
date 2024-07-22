import React, { useEffect, useState } from 'react';
import MainButton from '../../components/button/mainButton';
import Search from '../../components/search/search';

import ReviewList from '../../components/list/reviewList';
// import { getUserData } from '../../api/userService';
function Dashboard() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getUserData();
  //       // setUserData(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleButtonClick = () => {
    alert('버튼이 클릭되었습니다!');
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-28">
        <MainButton
          text={'내가 들은 교육과정 후기 쓰기'}
          click={handleButtonClick}
        />
      </div>
      <Search />
      <ReviewList />
    </div>
  );
}
export default Dashboard;
