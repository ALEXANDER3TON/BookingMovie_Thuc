import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMovieDetailsAPI } from "../../../APIs/movieAPI";
import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
const MovieProfiles = ({ movieID }) => {
  const {
    data = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies-details", movieID],
    queryFn: () => getMovieDetailsAPI(movieID),
    enabled: !!movieID,
  });

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box padding={9}>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <img
          src={data.hinhAnh}
          alt=""
          width={270}
          height={360}
          style={{ paddingTop: 15 }}
        />
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
            paddingTop:3
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MovieProfiles;
