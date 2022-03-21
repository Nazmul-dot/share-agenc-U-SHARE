import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ShareCard from "./ShareCard";
import Header from "../../header/Header";
import { useSelector } from "react-redux";
import { Avatar, CircularProgress } from "@mui/material";
import axios from "axios";

const AllShares = () => {
  const [currentpage, setPage] = React.useState(1);
  const [pagecount, setcount] = React.useState(0);
  const [shares, setshares] = useState([]);
  const [waitshare, setwaitshare] = useState(true);
  const { user, admin } = useSelector((state) => state.USER);
  const [updateORdelete, setupdateORdelete] = useState(0);

  const handleChange = (event, value) => {
    setPage(value);
  };
  let size = 6;
  useEffect(() => {
    // setwaitshare(true);

    fetch(
      `https://infinite-reef-36150.herokuapp.com/allshares?currentpage=${
        currentpage - 1
      }&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const count = Math.ceil(data.count / size);
        // console.log(count);
        setcount(count);
        setshares(data.shares);
        setwaitshare(false);
      });
  }, [currentpage, updateORdelete]);

  const deleteShare = (_id) => {
    let check = window.confirm("are you share to delelte?");
    if (check) {
      fetch(`https://infinite-reef-36150.herokuapp.com/deleteshare/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          reCalled(data);
        });
    }
  };

  const reCalled = (data) => {
    fetch(
      `https://infinite-reef-36150.herokuapp.com/allshares?currentpage=${
        currentpage - 1
      }&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const count = Math.ceil(data.count / size);
        // console.log(count);
        setcount(count);
        setshares(data.shares);
        setwaitshare(false);
      });
  };
  return (
    <>
      <div></div>
      <div className="row ">
        {waitshare ? (
          <div className="d-flex justify-content-center vh-50 mt-5">
            <CircularProgress></CircularProgress>
          </div>
        ) : (
          <>
            <div className=" row col-md-12 col-12 mx-auto   bg-secondary  border border-4 ">
              <div className=" row col-12 mx-auto  bg-secondary m-5 ">
                {shares?.map((share) => (
                  <ShareCard
                    share={share}
                    key={share._id}
                    adminPen={admin}
                    deleteShare={deleteShare}
                  ></ShareCard>
                ))}
              </div>
            </div>
            <div className=" row col-md-10 col-11 mx-auto mt-5">
              <Stack spacing={2}>
                <Pagination
                  className="mx-auto"
                  count={pagecount}
                  page={currentpage}
                  onChange={handleChange}
                />
              </Stack>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllShares;
