import {ActionTypes} from "../constants/Action-Types";
const initialstate={
    products:[],
}
export const productreducer=(state=initialstate,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
         return {...state,products:payload};
        case ActionTypes.FETCH_PRODUCTS:
         return {...state,products:payload}; 
        default:
         return state;
    }
}
export const selectedproductsreducer=(state=initialstate,{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
         return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
         return {};
        default:
         return state;
    }
}