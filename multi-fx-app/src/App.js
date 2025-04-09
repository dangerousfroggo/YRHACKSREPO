import React from "react"

import { EffectBoxes } from "./EffectBoxes"


export default function App() {
  
    return (
      <>
      <div style={{display: "flex", alignItems:"center", gap: "1rem"}}>
        <h1
          style={{margin: "0"}}
        > Multi Fx </h1>
      </div>
        <EffectBoxes />
      </>
    );
}