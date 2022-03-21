import { Avatar, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SingleComment = ({ percomment }) => {
  // console.log(percomment);
  const { comment, user } = percomment;
  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Box className="d-flex justify-content-start align-items-center gap-2">
          <Avatar
            src={
              user?.picture
                ? user?.picture
                : `data:image/jpeg;base64,${user?.pictur1}`
            }
          ></Avatar>
          <Typography>{user.name}</Typography>
        </Box>

        <Paper
          sx={{ boxShadow: 1 }}
          style={{ width: "70%", padding: 14, borderRadius: 6, margin: 8 }}
        >
          <Typography>{comment}</Typography>
        </Paper>
      </Box>
    </>
  );
};

export default SingleComment;
