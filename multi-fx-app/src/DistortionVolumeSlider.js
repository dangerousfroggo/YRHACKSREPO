import React from "react"
import { useState } from "react"

export function DistortionVolumeSlider() {
    
    // function range(start, end, step=1){
    // const result = [];
    // for (let i = start; i<end; i++){
    //     result.push(i);
    // }
    // return result
    // }
    // const pal = range(0, 101);

    const [data, setData]=useState(0)

    function handleSlider(e){
        setData(e.target.value)
    }
    
    
    return(
        <>
            <div>
                <input 
                    type='range' min='0' max='100' 
                    step='1' value={data} 
                    onChange={handleSlider}
                />
                <h1>{data}</h1>
            </div>  
        </>
    )
}