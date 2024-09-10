import React from "react";
import { Box } from "@mui/material";
import Ex3 from "./Ex3";
//import Ex4 from "./Ex4";

const Page4 = () => {
  return (
    <main>
      <Box
        className="page3-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "2000px",
          background: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ex3 />
      </Box>
    </main>
  );
};

export default Page4;
