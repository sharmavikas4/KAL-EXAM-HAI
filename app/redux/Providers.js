"use client";
import { Provider } from "react-redux";
import store from "./store";
const Providers = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
export default Providers;
