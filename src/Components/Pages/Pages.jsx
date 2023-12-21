import React from "react";
import Video from "../Video/Video";
import Story from "../Story/Story";
import Nurse from "../Nurse/Nurse";
import Testimonials from "../Testimonials/Testimonials";
import Discount from "../Discount/Discount";
import Navbar from "../Navbar/Navbar";
import Blog from "../Blog/Blog";
import Experience from "../Experience/Experienece";
import Register from "../Register/Register";
import Touch from "../Touch/Touch";
// import Experience from "../Experience/Experience";

const Pages = () => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        // display: "flex",
        // justifyContent: "center",
      }}
    >
      {/* <div style={{ maxWidth: "1440px" }}> */}
      <Navbar />
      <Video />
      <Story />
      <Nurse />
      <Discount />
      <Testimonials />
      <Blog />
      <Experience />
      <Register />
      <Touch />
      {/* </div> */}
    </div>
  );
};

export default Pages;
