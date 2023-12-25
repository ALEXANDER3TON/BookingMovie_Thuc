import React from "react";
import MovieProfiles from "./MovieProfiles";
import ShowTimes from "./ShowTimes";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";

const Details = () => {
  const { movieID } = useParams();
  return (
    <Box sx={{
      paddingTop:9,
      background:"#37474f"
    }}>
      <Container sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <MovieProfiles movieID={movieID}/>
      <ShowTimes movieID={movieID}/>
      </Container>
    </Box>
  );
};

export default Details;
