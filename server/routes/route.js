import express from "express";
import {userSignup,userLogin} from '../controller/user-controller.js'
import {getProducts,getProductById} from '../controller/products-controller.js';
import {addPaymentGateWay,paymentResponse} from '../controller/payment-controller.js';
const router=express.Router();
router.post('/signup',userSignup);
router.post('/login',userLogin)

router.get('/products',getProducts);
router.get('/product/:id',getProductById);

router.get('/payment',addPaymentGateWay);
router.get('/callback',paymentResponse);
export default router;