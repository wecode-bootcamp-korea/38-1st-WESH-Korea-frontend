import React from 'react';
import './Tag.scss';
const Tag = props => {
  return (
    <div className="tagBox">
      <div className="new">{props.new}</div>
      <div className="halooween">{props.vegan}</div>
    </div>
  );
};
export default Tag;
