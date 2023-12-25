import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import {PATH} from "../../../../Routes/path";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "../../../../Store/LogInPagesSlice/slice";
import style from "../header.module.scss";
const UserButton = () => {
  const { user } = useSelector((state) => state.User);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(UserAction.setLogout("logout"));
    navigate("/");
  };
  return (
    <>
      <Box className={style.userAction} sx={{paddingBottom:1}}>
        {user ? (
          <Box sx={{ display: "flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <Typography sx={{textAlign:"center"}}>{user.hoTen} </Typography>
            <Box onClick={handleLogout} className="btnStyle" sx={{margin:"0 0 12px 12px", width:"120px"}}>
              LOGOUT
            </Box>
          </Box>
        ) : (
          <Stack direction={"row"}>
            <Box onClick={() => navigate(PATH.REGISTER)} className="btnStyle">
              Register
            </Box>
            <Box onClick={() => navigate(PATH.LOG_IN)} className="btnStyle" marginLeft={3}>
              Log in
            </Box>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default UserButton;
