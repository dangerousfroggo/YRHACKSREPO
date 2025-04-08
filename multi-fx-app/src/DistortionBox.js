import React from 'react'

import { DistortionSliders } from './DistortionSliders'

export function DistortionBox() {
    const startDistortion = async () => {
        var volume = 5;     // You can make this dynamic later
        var gain = 5;  // Or controlled via a slider
        var wetOrDry = 1
    
        try {
            const res = await fetch(
                `http://localhost:8000/start-distortion?volume=${volume}&gain=${gain}&wetOrDry=${wetOrDry}`
            );          
            const json = await res.json();
            console.log("Distortion started:", json);
        } catch (err) {
            console.error("Failed to start distortion:", err);
        }
      }; 

    return(
        <>
            <div>Distortion</div>
            <button
                onClick={startDistortion}
            > Click for Distortion </button>
            <DistortionSliders />
        </>
    )
}