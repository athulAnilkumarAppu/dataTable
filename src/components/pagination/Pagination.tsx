import { PaginationPropsType } from "../../models/Interfaces";

const Pagination = ({
  currentPage,
  totalItems,
  rowsPerPage,
  onPageChange,
}: PaginationPropsType) => {
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const MAX_VISIBLE_PAGES = 5;

  const getVisiblePages = () => {
    const pages: number[] = [];

    let start = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
    let end = start + MAX_VISIBLE_PAGES - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - MAX_VISIBLE_PAGES + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="pagination">
      
      <button
        className="arrow"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ←
      </button>

      
      {visiblePages[0] > 1 && (
        <>
          <button onClick={() => onPageChange(1)}>1</button>
          {visiblePages[0] > 2 && <span className="dots">...</span>}
        </>
      )}

      
      {visiblePages.map((page) => (
        <button
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

    
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="dots">...</span>
          )}
          <button onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </button>
        </>
      )}

     
      <button
        className="arrow"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;

