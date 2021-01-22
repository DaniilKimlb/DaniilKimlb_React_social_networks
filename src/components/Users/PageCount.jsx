import s from './Users.module.css';
const PageCount = (props) => {
  const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  const pages = [];
  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }
  return (
    <div className={s.pageCount}>
      {pages.map((p) => {
        return (
          <span
            className={` ${props.currentPage == p && s.pageSelection}`}
            onClick={() => {
              return props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
export default PageCount;
