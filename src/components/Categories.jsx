import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState();
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const handleActive = (index) => {
    setActiveIndex(index);
  };
  return (
    <div>
      <div className="categories">
        <ul>
          {categories.map((item, i) => (
            <li
              onClick={() => handleActive(i)}
              className={activeIndex === i ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
