import { Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Typography
      variant="h3"
      sx={{ position: "fixed", top: 0, left: 0, width: "100%", p: 2 }}
    >
      Cheapskate Central
    </Typography>
  );
};

export default Header;
