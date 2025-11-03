import './projects.css'
import {useState} from 'react'
function Projects() {
    const [showPopup, setShowPopup] = useState(false);
    function checkClick(){

        setShowPopup(true);
    }
    return (
    <div className ="projects">
        <h1>Hello! These are my past projects</h1>
        <ul className="project">
            <li className="p">
                <p>Project 1</p>
                <p className = "button" onClick={checkClick}>Personal Website</p>
            </li>
            <li className="p">
                <p>Project 2</p>
                <p className = "button" onClick={checkClick}>DBH Website</p>
            </li>
            <li className="p">
                <p>Project 3</p>
                <p className = "button" onClick={checkClick}>PAL Website</p>
            </li>
            <li className="p">
                <p>Project 4</p>
                <p className = "button" onClick={checkClick}>Virtual Pet</p>
            </li>
            
        </ul>
    </div>
    )
  }
  
  export default Projects