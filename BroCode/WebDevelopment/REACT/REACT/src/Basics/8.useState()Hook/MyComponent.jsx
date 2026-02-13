import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState();

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateNa}></button>
        </div>
    )
}
export default MyComponent