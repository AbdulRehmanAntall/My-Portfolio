import React from 'react';
import CV from '../assets/AbdulRehmanCV.pdf';
import './DownloadCVButton.css'
function DownloadCVButton() {
    return (
        <a href={CV} download="AbdulRehmanCV.pdf">
            <button className="download-btn">Download CV</button>
        </a>
    );
}

export default DownloadCVButton;
