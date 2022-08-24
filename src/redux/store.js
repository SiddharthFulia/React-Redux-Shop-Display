import { configureStore, createStore } from "redux";
import  reducers from "./reducer/index";
//the last argument is extention dev tool for redux
const store=createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;