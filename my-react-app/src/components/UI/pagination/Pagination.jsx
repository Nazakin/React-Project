import React from 'react';
import { usePagination } from '../../../hooks/usePagination';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages);
    return (
        <div>
                  <div className="page_wrapper" style={{gap: '20px', display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
      {pagesArray.map(p => 
        <span 
        onClick={() => changePage(p)}
        key={p} 
        className={page === p ? 'page page_current' : 'page'}
        >
          {p}
          </span>
        )}
      </div>
        </div>
    );
};

export default Pagination;