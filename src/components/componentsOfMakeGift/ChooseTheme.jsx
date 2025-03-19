import React from "react";

const ChooseTheme = () => {
  const themes = [
    {
      title: "Birthday Celebration",
      description: "Colorful birthday-themed animation",
      image: "https://static.vecteezy.com/system/resources/previews/004/937/952/non_2x/happy-birthday-celebration-background-with-realistic-colorful-balloons-design-for-greeting-card-poster-banner-illustration-vector.jpg",
      active: true,
    },
    {
      title: "Love & Romance",
      description: "Romantic hearts and flowers",
      image: "https://png.pngtree.com/background/20210715/original/pngtree-happy-valentine-day-greeting-card-with-kissing-romantic-couple-and-love-picture-image_1260080.jpg",
    },
    {
      title: "Congratulations",
      description: "Achievement celebration theme",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/congratulations-card-design-template-5a4b8ab8cf27bfc95e386895b72e30ab_screen.jpg?ts=1696564824",
    },
    {
      title: "Thank You",
      description: "Gratitude expression design",
      image: "https://ideas.hallmark.com/wp-content/uploads/2020/08/WTW_ThankYouCards.jpg",
    },
  ];

  const colors = ["#4A3AFF", "#E02424", "#2DBA2D", "#F89C1C", "#FF5F1F"];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-lg font-semibold mb-4">Choose Your Theme</h2>

      {/* Themes */}
      <div className="grid grid-cols-2 gap-3">
        {themes.map((theme, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden border ${
              theme.active ? "border-purple-600" : "border-gray-300"
            }`}
          >
            <img
              src={theme.image}
              alt={theme.title}
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-2 text-white">
              <p className="text-sm font-semibold">{theme.title}</p>
              <p className="text-xs">{theme.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Color Scheme */}
      <h3 className="text-md font-semibold mt-6">Color Scheme</h3>
      <div className="flex gap-3 mt-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full border-2 cursor-pointer hover:scale-125 transition-all ease-linear`}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>

      {/* Inputs */}
      <div className="mt-4">
        <label className="text-sm font-semibold">Recipient’s Name</label>
        <input
          type="text"
          placeholder="Enter recipient’s name"
          className="w-full border rounded-lg p-2 mt-1 outline-none focus:border-purple-600"
        />
      </div>

      <div className="mt-4">
        <label className="text-sm font-semibold">Your Message</label>
        <textarea
          placeholder="Write your personal message..."
          className="w-full border rounded-lg p-2 mt-1 outline-none focus:border-purple-600 resize-none h-20"
        ></textarea>
      </div>
    </div>
  );
};

export default ChooseTheme;
