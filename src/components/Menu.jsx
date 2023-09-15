/* eslint-disable react/prop-types */
import React from "react";
import "./ItemsCategories.css";

const Menu = ({ items }) => {
  return (
    <div className='isection-center'>
      {items.map(menuItem => {
        const { title, id, img, desc, price } = menuItem;

        return (
          <div key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h5 className='price'>${price}</h5>
              </header>
              <div className='item-text'>
                <p> {desc} </p>
                <button className='order-btn'>Order</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
