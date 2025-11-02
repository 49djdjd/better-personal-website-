import { useState } from 'react'
import AboutMe from './aboutme'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className ="welcome">
      <AboutMe/>
    </div>
  )
}

export default App
