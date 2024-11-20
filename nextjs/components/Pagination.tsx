interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
      const visiblePages = 10; // Number of pages to display
      const pages: number[] = [];
  
    
      let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
      let endPage = startPage + visiblePages - 1;
  
      
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - visiblePages + 1);
      }
  
   
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
  
      return pages;
    };
  
    const pages = getPageNumbers();
  
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {currentPage > 1 && (
          <button
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {pages.map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    );
  };
  
  export default Pagination;
  