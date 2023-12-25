import { Box, Button, Typography } from "@mui/material";
import React from "react";
import style from "./phoneApp.module.scss";
import phone from "../../../constant/Phone.png";
import logo from "../../../constant/logo.png";
import "../../../Style/base.scss";
const PhoneApp = () => {
  return (
    <Box className={style.phoneAppBackGround}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        className={style.phoneAppContent}
      >
        <Box
          width={"60%"}
          padding={9}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h3" sx={{ color: "white" }}>
            Ứng dụng tiện lợi dành cho người yêu điện ảnh
          </Typography>
          <Typography sx={{ color: "whitesmoke" }} paddingBottom={3}>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </Typography>
          <Button className="btnStyle" sx={{ width: 270 }}>
            App miễn phí - Tải về ngay
          </Button>
          <Typography paddingTop={6} sx={{ color: "red" }} fontSize={"1rem"}>
            CyberFilm có mặt trên cả <a href="">IOS</a> và{" "}
            <a href="">Android</a>
          </Typography>
        </Box>
        <Box width={"39%"} className={style.phoneImg}>
          <img
            src={phone}
            alt="..."
            style={{ width: "100%", height: "450px" }}
            className={style.phone}
          />
          <img
            src={logo}
            alt="..."
            style={{ width: "72px" }}
            className={style.logoApp}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PhoneApp;
