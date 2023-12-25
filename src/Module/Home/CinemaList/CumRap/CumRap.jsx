import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect } from "react";

const CumRap = ({
  TabPanel,
  lichChieuTheoRap,
  cum,
  rap,
  setRap,
  newListCumRap = [],
}) => {
  useEffect(() => {
    let index = lichChieuTheoRap.findIndex(
      (element) => element.maHeThongRap === cum
    );
    newListCumRap = lichChieuTheoRap[index]?.lstCumRap;
    if (newListCumRap?.length > 0) {
      setRap(newListCumRap[0].maCumRap);
    }
  }, [cum]);
  return (
    <Box width={"100%"} height={630} sx={{overflowY:"scroll"}}>
      {lichChieuTheoRap.map((item) => {
        return (
          <TabPanel
            value={cum}
            index={item.maHeThongRap}
            key={item.maHeThongRap}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              sx={{ borderRight: 1, borderColor: "divider"}}
              value={rap}
              onChange={(event, newValue) => {
                setRap(newValue);
              }}
            >
              {item.lstCumRap.map((item) => {
                return (
                  <Tab
                  sx={{
                    height:120
                  }}
                    label={
                      <Box>
                        <Typography sx={{ color: "red" }}>
                          {item.tenCumRap}
                        </Typography>
                        <Typography sx={{ color: "blue" }}>
                          {item.diaChi}
                        </Typography>
                      </Box>
                    }
                    value={item.maCumRap}
                    key={item.maCumRap}
                  ></Tab>
                );
              })}
            </Tabs>
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default CumRap;
