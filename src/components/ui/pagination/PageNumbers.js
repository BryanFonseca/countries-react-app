import classes from './PageNumbers.module.css';

const PageNumbers = (props) => {
  if (props.max < 5) {
    // must return something different
    return (
      <div>
        <p>1</p>
        <p>{left}</p>
        <p>{middle}</p>
        <p>{right}</p>
        <p>{props.lastPage}</p>
      </div>
    );
  }
  // up to 5 pages
  const left = props.currentPage < 3 ? 2 : "...";
  const right =
    props.currentPage > props.lastPage - 3 ? props.lastPage - 1 : "...";
  let middle = props.currentPage <= 2 ? 5 : props.currentPage;

  if (props.currentPage < 3) {
    middle = 3;
  }

  if (props.currentPage > props.lastPage - 2) {
    middle = props.lastPage - 2;
  }

  return (
    <div className={classes.pageNumbers}>
      <p className={props.currentPage === 1 ? classes.active : ''}>1</p>
      <p className={props.currentPage === 2 ? classes.active : ''}>{left}</p>
      <p className={props.currentPage > 2 && props.currentPage <= props.lastPage - 2 ? classes.active : ''}>{middle}</p>
      <p className={props.currentPage === props.lastPage - 1 ? classes.active : ''}>{right}</p>
      <p className={props.currentPage === props.lastPage ? classes.active : ''}>{props.lastPage}</p>
    </div>
  );
};

export default PageNumbers;
