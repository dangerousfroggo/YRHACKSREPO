import React from "react"

import { EffectBoxes } from "./EffectBoxes"

// import myLogo from './2025_04_08_0o6_Kleki.png'

export default function App() {
  
    return (
      <>
      <div style={{display: "flex", alignItems:"center", gap: "1rem"}}>
        {/* <img src={myLogo} alt="My Logo" /> */}
        <h1
          style={{margin: "0"}}
        > Multi Fx </h1>
      </div>
        <EffectBoxes />
      </>
    );
}