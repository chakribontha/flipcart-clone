import axios from 'axios';
import * as actionTypes from "../constants/cartconstants";

const URL = "https://flipcartclone-0gqo.onrender.com"; 

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        ...data,
        quantity, 
      },
    });
  } catch (error) {
    dispatch(
        {
            type:actionTypes.ADD_TO_CART_ERROR,
            payload: error.message
        
        }
    )
    console.log(error);
  }
};

export const removeFromCart = (id) => async (dispatch) => {
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload:id
    })
};
