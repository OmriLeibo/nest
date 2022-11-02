import React from 'react';
import AnimateLink from './UI/AnimateLink/AnimateLink';
import HeaderWrapper from './UI/HeaderWrapper/HeaderWrapper';
import AnimateLinks from './UI/AnimateLink/AnimateLinks';
import HeaderTitle from './UI/HeaderTitle/HeaderTitle';
import './Header.scss';

const Header = () => (
  <div className='header'>
    <HeaderWrapper>
      <HeaderTitle />
      <AnimateLinks />
    </HeaderWrapper>
  </div>
);

export default Header;
