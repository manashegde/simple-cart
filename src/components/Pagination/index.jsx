import React from "react";
import { pageSize } from "../../utils/constants";

export default function Pagination(props) {
  const { totalCount = 0, currentPage, onPageNumberClick } = props;

  return (
    <nav aria-label="Page navigation example">
      <ul className=" pagination">
        <li className="page-item">
          <span className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </span>
        </li>
        {Array.from({ length: totalCount/pageSize }, (_, i) => i + 1).map((el, key) => (
          <li className="page-item" key={key} style={{ cursor: "pointer" }}>
            <span
              className={`page-link ${currentPage === el && "active"}`}
              onClick={() => onPageNumberClick(el)}
            >
              {el}
            </span>
          </li>
        ))}

        <li className="page-item">
          <span className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}
