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
              <Tag tagnew={e.new} tagvegan={e.vegan} />
            ))}
          </div>
          <div className="title">{title}</div>
          <div className="price">{price.slice(0, price.length - 4)} 원</div>
        </div>
      </div>
    </div>
  );
};
export default Product;
