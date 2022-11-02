import React, { useEffect, useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import { BottomBox, Button } from './ScrollButton.styled';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 90,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {visible && (
        <BottomBox>
          <Button onClick={scrollToTop}>
            <KeyboardDoubleArrowUpIcon />
          </Button>
        </BottomBox>
      )}
    </>
  );
};

export default ScrollButton;
