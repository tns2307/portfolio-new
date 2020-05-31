import React from 'react';
import config from '../../config';
export default function Header() {
  return (
    <div id="header">
      <span className="logo icon fa-code"></span>
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>

    </div>
  );
}
