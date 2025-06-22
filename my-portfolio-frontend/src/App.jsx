import { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './components/Projects'
import Data from './components/Data'
import SkillsData from './components/SkillsData'
import Skills from './components/Skills'

export const ProjectContext = createContext();
export const SkillsCotext = createContext();
function App() {
  const [myProject] = useState(Data);
  const [mySkill] = useState(SkillsData);
  return (
    <SkillsCotext.Provider value={mySkill}>
      <ProjectContext.Provider value={myProject}>
        <div>
          <Navbar />
          <main className="main-content">
            <Home />
            <Skills />
            <Projects />

          </main>
          <Footer />
        </div>
      </ProjectContext.Provider>
    </SkillsCotext.Provider>
  )
}

export default App;
