import { Button, Alert, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header2 from "../../header/Header2";

const UpdateProfile = () => {
  const { email } = useParams();
  const [usereprofile, setusereprofile] = useState({
    name: "",
    picture: null,
  });
  const [success, setsuccess] = useState(false);
  const [wait, setwait] = useState(false);
  const [imageSice, setimageSice] = useState(false);

  useEffect(() => {
    fetch(`https://infinite-reef-36150.herokuapp.com/isadmin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setusereprofile(data.User);
        // // console.log(data);
      });
  }, [email]);

  const handleProfile = (e) => {
    let value;
    let files = e.target.files;
    if (files) {
      value = files[0];
      // // console.log(value);
    } else {
      value = e.target.value;
      // // console.log(value);
    }
    // formData.append(e.target.name, value);
    setusereprofile((profile) => ({
      ...profile,
      [e.target.name]: value,
    }));
  };
  const { name, picture } = usereprofile;
  // // console.log(usereprofile);
  const submitProfileUpdate = (e) => {
    e.preventDefault();
    // // console.log(usereprofile);
    let formData = new FormData();
    // dispatch(test(sharedata));

    formData.set("file", picture);
    formData.set("name", name);
    formData.set("email", email);
    // // console.log(picture);

    if (picture.size <= 102400 || !usereprofile.picture) {
      setwait(true);
      setimageSice(false);
      fetch("https://infinite-reef-36150.herokuapp.com/updateProfile", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          // // console.log(data);
          setusereprofile({
            name: "",
            picture: null,
          });
          setsuccess(true);
          setwait(false);
        });
    } else {
      setimageSice(true);
    }
  };
  return (
    <>
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-3 col-sm-8 col-10 mx-auto my-2 d-flex justify-content-center ">
          {wait && <CircularProgress className=""></CircularProgress>}
        </div>
        <div className="w-100"></div>
        <div className="col-md-3 col-sm-8 col-10 mx-auto my-2">
          <label for="inputEmail4" class="form-label m-0 fw-light">
            <p className="fw-light m-0 p-0">Upload Image</p>
          </label>
          <input
            type="file"
            name="picture"
            className="form-control  mx-auto my-0"
            placeholder="First name"
            // value={profile?.User?.name || ""}
            aria-label="First name"
            onChange={handleProfile}
          />
        </div>

        <div className="w-100"></div>
        {imageSice && (
          <>
            <div className="col-md-3 col-sm-8 col-10 mx-auto my-2">
              <Alert severity="error">
                Please upload a picture smaller than 100kb
              </Alert>
            </div>
          </>
        )}
        <div className="w-100"></div>
        <div className="col-md-3 col-sm-8 col-10 mx-auto my-2">
          <label for="inputEmail4" class="form-label m-0 fw-light">
            <p className="fw-light m-0 p-0">Your Name</p>
          </label>
          <input
            type="text"
            className="form-control  mx-auto my-0"
            placeholder="First name"
            value={name || ""}
            aria-label="First name"
            onChange={handleProfile}
            name="name"
          />
        </div>
        <div className="w-100"></div>
        <div className="col-md-3 col-sm-8 col-10 mx-auto my-2">
          <Button onClick={submitProfileUpdate} variant="outlined" fullWidth>
            update
          </Button>
          {success && (
            <Alert className="my-2" severity="success">
              Update Your Profile
            </Alert>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
