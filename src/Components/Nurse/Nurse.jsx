import React, { useEffect } from "react";
import "./Nurse.css";
import Tooth from "../../Assetss/tooth.png";
const Data = [
  { animation: "fadeInFromLeft", text: "Industry Leading Pay" },
  { animation: "fadeOutToRight", text: "Industry Leading Pay" },
  { animation: "fadeInFromRight", text: "Weekly Payments" },
  { animation: "fadeOutToBottom", text: "Weekly Payments" },
  { animation: "fadeInFromBottom", text: "Flexibility" },
  { animation: "fadeOutToTop", text: "Flexibility" },
  { animation: "fadeInFromTop", text: "Bonuses" },
  { animation: "fadeOutToLeft", text: "Bonuses" },
  { animation: "fadeInFromLeft", text: "Cosmopolitan Scrubs" },
  { animation: "fadeOutToBottom", text: "Cosmopolitan Scrubs" },
  { animation: "fadeInFromBottom", text: "Discounted Dental Treatments" },
  { animation: "fadeOutToRight", text: "Discounted Dental Treatments" },
  { animation: "fadeInFromRight", text: "Interactive App" },
  { animation: "fadeOutToLeft", text: "Interactive App" },
];

const Nurse = () => {
  const [counter, setCounter] = React.useState(0);
  const [data, setData] = React.useState(Data[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % Data.length);
    }, 700);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []); // Empty dependency array to run effect only once on mount

  useEffect(() => {
    setData(Data[counter]);
  }, [counter]);
  return (
    <div className="nurse-container">
      <div className="nurse-full-contained">
        <div className="nurse-left">
          <div className="nurse-logo">
            <img src={Tooth} alt="" />
          </div>
          <div className="nurse-heading">
            <h2>
              Why <span style={{ color: "#497367" }}>Nurses</span> should join
              us!
            </h2>
          </div>
          <div className="nurse-para">
            <p>
              At Nomad Nurse, we redefine the experience of dental nurse
              recruitment offering a platform that goes beyond the conventional.
              We understand the unique challenges faced by both dental practices
              and nurses in the industry. By choosing to work with us, dental
              nurses gain access to a seamless and user-friendly platform that
              effortlessly connects them with diverse opportunities. We
              prioritize transparency, reliability, and efficiency in the
              recruitment process, ensuring that every match is not just a
              placement but a harmonious collaboration. Join us in shaping the
              future of dental care staffing, where your skills are valued, and
              your career is empowered.
            </p>
          </div>

          <div className="nurse-button">
            <button>Join now</button>
          </div>
        </div>
        <div className="nurse-right">
          <div className="nurse-animation">
            <p className={data.animation}>{data.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nurse;
