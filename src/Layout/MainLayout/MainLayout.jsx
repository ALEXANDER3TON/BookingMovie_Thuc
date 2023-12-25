import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Lottie from "lottie-react";
import loadingAnimation from "../../constant/loadingAnimation.json";
import Header from "../../Components/Client/Header";
import Footer from "../../Components/Client/Footer";
const MainLayout = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2700);
  }, []);
  return (
    <Box>
      {loading ? (
        <Lottie loop={true} animationData={loadingAnimation} style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"669px"}}/>
      ) : (
        <Box>
          <Header/>
          <Outlet />
          <Footer/>
        </Box>
      )}
    </Box>
  );
};

export default MainLayout;
