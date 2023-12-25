import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { GROUP_CODE } from "../../../../constant";
import { DatePicker } from "@mui/x-date-pickers";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import dayjs from "dayjs";
import { addMovieAPI } from "../../../../APIs/adminAPIS";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Thư viện Yup để xử lý ERROR
const schemaAddMovie = yup.object({
  tenPhim: yup
    .string()
    .required("Vui lòng nhập tên phim")

    .max(200, "Không đượt vượt quá 200 ký tự"),
  trailer: yup
    .string()
    .required("Vui lòng nhập trailer phim")
    .max(200, "Không đượt vượt quá 200 ký tự"),
  moTa: yup
    .string()
    .required("Vui lòng nhập mô tả phim")
    .max(200, "Không đượt vượt quá 200 ký tự"),
  ngayKhoiChieu: yup.string().required("Ngày khởi chiếu không được để trống"),
  danhGia: yup
    .string()
    .required("Vui lòng nhập đánh giá")
    .matches(/^(10|[0-9])$/, "Phim phải được đánh giá trên thang điểm 10"),
});

const AddMovie = () => {
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    register,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      maNhom: GROUP_CODE,
      ngayKhoiChieu: "",
      sapChieu: true,
      dangChieu: false,
      hot: true,
      danhGia: "",
      hinhAnh: undefined,
    },
    mode: "all",
    // resolver: yupResolver(schemaAddMovie),
  });

  // Delete Img
  const file = watch("hinhAnh");
  console.log("file: ", file);

  // useQuery({queryKey:[list-movie-admin]})
  const { mutate: handleAddMovie } = useMutation({
    mutationFn: (payload) => addMovieAPI(payload),
    onSuccess: () => {
      // Sử dụng QueryClient để fetch lại data khi thêm
      queryClient.invalidateQueries({ queryKey: ["admin-movie-table"] });
    },
  });

  const onSubmit = (formValues) => {
    console.log("formValues", formValues.hinhAnh[0]);
    const formData = new FormData();
    formData.append("tenPhim", formValues.tenPhim);
    formData.append("trailer", formValues.trailer);
    formData.append("moTa", formValues.moTa);
    formData.append("maNhom", formValues.maNhom);
    formData.append("sapChieu", formValues.sapChieu);
    formData.append("dangChieu", formValues.dangChieu);
    formData.append("hot", formValues.hot);
    formData.append("danhGia", formValues.danhGia);
    formData.append("hinhAnh", formValues.hinhAnh[0]);
    handleAddMovie(formData);
  };
  // Mô tả chức năng cập nhật
  // useEffect(() => {
  //   if (data) {
  //     setValue("dangChieu", "");
  //     setValue("tenPhim", "");
  //   }
  // }, [data]);
  // Upload File
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const previewImage = (file) => {
    return URL.createObjectURL(file);
  };

  useEffect(() => {
    if (file?.length > 0) {
      console.log("previewImage: ", previewImage(file?.[0])); //url
    }
  }, [file]);
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
        THÊM PHIM MỚI
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
                label="Tên phim"
                sx={{ width: 600 }}
                {...register("tenPhim")}
                error={Boolean(errors.tenPhim)}
                helperText={Boolean(errors.tenPhim) && errors.tenPhim.message}
              />

              <TextField
                label="Trailer"
                sx={{ width: 600 }}
                {...register("trailer")}
                error={Boolean(errors.trailer)}
                helperText={Boolean(errors.trailer) && errors.trailer.message}
              />
              <TextField
                label="Mô tả"
                sx={{ width: 600 }}
                {...register("moTa")}
                error={Boolean(errors.moTa)}
                helperText={Boolean(errors.moTa) && errors.moTa.message}
              />
              <Controller
                control={control}
                name="ngayKhoiChieu"
                render={(field) => {
                  return (
                    <DatePicker
                      label="Ngày chiếu"
                      sx={{ width: 600 }}
                      format="DD/MM/YYYY"
                      onChange={(date) => {
                        const value = dayjs(date).format("DD/MM/YYYY");
                        setValue("ngayKhoiChieu", value);
                        console.log(value);
                      }}
                      {...field}
                    />
                  );
                }}
              />

              <TextField
                label="Đánh giá"
                sx={{ width: 600 }}
                {...register("danhGia")}
                error={Boolean(errors.danhGia)}
                helperText={Boolean(errors.danhGia) && errors.danhGia.message}
              />

              {!file && (
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Tải ảnh lên
                  <VisuallyHiddenInput
                    style={{ textAlign: "center", marginLeft: 30 }}
                    type="file"
                    {...register("hinhAnh")}
                  />
                </Button>
              )}

              {file?.length > 0 && (
                <>
                  <img src={previewImage(file[0])} width={240} />
                  <Button onClick={() => setValue("hinhAnh", undefined)}>
                    Xoá hình
                  </Button>
                </>
              )}
              <Button variant="contained" size="large" type="submit">
                Thêm Phim
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AddMovie;
