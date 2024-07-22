import { useState } from 'react';
import RactingComponent from '../../components/Rating/rating';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';
import { FaRegHeart } from 'react-icons/fa6';
import IconButton from '../../components/button/iconButton';
import DashboardList from '../dummy/dashboardList';
import TruncatedText from '../../utilities/textForm';
import MainDummy from '../dummy/dashboardList';

// import { getUserData } from '../../api/userService';
function ReviewList() {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <>
      {MainDummy.map((el) => (
        <div
          className="border-2 border-slate-200  rounded-3xl p-10"
          key={el.id}
        >
          <div className="text-3xl flex font-bold">
            Ansible 자동화로 구현한 아마존 AWS 클라우드 환경 DevOps
          </div>
          <div className="leading-10 mt-3 mb-3">
            <div className="flex items-center">
              <span> 평균별점 </span>
              <RactingComponent value={3.5} />
              3,000개의 리뷰
            </div>
            <div>
              훈련기관 (주)솔데스크((03190) 서울특별시 종로구 종로12길 15
              (관철동 종로코아) 5층, 8층, 9층, 10층)
            </div>
            <div>수강년도 2024</div>
          </div>

          <div className="border-2 border-gray-200 "></div>
          {el?.reviewList
            ?.slice(0, showAll ? el?.reviewList.length : 3)
            ?.map((item) => (
              <div className="mt-3 mb-3 leading-10 " key={item.id}>
                <RactingComponent value={3.5} />
                <div>백엔드 | 나코딩 | 팀플여부 Y | 2024.07</div>
                <span className="flex items-center font-bold gap-2">
                  <GoThumbsup
                    className="text-customBlue"
                    style={{ strokeWidth: 1, stroke: 'currentColor' }}
                  />
                  <span className="text-customBlue">좋았던 점</span>
                </span>
                <TruncatedText text={item.reviewPro} maxLength={201} />
                <span className="flex items-center font-bold gap-2">
                  <GoThumbsdown
                    className="text-rose-400"
                    style={{ strokeWidth: 1, stroke: 'currentColor' }}
                  />
                  <span className="text-rose-400">아쉬웠던 점</span>
                </span>
                <TruncatedText text={item.reviewPro} maxLength={201} />
                <span className="flex items-center font-bold gap-2">
                  <FaRegHeart
                    className="text-yellow-400"
                    style={{ strokeWidth: 1, stroke: 'currentColor' }}
                  />
                  <span className="text-yellow-400">학원에 바라는 점</span>
                </span>
                <div>
                  <TruncatedText text={item.reviewPro} maxLength={201} />
                </div>
                <IconButton />
              </div>
            ))}
          {/* {el?.reviewList?.length > 3 && (
            <button onClick={toggleShowAll}>{showAll ? '' : '더보기'}</button>
          )} */}
          <div className="flex justify-center">
            {!showAll ? (
              <button
                onClick={toggleShowAll}
                className="bg-white border-gray-200 rounded-3xl "
              >
                {showAll
                  ? ''
                  : `${+el?.reviewList?.length - 3}개의 후기 더보기`}
              </button>
            ) : (
              ''
            )}
          </div>

          <div className="border-2 border-gray-200 mt-3 mb-3"></div>
        </div>
      ))}
    </>
  );
}
export default ReviewList;
