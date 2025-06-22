import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ name, description, techStack }) => {
    return (
        <div className='Project-Card'>
            <h2 className='Project-heading'>{name}</h2>
            <p className='Project-Description'>{description}</p>
            <p className='Project-TechStack'>Tech Stack: {techStack}</p>
        </div>
    )
}

export default ProjectCard;
