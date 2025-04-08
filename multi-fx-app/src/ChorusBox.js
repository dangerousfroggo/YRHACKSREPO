import React from 'react'
import { useState } from 'react'

import { ChorusSliders } from './ChorusSliders'

export function ChorusBox() {
    // chorus slider state
    const [chorusLevel, setChorusLevel] = useState(0);
    const [chorusRate, setChorusRate] = useState(0);
    const [chorusDepth, setChorusDepth] = useState(0);

    // chorus button state
    const [chorusButtonState, setChorusButtonState] = useState(false);

    const startChorus = async () => {
        setChorusButtonState(!chorusButtonState)
        console.log(chorusLevel, chorusRate, chorusDepth)
        const query = new URLSearchParams({
            chorusLevel,
            chorusRate,
            chorusDepth,
            enableChorus: true,
        }).toString();
      
        try {
            const res = await fetch(`http://localhost:8000/start-effects?${query}`);
            const json = await res.json();
            console.log("Chorus started:", json);
        } catch (err) {
            console.error("Failed to start chorus:", err);
        }
    }; 

    const stopChorus = async () => {
        setChorusButtonState(!chorusButtonState)
        try {
          const res = await fetch("http://localhost:8000/stop-distortion");
          const json = await res.json();
          console.log("STOPPED:", json);
        } catch (err) {
          console.error("Failed to stop distortion:", err);
        }
    };

    return(
        <>
            <div>Chorus</div>
            <button onClick={chorusButtonState ? stopChorus : startChorus}>
                {chorusButtonState ? "Stop" : "Start"} Chorus
            </button>
            <ChorusSliders 
                setChorusLevel={setChorusLevel}
                setChorusRate={setChorusRate}
                setChorusDepth={setChorusDepth}
            />
        </>
    )
}