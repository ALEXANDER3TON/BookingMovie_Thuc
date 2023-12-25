import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Showing from "./Showing/Showing";
import QuickBooking from "./QuickBooking";
import { Box, Container } from "@mui/material";
import CinemaList from "./CinemaList/CinemaList";
import PhoneApp from "./PhoneApp";

const HomeModule = () => {
  return (
    <Box>
      <Banner />
      <QuickBooking />
      <Showing />
      <CinemaList />
      <PhoneApp/>
    </Box>
  );
};

export default HomeModule;
