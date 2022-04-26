import Header from "./Header";
import Controls from "./Controls";

import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={`${props.className} ${classes.background}`}>
      <Header/>
      <Controls />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
