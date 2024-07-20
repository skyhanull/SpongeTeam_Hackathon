import React, { useState, useRef } from 'react';
import { FaTimes } from 'react-icons/fa'; // X 버튼 아이콘

function ImageUploader() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="flex items-center">
      {/* 버튼 */}
      <button
        onClick={handleClick}
        className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 border border-gray-300"
      >
        +
      </button>

      {/* 파일 입력 필드 (숨김) */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />

      {/* 이미지 미리보기 */}
      {image && (
        <div className="relative ml-4">
          <img
            src={image}
            alt="Selected"
            className="w-32 h-32 object-cover border border-gray-300 rounded"
          />
          <button
            onClick={handleRemoveImage}
            className="absolute top-1 right-1 bg-white border border-gray-300 rounded-full p-1"
          >
            <FaTimes className="text-red-500" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
