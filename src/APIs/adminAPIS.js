import { CURRENT_USER, GROUP_CODE } from "../constant";
import fetcher from "./fetcher";

// Thêm phim
export const addMovieAPI = async (payload) => {
  try {
    const response = await fetcher.post(
      "/QuanLyPhim/ThemPhimUploadHinh",
      payload
    );
    return response.data.content;
  } catch (error) {
    throw "Error!!";
  }
};

// Xoá Phim
export const deleteMovieAPI = async (movieID) => {
  try {
    const response = await fetcher.delete("/QuanLyPhim/XoaPhim", {
      params: {
        maPhim: movieID,
      },
    });
    return response.data.content;
  } catch (error) {
    throw "Error!!";
  }
};

// Lấy danh sách phim (GET) (Lấy API từ movieAPI)

// Cập nhật phim
export const updateMovieAPI = async (formData) => {
  try {
    const response = await fetcher.post(
      "/QuanLyPhim/CapNhatPhimUpload",
      formData
    );
    return response.data.content;
  } catch (err) {
    throw "Error!!";
  }
};

// Lấy danh sách người dùng
export const getListUser = async () => {
  try {
    const response = await fetcher.get(
      "/QuanLyNguoiDung/LayDanhSachNguoiDung",
      {
        params: {
          maNhom: GROUP_CODE,
        },
      }
    );
    return response.data.content;
  } catch (err) {
    throw "Error!!";
  }
};

// Xoá người dùng
export const deleteUserAPI = async (userID) => {
  try {
    const response = await fetcher.delete("/QuanLyNguoiDung/XoaNguoiDung", {
      params: {
        taiKhoan: userID,
      },
    });
    return response.data.content;
  } catch (error) {
    throw "Error!!";
  }
};
// Lấy danh sách loại người dùng
export const userType = async () => {
  try {
    const response = await fetcher.get(
      "/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"
    );
    return response.data.content;
  } catch (err) {
    throw "Error!!";
  }
};

// Thêm người dùng
export const addUser = async () => {
  try {
    const response = await fetcher.post("/QuanLyNguoiDung/ThemNguoiDung");

    console.log("respon", response.data);

    // return response.data.content;
  } catch (err) {
    throw "Error!!";
  }
};

// Cập nhật người dùng
export const updateUser = async (formData) => {
  try {
    const response = await fetcher.post(
      "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      formData
    );
    return response.data.content;
  } catch (err) {
    throw "Error!!";
  }
};
