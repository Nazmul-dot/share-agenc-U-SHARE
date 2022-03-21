import { Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header2 from "../../header/Header2";
import Footer from "../footer/Footer";
import AllComment from "./comments/AllComment";

const SingleShare = () => {
  const { _id } = useParams();
  const [share, setshare] = useState({});
  useEffect(() => {
    fetch(`https://infinite-reef-36150.herokuapp.com/singleShare/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setshare(data);
      });
  }, [_id]);
  const {
    file,
    title,
    traveler,
    description,
    category,
    cost,
    location,
    createTime,
  } = share;
  // console.log(share);
  // const addNewComment = (newComment) => {
  //   // console.log(newComment);
  //   share.comment = share.comment.push(newComment);
  //   // setshare(share);
  //   // console.log(share);
  // };
  return (
    <>
      <Header2></Header2>
      <div className="" style={{ marginTop: "100px" }}>
        <div className="row mt-5">
          <div className=" row col-md-7 col-sm-9 col-11 mx-auto">
            <div className="col-md-10 col-12 mx-auto m-0 p-0 ">
              <Paper elevation={3}>
                <img
                  style={{ width: "100%", maxHeight: "60vh" }}
                  src={`data:image/jpeg;base64,${file}`}
                  className="img-fluid"
                />
                <span className="ms-1">{createTime}</span>
              </Paper>
            </div>
            <div className="col-10 mx-auto mt-3">
              <span className="fs-3">Title : </span>{" "}
              <span className="fs-5">{title}</span>
              <hr />
            </div>
            <div className="col-10 mx-auto mt-1">
              <span className="fs-3">Travelar : </span>{" "}
              <span className="fs-5">{traveler}</span>
              <hr />
            </div>
            <div className="col-10 mx-auto mt-1">
              <span className="fs-3">Description : </span>
              <br />
              <div
                style={{ minHeight: "20vh" }}
                className="border border-1 p-2"
              >
                {description}
              </div>
            </div>
            <div className="col-10 mx-auto mt-1">
              <span className="fs-3">Catagory : </span>{" "}
              <span className="fs-5">{category}</span>
              <hr />
            </div>
            <div className="col-10 mx-auto mt-1">
              <span className="fs-3">cost : </span>{" "}
              <span className="fs-5">{cost}</span>
              <hr />
            </div>
            <div className="col-10 mx-auto mt-1">
              <span className="fs-3">Location : </span>{" "}
              <span className="fs-5">{location}</span>
              <hr />
            </div>
            <div className="col-10 mx-auto mt-1 ">
              <AllComment _id={_id} share={share}></AllComment>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SingleShare;
