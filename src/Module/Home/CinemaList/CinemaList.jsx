import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getListCinemaAPI } from "../../../APIs/cinemaAPIs";
import "../../../Style/base.scss";
import style from "./cinema.module.scss"
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import HeThong from "./HeThong";
import FilmLichChieu from "./FilmLichChieu";
import CumRap from "./CumRap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

const CinemaList = () => {
  const [cum, setCum] = useState("");
  const [rap, setRap] = useState("");

  const { data: lichChieuTheoRap = [] } = useQuery({
    queryKey: ["LIST_CINEMA"],
    queryFn: getListCinemaAPI,
  });
  let newListCumRap = [];
  useEffect(() => {
    if (lichChieuTheoRap.length > 0) {
      setCum(lichChieuTheoRap[0].maHeThongRap);
      lichChieuTheoRap.map((item) => {
        item.lstCumRap.map((item) => {
          newListCumRap.push(item);
        });
      });
      if (newListCumRap.length > 0) {
        setRap(newListCumRap[0].maCumRap);
      }
    }
  }, [lichChieuTheoRap]);

  return (
    <Container height={100} className={style.cinema}>
      <Box
        width={"100%"}
        sx={{
          marginY: 3,
          padding: 3,
          borderRadius:3,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Grid container>
          <Grid item xs={1}>
            <HeThong
              lichChieuTheoRap={lichChieuTheoRap}
              cum={cum}
              setCum={setCum}
            />
          </Grid>
          <Grid item xs={5}>
            <CumRap
              TabPanel={TabPanel}
              lichChieuTheoRap={lichChieuTheoRap}
              cum={cum}
              rap={rap}
              setRap={setRap}
              newListCumRap={newListCumRap}
            />
          </Grid>
          <Grid item xs={6}>
            <FilmLichChieu
              lichChieuTheoRap={lichChieuTheoRap}
              rap={rap}
              TabPanel={TabPanel}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CinemaList;
