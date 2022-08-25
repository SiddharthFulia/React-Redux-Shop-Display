import fakestoreapi from '../../apis/fakestoreapi';
import {ActionTypes} from '../constants/Action-Types';
export const fetchproducts=()=>{
    return async (dispatch)=>{
        const response= await fakestoreapi.get('/products');
        dispatch({
            type:ActionTypes.FETCH_PRODUCTS,
            payload:response.data,
        })
    }
}
export const fetchdetails=(id)=>{
    return async (dispatch)=>{
        const response= await fakestoreapi.get(`/products/${id}`);
        dispatch({
            type:ActionTypes.SELECTED_PRODUCTS,
            payload:response.data,
        })
    }
}
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