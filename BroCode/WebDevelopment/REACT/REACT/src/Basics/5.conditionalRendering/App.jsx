// conditonal Rendering determines what gets shown within
import UserGreeting from "./UserGreeting.jsx"
import "./index.css"
function App(){
    return(
        <>
            <UserGreeting isLoggedIn={true} username="AamirKPathan"/>
            UserGreeting
        </>
    );
}
export default App