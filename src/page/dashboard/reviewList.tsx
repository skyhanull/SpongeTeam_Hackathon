import React, { useState } from 'react';

const ReviewList = ({ items }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      {items.slice(0, showAll ? items.length : 3).map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {items.length > 3 && (
        <button onClick={toggleShowAll}>
          {showAll ? '간략히 보기' : '더보기'}
        </button>
      )}
    </div>
  );
};

export default ReviewList;
