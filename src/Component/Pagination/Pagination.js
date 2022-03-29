import  "./Pagination.css";

export const Pagination = ({ paginate, currentPage }) => {
  const pageNumbers = [];
  //   console.log(totalPosts);
  for (let i = 1; i <= 2; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
               onClick={() => paginate(number)}
              className={number === currentPage ? 'current' : 'cell'}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;