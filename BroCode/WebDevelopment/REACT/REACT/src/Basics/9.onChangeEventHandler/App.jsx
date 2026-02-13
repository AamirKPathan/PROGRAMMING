// onChange = event handler used primarily with form element

import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Enter Name");

    function handleNameChange(event){
        setName(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
        </div>
    );
}
export default MyComponent