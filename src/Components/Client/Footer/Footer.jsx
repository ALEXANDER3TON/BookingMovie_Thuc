import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo1 from "../../../constant/LogoDoiTac/1.png"
import logo2 from "../../../constant/LogoDoiTac/2.png"
import logo3 from "../../../constant/LogoDoiTac/3.png"
import logo4 from "../../../constant/LogoDoiTac/4.png"
import logo5 from "../../../constant/LogoDoiTac/5.png"
import logo6 from "../../../constant/LogoDoiTac/6.png"
import logo7 from "../../../constant/LogoDoiTac/7.jpg"
import logo8 from "../../../constant/LogoDoiTac/8.png"
import logo9 from "../../../constant/LogoDoiTac/9.png"
import logo10 from "../../../constant/LogoDoiTac/10.jpg"
import style from "./footer.module.scss"
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <Box>
      <Box padding={3} sx={{
        background: "rgba(0, 0, 0, 0.9)"
      }}>
        <Grid container spacing={6}>
          <Grid item xs={10} md={4} color={"white"} >
            <Typography variant="h4">CyberFilm</Typography>
            <Typography>FAQ</Typography>
            <Typography>Brand Guidelines</Typography>
            <Typography>Thỏa thuận sử dụng</Typography>
            <Typography>Chính sách bảo mật</Typography>
          </Grid>
          <Grid item xs={10} md={4} color={"white"}>
              <Typography variant="h4">Đối Tác</Typography>
              <Box className={style.logoDoiTac} flexWrap={"nowrap"}>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
                <img src={logo7} alt="" />
                <img src={logo8} alt="" />
                <img src={logo9} alt="" />
                <img src={logo10} alt=""  />
              </Box>
          </Grid>
          <Grid item xs={10} md={4}>
            <Box display={"flex"} color={"white"} justifyContent={"space-around"} alignItems={"center"}>
              <Box className={style.mobileApp} >
                <Typography variant="h4" paddingBottom={3}>Mobile App</Typography>
                <AndroidIcon sx={{fontSize:"3rem"}}/>
                <AppleIcon sx={{fontSize:"3rem"}}/>
              </Box>
              <Box className={style.socialApp}>
                <Typography variant="h4" paddingBottom={3}>Social</Typography>
                <FacebookIcon sx={{fontSize:"3rem"}}/>
                <TwitterIcon sx={{fontSize:"3rem"}}/>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
