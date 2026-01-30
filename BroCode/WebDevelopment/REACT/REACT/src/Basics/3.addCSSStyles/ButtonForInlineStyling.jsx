// THIS IS FOR INLINE
//Everything Must Be Camel Case In Styles
// Every Value Must Be A String
// Everything is comma seperated not semi colon
// Good For Isolated Components With Less Styling
// Good For Small Projects
function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return(<button style={styles}>Click Me</button>)
}

export default Button