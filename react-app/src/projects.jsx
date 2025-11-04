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
            <li className="p" onClick={() => checkClick('Personal Website')} >
                <p>Project 1</p>
                <p className = "button">Personal Website</p>
            </li>
            <li className="p" onClick={() => checkClick('DBH Website')} >
                <p>Project 2</p>
                <p className = "button">DBH Website</p>
            </li>
            <li className="p" onClick={() => checkClick('PAL Website')}>
                <p>Project 3</p>
                <p className = "button">PAL Website</p>
            </li>
            <li className="p"onClick={() => checkClick('Virtual Pet')}>
                <p>Project 4</p>
                <p className = "button">Virtual Pet</p>
            </li>
            
        </ul>
            {showPopup && (
            <div className = "popup">
                <h1>{selectedProject}</h1>
                <p>One of the first full fledge programs that I made using HTML, CSS, and JS. This program took me a while and while I am proud of it, I still see room for improvement!!</p>
                <button onClick={closePopup}>Close</button>
            </div>
        )}
    </div>
    )
} 
  export default Projects