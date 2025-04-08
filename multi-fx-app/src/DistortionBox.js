import React from 'react'
import { useState } from 'react'

import { DistortionSliders } from './DistortionSliders'

export function DistortionBox() {
    // distortion slider states
    const [distortionVolume, setDistortionVolume] = useState(0);
    const [distortionGain, setDistortionGain] = useState(0);
    const [distortionWetDry, setDistortionWetDry] = useState(0);


    const startDistortion = async () => {
        try {
            const res = await fetch(
                `http://localhost:8000/start-distortion?volume=${distortionVolume}&gain=${distortionGain}&wetOrDry=${distortionWetDry}`
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
            <DistortionSliders
                setDistortionVolume={setDistortionVolume}
                setDistortionGain={setDistortionGain}
                setDistortionWetDry={setDistortionWetDry}
            />
        </>
    )
}