import React, { useState } from 'react'

function InputStateSample() {

    const [name, setname] = useState("")


    const upper = () => {
        alert(name.toUpperCase())
    }

    return <>
        <div>
            <label htmlFor="">Name:</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <button onClick={upper}>Upper</button>
        </div>
    </>
}

export default InputStateSample