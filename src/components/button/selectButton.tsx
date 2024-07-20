import React from 'react';

export function SelectButton({ array }: any) {
  return (
    <div className="flex flex-wrap">
      {array.map((el, i) => (
        <button
          className="bg-white  rounded-full border-gray-300 m-2 flex-shrink w-52 px-4 py-1 my-4"
          key={i}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
}

export function IconTextButton({ array }: any) {
  return (
    <div className="flex flex-wrap">
      {array.map((el, i) => (
        <button
          className="bg-white rounded-full border-gray-300 m-2 flex-shrink w-28 px-4 py-1 my-4"
          key={i}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
}
