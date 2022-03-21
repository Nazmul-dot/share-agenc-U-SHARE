import { Alert, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Admin = () => {
  const [email, setemail] = useState("");
  const [adminSuc, setAdminsuc] = useState(false);

  const addAdmin = () => {
    // alert(email);
    axios
      .post("https://infinite-reef-36150.herokuapp.com/admin", { email: email })
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <>
      <div className="row" style={{ marginTop: "17vh" }}>
        <div className="col-12 mb-5">
          <h1 className="text-center">Add Admin to DB</h1>
        </div>
        <div className=" row col-md-7 col-sm-8 col-10 mx-auto ">
          <div className="col-md-8 col-sm-9 col-10 mx-auto ">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              size="small"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="col-md-5 col-sm-7 col-8 mx-auto  mt-2">
            <div className="text-danger">
              sorry, you can not do this task right now
            </div>
            <Button disabled variant="outlined" fullWidth onClick={addAdmin}>
              Add Admin
            </Button>
          </div>
          <div className="col-md-8 col-sm-9 col-10 mx-auto mt-3">
            {adminSuc ? (
              <Alert severity="success">admin successfully added</Alert>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
