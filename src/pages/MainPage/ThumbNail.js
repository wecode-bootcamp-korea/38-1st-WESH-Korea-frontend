import React from 'react';

import './ThumbNail.scss';

const Thumbnail = ({ id, img }) => {
  return (
    <div className="img-box">
      <img src={img} className="img" alt="tumbnail-img" />
    </div>
  );
};
export default Thumbnail;
