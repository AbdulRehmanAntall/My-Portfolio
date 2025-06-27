import React from 'react'
import './Achievements.css'

const Achievements = () => {
  return (
    <div id="achievements" className="Achievements-Portion">
      <h1 className="achievement-title">Achievements</h1>

      <div className="achievement-card">
        <h2>Dean's List of Honors</h2>
        <p>FAST-NUCES, Fall 2023</p>
      </div>

      <div className="achievement-card">
        <h2>Dean's List of Honors</h2>
        <p>FAST-NUCES, Spring 2024</p>
      </div>

      {/* Add more cards here if needed */}

    </div>
  )
}

export default Achievements
