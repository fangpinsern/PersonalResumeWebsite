import React from "react";

import ContactUs from "../components/ContactUs";
import Card from "../../shared/UIElements/Card";

import "./Contact.css";
import { contactConfig } from "../../config/contactConfig";

function Contact() {
  const contactHeaderName = contactConfig.contactHeaderName;
  const contactInformationHeader = contactConfig.contactInformationHeader;
  const phoneNumber = contactConfig.phoneNumber;
  const email = contactConfig.email;
  const linkedInLink = contactConfig.linkedInLink;
  const githubLink = contactConfig.githubLink;
  const facebookLink = contactConfig.facebookLink;
  const twitterLink = contactConfig.twitterLink;

  return (
    <React.Fragment>
      <div className="homeHeader">
        <h1>{contactHeaderName}</h1>
      </div>
      <div className="contactUs">
        <div className="contactUsLeft">
          <Card className="contactInfo">
            <h1>{contactInformationHeader}</h1>
            {phoneNumber && <p>Phone Number: {phoneNumber}</p>}
            {email && <p>Email: {email}</p>}
            {githubLink && (
              <p>
                <a href={githubLink}>GitHub</a>
              </p>
            )}
            {linkedInLink && (
              <p>
                <a href={linkedInLink}>LinkedIn</a>
              </p>
            )}
            {facebookLink && (
              <p>
                <a href={facebookLink}>Facebook</a>
              </p>
            )}
            {twitterLink && (
              <p>
                <a href={twitterLink}>Twitter</a>
              </p>
            )}
          </Card>
        </div>

        <div className="contactUsRight">
          <ContactUs />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
