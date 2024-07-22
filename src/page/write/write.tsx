import React, { Suspense, useEffect, useState } from 'react';
import { TbCircleNumber1Filled } from 'react-icons/tb';
import TextInput from '../../components/input/textInput';
import {
  SelectButton,
  IconTextButton,
} from '../../components/button/selectButton';
import RactingComponent from '../../components/Rating/rating';
import TextField from '../../components/input/inputArea';
import RecommandBtn from '../../components/button/iconButton';
import FileUpload from '../../components/file/uploader';
import MainButton from '../../components/button/mainButton';
import AcademyModal from '../../components/Modal/academyModal';
import PopupAlert from '../../components/Alert/popupAlert';
import ConfrimAlert from '../../components/Alert/completeAlert';
import ListSearch from '../../components/search/listSearch';
function Dashboard() {
  const classArray = [{ name: '온라인' }, { name: '오프라인' }];
  const fieldArray = [
    { name: '백엔드' },
    { name: '오프라인' },
    { name: '온라인' },
    { name: '오프라인' },
    { name: '온라인' },
    { name: '오프라인' },
  ];
  const [goodText, setGoodText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className=" my-20">
        <div className="text-4xl font-bold">
          내일배움카드 교육과정 후기 쓰기
        </div>
        <div className="text-gray-600">
          여러분의 생생한 후기를 들려주세요 😊
        </div>
      </div>
      <div>
        <div className="flex flex-wrap my-6 items-center">
          <TbCircleNumber1Filled className="text-cyan-500" size={24} />
          &nbsp;
          <span className="font-bold text-xl">
            교육과정 기본정보를 입력해주세요
          </span>
        </div>

        <div className="border-2 border-gray-200 "></div>
        <div className="leading-10 my-10">
          <div className="flex flex-row items-center">
            <span className="w-40 font-bold"> 교육과정명</span>
            <ListSearch state={false} />
            <button
              onClick={() => setModalOpen(!modalOpen)}
              className=" w-20 py-0 ml-2"
            >
              검색
            </button>
          </div>
          <div className="flex flex-row items-center">
            <span className="w-40 font-bold">교육기관명</span>
            <ListSearch state={true} />
          </div>
          <div className="flex flex-row items-center">
            <span className="w-40 font-bold">주소</span>
            <ListSearch state={true} />
          </div>
          <div className="flex flex-row items-center">
            <span className="w-40 font-bold">강사명(선택)</span>
            <ListSearch state={false} />
          </div>
          <div className="flex flex-row items-center">
            <span className="w-40 font-bold">수업방식</span>
            <SelectButton array={classArray} />
          </div>
          <div className="flex flex-row items-center">
            <span className="w-40 font-bold">전공여부</span>
            <SelectButton array={classArray} />
          </div>
          <div className="flex flex-row items-center ">
            <span className="w-40 font-bold">분야</span>
            <IconTextButton array={fieldArray} />
          </div>
          <div className="flex flex-row items-center ">
            <span className="w-40 font-bold">수강상태</span>
            <SelectButton array={classArray} />
          </div>
          <div className="flex flex-row items-center">
            <span className="w-40 font-bold">팀플여부</span>
            <SelectButton array={classArray} />
          </div>
          <div className="flex flex-row items-center">
            <span className="w-40 font-bold">별점</span>
            <RactingComponent value={3.5} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap  my-6 items-center">
          <TbCircleNumber1Filled className="text-cyan-500" size={24} />
          &nbsp;
          <span className="font-bold text-xl">교육과정은 어떠셨나요?</span>
        </div>
        <div className="border-2 border-gray-200 "></div>
        <span>
          <TextField
            title={'좋았던 점'}
            placeholder={'교육과정 중에 좋았던 점을 들려주세요'}
            text={goodText}
            setText={setGoodText}
          />
        </span>
        <span>
          <TextField
            title={'아쉬웠던 점'}
            placeholder={'교육과정 중에 아쉬웠던 점을 들려주세요'}
            text={goodText}
            setText={setGoodText}
          />
        </span>
        <span>
          <TextField
            title={'학원에 바라는 점'}
            placeholder={'학원에 바라는 점을 들려주세요'}
            text={goodText}
            setText={setGoodText}
          />
        </span>
      </div>
      <div className="leading-6 my-8">
        <div className="font-bold">추천여부</div>
        <span className="text-gray-600">
          이 학원을 다른 사람에게 추천하나요?
        </span>
        <RecommandBtn />
      </div>
      <div className="leading-6 my-8">
        <span className="font-bold">수료(강)증 사진</span>
        <div>
          수료한 사실을 증명하기 위한 수료증 사진을 올려주세요. (본인 수료
          인증여부 심사를 위해 사용된 후 즉시 폐기됩니다.)
        </div>
        {/* <FileUpload /> */}
      </div>
      <div className="flex justify-center">
        <MainButton text={'심사신청'} />
      </div>
      <AcademyModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {/* <PopupAlert
        title={'심사를 신청할까요?'}
        text={'심사 중에는 작성한 글 수정이 불가능해요.'}
      /> */}
      {/* <ConfrimAlert /> */}
    </div>
  );
}
export default Dashboard;
