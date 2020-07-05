import React from "react";

import "./Skills.css";
import WhatIKnow from "../components/WhatIKnow";
import { skillsConfig } from "../../config/skillsConfig";

const Skills = () => {
  const skillHeaderName = skillsConfig.skillsHeaderName;
  const skills = skillsConfig.skills;
  let output = <h1>something wentwrong</h1>;
  if (skills.length > 5) {
    const left = (
      <div className="skillsMain-left">
        {skills.map((skill, i) => {
          if (skills.length / 2 > i) {
            return (
              <WhatIKnow
                key={i}
                name={skill.skillName}
                numStars={skill.skillLevel}
              />
            );
          }
        })}
      </div>
    );
    const right = (
      <div className="skillsMain-right">
        {skills.map((skill, i) => {
          if (skills.length / 2 <= i) {
            return (
              <WhatIKnow
                key={i}
                name={skill.skillName}
                numStars={skill.skillLevel}
              />
            );
          }
        })}
      </div>
    );
    output = (
      <div className="skillsMain2">
        {left}
        {right}
      </div>
    );
  } else {
    output = (
      <div className="skillsMain">
        {skills.map((skill, i) => {
          return (
            <WhatIKnow
              key={i}
              name={skill.skillName}
              numStars={skill.skillLevel}
            />
          );
        })}
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="skillsHeader">
        <h1>{skillHeaderName}</h1>
        {output}
      </div>
    </React.Fragment>
  );
};

export default Skills;
