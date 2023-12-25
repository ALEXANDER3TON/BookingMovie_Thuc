import React from "react";
import Chair from "./Chair";
import { Box, Grid, Typography } from "@mui/material";

const ChairList = ({ listChairInfo }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        border: "1px solid transparent",
        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        padding: 1,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          border: "3px solid",
          padding: "10px 20px",
          width: 540,
          margin: "auto",
          textAlign: "center",
          marginBottom: 3,
        }}
      >
        Màn Hình
      </Typography>
      <Grid container columns={10} gap={"15px"} justifyContent={"center"}>
        {listChairInfo?.map((chair) => {
          return (
            <Grid item key={chair.maGhe}>
              <Chair chair={chair} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ChairList;
