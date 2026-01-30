import profilePicture from "./Assets/profilePicture.jpg"
import './Card.css'
function Card(){
    return(
        <div className="card">
            <img className="cardImage" src={profilePicture} alt="Profile Picture"></img>
            <h2 className="cardTitle">Aamir Khan Pathan</h2>
            <p className="cardText">I am a High School student and do Robotics.</p>
        </div>
    );
}

export default Card