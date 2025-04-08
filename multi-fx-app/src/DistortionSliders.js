import React from "react"

import {DistortionVolumeSlider} from "./DistortionVolumeSlider"
import {DistortionGainSlider} from "./DistortionGainSlider"
import {DistortionWetDry} from "./DistortionWetDry"


export function DistortionSliders() {
    return(
        <>
            <div>
                <DistortionVolumeSlider />
                <DistortionGainSlider />
                <DistortionWetDry/>
            </div>
        </>
    )
}