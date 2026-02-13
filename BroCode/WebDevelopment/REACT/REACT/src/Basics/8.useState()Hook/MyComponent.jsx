import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState();

    return(
        <div>
            <p>Name: {name}</p>
            <button></button>
        </div>
    )
}
export default MyComponent