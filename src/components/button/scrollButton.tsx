import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
// import { ArrowUpward } from '@mui/icons-material';
import { FaArrowUp } from 'react-icons/fa6';
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {visible && (
        <Fab onClick={scrollToTop} className="bg-gray-600 ">
          <FaArrowUp className="text-white" />
        </Fab>
      )}
    </div>
  );
};

export default ScrollToTop;
