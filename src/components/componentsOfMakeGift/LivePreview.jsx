import React from "react";
import { FaMagic } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineAutoAwesome } from "react-icons/md";

const LivePreview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      {/* Header */}
      <div className="flex flex-col items-start md:flex-row md:justify-between mb-4">
        <h2 className="text-lg font-semibold">Live Preview</h2>
        <button className="flex items-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
          <FaMagic />
          Apply Magic Effects
        </button>
      </div>

      {/* Preview Image */}
      <div className="w-full h-48 rounded-lg overflow-hidden border">
        <img
          src="https://png.pngtree.com/background/20210715/original/pngtree-happy-valentine-day-greeting-card-with-kissing-romantic-couple-and-love-picture-image_1260080.jpg"
          alt="Live Preview"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="flex justify-between items-center mt-3 text-gray-600 text-sm">
        <span className="flex items-center gap-1">
          <MdOutlineAutoAwesome />
          5 effects applied
        </span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-3 md:flex-row md:justify-between mt-4">
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition">
          ← Previous Step
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
          Next Step →
        </button>
      </div>
    </div>
  );
};

export default LivePreview;
