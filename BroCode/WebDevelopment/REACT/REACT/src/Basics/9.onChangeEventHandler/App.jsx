// onChange = event handler used primarily with form element

import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("");

    function handleNameChange(event){
        setName(event.target.calue);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
        </div>
    );
}