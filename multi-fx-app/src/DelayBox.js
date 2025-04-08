import React from 'react'
import { useState } from 'react'

import { DelaySliders } from './DelaySliders'

export function DelayBox() {
    // delay slider states
    const [delayLevel, setDelayLevel] = useState(0);
    const [delayFeedback, setDelayFeedback] = useState(0);
    const [delayDelay, setDelayDelay] = useState(0);

    // distortion button state
    const [delayButtonState, setDelayButtonState] = useState(false);

    const startDelay = async () => {
        setDelayButtonState(!delayButtonState)
        
        const query = new URLSearchParams({
            delayLevel: delayLevel,
            feedback: delayFeedback,
            delay: delayDelay,
            enableDelay: true,
        }).toString();
    
        try {
            const res = await fetch(`http://localhost:8000/start-effects?${query}`);
            const json = await res.json();
            console.log("Delay started:", json);
        } catch (err) {
            console.error("Failed to start delay:", err);
        }
    }; 

    const stopDelay = async () => {
        setDelayButtonState(!delayButtonState)
        try {
            const res = await fetch("http://localhost:8000/stop-effects");
          const json = await res.json();
          console.log("STOPPED:", json);
        } catch (err) {
          console.error("Failed to stop delay:", err);
        }
    };

    return(
        <>
            <div>Distortion</div>
            <button onClick={delayButtonState ? stopDelay : startDelay}>
                {delayButtonState ? "Stop" : "Start"} Delay
            </button>
            <DelaySliders
                setDelayLevel={setDelayLevel}
                setDelayFeedback={setDelayFeedback}
                setDelayDelay={setDelayDelay}
            />
        </>
    )
}