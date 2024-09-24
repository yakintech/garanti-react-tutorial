import React, { useEffect } from 'react'

function EffectCleanUp() {

    
  useEffect(() => {
    
    
    let interval = setInterval(() => {
      console.log("Hello")
    }, 1000)

    //component dispose oldugunda calisir
    return () => {
      clearInterval(interval)
    }


    
  }, [])
  


  return <>
  
  </>
}

export default EffectCleanUp