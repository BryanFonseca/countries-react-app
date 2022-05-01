import Header from "./Header";
import { useContext } from "react";

import classes from './Layout.module.css';
import AppContext from "../../../context/app-context";

const Layout = (props) => {
  const ctx = useContext(AppContext);

  const onClickAnywhereHandler = () => {
    ctx.onHideActions();
  };

  return (
    <div onClick={onClickAnywhereHandler} className={`${props.className} ${classes.background}`}>
      <Header/>
      <>{props.children}</>
    </div>
  );
};

export default Layout;
