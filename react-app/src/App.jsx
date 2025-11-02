import { useState } from 'react'
import AboutMe from './aboutme'
import './App.css'
import Projects from './projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className ="welcome">
      <AboutMe/>
      <Projects/>
    </div>
  )
}

export default App
