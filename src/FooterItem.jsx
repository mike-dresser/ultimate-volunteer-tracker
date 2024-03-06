import React from 'react';
import { Link } from 'react-router-dom';

function FooterItem({ url, imgSrc, hoverText }) {
  return (
    <div className="tooltipContainer">
      <span className="tooltipText">{hoverText}</span>
      <Link to={url}>
        <img src={imgSrc} alt={hoverText} />
      </Link>
    </div>
  );
}

export default FooterItem;
