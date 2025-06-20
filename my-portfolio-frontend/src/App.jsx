import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>

      <Navbar />

      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div >


  )
}

export default App
