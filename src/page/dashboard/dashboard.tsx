import React, { Suspense, useEffect, useState } from 'react';
import MainButton from '../../components/button/mainButton';
import Search from '../../components/search/search';
import { Rating } from '@mui/material';
import { getUserData } from '../../api/userService';
function Dashboard() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        // setUserData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      dㅇ나d
      <MainButton />
      <Search />
      <div className="border-2 text-slate-200">
        <div>Ansible 자동화로 구현한 아마존 AWS 클라우드 환경 DevOps</div>
        <div>
          평균별점{' '}
          <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
          3,000개의 리뷰
        </div>
        <div>
          훈련기관 (주)솔데스크((03190) 서울특별시 종로구 종로12길 15 (관철동
          종로코아) 5층, 8층, 9층, 10층)
        </div>
        <div>수강년도 2024</div>
        <div className="border-2 border-gray-200 "></div>
        <div>
          <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
          <div>백엔드 | 나코딩 | 팀플여부 Y | 2024.07</div>
          <div>좋았던 점</div>
          <div>좋았던 점</div>
          <div>좋았던 점</div>
          <div></div>
          <div className="border-2 border-gray-200 "></div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
