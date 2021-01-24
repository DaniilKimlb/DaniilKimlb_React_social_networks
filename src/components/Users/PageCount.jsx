import { useState } from 'react';
import s from './Users.module.css';
import cn from 'classnames';
const PageCount = ({ portionSize = 5, ...props }) => {
  const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
  const pages = [];
  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;

  return (
    <div className={s.pageCount}>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          &larr;
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p) => {
          return (
            <span
              className={cn(
                { [s.pageSelection]: props.currentPage === p },
                s.pageNumber
              )}
              key={p}
              onClick={() => {
                return props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          &rarr;
        </button>
      )}
      <button onClick={() => setPortionNumber((portionNumber = 1))}>da</button>
    </div>
  );
};
export default PageCount;
