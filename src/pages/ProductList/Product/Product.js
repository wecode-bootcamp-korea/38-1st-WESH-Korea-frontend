import React from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag';
import './Product.scss';

const Product = ({ id, title, price, img, tag }) => {
  return (
    <div className="product-list-box">
      <div className="list-box">
        <div className="list-item-box">
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
