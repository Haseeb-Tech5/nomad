import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import Testimonials from "../Testimonials/Testimonials";
import Touch from "../Touch/Touch";
import videoo from "../about/about.mp4";
import "../nurses/nurses.css"
import { useState } from "react";

export default function Practice(){
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };
    
    const icons = [
        {img:"icon1.svg",title:"Cost-Effective",text:"Save time, cut paperwork, and enjoy competitive rates with our platform"},
        {img:"practice1.svg",title:"Efficiency",text:"Elevate your practice with us!"},
        {img:"icon3.svg",title:"Convenience",text:"Simplifies tasks, saves time through paperless transactions"},
        {img:"icon4.svg",title:"Reliability",text:"Constantly live app, diverse nurses: Unwavering reliability at your service"},
        {img:"practice2.svg",title:" Transparency",text:"Clear processes, fostering trust in every transaction"},
        {img:"practice3.svg",title:"Instantaneous Bookings",text:"Investing in your smile, our priority."},

    ]
    return(
        <>
        <Navbar/>
        <div className="nurses-video">
            <video src={videoo}></video>
            <div className="nurses-video-cont">
           <div className="nurse-video-head">
          <div className="nurses-flex">
          <div className="nurses-img">
          <p>
          Practices
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
           <div className="nurse-video-tail">
            <div className="video-stock">
            <div className="stock">
      <div className="arrow-icon" onClick={toggleDropdown}>
       <img src="drop.png" alt="" />
      </div>
      <div className="stock-p">
        <p>iStock</p>
        <p>credit: PeopleImages</p>
      </div>
      {isDropdownVisible && (
        <div className="dropdown-content">
         
          <p>Stock 1</p>
          <p>Stock 2</p>
        
        </div>
      )}
    </div>
            </div>
           </div>
        </div>
        </div>
        <div className="nurses-icons-main">
            <div className="nurses-icons">
               
                    {icons.map((icon,index)=>(
                        <div key={index} className="icon-box">
                            <div className="image-box">
                                <img src={icon.img} alt="" />
                            </div>
                            <div className="title-box">
                                <p>
                                    {icon.title}
                                </p>
                            </div>
                            <div className="text-box">
                                <p>
                                    {icon.text}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <Testimonials/>
            <Register/>
            <Touch/>

       
       
        </>
    )
}