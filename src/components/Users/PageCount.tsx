import { useState } from 'react';
import s from './Users.module.css';
import cn from 'classnames';

type StateType = {
  portionSize: number;
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (p: number) => void;
};

const PageCount: React.FC<StateType> = ({ portionSize = 5, ...props }) => {
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
        <>
          <span className={s.arrow}>
            <button onClick={() => setPortionNumber(portionNumber - 1)}>
              PREV
            </button>
          </span>
        </>
      )}
      {pages
        .filter(
          (p: number) => p >= leftPortionNumber && p <= rightPortionNumber
        )
        .map((p: number) => {
          return (
            <div
              className={cn(
                { [s.pageSelection]: props.currentPage === p },
                s.page
              )}
            >
              <span
                className={cn(s.pageNumber)}
                key={p}
                onClick={() => {
                  return props.onPageChanged(p);
                }}
              >
                {p}
              </span>
            </div>
          );
        })}
      {portionCount > portionNumber && (
        <span className={s.arrow}>
          <button onClick={() => setPortionNumber(portionNumber + 1)}>
            NEXT
          </button>
        </span>
      )}
    </div>
  );
};
export default PageCount;
