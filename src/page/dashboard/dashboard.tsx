import React, { useEffect, useState } from 'react';
import MainButton from '../../components/button/mainButton';
import Search from '../../components/search/search';
import axios from 'axios';
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

  // useEffect(() => {
  //   const googleLogin = async () => {
  //     try {
  //       const response = await axios.post(
  //         'http://localhost:5173/api/oauth2/authorization/google',
  //         {
  //           userEmail: '무ㅏ@google.com',
  //         },
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );

  //       console.log('Response:', response.data);
  //     } catch (error) {
  //       if (error.response) {
  //         // 서버 응답이 2xx가 아닌 경우
  //         console.error('Error response:', error.response.data);
  //       } else if (error.request) {
  //         // 요청이 전송되었으나 응답을 받지 못한 경우
  //         console.error('Error request:', error.request);
  //       } else {
  //         // 요청 설정 중에 에러가 발생한 경우
  //         console.error('Error message:', error.message);
  //       }
  //     }
  //   };

  //   googleLogin();
  // }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행되도록 설정
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
