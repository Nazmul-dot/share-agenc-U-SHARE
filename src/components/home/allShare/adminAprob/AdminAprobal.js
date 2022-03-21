import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShareCard from "../ShareCard";

const AdminAprobal = () => {
  const [pandingpost, setpandingpost] = useState([]);
  const [wait, setwait] = useState(true);
  useEffect(() => {
    // fetch("hhttps://infinite-reef-36150.herokuapp.com/panddingpost")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //   });
    fetch(`https://infinite-reef-36150.herokuapp.com/panddingpost`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setpandingpost(data);
        setwait(false);
      });
  }, []);

  const ActioinApproval = (_id) => {
    // alert(_id);
    fetch(`https://infinite-reef-36150.herokuapp.com/approval/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const rest = pandingpost.filter((post) => post._id !== _id);
        setpandingpost(rest);
      });
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
          {pandingpost?.map((share) => (
            <ShareCard
              share={share}
              key={share._id}
              role={"admin"}
              ActioinApproval={ActioinApproval}
            ></ShareCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminAprobal;
