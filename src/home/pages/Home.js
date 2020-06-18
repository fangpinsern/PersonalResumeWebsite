import React from "react";

import HomeCard from "../components/HomeCard";
import image1 from "../../images/square1Image.jpg";
import image2 from "../../images/square2Image.jpg";
import image3 from "../../images/square3Image.jpg";

import { homeConfig } from "../../config/homeConfig";
import "./Home.css";

function Home() {
  const headerName = homeConfig.homeHeaderName;
  const square1Title = homeConfig.square1Title;
  const square1Description = homeConfig.square1Description;
  const square1Path = homeConfig.square1Path;
  const square2Title = homeConfig.square2Title;
  const square2Description = homeConfig.square2Description;
  const square2Path = homeConfig.square2Path;

  const square3 = homeConfig.square3;

  let square3Download;
  try {
    if (square3.isImageDownload === "yes") {
      square3Download = require("../../images/resumeImage.jpg");
    } else {
      square3Download = square3.path || "/";
    }
  } catch (e) {
    console.log(
      "isImageDownload property was set to yes. However, there was no image named 'resumeImage.jpg' to download in the images folder. Please your config input in homeConfig"
    );
  }
  return (
    <React.Fragment>
      <div className="homeHeader">
        <h1>{headerName}</h1>
      </div>
      <div className="homeMain">
        <div className="homeMainLeft">
          <HomeCard
            src={image1}
            title={square1Title}
            description={square1Description}
            link={square1Path}
          />
        </div>
        <div className="homeMainCenter">
          <HomeCard
            src={image2}
            title={square2Title}
            description={square2Description}
            link={square2Path}
            download={false}
          />
        </div>
        <div className="homeMainRight">
          <HomeCard
            src={image3}
            title={square3.title}
            description={square3.description}
            link={square3Download}
            download={square3.isImageDownload.toLowerCase() === "yes"}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
