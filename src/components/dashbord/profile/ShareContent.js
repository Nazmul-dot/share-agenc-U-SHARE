import { Paper } from "@mui/material";
import React from "react";

const ShareContent = ({ admin, profile }) => {
  const { approveShare, panddingShare, AllShare } = profile;
  return (
    <>
      <div className="row col-md-8 col-sm-8 col-10 mx-auto my-5  ">
        <div className="col-lg-4 col-md-5 col-8  mx-auto my-2 d-flex justify-content-center">
          <div className="mx-auto ">
            <Paper
              style={{ backgroundColor: "#fc6f03" }}
              sx={{ width: 200, height: 200 }}
              elevation={7}
              className=" d-flex align-items-center justify-content-center "
            >
              <div className=" text-white" style={{ marginTop: "-30px" }}>
                <p className="m-0 p-0 display-4"> {AllShare}</p>
                <p className="m-0 p-0 fs-4">All Shares</p>
              </div>
            </Paper>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-8  mx-auto my-2 d-flex justify-content-center">
          <div className="mx-auto ">
            <Paper
              style={{ backgroundColor: "#6203fc" }}
              sx={{ width: 200, height: 200 }}
              elevation={7}
              className=" d-flex align-items-center justify-content-center mx-auto"
            >
              <div className=" text-white" style={{ marginTop: "-30px" }}>
                <p className="m-0 p-0 display-4"> {approveShare}</p>
                <p className="m-0 p-0 fs-4">Approval</p>
              </div>
            </Paper>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-8  mx-auto my-2 d-flex justify-content-center">
          <div className="mx-auto ">
            <Paper
              style={{ backgroundColor: "#03b1fc" }}
              className=" d-flex align-items-center justify-content-center mx-auto"
              sx={{ width: 200, height: 200 }}
              elevation={7}
            >
              <div className=" text-white" style={{ marginTop: "-30px" }}>
                <p className="m-0 p-0 display-4"> {panddingShare}</p>
                <p className="m-0 p-0 fs-4">Pandding</p>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareContent;
