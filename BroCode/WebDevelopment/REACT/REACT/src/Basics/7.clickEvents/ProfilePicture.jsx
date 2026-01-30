import profilePicture from './Assets/profilePicture.jpg';

function ProfilePicture() {
  //const handleClick = (e) => console.log("OUCH!🤕");

    const handleClick = (e) => e.target.style.display = "none";

  return <img onClick={(e) => handleClick(e)} src={profilePicture} />;
}

export default ProfilePicture;
