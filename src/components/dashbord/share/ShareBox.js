import {
  Alert,
  Button,
  CircularProgress,
  Input,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { test } from "../../../redux/firebaseUsere/userAction";
import Trial from "./Trial";
const ShareBox = () => {
  const { admin, user, profile } = useSelector((state) => state.USER);
  const [isSubm, setIssumb] = useState(false);
  const [success, setsuccess] = React.useState(false);
  const [wait, setwait] = React.useState(false);
  const [sharedata, setsharedata] = useState({
    image: null,
    title: "",
    traveler: "",
    description: "",
    category: "",
    cost: "",
    location: "",
  });
  const categ = ["Famous Place", "Historical Place", "Nature"];

  // let formData = new FormData();
  const handleChange = (e) => {
    let value;
    let files = e.target.files;
    if (files) {
      value = files[0];
      // console.log(value);
    } else {
      value = e.target.value;
      // console.log(value);
    }
    // formData.append(e.target.name, value);
    setsharedata((setsharedata) => ({
      ...setsharedata,
      [e.target.name]: value,
    }));
  };

  const dispatch = useDispatch();
  const { image, title, traveler, description, category, cost, location } =
    sharedata;
  const handlesubmit = (e) => {
    e.preventDefault();

    // // console.log(profile);
    let formData = new FormData();
    // dispatch(test(sharedata));
    formData.set("email", user.email);
    // formData.set("test", 12345);
    // formData.set("pictue", profile?.pictue);
    // formData.set("pictue1", profile?.pictue1);
    formData.set("email", user.email);
    formData.set("file", image);
    formData.set("title", title);

    formData.set("traveler", traveler);

    formData.set("description", description);
    formData.set("category", category);
    formData.set("cost", cost);
    formData.set("location", location);
    admin
      ? formData.set("state", "approval")
      : formData.set("state", "pandding");

    if (
      image !== null &&
      title !== "" &&
      traveler !== "" &&
      description !== "" &&
      category !== "" &&
      cost !== "" &&
      location !== ""
    ) {
      setwait(true);
      fetch("https://infinite-reef-36150.herokuapp.com/share", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          // // console.log(data);
          setsharedata({
            title: "",
            traveler: "",
            description: "",
            category: "",
            cost: "",
            location: "",
            image: null,
          });
          fetch(
            `https://infinite-reef-36150.herokuapp.com/addUserToAShare/${data.insertedId}`,
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(profile),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              // // console.log(data);
            });
          setsuccess(true);
          setwait(false);
        });
    }
  };
  return (
    <>
      <div>
        {/* <Trial></Trial> */}
        <div className=" row" style={{ marginTop: "80px" }}>
          <form
            onSubmit={handlesubmit}
            className=" row col-md-7 col-12 mx-auto   "
          >
            <div className="col-md-8 col-12 mx-auto  mx-0 px-0 d-flex justify-content-center">
              {wait && (
                <CircularProgress className="d-flex justify-content-center"></CircularProgress>
              )}
            </div>
            <div className="  col-md-8 col-12 mx-auto  mx-0 px-0 ">
              <Input
                accept="image/*"
                onChange={handleChange}
                name="image"
                id="outlined-basic"
                label="Image"
                variant="outlined"
                fullWidth
                size="small"
                type="file"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className=" my-2 col-md-8 col-12 mx-auto  mx-0 px-0 ">
              <TextField
                onChange={handleChange}
                value={title}
                name="title"
                id="outlined-basic"
                label="Title"
                variant="outlined"
                fullWidth
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className=" col-md-8 col-12 mx-auto  mx-0 px-0 ">
              <TextField
                onChange={handleChange}
                value={traveler}
                name="traveler"
                id="outlined-basic"
                label="traveler"
                variant="outlined"
                fullWidth
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className=" my-2 col-md-8 col-12 mx-auto  mx-0 px-0 ">
              <TextField
                onChange={handleChange}
                value={description}
                name="description"
                multiline
                rows={2}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                fullWidth
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className=" col-md-8 col-12 mx-auto  mx-0 px-0 ">
              {/* <TextField
              value={category}
              name="category"
                id="outlined-basic"
                label="Category "
                variant="outlined"
                fullWidth
                size="small"
              /> */}

              <TextField
                onChange={handleChange}
                id="outlined-select-currency"
                select
                label="Category "
                variant="outlined"
                fullWidth
                size="small"
                value={category || ""}
                name="category"
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {categ.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className=" my-2 col-md-8 col-12 mx-auto  mx-0 px-0 ">
              <TextField
                onChange={handleChange}
                value={cost}
                name="cost"
                id="outlined-basic"
                label="Traveling Cost"
                variant="outlined"
                fullWidth
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className=" col-md-8 col-12 mx-auto  mx-0 px-0 ">
              <TextField
                onChange={handleChange}
                value={location}
                name="location"
                id="outlined-basic"
                label="Location"
                variant="outlined"
                fullWidth
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className=" my-2 col-md-8 col-12 mx-auto  mx-0 px-0 ">
              <Button
                fullWidth
                variant="contained"
                style={{ backgroundColor: "#e03a2e" }}
                type="submit"
                // onClick={handlesubmit}
              >
                Share
              </Button>
            </div>
            <div className=" my-2 col-md-8 col-12 mx-auto  mx-0 px-0 my-2">
              {success && (
                <Alert severity="success">
                  Your share Successfully Submited.....
                </Alert>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShareBox;
