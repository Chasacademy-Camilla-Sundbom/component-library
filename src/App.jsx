import React, { useState } from "react";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div
      className="flex p-8 gap-3 justify-center items-center"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Button />
    </div>
  );
}

export default App;
