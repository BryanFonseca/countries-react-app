import Header from "./Header";

import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={`${props.className} ${classes.background}`}>
      <Header/>
      <>{props.children}</>
    </div>
  );
};

export default Layout;
