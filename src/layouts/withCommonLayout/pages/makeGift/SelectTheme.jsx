import React, { useState } from "react";
import ChooseTheme from "../../../../components/componentsOfMakeGift/ChooseTheme";
import LivePreview from "../../../../components/componentsOfMakeGift/LivePreview";

const SelectTheme = () => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-5 pb-28 pt-0">
      <div className="pt-10 flex flex-col md:flex-row justify-between gap-5">
        <ChooseTheme
          setSelectedColor={setSelectedColor}
          setRecipientName={setRecipientName}
          setMessage={setMessage}
        />
        <LivePreview
          selectedColor={selectedColor}
          recipientName={recipientName}
          message={message}
        />
      </div>
    </div>
  );
};

export default SelectTheme;
