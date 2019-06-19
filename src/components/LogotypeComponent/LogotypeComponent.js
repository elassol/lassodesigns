import React from 'react';
import { BrandingWrapper, LogoWrapper, LogotypeWrapper, CompanyName, TagLine } from './LogotypeComponent.style';

const LogotypeComponent = ({ name, tagline, icon }) => (
  <BrandingWrapper>
    <LogoWrapper>
      <img src={icon} alt="" />
    </LogoWrapper>
    <LogotypeWrapper>
      <CompanyName>{name}</CompanyName>
      <TagLine>{tagline}</TagLine>
    </LogotypeWrapper>
  </BrandingWrapper>
);
// eslint-disable-next-line semi


export default LogotypeComponent;
