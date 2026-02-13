//import Button from './Button.jsx'
import ProfilePicture from './ProfilePicture.jsx';
import "./index.css"
function App(){
    //const handleClick = (e) => e.target.textContent = "OUCH!🤕";
    /*
    let count = 0;
    const handleClick = (name) => {
            if(count < 3){
                count++;
                console.log(`${name} you clicked me ${count} time/s 👍`)
            }else{
                console.log(`${name} STOP CLICKING ME!🤬`);
            }
    };
    */
    /*
    const handleClick = () => console.log("OUCH!🤕")
    //const handleClick2 = (name) => console.log(`${name} STOP CLICKING ME!🤬`)
    */
    return(
        //<button onClick={() => handleClick("Aamir")}>Click Me 😁</button>
        //<button onClick={(e) => handleClick(e)}>Click Me 😁</button>
        <ProfilePicture/>
    );
}
export default App