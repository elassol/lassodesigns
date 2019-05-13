import React from 'react';

const LogotypeComponent = ({ name, tagline, icon }) => (
  <div>
    <div>
      <img src={icon} alt="" />
    </div>
    <div>{name}</div>
    <div>{tagline}</div>
  </div>
);
// eslint-disable-next-line semi


export default LogotypeComponent;
