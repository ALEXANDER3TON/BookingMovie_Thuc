import React from "react";
import { Link } from "react-router-dom";
import style from "../header.module.scss";
import logo from "../../../../constant/logo.png";
import { Box, CardMedia, Typography } from "@mui/material";
const Logo = () => {
  return (
    <Box className={style.logo}>
      <Link to="/">
        <img
          src={logo}
          alt=""
          style={{
            width: "90px",
            height: "60px",
          }}
        />
      </Link>
    </Box>
  );
};

export default Logo;
