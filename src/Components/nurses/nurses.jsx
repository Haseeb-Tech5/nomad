import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import Testimonials from "../Testimonials/Testimonials";
import Touch from "../Touch/Touch";
import { BounceLoader } from "react-spinners";
import "../nurses/nurses.css";

export default function Nurses() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 3000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

 

  const icons = [
    { img: "icon1.svg", title: "Industry Leading Pay", text: "From £18/ph" },
    { img: "icon2.svg", title: "Weekly payments", text: "Greater financial stability" },
    { img: "icon3.svg", title: "Flexible", text: "A diary to suit your needs" },
    { img: "icon4.svg", title: "Bonuses", text: "Financial incentives recognizing your efforts" },
    { img: "icon6.svg", title: "Consmopolitan Scrubs", text: "Where comfort meets professionalism, on us" },
    { img: "icon5.svg", title: "Discounted Detal Treatments", text: "Investing in your smile, our priority." },
  ];

  return (
    <>
      {isLoading ? (
        <div className="loading-overlay">
          <BounceLoader color="rgba(174, 156, 127, 1)" loading={isLoading} size={100} />
        
        </div>
      ) : (
        <>
          <Navbar />
          <div className="nurses-video">
          <div className="nurses-video">
            <img src="nurses.png" alt="" />
            <div className="nurses-video-cont">
           <div className="nurse-video-head">
          <div className="nurses-flex">
          <div className="nurses-img">
          <p>
            Nurses
            </p>
            <img src="text.svg" alt="" />
          </div>
           <div className="nurses-buttons">
           <button>
            Login
            </button>
            <button>
            Register
            </button>
           </div>
          </div>
           </div>
        
        </div>
        </div>
          </div>
          <div className="nurses-icons-main">
            <div className="nurses-icons">
              {icons.map((icon, index) => (
                <div key={index} className="icon-box">
                  <div className="image-box">
                    <img src={icon.img} alt="" />
                  </div>
                  <div className="title-box">
                    <p>{icon.title}</p>
                  </div>
                  <div className="text-box">
                    <p>{icon.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Testimonials />
          <Register />
          <Touch />
        </>
      )}
    </>
  );
}
