import React from "react";
import { Button } from "@mui/material";

const Tombol = ({ label }) => {
  return (
    <Button
      variant="contained"
      style={{ backgroundColor: "#009E72", width: "max-content", padding: "10px 30px 10px 30px" }}
    >
      {label}
    </Button>
  );
};

export default Tombol;
