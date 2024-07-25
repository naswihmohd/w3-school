import './Style1.css'
import { FaAdjust } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";



function Head() {
    return (
        <div className="container">
            <div className="nav-bar">
                <ul>
                {/* <img src="./assets/images/logo.png" alt="" /> */}
                    <li>Tutorials</li>
                    <li>Exercise</li>
                    <li>Certificat</li>
                    <li>Services</li>
                    <li><input placeholder='Search... ' type="text" /></li><button className='button1'><IoIosSearch /></button>
                    <li className='dark'><FaAdjust /></li>
                    <button className='btn'>Plus</button>
                    <button className='btn1'><span className='icon'><FaCode /></span>Spaces</button>
                    <button className='btn2'><span className='icon'><IoCartOutline /></span>Get Certified</button>
                    <div className='acc'>
                        <button className='button2'>Sign Up</button><button className='button3'>Log in</button>
                    </div>
                </ul>
            </div>
            <div className="nav-bar-2">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>SQL</li>
                    <li>PYTHON</li>
                    <li>JAVA</li>
                    <li>PHP</li>
                    <li>HOWTO</li>
                    <li>W3.CSS</li>
                    <li>C</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>BOOTSTRAP</li>
                    <li>REACT</li>
                    <li>MYSQL</li>
                    <li>JQUERY</li>
                    <li>EXCEL</li>
                    <li>XML</li>
                    <li>DJANGO</li>
                    <li>NUMPY</li>
                    <li>PANDAS</li>
                    <li>NODEJS</li>
                    <li>R</li>
                    <li>TYPESCRIPT</li>
                    <li>ANGULAR</li>
                    <li>GIT</li>
                    <li>POSTGRESQL</li>
                    <li>MONGODB</li>
                    <li>ASP</li>
                    <li>AI</li>
                    <li>GO</li>
                    <li>KOTLIN</li>
                    <li>SASS</li>
                    <li>VUE</li>
                    <li>DSA</li>
                    <li>GEN</li>
                    <li>AI</li>
                    <li>SCIPY</li>
                    <li>AWS</li>
                    <li>CYBERSECURITY</li>
                    <li>DATASCIENCE</li>
                </ul>
            </div>
        </div>
    )
}

export default Head