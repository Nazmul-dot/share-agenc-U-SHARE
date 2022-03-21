import { Avatar, Typography, Box, Rating } from "@mui/material";
import {} from "@mui/system";
import React from "react";

const Comment = ({ reviw }) => {
  // console.log(reviw);
  return (
    <Box sx={{ mb: 5 }}>
      <Box className="d-flex justify-content-start align-items-center gap-2">
        <Avatar
          src={
            reviw?.picture
              ? reviw.picture
              : `data:image/jpeg;base64,${reviw?.picture1}`
          }
        ></Avatar>
        <Typography>{reviw?.name}</Typography>
      </Box>
      <Box sx={{ ml: 2 }}>
        <Typography component="legend">
          Rating {reviw.rating} out of 5
        </Typography>
        <Rating
          name="read-only"
          value={reviw?.rating}
          readOnly
          precision={0.5}
        />
      </Box>
      <Box
        sx={{ boxShadow: 1 }}
        style={{ width: "60%", padding: 14, borderRadius: 6, margin: 8 }}
      >
        <Typography>{reviw.comment}</Typography>
      </Box>
    </Box>
  );
};

export default Comment;
