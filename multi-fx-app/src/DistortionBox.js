import React from 'react'

import { DistortionSliders } from './DistortionSliders'

export function DistortionBox() {
    const startDistortion = async () => {
        try {
          const res = await fetch("http://localhost:8000/start-distortion");
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