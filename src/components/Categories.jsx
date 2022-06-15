import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div>
      <div className="categories">
        <ul>
          {categories.map((item, i) => (
            //если список статичный, т.е не меняется, то есть можно в key передать индекс
            <li
              key={i}
              onClick={() => setActiveIndex(i)}
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
