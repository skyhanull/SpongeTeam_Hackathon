import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import academyDummy from '../dummy/academyList';
import ListSearch from '../search/listSearch';
import { GoCheckCircle, GoCheckCircleFill, GoX } from 'react-icons/go';
export default function RatingComponent({ modalOpen, setModalOpen }) {
  const handleClose = () => setModalOpen(false);

  const [checkedItemId, setCheckedItemId] = useState(null);

  const checkHandler = (id) => {
    setCheckedItemId(id);
  };
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="rounded-3xl"
      >
        <Box
          className="rounded-3xl bg-white p-12 "
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 730,
            height: 850,
          }}
        >
          <div className="flex justify-between items-center mb-8 mt-5 font-bold text-xl">
            <span>교육과정 선택</span>
            <div
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <GoX size={24} />
            </div>
          </div>
          <div className="flex items-center justify-center my-4">
            <ListSearch state={false} />
            <button className="ml-2 p-1 w-16 py-3 rounded-3xl bg-customBlue text-white">
              검색
            </button>
          </div>
          <div className="overflow-y-scroll" style={{ height: '630px' }}>
            {academyDummy.length === 0 ? (
              <div>아이스아메리카노에 대한 검색 결과가 존재하지 않습니다.</div>
            ) : (
              <>
                {academyDummy.map((el) => (
                  <div
                    key={el.id}
                    className={`border-2 rounded-lg p-5 leading-8 mb-4 flex flex-row "${
                      checkedItemId === el.id
                        ? 'border-customBlue bg-blue-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-lg">{el.name}</div>
                      <div>
                        <div>
                          <div>
                            <span className="text-gray-500 inline-block w-20">
                              훈련기간
                            </span>
                            <span>{el.day}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 inline-block w-20">
                              학원명
                            </span>
                            <span>{el.academy}</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-500 inline-block w-20">
                              주소
                            </span>
                            <div>{el.address}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => checkHandler(el.id)}
                      className="flex items-center justify-center ml-4"
                    >
                      {checkedItemId === el.id ? (
                        <GoCheckCircleFill
                          size={40}
                          className="text-customBlue"
                        />
                      ) : (
                        <GoCheckCircle size={40} className="text-gray-200" />
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
