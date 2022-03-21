import React from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";

export const PerUserProfile = () => {
  const { email } = useParams();
  // // console.log(email);
  return (
    <>
      <Profile peruser={true} email={email}></Profile>
      {/* <h1>asdfasdf</h1>
      <h1>asdfasdf</h1>
      <h1>asdfasdf</h1>
      <h1>asdfasdf</h1>
      <h1>asdfasdf</h1>
      <h1>asdfasdf</h1>
      <h1>asdfasdf</h1>
      <h1>asdfasdf</h1> */}
    </>
  );
};
