import React from "react"

import { EffectBoxes } from "./EffectBoxes"

export default function App() {
  
    return (
      <>
      <div style={{display: "flex", alignItems:"center", gap: "1rem"}}>
        <img
          src="./2025-04_08-0o6_Kleki.png"
          alt="Logo"
          style={{width: "50px", height:"50px" }}
        ></img>
        <h1
          style={{margin: "0"}}
        > Multi Fx </h1>
        </div>
        <EffectBoxes />
      </>
    );
}