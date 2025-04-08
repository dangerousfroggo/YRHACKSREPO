import React from "react"
import { useState } from "react"

export function DistortionGainSlider({
    setDistortionGain
}) {
  const [data, setData]=useState(0)

    function handleSlider(e){
        setData(e.target.value)
        setDistortionGain(e.target.value)
    }    
    return(
        <>
          <div>Gain for Distortion</div>
          <div>
                <input 
                    type='range' min='0' max='10' 
                    step='1' value={data} 
                    onChange={handleSlider}
                />
                <h2>{data}</h2>
            </div>   
        </>
    )
}