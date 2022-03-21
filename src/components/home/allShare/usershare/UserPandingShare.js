import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShareCard from "../ShareCard";
const UserPandingShare = () => {
  const { user } = useSelector((state) => state.USER);
  const [userpanddinglShare, setuserpanddingshare] = useState([]);
  const [wait, setwait] = useState(true);
  useEffect(() => {
    fetch(
      `https://infinite-reef-36150.herokuapp.com/userpandding/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setuserpanddingshare(data);
        setwait(false);
      });
  }, [user.email]);

  const deleteShare = (_id) => {
    let check = window.confirm("are you share to delelte?");
    if (check) {
      fetch(`https://infinite-reef-36150.herokuapp.com/deleteshare/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const rest = userpanddinglShare.filter((share) => share._id !== _id);
          setuserpanddingshare(rest);
        });
    }
  };
  return (
    <>
      <div className="row">
        {wait ? (
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: 200 }}
          >
            <CircularProgress className="text-center"></CircularProgress>
          </div>
        ) : (
          ""
        )}

        <div className=" row col-md-10 col-12 mx-auto ">
          {userpanddinglShare?.map((share) => (
            <ShareCard
              share={share}
              key={share._id}
              userpanding={"userpanding"}
              deleteShare={deleteShare}
              //   role={"admin"}
              //   ActioinApproval={ActioinApproval}
            ></ShareCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPandingShare;
