import * as actionTypes from '../constants/productconstants';
export const getProductsReducer=(state={products:[]},action)=>{
   switch(action.type){
       case actionTypes.GET_PRODUCTS_SUCCESS:
         return {products:action.payload}
         
        case actionTypes.GET_PRODUCTS_FAIL:
            return {error:action.payload}
        default:
            return state;
   }
}

const initialState = {
  loading: false,
  product: {} 
};

export const getProductDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_DETAIL_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_PRODUCTS_DETAIL_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case actionTypes.GET_PRODUCTS_DETAIL_FAIL:
      return { ...state, loading: false, error: action.payload };
    case actionTypes.GET_PRODUCTS_DETAIL_REST:
      return { ...state, product: {} };
    default:
      return state;
  }
};
