import React from "react";
import { Box } from "@mui/material";
import Ex3Table from "./Ex3Table";
import Ex3Chart from "./Ex3Chart";

function Ex3() {
  return (
    <Box
      sx={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        width: "50%", // 너비가 부모 요소의 100%를 차지
        maxWidth: "1900px", // 최대 너비 설정
        height: "auto", // 높이 자동 조정
        gap: "20px",
        margin: "10px",
        flexGrow: 0,
      }}
    >
      <div>
        <Ex3Table />
        <Ex3Chart />
      </div>
    </Box>
  );
}

export default Ex3;
