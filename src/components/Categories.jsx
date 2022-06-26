import React from "react";

const Categories = ({ value, clickToChangeIndex }) => {
  // console.log(value);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, id) => (
          <li
            key={id}
            onClick={() => clickToChangeIndex(id)}
            className={value === id ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
