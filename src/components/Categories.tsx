import React from "react";

type CategoryProps = {
  value: number;
  clickToChangeIndex: (idx: number) => void;
};

const Categories: React.FC<CategoryProps> = ({ value, clickToChangeIndex }) => {
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
