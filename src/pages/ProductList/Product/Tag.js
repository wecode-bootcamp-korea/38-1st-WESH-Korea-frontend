import React from 'react';

import './Tag.scss';

const Tag = ({ tagnew }) => {
  return (
    <div className="tag-box">
      <div className="tag-box-list">
        <div className="new">{tagnew}</div>
      </div>
    </div>
  );
};
export default Tag;
