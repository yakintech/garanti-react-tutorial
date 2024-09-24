import React, { useEffect, useState } from 'react'

function DependenctSample() {

    const [status, setstatus] = useState(false)


    useEffect(() => {

        console.log("Effect Sample Rendered");

    }, [status])

    useEffect(() => {

        
    }, [])
    


    return <>
        <h1>Effect Dependency Sample</h1>
        <button onClick={() => setstatus(!status)}>Change Status</button>
    </>
}

export default DependenctSample