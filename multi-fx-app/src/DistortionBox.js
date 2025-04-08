import React from 'react'
import { useState } from 'react'

import { DistortionSliders } from './DistortionSliders'

export function DistortionBox() {
    // distortion slider states
    const [distortionVolume, setDistortionVolume] = useState(0);
    const [distortionGain, setDistortionGain] = useState(0);
    const [distortionWetDry, setDistortionWetDry] = useState(0);

    // distortion button state
    const [distortionButtonState, setDistortionButtonState] = useState(false);


    const startDistortion = async () => {
        setDistortionButtonState(!distortionButtonState)
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

    const stopDistortion = async () => {
        setDistortionButtonState(!distortionButtonState)
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
            <div>Distortion</div>
            <button onClick={distortionButtonState ? stopDistortion : startDistortion}>
                {distortionButtonState ? "Stop" : "Start"} Distortion
            </button>
            <DistortionSliders
                setDistortionVolume={setDistortionVolume}
                setDistortionGain={setDistortionGain}
                setDistortionWetDry={setDistortionWetDry}
            />
        </>
    )
}