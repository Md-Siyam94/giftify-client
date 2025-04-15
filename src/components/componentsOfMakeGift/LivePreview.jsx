import React from "react";
import { FaMagic } from "react-icons/fa";
import { MdOutlineAutoAwesome } from "react-icons/md";

const LivePreview = ({ selectedColor, recipientName, message }) => {
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

      {/* Preview Image with Dynamic Background */}
      <div
        className="w-full relative rounded-lg overflow-hidden border flex justify-center items-center"
        style={{ backgroundColor: selectedColor }}
      >
        <img
          src="https://i.ibb.co.com/8DvDL7nh/Red-Playful-Gift-Voucher-Christmas-Card-removebg-preview.png"
          alt="Live Preview"
          className="w-full"
        />
        <div className="absolute bottom-10 right-20 text-white">
          <h1 className="text-xl font-bold">To: <span>{recipientName || "Recipient"}</span></h1>
          <h1 className="">{message || "Your message here..."}</h1>
        </div>
      </div>

      {/* Effects Applied */}
      <div className="flex justify-between items-center mt-3 text-gray-600 text-sm">
        <span className="flex items-center gap-1">
          <MdOutlineAutoAwesome />
          5 effects applied
        </span>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
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
