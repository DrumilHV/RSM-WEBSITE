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
          <Box
            width={"100%"}
            height={{ xs: "20%", sm: "10%" }}
            sx={{
              mt: { xs: 10, sm: 11, md: 12, lg: 10 },
              ...responsiveStyles,
              backgroundColor: "#233D33",
              // alignItems: "center",
              zIndex: "1",
            }}
            // position="fixed"
          >
            <Typography
              sx={{
                flexGrow: 1,
                textAlign: { xs: "center", sm: "left" },
                color: "white",
                // margin: { xs: "2%", sm: "1%" },
                alignContent: "center",
              }}
              variant="h5"
            >
              Our Team
            </Typography>
            <Typography
              textAlign={{ xs: "center", sm: "right" }}
              // sx={{ margin: { xs: "1%", sm: "2%" } }}
            >
              <Link href={`/`}>Home</Link> / Team
            </Typography>
          </Box>
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
