// props = read-only properties that are shared between components
// A parent component can send data to a child component
// <Component key=value />
// DEFAULT PROPS ARE NOW DEPRECATED IN REACT 19+
import "./index.css"
import Student from "./Student.jsx"
function App(){
    return(
        <>
            <Student name = "Aamir Khan Pathan" age={16} isStudent={true}/>
            <Student name = "John Doe" age={24} isStudent={false}/>
            <Student name = "Jane Doe" age={24} isStudent={false}/>
            <Student/>
            {/* The Default Props No Longer Work In React 19 In Functions */}
        </>
    )
}
export default App