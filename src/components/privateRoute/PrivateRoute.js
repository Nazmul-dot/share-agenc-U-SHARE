import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
const PrivateRoute = ({ children, ...rest }) => {
  const { user, isloading } = useSelector((state) => state.USER);
  // console.log(isloading);
  if (isloading) {
    //alert("private");
    return (
      <div
        className="d-flex justify-content-center vh-50"
        style={{ marginTop: "45vh" }}
      >
        <CircularProgress />;
      </div>
    );
  }
  // console.log(isloading);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
