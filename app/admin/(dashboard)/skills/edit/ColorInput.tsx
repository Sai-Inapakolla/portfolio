"use client";

import { useState } from "react";

export default function ColorInput({ defaultValue }: { defaultValue: string }) {
  const [color, setColor] = useState(defaultValue);

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <input 
        type="color" 
        value={color}
        style={{ width: 40, height: 40, padding: 0, border: "none", background: "none", cursor: "pointer" }} 
        onChange={(e) => setColor(e.target.value)} 
      />
      <input 
        type="text" 
        id="color" 
        name="color" 
        value={color}
        onChange={(e) => setColor(e.target.value)}
        required 
        className="admin-input" 
      />
    </div>
  );
}
