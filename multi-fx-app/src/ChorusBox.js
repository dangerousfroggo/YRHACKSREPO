import React from 'react'
import { useState } from 'react'

import { ChorusSliders } from './ChorusSliders'

export function ChorusBox() {
    // chorus slider state
    const [chorusLevel, setChorusLevel] = useState(0);
    const [chorusRate, setChorusRate] = useState(0);
    const [chorusDepth, setChorusDepth] = useState(0);

    const startChorus = async () => {
        // setChorusButtonState(!ChorusButtonState)
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

    return(
        <>
            <div>Chorus</div>
            <ChorusSliders />
        </>
    )
}