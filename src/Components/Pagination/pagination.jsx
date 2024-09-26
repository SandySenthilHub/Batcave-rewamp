import './pagination.css';
import barLeft from '../assets/progress-bar-left.svg';
import barRight from '../assets/progress-bar-right.svg';

const Pagination = ({ totalPages, currentPage, paginate }) => {
    const pageNumbers = [];

    // Always show the first page
    pageNumbers.push(1);

    if (currentPage > 3) {
        // If the current page is greater than 3, show an ellipsis
        pageNumbers.push('...');
        pageNumbers.push(currentPage);
    } else {
        // If the current page is 3 or less, show pages 2 and 3
        if (totalPages > 1) pageNumbers.push(2);
        if (totalPages > 2) pageNumbers.push(3);
    }

    // Only show ellipsis and last page if currentPage is not the last page
    if (currentPage < totalPages - 2) {
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
    } else if (currentPage === totalPages - 2 || currentPage === totalPages - 1) {
        pageNumbers.push(totalPages);
    }

    return (
        <div className="pagination">
            <span
                className={`page-control ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => currentPage !== 1 && paginate(currentPage - 1)}
            >
                <img className='page-left-bar' src={barLeft} alt='' />
            </span>

            {pageNumbers.map((number, index) => (
                <span
                    key={index}
                    className={`page-number ${number === currentPage ? 'active' : ''} ${number === '...' ? 'ellipsis' : ''}`}
                    onClick={() => typeof number === 'number' && paginate(number)}
                >
                    {number}
                </span>
            ))}

            <span
                className={`page-control ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => currentPage !== totalPages && paginate(currentPage + 1)}
            >
                <img className='page-right-bar' src={barRight} alt='' />

            </span>
        </div>
    );
};

export default Pagination;
