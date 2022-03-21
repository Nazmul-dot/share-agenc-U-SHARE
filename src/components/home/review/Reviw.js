import {
  Rating,
  TextField,
  Typography,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
// import useAuth from "../../../useHooks/useAuth";

const Reviw = () => {
  const [value, setValue] = React.useState(0);
  const [comment, setcomment] = React.useState("");
  const [success, setsuccess] = React.useState(false);
  const [wait, setwait] = React.useState(false);
  //   const { user } = useAuth();
  const { user, profile } = useSelector((state) => state.USER);
  // const { name, picture, pictur1 } = profile;
  // console.log(name, picture, pictur1);
  // console.log(profile);
  const handleComment = (e) => {
    e.preventDefault();
    setwait(true);
    // console.log(comment, value);
    const reviw = {
      name: profile.name,
      comment: comment,
      rating: value,
      picture: profile.picture,
      picture1: profile.pictur1,
    };
    fetch("https://infinite-reef-36150.herokuapp.com/test", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reviw),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcomment("");
        setValue(0);
        setsuccess(true);
        setwait(false);
      })
      .finally(() => {
        // setsuccess(false);
      });
  };
  return (
    <div>
      <Container style={{ textAlign: "center", marginTop: 100 }}>
        <h1>Give your Commment</h1>
        {wait && (
          <>
            <div className="d-flex justify-content-center mb-1">
              <CircularProgress></CircularProgress>
            </div>
          </>
        )}
        <TextField
          id="outlined-multiline-static"
          label="Your Comment "
          value={comment}
          onChange={(e) => setcomment(e.target.value)}
          multiline
          rows={4}
          style={{ width: "70%" }}
        />{" "}
        <br />
        <Typography component="legend">Your Rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          precision={0.5}
        />
        <br />
        <Button
          onClick={handleComment}
          variant="contained"
          style={{ width: "40%" }}
        >
          Submit
        </Button>
        {success && (
          <Alert
            className="mx-auto"
            style={{ width: "60%", marginTop: "20px" }}
            severity="success"
          >
            Your Comment Successfully Submited.....
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default Reviw;
