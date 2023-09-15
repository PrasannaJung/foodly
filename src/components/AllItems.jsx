import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "./ItemsCategories.css";
import Navigation from "./Navigation";

const allCategories = ["all", ...new Set(items.map(item => item.category))];
console.log(allCategories);

function AllItems() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = category => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <Navigation />
      <div className='menu isection'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </div>
    </main>
  );
}

export default AllItems;
