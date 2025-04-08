import React from "react";

// import { DelayBox } from "./DelayBox";
import { ChorusBox } from "./ChorusBox";
import { DistortionBox } from "./DistortionBox";

export function EffectBoxes() {
    return (
        <>  
            <div className="effect-boxes">
                {/* <DelayBox /> */}
                <ChorusBox />
                <DistortionBox />
            </div>
        </>
    )
}