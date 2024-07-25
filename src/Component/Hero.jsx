import './Style1.css';
import { IoIosSearch } from "react-icons/io";

function Hero(){
    return(
        <div className="Hero">
            <center>
                <h1>Learn to Code</h1>
                <h4>With the world's largest web developer site.</h4>
                <input placeholder='Search our tutorials, e.g. HTML' type="text" /> <button><IoIosSearch /></button> <br />
                <a href="#">Not Sure Where To Begin?</a>
            </center>
        </div>
    )
}

export default Hero