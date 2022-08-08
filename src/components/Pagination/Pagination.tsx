import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss";

const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <div className={style}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
      />
    </div>
  );
};

export default Pagination;
