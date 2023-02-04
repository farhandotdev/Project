import React from "react";

function Banner(props) {
  return (
    <div>
      <div className="banner">
        <img className="bannerImg" src={props.icon} alt="" />
      </div>
    </div>
  );
}
export default Banner;
