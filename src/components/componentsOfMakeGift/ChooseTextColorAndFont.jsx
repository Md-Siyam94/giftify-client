import React, { useState } from "react";

const ChooseTextColorAndFont = () => {
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [selectedColor, setSelectedColor] = useState("#000000");

  const fonts = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia"];
  const colors = [
    "#3B82F6", "#EF4444", "#10B981", "#FACC15", "#F97316",
    "#6B7280", "#A855F7", "#EC4899", "#14B8A6", "#6366F1",
    "#84CC16", "#F59E0B"
  ];

  return (
    <div className="max-w-lg mx-auto p-5">
      <h2 className="text-xl font-semibold mb-4">Add Your Message</h2>

      {/* Font Style Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Font Style</label>
        <select
          className="w-full border p-2 rounded-lg"
          value={selectedFont}
          onChange={(e) => setSelectedFont(e.target.value)}
        >
          {fonts.map((font, index) => (
            <option key={index} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      {/* Text Color Selection */}
      <div>
        <label className="block text-sm font-medium mb-2">Text Color</label>
        <div className="flex gap-3">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full border-2 cursor-pointer`}
              style={{ backgroundColor: color, borderColor: selectedColor === color ? "black" : "transparent" }}
              onClick={() => setSelectedColor(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseTextColorAndFont;
