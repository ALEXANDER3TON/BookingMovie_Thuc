import { Box, Button, Grid, Stack } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { useNavigate } from "react-router-dom";

const FilmLichChieu = ({ lichChieuTheoRap, rap, TabPanel }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ height: 630, overflowY: "scroll" }}>
      {lichChieuTheoRap.map((item) => {
        return item.lstCumRap.map((item) => {
          return (
            <TabPanel value={rap} index={item.maCumRap}>
              {item.danhSachPhim.map((item) => {
               
                return (
                  <Grid container paddingBottom={3}>
                    <Grid item xs={3} >
                      <img
                        src={item.hinhAnh}
                        alt=""
                        width={"100%"}
                        height={180}
                        style={{margin:1}}
                      />
                    </Grid>
                    <Grid item xs={9} >
                      {item.lstLichChieuTheoPhim.map((item) => {
                        const times = dayjs(item.ngayChieuGioChieu).format(
                          "DD/MM/YYYY ~ hh:mm"
                        );
                        return (
                          <Button
                            sx={{ height: 45, color: "orange", margin:1 }}
                            variant="outlined"
                            onClick={() => {
                              navigate(`/booking/${item.maLichChieu}`);
                            }}
                          >
                            {times}
                          </Button>
                        );
                      })}
                    </Grid>
                  </Grid>
                );
              })}
            </TabPanel>
          );
        });
      })}
    </Box>
  );
};

export default FilmLichChieu;
