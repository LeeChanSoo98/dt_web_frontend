import React from "react";
import "../../CSS/main.css";
import { Box, Typography } from "@mui/material";

function ChartBox4() {
  return (
    <Box
      className="chart-box4"
      sx={{
        border: "1px solid rgb(211, 211, 211)",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid rgb(211, 211, 211)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
          height: "30px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ margin: "0px", padding: "0px", fontSize: "14px" }}
        >
          용접 불량률 관리
        </Typography>
      </Box>
    </Box>
  );
}

export default ChartBox4;
