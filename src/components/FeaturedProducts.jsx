import React, { useState } from "react";
import items from "./data.js";
import "./Featured.css";
import { NavLink } from "react-router-dom";

function FeaturedProducts() {
  const [menuItems, setItems] = useState(items.slice(3, 6));

  return (
    <>
      <div className='feat-items'>
        {menuItems.map(item => {
          const { title, img, id } = item;

          return (
            <div key={id}>
              <img src={img} alt={title} />
              <p>{title}</p>
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <NavLink to='/items'> View All </NavLink>
      </div>
    </>
  );
}

export default FeaturedProducts;
