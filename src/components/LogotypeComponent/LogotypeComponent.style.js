import styled from 'styled-components';

export const BrandingWrapper = styled.div`
  background: red;
  display: block;
  max-width: 300px;
  height: auto;
  background: yellow;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const LogoWrapper = styled.div`
  display: block;
  width: 75px;
  height: auto;
`;

export const LogotypeWrapper = styled.div`
  display: block;
  width: auto;
  height: auto;
`;

export const CompanyName = styled.h2`
  font-size:16px;
  letter-spacing: 0.5px;
`;

export const TagLine = styled.p`
  font-size: 12px;
  letter-spacing: 2px;
`;
