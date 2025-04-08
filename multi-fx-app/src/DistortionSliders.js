import React from "react"

import {DistortionVolumeSlider} from "./DistortionVolumeSlider"
import {DistortionGainSlider} from "./DistortionGainSlider"
import {DistortionWetDrySlider} from "./DistortionWetDrySlider"


export function DistortionSliders() {
    return(
        <>
            <div>
                <DistortionVolumeSlider />
                <DistortionGainSlider />
                <DistortionWetDrySlider/>
            </div>
        </>
    )
}