import Header from "./Header";
import { useContext } from "react";

import classes from "./Layout.module.css";
import AppContext from "../../../context/app-context";

const Layout = (props) => {
  const ctx = useContext(AppContext);

  const onCloseOpenables = (e) => {
    ctx.onHideOpenables(e.target);
  };

  return (
    <div
      onClick={onCloseOpenables}
      className={`${props.className} ${classes.background}`}
    >
      <Header />
      <>{props.children}</>
    </div>
  );
};

export default Layout;
