import React from "react";
import Nav from "../../components/Nav";
import { AppBar, Stack, Typography, Grid, Box } from "@mui/material";
import Link from "next/link";
import BoardMemberCard from "./BoardMemberCard";
import { executiveBoard, technicalTeam } from "./BoardMemberArray";

const responsiveStyles = {
  xs: {
    padding: "8px", // Adjust padding for smaller devices
  },
  sm: {
    padding: "20px", // Adjust padding for medium-sized devices
  },
  md: {
    padding: "32px", // Adjust padding for large devices
  },
};

const page = () => {
  return (
    <>
      <Stack direction="column" alignContent="center">
        <Box sx={{}}>
          <Nav />
        </Box>
        <Box>
          <AppBar
            sx={{
              mt: { xs: 10, sm: 11, md: 12, lg: 10 },
              ...responsiveStyles,
              zIndex: "0",
            }}
            // position="fixed"
          >
            <Typography
              sx={{
                flexGrow: 1,
                textAlign: { xs: "center", sm: "left" },
                color: "white",
              }}
              variant="h5"
            >
              Our Team
            </Typography>
            <Typography textAlign={{ xs: "center", sm: "right" }}>
              <Link href={`/`}>Home</Link> / Team
            </Typography>
          </AppBar>
        </Box>
        <BoardMemberCard
          boardCategory={"executive board"}
          list={executiveBoard}
        />
        <BoardMemberCard
          boardCategory={"TECHNICAL TEAM"}
          list={technicalTeam}
        />
      </Stack>
    </>
  );
};

export default page;
