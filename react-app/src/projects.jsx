import './projects.css'
import {useState} from 'react'
function Projects() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');
    function checkClick(project){
        setShowPopup(true);
        setSelectedProject(project);
    }
    function closePopup(){
        setShowPopup(false);
    }
    return (
    <div className ="projects">
        <h1>Hello! These are my past projects</h1>
        <ul className="project">
            <li className="p">
                <p>Project 1</p>
                <p className = "button" onClick={() => checkClick('Personal Website')}>Personal Website</p>
            </li>
            <li className="p">
                <p>Project 2</p>
                <p className = "button" onClick={() => checkClick('DBH Website')}>DBH Website</p>
            </li>
            <li className="p">
                <p>Project 3</p>
                <p className = "button" onClick={() => checkClick('PAL Website')}>PAL Website</p>
            </li>
            <li className="p">
                <p>Project 4</p>
                <p className = "button" onClick={() => checkClick('Virtual Pet')}>Virtual Pet</p>
            </li>
            
        </ul>
            {showPopup && (
            <div className = "popup">
                <h1>Personal Website</h1>
                <p>One of the first full fledge programs that I made using HTML, CSS, and JS. This program took me a while and while I am proud of it, I still see room for improvement!!</p>
                <button onClick={closePopup}>Close</button>
            </div>
        )}
    </div>
    )
} 
  export default Projects