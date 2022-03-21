import {
  Avatar,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./profile.css";
import ShareContent from "./ShareContent";
import { useHistory } from "react-router-dom";
const Profile = ({ peruser, email }) => {
  const [userprofile, setprofile] = useState({});
  const [wait, setwait] = useState(true);
  const { user, admin, profile } = useSelector((state) => state.USER);
  // // console.log(profile);
  useEffect(() => {
    if (peruser) {
      fetch(`https://infinite-reef-36150.herokuapp.com/userProfile/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setwait(false);
          // // console.log(data);
          setprofile(data);
        });
    } else if (admin) {
      // alert("admin");
      // setwait(true);
      // // console.log(user.email);
      fetch(
        `https://infinite-reef-36150.herokuapp.com/adminProfile/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // // console.log(data);
          setprofile(data);
          setwait(false);
        });
    } else {
      // alert("not admin");
      // setwait(false);
      // // console.log(user.email);
      fetch(
        `https://infinite-reef-36150.herokuapp.com/userProfile/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setwait(false);
          // // console.log(data);
          setprofile(data);
        });
    }
  }, [admin]);
  // // console.log(userprofile.User);
  const history = useHistory();
  return (
    <>
      {/* <Avatar sx={{ width: 200, height: 200 }}></Avatar> */}
      <div className="row mt-5 ">
        <div className="col-md-6 col-sm-8 col-10 mx-auto">
          <Avatar
            className="avatar mx-auto"
            style={{ width: 150, height: 150 }}
            src={
              userprofile?.User?.picture
                ? userprofile?.User?.picture
                : `data:image/jpeg;base64,${userprofile?.User?.pictur1}`
            }
          ></Avatar>
          <div className="text-center my-2">
            {admin && (
              <>
                {" "}
                <small className="m-0 p-0 text-success">Admin</small> <br />
              </>
            )}

            {!peruser && (
              <Button
                className=""
                variant="outlined"
                onClick={() =>
                  history.push(`/dashbord/updateprofile/${user.email}`)
                }
              >
                Update
              </Button>
            )}
            {wait && (
              <div className="d-flex justify-content-center my-4">
                <CircularProgress></CircularProgress>
              </div>
            )}
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col-md-3 col-sm-8 col-10 mx-auto my-3">
          <label for="inputEmail4" class="form-label m-0 fw-light">
            <p className="fw-light m-0 p-0">Your Name</p>
          </label>
          <input
            type="text"
            className="form-control  mx-auto my-0"
            placeholder="First name"
            value={userprofile?.User?.name || ""}
            aria-label="First name"
          />
        </div>

        <div className="w-100"></div>
        <div className="col-md-3 col-sm-8 col-10 mx-auto my-3">
          <label for="inputEmail4" class="form-label m-0 p-0">
            Email
          </label>
          <input
            type="text"
            className="form-control  mx-auto"
            placeholder="First name"
            aria-label="First name"
            value={userprofile?.User?.email || ""}
          />
        </div>
        <div className="w-100"></div>
        <div className="col-md-12  col-12  my-3">
          <ShareContent admin={admin} profile={userprofile}></ShareContent>
        </div>
      </div>
    </>
  );
};

export default Profile;
