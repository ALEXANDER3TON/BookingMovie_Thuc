import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GROUP_CODE } from "../../../../constant";

import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { addUser, getListUser, userType } from "../../../../APIs/adminAPIS";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AddUser = () => {
  const isUserAdmin = true;
  const defaultUserRole = isUserAdmin ? "QuanTri" : "KhachHang";

  const { register, handleSubmit } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: GROUP_CODE,
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    mode: "all",
    // resolver: yupResolver(schemaAddUser),
  });

  const { data: typeUser } = useQuery({
    queryKey: ["type-user"],
    queryFn: userType,
  });

  const onSubmit = (formValues) => {
    const body = new FormData();
    formData.append("taiKhoan", formValues.taiKhoan);
    formData.append("matKhau", formValues.matKhau);
    formData.append("email", formValues.email);
    formData.append("soDt", formValues.soDt);
    formData.append("maNhom", formValues.maNhom);
    formData.append("maLoaiNguoiDung", formValues.maLoaiNguoiDung);
    formData.append("hoTen", formValues.hoTen);
    handleAddUser(body);
    console.log("handleAddUser(formData): ", handleAddUser(formData));
  };

  const { mutate: handleAddUser } = useMutation({
    mutationFn: addUser,
    onSuccess: (data) => {
      // QueryClient.refetchQueries(["type-user"]);
      console.log("Add User", data);
    },
  });

  // const schemaAddUser = yup.object({
  //   taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
  // });
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "23px",
          fontWeight: 700,
          marginLeft: 36,
        }}
      >
        THÊM NGƯỜI DÙNG MỚI
      </Typography>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ marginTop: 3 }}
      >
        <Grid item md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} direction={"column"}>
              <TextField
                label="Tài khoản"
                sx={{ width: 600 }}
                {...register("taiKhoan")}
                // error={Boolean(errors.taiKhoan)}
                // helperText={Boolean(errors.taiKhoan) && errors.taiKhoan.message}
              />

              <TextField
                label="Mật khẩu"
                sx={{ width: 600 }}
                {...register("matKhau")}
                // error={Boolean(errors.matKhau)}
                // helperText={Boolean(errors.matKhau) && errors.matKhau.message}
              />
              <TextField
                label="Email"
                sx={{ width: 600 }}
                {...register("email")}
                // error={Boolean(errors.email)}
                // helperText={Boolean(errors.email) && errors.email.message}
              />

              <TextField
                label="Số điện thoại"
                sx={{ width: 600 }}
                {...register("soDt")}
                // error={Boolean(errors.soDt)}
                // helperText={Boolean(errors.soDt) && errors.soDt.message}
              />
              <TextField
                label="Họ tên"
                sx={{ width: 600 }}
                {...register("hoTen")}
                // error={Boolean(errors.hoTen)}
                // helperText={Boolean(errors.hoTen) && errors.hoTen.message}
              />
              {/* Select */}
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ marginLeft: 15 }}
                ></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Khách Hàng"
                  {...register("maLoaiNguoiDung")}
                  defaultValue={defaultUserRole}
                >
                  {typeUser &&
                    typeUser.map((item) => (
                      <MenuItem
                        value={item.maLoaiNguoiDung}
                        key={item.maLoaiNguoiDung}
                      >
                        {item.tenLoai}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <Button variant="contained" size="large" type="submit">
                Thêm người dùng
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AddUser;
