import React from "react";

import "./WhatIKnow.css";
import StarBar from "./StarBar";

//props
// numStars
// name

function WhatIKnow(props) {
  return (
    <div className="row">
      <div className="col-left">{props.name}</div>
      <div className="col-right">
        <StarBar numStars={props.numStars} />
      </div>
    </div>
  );
}

export default WhatIKnow;
