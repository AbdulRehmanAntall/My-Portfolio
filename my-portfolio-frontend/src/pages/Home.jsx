import React from 'react';
import DownloadCVButton from '../components/DownloadCVButton';
import mypic from '../assets/mypic.jpg';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <img src={mypic} alt="Abdul Rehman" className="profile-pic" />
            <br></br>
            <DownloadCVButton />
        </div>
    );
}

export default Home;
