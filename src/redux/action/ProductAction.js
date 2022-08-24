import {ActionTypes} from '../contants/Action-Types';
export const setproducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}
export const selectedproducts=(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:products,
    }
}
export const removeselectedproducts=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}