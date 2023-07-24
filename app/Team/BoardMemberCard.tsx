import React, { useState } from "react";
import {
  Typography,
  Stack,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
// const [key, setKey] = useState(0);

const BoardMemberCard = ({ boardCategory, list }) => {
  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Box
        sx={{
          alignItems: "center",
          paddingX: { xs: "5%", sm: "5%" },
          marginTop: { xs: "50%", sm: "25%", lg: "20%", xl: "10%" },
        }}
      >
        <Typography
          variant="body2"
          fontWeight="normal"
          fontSize={30}
          color="white"
          align="center"
        >
          {boardCategory.toUpperCase()}
        </Typography>

        {list.map((member) => {
          return (
            <Stack
              key={member.name}
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              alignItems="center"
              marginY={2}
              paddingX={{ xs: "5%", sm: "10%" }}
            >
              <CardMedia
                component="img"
                image={`/${member.image}`}
                alt={`${member.name}`}
                sx={{
                  borderRadius: "50%",
                  height: "180px",
                  width: "180px",
                  border: "1px solid #e3e3e3",
                }}
              />

              <CardContent>
                <Typography variant="h5" component="div" color="#fff">
                  {member.name}
                </Typography>
                <Typography variant="h6" component="div" color="#7BD9C6">
                  {member.post}
                </Typography>
                <Typography variant="body2" color="#fff" fontStyle="italic">
                  {member.researchArea}
                </Typography>
                <Typography variant="subtitle2" color="#fff">
                  {member.message}
                </Typography>
              </CardContent>
            </Stack>
          );
        })}
      </Box>
    </Stack>
  );
};

export default BoardMemberCard;
