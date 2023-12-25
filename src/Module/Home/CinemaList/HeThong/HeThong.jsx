import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

const HeThong = ({ lichChieuTheoRap, cum, setCum }) => {
  return (
    <Box >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        sx={{ borderRight: 1, borderColor: "divider" }}
        value={cum}
        onChange={(event, newValue) => {
          setCum(newValue);
        }}
      >
        {lichChieuTheoRap?.map((item) => {
          return (
            <Tab
              value={item.maHeThongRap}
              key={item.maHeThongRap}
              label={<img src={item.logo} alt="..." style={{ width: 80 }} />}
            ></Tab>
          );
        })}
      </Tabs>
    </Box>
  );
};

export default HeThong;
