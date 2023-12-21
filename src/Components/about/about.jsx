import Navbar from "../Navbar/Navbar";
import video2 from "../about/about.mp4";
import Vector from "../../Assetss/Vector.png";
import Touch from "../Touch/Touch";
import "./about.css"
import Testimonials from "../Testimonials/Testimonials";


export default function About(){
    return(
        <>
        <Navbar/>
        <div className="video-container">
      <video src={video2} autoPlay loop muted className="video" />
      <div className="video-heading-container2">
      <div className="about-head">
      <h2>Our Mission</h2>
        <img src={Vector} alt="" />
       <div className="about-para">
        <p>
            Empowering dental staffing through seamless connections
        </p>
       </div>
      </div>
      </div>
      <div className="video-button"></div>
    </div>
    <div className="story-container">
      <div className="width-container">
        <div className="about-heading">
          <h2>Our Story</h2>
        </div>
        <div className="about-img">
          <img src={Vector} alt="" />
        </div>
        <div className="about-para2">
          <p>
          The inception of Nomad Nurses arose from our personal experiences within the dental profession. We encountered difficulties in booking and securing nurses, realising that nurses lacked the means and access to practices seeking locum professionals.
          </p>
        </div>
        <div className="about-para2">
          <p>
          Through the creation of our ground-breaking app and website, we successfully filled this void, facilitating communication between locum nurses and dental practices to minimise the disruption faced by dentists and patients. 
          </p>
        </div>
        <div className="about-para2">
          <p>
          As practicing dentists without a dedicated nurse, we recognised the vital significance of this venture for the dental industry. Our objective is to streamline the process of booking dental nurses for practices, ensuring a seamless experience and enabling nurses to find opportunities with the touch of a button.
          </p>
        </div>
      </div>
    </div>
   <div className="flex" style={{overflow:"hidden"}}>
   <Testimonials/>
     <Touch/>
   </div>
   
        </>
    )
}