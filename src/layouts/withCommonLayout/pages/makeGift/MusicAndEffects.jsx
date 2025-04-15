import React from 'react';
import UploadMusicAndEffect from '../../../../components/componentsOfMakeGift/UploadMusicAndEffect';
import LivePreview from '../../../../components/componentsOfMakeGift/LivePreview';

const MusicAndEffects = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 pb-10 pt-20">
      <div className="pt-10 flex flex-col md:flex-row justify-between gap-5">
        <UploadMusicAndEffect
          
        />
        <LivePreview
          
        />
      </div>
    </div>
  );
};

export default MusicAndEffects;