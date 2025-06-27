import { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './components/Projects'
import Data from './components/Data'
import SkillsData from './components/SkillsData'
import Skills from './components/Skills'
import About from './pages/About'
import Education from './pages/Education'
import Achievements from './pages/Achievements'
import WorkExperienceData from './components/WorkExperienceData'
import Work from './pages/Work'
export const ProjectContext = createContext();
export const SkillsCotext = createContext();
export const WorkContext = createContext();

function App() {
  const [myProject] = useState(Data);
  const [mySkill] = useState(SkillsData);
  const [myWork] = useState(WorkExperienceData);

  return (
    <SkillsCotext.Provider value={mySkill}>
      <ProjectContext.Provider value={myProject}>
        <WorkContext.Provider value={myWork}>
          <div>
            <Navbar />
            <main className="main-content">
              <Home />
              <About />
              <Skills />
              <Projects />
              <Work />
              <Achievements />
              <Education />

            </main>
            <Footer />
          </div>
        </WorkContext.Provider>
      </ProjectContext.Provider>
    </SkillsCotext.Provider>
  )
}

export default App;
