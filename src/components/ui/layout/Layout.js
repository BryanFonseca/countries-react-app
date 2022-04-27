import Header from "./Header";
import Controls from "./Controls";

import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={`${props.className} ${classes.background}`}>
      <Header/>
      {/* <Controls /> */}
      <>{props.children}</>
    </div>
  );
};

export default Layout;
