import React from "react"
import { useState } from "react"

export function DelayFeedbackSlider({
    setDelayFeedback
}) {
    const [data, setData]=useState(0)

    function handleSlider(e){
        setData(e.target.value)
        setDelayFeedback(e.target.value)
    }
    
    
    return(
        <>
            <div>Feedback for Delay</div>
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