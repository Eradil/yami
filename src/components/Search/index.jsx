// import React from "react";
// import { useContext } from "react";
// import { SearchContext } from "../../App";
// import style from "./Search.module.scss";

// const Search = () => {
//   const { searchValue, setSearchValue } = useContext(SearchContext);
//   return (
//     <div className={style.root}>
//       <svg
//         className={style.icon}
//         enableBackground="new 0 0 50 50"
//         height="50px"
//         id="Layer_1"
//         version="1.1"
//         viewBox="0 0 50 50"
//         width="50px"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect fill="none" height="50" width="50" />
//         <circle
//           cx="21"
//           cy="20"
//           fill="none"
//           r="16"
//           stroke="#000000"
//           strokeLinecap="round"
//           strokeMiterlimit="10"
//           strokeWidth="2"
//         />
//         <line
//           fill="none"
//           stroke="#000000"
//           strokeMiterlimit="10"
//           strokeWidth="4"
//           x1="32.229"
//           x2="45.5"
//           y1="32.229"
//           y2="45.5"
//         />
//       </svg>
//       <input
//         value={searchValue}
//         onChange={(e) => setSearchValue(e.target.value)}
//         className={style.input}
//         placeholder="Поиск ..."
//       />
//       {searchValue && (
//         <svg
//           onClick={() => setSearchValue("")}
//           className={style.clearIcon}
//           height="18"
//           viewBox="0 0 48 48"
//           width="18"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
//           <path d="M0 0h48v48H0z" fill="none" />
//         </svg>
//       )}
//     </div>
//   );
// };

// export default Search;
import React from "react";
import { useRef } from "react";
import style from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useCallback } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux/es/exports";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  // const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };
  const updateSearchValue = useCallback(
    // делаем отложенную выполнение функции, для того чтобы избежать частых запросах на сервер при каждом изменении инпута
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    [3000]
  );

  // передача из локального состояния к глобаоьному, иначе в инпут не получалось вводить данные. Для этого был создан value and setValue

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={style.root}>
      <svg
        className={style.icon}
        enableBackground="new 0 0 50 50"
        height="50px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="none" height="50" width="50" />
        <circle
          cx="21"
          cy="20"
          fill="none"
          r="16"
          stroke="#000000"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeMiterlimit="10"
          strokeWidth="4"
          x1="32.229"
          x2="45.5"
          y1="32.229"
          y2="45.5"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={style.input}
        placeholder="Поиск ..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={style.clearIcon}
          height="18"
          viewBox="0 0 48 48"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      )}
    </div>
  );
};

export default Search;
