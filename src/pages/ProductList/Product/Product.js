import React from 'react';
import Tag from './Tag';
import './Product.scss';
import { Link } from 'react-router-dom';
const Product = ({ id, title, price, img, tag }) => {
  return (
    <main>
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
    </main>
  );
};
export default Product;
