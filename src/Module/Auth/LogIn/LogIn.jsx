import { LoadingButton } from "@mui/lab";
import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../Routes/path";
import { loginUser } from "../../../Store/LogInPagesSlice/slice";
import { useDispatch } from "react-redux";
import "../../../Style/base.scss";
const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
  });

  const onSubmit = (values) => {
    dispatch(loginUser(values)).then((result) => {
      if (result.payload.maLoaiNguoiDung === "KhachHang") {
        navigate(PATH.HOME);
      }

      if (result.payload.maLoaiNguoiDung === "QuanTri") {
        navigate(PATH.ADMIN);
      }
    });
  };
  return (
    <Container>
      <Box padding={12}>
        <Typography
          sx={{ fontSize: "36px", fontWeight: "600" }}
          textAlign={"center"}
        >
          Đăng nhập
        </Typography>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item lg={6} xs={10}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack
                spacing={3}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <TextField
                  label="Tài Khoản"
                  fullWidth
                  {...register("taiKhoan")}
                />
                <TextField
                  label="Mật Khẩu"
                  type="password"
                  fullWidth
                  {...register("matKhau")}
                />
                <LoadingButton
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="warning"
                >
                  Đăng Nhập
                </LoadingButton>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LogIn;
