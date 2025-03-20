import React from 'react';
import MakeGiftCategory from '../../../../components/componentsOfMakeGift/MakeGiftCategory';
import ChooseTheme from '../../../../components/componentsOfMakeGift/ChooseTheme';
import LivePreview from '../../../../components/componentsOfMakeGift/LivePreview';

const MakeGift = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 pb-10 pt-20'>
      <h1 className='text-center text-5xl font-bold pb-10'>
  Craft the Perfect <span className='text-purple-600'>Gift</span> – Make It <span className='text-purple-600'>Uniquely Yours!</span>
</h1>

      <MakeGiftCategory></MakeGiftCategory>


      <div className='pt-10 flex flex-col md:flex-row md:justify-between gap-5'>
        <ChooseTheme></ChooseTheme>
        <LivePreview></LivePreview>
      </div>
    </div>
  );
};

export default MakeGift;