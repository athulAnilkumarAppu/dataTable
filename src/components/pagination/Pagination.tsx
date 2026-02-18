import { PaginationPropsType } from "../../models/Interfaces";

const Pagination = ({
  currentPage,
  totalItems,
  rowsPerPage,
  onPageChange,
}: PaginationPropsType) => {
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? 'active' : ''}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
