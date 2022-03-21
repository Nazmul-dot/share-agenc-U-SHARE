import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Test from "../../../Test";
import "./comment.css";
import SingleComment from "./SingleComment";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
const AllComment = ({ _id, share }) => {
  const [comment, setcomment] = useState("");

  const [temporayComment, setTemporaryComment] = useState([]);
  const { profile } = useSelector((state) => state.USER);

  useEffect(() => {
    fetch(`https://infinite-reef-36150.herokuapp.com/singleShare/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTemporaryComment(data);
      });
  }, [_id]);

  const handleComment = () => {
    // // console.log(comment);
    const singleComment = { comment: comment, user: profile };

    fetch(`https://infinite-reef-36150.herokuapp.com/addcomment/${_id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(singleComment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setcomment("");

        fetch(`https://infinite-reef-36150.herokuapp.com/singleShare/${_id}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setTemporaryComment(data);
          });
      });
  };

  return (
    <>
      <div
        className="scrolling mt-5"
        style={{
          minHeight: "35vh",
          maxHeight: "35vh",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {temporayComment?.comment?.map((percomment) => (
          <SingleComment percomment={percomment}></SingleComment>
        ))}

        {/* {temporay && (
          <SingleComment percomment={temporayComment}></SingleComment>
        )} */}
      </div>
      <div className=" row text-center mt-4">
        <div className="row col-12 me-auto   m-0 p-0">
          <div className="col-sm-8 col-12">
            {" "}
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="Comment"
              multiline
              maxRows={4}
              value={comment}
              onChange={(e) => setcomment(e.target.value)}
            ></TextField>{" "}
          </div>
          <div className="col-sm-4 col-12 mx-auto d-flex align-items-end m-0 p-0 ">
            <div>
              <Button
                className="bg-dark text-white align-middle mb-auto mx-auto ms-md-0 ms-3 mt-md-0 mt-2"
                variant="outlined"
                fullWidth
                endIcon={<SendIcon />}
                //   style={{ width: "50%" }}
                onClick={handleComment}
              >
                Comment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllComment;
