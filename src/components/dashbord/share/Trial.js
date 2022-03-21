import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const Trial = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState(null);
  const [succes, setsucces] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, image);
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("image", image);
    // console.log(data);
    fetch("https://infinite-reef-36150.herokuapp.com/test", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <TextField
          sx={{ width: "50%", my: 1 }}
          id="standard-basic"
          label="Name"
          required
          variant="standard"
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <TextField
          sx={{ width: "50%", my: 1 }}
          id="standard-basic"
          label="email"
          onChange={(e) => setemail(e.target.value)}
          required
          variant="standard"
        />
        <br />
        <Input
          accept="image/*"
          sx={{ my: 2 }}
          type="file"
          onChange={(e) => setimage(e.target.files[0])}
        />
        <br />
        <Button variant="contained" type="submit">
          Upload
        </Button>
      </form>
      {succes && <p>{succes}</p>}
    </div>
  );
};

export default Trial;
