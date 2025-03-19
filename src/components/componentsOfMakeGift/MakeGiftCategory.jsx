import { IoColorPaletteOutline } from "react-icons/io5";
import { TfiText } from "react-icons/tfi";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";

const MakeGiftCategory = () => {
  const categories = [
    { icon: <IoColorPaletteOutline size={24} />, label: "Choose Theme", active: true },
    { icon: <TfiText size={24} />, label: "Add Message", active: false },
    { icon: <MdOutlinePhotoLibrary size={24} />, label: "Upload Media", active: false },
    { icon: <IoMusicalNotesOutline size={24} />, label: "Music & Effects", active: false },
    { icon: <IoPaperPlaneOutline size={24} />, label: "Preview & Send", active: false },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="cursor-pointer hover:text-purple-600 flex flex-col items-center text-gray-500"
        >
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full ${
              category.active ? "text-purple-600 border-2 border-purple-600" : "border border-gray-300"
            }`}
          >
            {category.icon}
          </div>
          <p className={`mt-2 text-sm ${category.active ? "text-purple-600 font-semibold" : ""}`}>
            {category.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MakeGiftCategory;
