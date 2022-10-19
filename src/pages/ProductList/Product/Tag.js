import React from 'react';
import './Tag.scss';

const Tag = props => {
  return (
    <div className="tag-box">
      <div className="new">{props.new}</div>
      <div className="halooween">{props.vegan}</div>
    </div>
  );
};
export default Tag;
