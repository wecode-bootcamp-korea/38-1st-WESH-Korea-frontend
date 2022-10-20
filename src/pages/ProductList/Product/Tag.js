import React from 'react';
import './Tag.scss';

const Tag = ({ tagnew, tagvegan }) => {
  return (
    <div className="tag-box">
      <div className="new">{tagnew}</div>
      <div className="vegan">{tagvegan}</div>
    </div>
  );
};
export default Tag;
