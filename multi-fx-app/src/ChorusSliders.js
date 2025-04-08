import React from "react"

import {ChorusLevelSlider} from "./ChorusLevelSlider"
import {ChorusRateSlider} from "./ChorusRateSlider"
import {ChorusDepthSlider} from "./ChorusDepthSlider"

export function ChorusSliders() {
    return(
        <>
            <div>
                <ChorusLevelSlider />
                <ChorusRateSlider />
                <ChorusDepthSlider/>
            </div>
        </>
    )
}