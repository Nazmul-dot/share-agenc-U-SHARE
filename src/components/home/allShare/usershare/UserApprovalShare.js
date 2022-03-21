import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShareCard from "../ShareCard";

const UserApprovalShare = () => {
  const { user } = useSelector((state) => state.USER);
  const [userapprobalShare, setuserapprovalshare] = useState([]);
  const [wait, setwait] = useState(true);

  useEffect(() => {
    fetch(
      `https://infinite-reef-36150.herokuapp.com/userapproval/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setuserapprovalshare(data);
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
          const rest = userapprobalShare.filter((share) => share._id !== _id);
          setuserapprovalshare(rest);
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
          {userapprobalShare?.map((share) => (
            <ShareCard
              share={share}
              key={share._id}
              userAppro={"userAppro"}
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

export default UserApprovalShare;
