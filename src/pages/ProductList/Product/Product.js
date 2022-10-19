import React from 'react';
import Tag from './Tag';
import './Product.scss';
import { Link } from 'react-router-dom';

const Product = ({ id, title, price, img, tag }) => {
  return (
    <div className="mainpage">
      <div className="listBox">
        <div className="listItemBox">
          <Link to="/productdetail">
            <img src={img} className="img" />
          </Link>
          <div className="tag">
            {tag.map(e => (
              <Tag new={e.new} vegan={e.vegan} />
            ))}
          </div>
          <div className="title">{title}</div>
          <div className="price">{price}</div>
        </div>
      </div>
    </div>
  );
};
export default Product;
