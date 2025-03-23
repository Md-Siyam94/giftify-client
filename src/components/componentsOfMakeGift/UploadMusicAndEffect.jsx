import React from "react";
import { Music, Bell, Mic } from "lucide-react";

const UploadMusicAndEffect = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Music & Effects</h2>

      {/* Background Music Upload */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Background Music</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Music className="mx-auto text-gray-500" size={40} />
          <p className="text-gray-600 mt-2">
            Drag & drop your music here, or{" "}
            <span className="text-blue-500 cursor-pointer">browse</span>
          </p>
        </div>
      </div>

      {/* Sound Effects Upload */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Sound Effects</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Bell className="mx-auto text-gray-500" size={40} />
          <p className="text-gray-600 mt-2">
            Drag & drop your sound effects here, or{" "}
            <span className="text-blue-500 cursor-pointer">browse</span>
          </p>
        </div>
      </div>

      {/* Voice Over Upload */}
      <div>
        <h3 className="font-medium mb-2">Voice Over</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Mic className="mx-auto text-gray-500" size={40} />
          <p className="text-gray-600 mt-2">
            Drag & drop your voice over here, or{" "}
            <span className="text-blue-500 cursor-pointer">browse</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadMusicAndEffect;
