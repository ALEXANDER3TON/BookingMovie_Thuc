import React from "react";
import style from "./trailer.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetailsAPI } from "../../../APIs/movieAPI";
import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../../../Style/base.scss";
import ReactPlayer from "react-player";


const Trailer = ({ movieID, setOpenTrailer }) => {
  
  
  const { data = {} } = useQuery({
    queryKey: ["MOIVE_TRAILER", movieID],
    queryFn: () => getMovieDetailsAPI(movieID),
    enabled: !!movieID,
  });
 
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        background: "rgba(0,0,0,0.3)",
        width: "100%",
        height: "100%",
      }}
    >
      <Button className={style.closeBtn} onClick={() => setOpenTrailer(false)}>
        <CloseIcon />
      </Button>
      <Box
        sx={{
          position: "absolute",
          top: "18%",
          left: "25%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <ReactPlayer url={data.trailer} width={720} height={450}/>
      </Box>
    </Box>
  );
};

export default Trailer;
