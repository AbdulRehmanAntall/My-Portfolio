import React, { useContext } from 'react';
import './Skill.css';
import { SkillsCotext } from '../App';

const SomeSkill = ({ heading, subSkills }) => {
  return (
    <div className="SkillCategory">
      <h2 className="SkillHeading">{heading}</h2>
      <div className="SkillItems">
        {subSkills.map((skill, index) => (
          <div key={index} className="SkillCard">
            <img src={skill.logo} alt={skill.name} className="SkillIcon" />
            <span className="SkillName">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const mySkill = useContext(SkillsCotext);
  return (
    <div id="skills" className="skill-section">
      <h1>Skills</h1>
      <div className="SkillPortion">
        {mySkill.map((sk, index) => (
          <SomeSkill key={index} heading={sk.heading} subSkills={sk.items} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
