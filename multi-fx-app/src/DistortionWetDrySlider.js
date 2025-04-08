import React from "react"
import { useState } from "react"

export function DistortionWetDrySlider({
    setDistortionWetDry
}) {    
  const [data, setData]=useState(0)

    function handleSlider(e){
        setData(e.target.value)
        setDistortionWetDry(e.target.value)
    }
    return(
        <>
          <div>Wet/Dry for Distortion</div>
          <div>
                <input 
                    type='range' min='0' max='10' 
                    step='1' value={data} 
                    onChange={handleSlider}
                />
                <h1>{data}</h1>
            </div>   
        </>
    )
}