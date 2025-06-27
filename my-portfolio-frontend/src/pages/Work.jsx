import React from 'react';
import './Work.css';
import { useContext } from 'react';
import { WorkContext } from '../App';


const WorkCard = ({ work }) => {
    return (
        <div className="work-card">
            {work.logo && <img src={work.logo} alt={work.company} className="work-logo" />}
            <div className="work-content">
                <h2 className="work-title">{work.title}</h2>
                <h3 className="work-company">{work.company}</h3>
                <p className="work-dates">{work.startDate} — {work.endDate}</p>
                {work.description && <p className="work-description">{work.description}</p>}
            </div>
        </div>
    );
};

const Work = () => {
    const myWork = useContext(WorkContext);

    return (
        <div id="work" className="work-section">
            <h1 className="work-heading-title">Work Experience</h1>
            <div className="work-cards">
                {myWork.map((work, index) => (
                    <WorkCard key={index} work={work} />
                ))}
            </div>
        </div>
    );
};

export default Work;
