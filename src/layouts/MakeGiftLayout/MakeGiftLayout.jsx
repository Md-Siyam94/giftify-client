import React from 'react';
import MakeGiftCategory from '../../components/componentsOfMakeGift/MakeGiftCategory';
import { Outlet } from 'react-router-dom';

const MakeGiftLayout = () => {
  return (
    <div>
      <div className='category-top pt-5'>
        <MakeGiftCategory></MakeGiftCategory>
      </div>
      <div className='dynamic-change-bottom flex'>

        <Outlet></Outlet>

      </div>

    </div>
  );
};

export default MakeGiftLayout;