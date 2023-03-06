import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {colors} from '../../utils'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

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
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <IconButton
      aria-label="delete"
      onClick={scrollToTop}
      sx={{
        display: visible ? "inline" : "none",
        position: "fixed",
        bottom: "50px",
        right: "50px",
        color: colors.secondary,
        fontSize: 25
      }}
    >
      <KeyboardDoubleArrowUpIcon />
    </IconButton>
  );
};

export default ScrollToTop;
