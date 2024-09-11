import React from "react";
import { Box } from "@mui/material";
import Excel4Table from "./Excel4Table";
import Excel4Chart from "./Excel4Chart";

function Excel4() {
  return (
    <Box
      sx={{
        background: "white",
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        width: "1600px",
        height: "500px",
        gap: "10px", // gap을 줄여 여백 최소화
        margin: "0px auto",
      }}
    >
      <Excel4Table />
      <Excel4Chart />
    </Box>
  );
}

export default Excel4;
