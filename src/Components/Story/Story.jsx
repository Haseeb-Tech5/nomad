import React from "react";
import Vector from "../../Assetss/Vector.png";
import "./Story.css";

const Story = () => {
  return (
    <div className="story-container">
      <div className="width-container">
        <div className="story-heading">
          <h2>Our Story</h2>
        </div>
        <div className="story-img">
          <img src={Vector} alt="" />
        </div>
        <div className="story-para">
          <p>
            The inception of Nomad Nurses arose from our personal experiences
            within the dental profession. We encountered difficulties in booking
            and securing nurses, realizing that nurses lacked the means and
            access to practices seeking locum professionals. Through the
            creation of our groundbreaking app and website, we successfully
            filled this void, facilitating communication between locum nurses
            and dental practices. As practicing dentists without a dedicated
            nurse, we recognized the vital significance of this venture for the
            dental industry. Our objective is to streamline the process of
            booking dental nurses for practices, ensuring a seamless experience
            and enabling nurses to find opportunities with the touch of a
            button.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
