import React, { useEffect } from "react";

import Header2 from "../header/Header2";
import Test from "../Test";
import AllShares from "./allShare/AllShares";
import CommentSection from "./commentPart/CommentSection";
import Footer from "./footer/Footer";
import HomeBanner from "./HomeBanner";

const Home = () => {
  return (
    <>
      <div
        className=" w-100"
        style={{ position: "fixed", width: "100%", zIndex: 100 }}
      >
        <Header2></Header2>
      </div>

      <div className=" w-100">
        <HomeBanner></HomeBanner>
      </div>

      <div className=" w-100">
        <AllShares></AllShares>
      </div>

      <div className="row ">
        <div className="col-12 ">
          <CommentSection></CommentSection>
        </div>
        <div className="col-12   w-100 h-100 m-0 p-0">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Home;
