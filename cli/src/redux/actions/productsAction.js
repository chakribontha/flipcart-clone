import axios from "axios";
import * as actionTypes from "../constants/productconstants"
const URL = "https://flipcartclone-0gqo.onrender.com"
export const getProducts=()=>async(dispatch)=>{
    try{
      const {data}= await axios.get(`${URL}/products`);
    // console.log(respone)
    dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS,payload:data})
    }catch(error){
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL,payload:error.message})
    }
}
export const getProductDetails=(id)=>async(dispatch)=>{
    try{
      dispatch({type:actionTypes.GET_PRODUCTS_DETAIL_REQUEST})
      const {data}= await axios.get(`${URL}/product/${id}`);
      dispatch({type:actionTypes.GET_PRODUCTS_DETAIL_SUCCESS,payload:data})
    }catch(error){
      dispatch({type:actionTypes.GET_PRODUCTS_DETAIL_FAIL,payload:error.message})
    }
}
