import { IoColorPaletteOutline } from "react-icons/io5";
import { TfiText } from "react-icons/tfi";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const MakeGiftCategory = () => {
  const categories = [
    { icon: <IoColorPaletteOutline size={24} />, label: "Choose Theme", active: false, link: '/make-gift/select-theme' },
    { icon: <TfiText size={24} />, label: "Add Message", active: false, link: '/make-gift/select-text' },
    { icon: <MdOutlinePhotoLibrary size={24} />, label: "Upload Media", active: false, link: '/make-gift/select-upload-media' },
    { icon: <IoMusicalNotesOutline size={24} />, label: "Music & Effects", active: false, link: '/make-gift/select-music-effects'},
    { icon: <IoPaperPlaneOutline size={24} />, label: "Preview & Send", active: false, link: '/make-gift/preview-send' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
      {/* <h1 className="text-center text-5xl font-bold">
        Personalize Your <span className="text-purple-600">Gift</span>
      </h1> */}
      {categories.map((category, index) => (
        <NavLink key={index} to={category.link}>
          <div
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
        </NavLink>
      ))}
    </div>
  );
};

export default MakeGiftCategory;
