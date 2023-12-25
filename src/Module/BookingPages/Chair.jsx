import React from "react";
import cn from "classnames";
import { Box, Button } from "@mui/material";
import style from "./bookingStyle.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { BookingPageAction } from "../../Store/BookingPagesSlice/slice";
const Chair = ({ chair }) => {
  
  const { chairBooking } = useSelector((state) => state.BookingPage);
  const dispatch = useDispatch();
  return (
    <Box
      className={cn(style.chair, {
        [style.booked]: chair.daDat,
        [style.booking]: chairBooking.find((e) => e.tenGhe === chair.tenGhe),
        [style.vipChair]: chair.loaiGhe === "Vip"
      })}
      onClick={() => {
        dispatch(BookingPageAction.setChairBooking(chair));
      }}
    >
      {chair.tenGhe}
    </Box>
  );
};

export default Chair;
