import React, { useContext } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { ProjectContext } from '../App';
const Projects = () => {
    const myProject = useContext(ProjectContext);
    return (

        <div id="projects" className='Projects-Section'>
            < h1 className="Projects-Heading" >Projects</h1 >
            <div className='Project-Portion'>

                {
                    myProject.map((proj, index) => (
                        <ProjectCard
                            key={index}
                            name={proj.name}
                            description={proj.description}
                            techStack={proj.techStack}
                        />
                    ))
                }
            </div>
        </div >
    )
}

export default Projects
