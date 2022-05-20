import { useState, useContext, useEffect } from "react";
import AppContext from "../../../context/app-context";
import PageNumbers from "./PageNumbers";
import classes from "./Paginate.module.css";

const Paginate = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const max = Math.floor(props.children.length / props.itemsPerPage);

  const onClickPagesButton = (forward = true) => {
    setCurrentPage((prev) => {
      if (forward) {
        if (prev === max) {
          return prev;
        }
        return prev + 1;
      }
      if (!forward) {
        if (prev === 1) {
          return prev;
        }
        return prev - 1;
      }
    });
  };

  const pages = [];
  let pageIdx = -1;
  for (let i = 0; i < props.children.length; i++) {
    if (i % props.itemsPerPage === 0) {
      pages.push([]);
      pageIdx++;
    }
    pages[pageIdx].push(props.children[i]);
  }

  const ctx = useContext(AppContext);
  const { subscribePagination } = ctx;
  const resetPagination = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    subscribePagination({
      resetPagination,
    });
  }, [subscribePagination]);

  return (
    <div className={classes.paginationContainer}>
      <ul className={props.className}>{pages[currentPage - 1]}</ul>
      <div className={classes.pagesController}>
        <button
          className={classes.pageButton}
          onClick={onClickPagesButton.bind(null, false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <PageNumbers currentPage={currentPage} lastPage={max} />
        <button
          className={classes.pageButton}
          onClick={onClickPagesButton.bind(null, undefined)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Paginate;
