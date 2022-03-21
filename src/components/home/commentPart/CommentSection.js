import React, { useEffect, useState } from "react";
import { Container, Box, Avatar, Typography } from "@mui/material";
import {} from "@mui/system";
import Comment from "./Comment";
import "./comment.css";
const CommentSection = () => {
  const [reviws, setreviw] = useState([]);

  useEffect(() => {
    fetch("https://infinite-reef-36150.herokuapp.com/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setreviw(data);
      });
  }, []);
  return (
    <>
      <Container className="ms-3" style={{ marginTop: "120px" }}>
        <h1>Customers Reviws ({reviws.length})</h1>
        <hr className="w-25" />
        <Box
          style={{
            maxHeight: "50vh",
            overflow: "hidden",
            overflowY: "scroll",
          }}
          className="scrolling"
        >
          {reviws.map((reviw) => (
            <Comment reviw={reviw}></Comment>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default CommentSection;
