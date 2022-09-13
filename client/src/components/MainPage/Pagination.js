import { useEffect, useState } from "react";
import "./Pagination.css";
const Pagination = (props) => {
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    setPage(props.page);
    setPages(props.pages);
  }, [props]);
  const advansedButtonHandler = (event) => {
    return props.handler(event);
  };
  const next = () => {
    return props.next();
  };
  const previous = () => {
    return props.previous();
  };
  return (
    <div>
      <div className="pagination-buttons-wrapper">
        <button
          onClick={previous}
          className="pagination-button"
          disabled={page === 1 ? true : false}
        >
          Previous page
        </button>
        <button
          onClick={next}
          className="pagination-button"
          disabled={page === 1000 ? true : false}
        >
          Next page
        </button>
      </div>
      <div className="advanced-pagination-buttons-wrapper">
        <ul className="advanced-pagination-buttons">
          <li>
            <button
              className="advanced-pagination-button"
              value={1}
              onClick={advansedButtonHandler}
            >
              {"<<"}
            </button>
          </li>
          {}
          <li>
            <button
              className="advanced-pagination-button "
              value={
                page === 1
                  ? page
                  : page === 2
                  ? page - 1
                  : page >= pages - 2
                  ? pages - 4
                  : page - 2
              }
              onClick={advansedButtonHandler}
            >
              {page === 1
                ? page
                : page === 2
                ? page - 1
                : page >= pages - 2
                ? pages - 4
                : page - 2}
            </button>
          </li>
          <li>
            <button
              className="advanced-pagination-button "
              value={
                page === 1
                  ? page + 1
                  : page === 2
                  ? page
                  : page >= pages - 2
                  ? pages - 3
                  : page - 1
              }
              onClick={advansedButtonHandler}
            >
              {page === 1
                ? page + 1
                : page === 2
                ? page
                : page >= pages - 2
                ? pages - 3
                : page - 1}
            </button>
          </li>
          <li>
            <button
              className="advanced-pagination-button "
              value={page === 1 ? page + 2 : page === 2 ? page + 1 : page}
              onClick={advansedButtonHandler}
            >
              {page === 1
                ? page + 2
                : page === 2
                ? page + 1
                : page === pages
                ? page - 2
                : page}
            </button>
          </li>
          <li>
            <button
              className="advanced-pagination-button "
              value={page >= pages - 4 ? pages - 1 : page + 1}
              onClick={advansedButtonHandler}
            >
              {page >= pages - 4
                ? pages - 1
                : page === 1
                ? page + 3
                : page === 2
                ? page + 2
                : page + 1}
            </button>
          </li>
          <li>
            <button
              className="advanced-pagination-button "
              value={
                page >= pages - 4
                  ? pages
                  : page === 1
                  ? page + 4
                  : page === 2
                  ? page + 3
                  : page + 2
              }
              onClick={advansedButtonHandler}
            >
              {page >= pages - 4
                ? pages
                : page === 1
                ? page + 4
                : page === 2
                ? page + 3
                : page + 2}
            </button>
          </li>
          {}
          <li>
            <button
              className="advanced-pagination-button"
              value={pages}
              onClick={advansedButtonHandler}
            >
              {">>"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
