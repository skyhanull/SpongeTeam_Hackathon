import React from 'react';
import { TextField } from '@mui/material';

export default function IconButtons({ placeholder, text, setText, title }) {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="mt-10 mb-4 font-bold">{title}</div>
      <textarea
        id="outlined-multiline-static"
        rows={10}
        value={text}
        onChange={handleChange}
        // defaultValue="Default Value"
        placeholder={`${placeholder}`}
        className="w-full rounded-2xl border-gray-200 border-2 overflow-auto resize-none p-3"
      />
      <div className="flex justify-end my-1">{text?.length} / 최대 500자</div>
    </>
  );
}
