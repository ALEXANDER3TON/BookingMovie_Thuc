import { GROUP_CODE } from "../constant";
import fetcher from "./fetcher";

export const getMovieShowTimesAPIs = async (movieID) => {
  try {
    const response = await fetcher.get("/QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        maPhim: movieID,
      },
    });

    return response.data.content;
  } catch (error) {}
};

export const getListCinemaAPI = async () => {
  try {
    const response = await fetcher.get(
      "/QuanLyRap/LayThongTinLichChieuHeThongRap",
      {
        params: {
          maNhom: GROUP_CODE,
        },
      }
    );
    return response.data.content
  } catch (error) {}
};
