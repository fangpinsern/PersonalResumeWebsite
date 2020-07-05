import React from "react";

import image1 from "../../images/aboutPageImage.jpg";
import Card from "../../shared/UIElements/Card";

import "./About.css";
import { aboutConfig } from "../../config/aboutConfig";

function About() {
  const aboutHeaderName = aboutConfig.aboutHeaderName;
  const aboutName = aboutConfig.aboutName;
  const aboutOccupation = aboutConfig.aboutOccupation;
  const aboutSchool = aboutConfig.aboutSchool;
  const aboutCourse = aboutConfig.aboutCourse;
  const aboutDescription = aboutConfig.aboutDescription;
  return (
    <React.Fragment>
      <div className="aboutHeader">
        <h1>{aboutHeaderName}</h1>
        <div className="aboutMain">
          <div className="aboutMainLeft">
            <Card className="aboutMainLeftCard">
              <img src={image1} alt="myself" />
            </Card>
          </div>
          <div className="aboutMainRight">
            <h3>General Information</h3>
            {aboutName && <p>Name: {aboutName}</p>}
            {aboutOccupation && <p>Occupation: {aboutOccupation}</p>}
            {aboutSchool && <p>School: {aboutSchool}</p>}
            {aboutCourse && <p>Course: {aboutCourse}</p>}
            {aboutDescription.length !== 0 && <p>Description: </p>}
            {aboutDescription &&
              aboutDescription.map((line) => {
                return <p key={line.key}>{line.value}</p>;
              })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
