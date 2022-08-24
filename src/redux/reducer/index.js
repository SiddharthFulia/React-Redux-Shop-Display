import { combineReducers } from "redux";
import { productreducer, selectedproductsreducer } from "./productreducer";
const reducers=combineReducers({
    allproducts:productreducer,
    product:selectedproductsreducer
});
export default reducers;