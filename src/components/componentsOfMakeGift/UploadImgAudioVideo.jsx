import React, { useState } from "react";
import { CloudUpload, Video, Music } from "lucide-react";

const UploadImgAudioVideo = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleFileChange = (event, setFile) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file.name);
    }
  };

  return (
    <div className="w-full p-5">
      <h2 className="text-xl font-semibold mb-4">Upload Media</h2>

      {/* Upload Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Upload Image</label>
        <div className="border-2 border-dashed p-5 flex flex-col items-center justify-center rounded-lg">
          <CloudUpload size={40} className="text-gray-400 mb-2" />
          {image ? (
            <p className="text-sm text-gray-700">{image}</p>
          ) : (
            <p className="text-sm text-gray-500">
              Drag & drop your image here, or{" "}
              <label className="text-blue-500 cursor-pointer">
                browse
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, setImage)}
                />
              </label>
            </p>
          )}
        </div>
      </div>

      {/* Upload Video */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Upload Video</label>
        <div className="border-2 border-dashed p-5 flex flex-col items-center justify-center rounded-lg">
          <Video size={40} className="text-gray-400 mb-2" />
          {video ? (
            <p className="text-sm text-gray-700">{video}</p>
          ) : (
            <p className="text-sm text-gray-500">
              Drag & drop your video here, or{" "}
              <label className="text-blue-500 cursor-pointer">
                browse
                <input
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, setVideo)}
                />
              </label>
            </p>
          )}
        </div>
      </div>

      {/* Upload Audio */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Upload Audio</label>
        <div className="border-2 border-dashed p-5 flex flex-col items-center justify-center rounded-lg">
          <Music size={40} className="text-gray-400 mb-2" />
          {audio ? (
            <p className="text-sm text-gray-700">{audio}</p>
          ) : (
            <p className="text-sm text-gray-500">
              Drag & drop your audio here, or{" "}
              <label className="text-blue-500 cursor-pointer">
                browse
                <input
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, setAudio)}
                />
              </label>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadImgAudioVideo;
