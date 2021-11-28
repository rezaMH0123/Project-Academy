import React from "react";
const Pagination = (props) => {
  const { pageSize, onPageChange, currentpage } = props;
  return (
    // <nav aria-label="...">
    //   <ul class="pagination">
    //     <li className="page-item">
    //       <a className="page-link" href="#" aria-label="Previous">
    //         <span aria-hidden="true">&laquo;</span>
    //       </a>
    //     </li>
    //     {pageSize.map((item) => (
    //       <li
    // className={currentpage === item ? "page-item activ" : "page-item"}
    // key={item}
    //       >
    // <a
    //   className="page-link"
    //   href="#"
    //   onClick={() => onPageChange(item)}
    // >
    //   {item}
    // </a>
    //       </li>
    //     ))}
    //     <li className="page-item">
    //       <a className="page-link" href="#" aria-label="Next">
    //         <span aria-hidden="true">&raquo;</span>
    //       </a>
    //     </li>
    //   </ul>
    // </nav>

    <nav aria-label="...">
      <ul className="pagination pagination-lg">
        {pageSize.map((item) => {
          return (
            <li className="page-item" key={item} aria-current="page">
              <a
                className={
                  item == currentpage ? "page-link activ" : "page-link"
                }
                href="#"
                onClick={() => onPageChange(item)}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
