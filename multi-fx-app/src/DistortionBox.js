import React from 'react'

import { DistortionSliders } from './DistortionSliders'

export function DistortionBox() {
    return(
        <>
            <div>Distortion</div>
            <button> Click for Distortion </button>
            <DistortionSliders />
        </>
    )
}