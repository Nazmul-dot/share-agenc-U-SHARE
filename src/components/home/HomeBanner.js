import React from "react";
import "./HomeBanner.css";
const HomeBanner = () => {
  return (
    <>
      <div
        className="banner d-flex justify-content-center"
        style={{ minHeight: "99vh" }}
      >
        <div className="ushare d-inline h-25 shadow p-2 rounded">
          <h1 className="display-4" style={{ color: "#FF6347" }}>
            Welcome to U SHARE
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
