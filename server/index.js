import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

import {v4 as uuid} from "uuid";

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());
app.use(bodyParser.json({extend: true}))
app.use(bodyParser.urlencoded({extend: true}))
app.use('/',Router);
const PORT=700;

const USERNAME=process.env.MONGODB_USERNAME;
const PASSWORD=process.env.MONGODB_PASSWORD;
Connection(USERNAME,PASSWORD);

app.listen(PORT,()=>{
    console.log(`listening on port http://localhost:${PORT}/`);
});
DefaultData();






export let paytmMerchantKey =process.env.PAYTM_MERCHANT_KEY;
export let paytmParams={}
paytmParams['MID']=process.env.PAYTM_MID
paytmParams['PAYTM_WEBSITE']=process.env.PAYTM_WEBSITE
paytmParams['PAYTM_CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID
paytmParams['PAYTM_INDUSRTY_TYPE_ID']=process.env.PAYTM_INDUSRTY_TYPE_ID
paytmParams['ORDER_ID']=uuid()
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID
paytmParams['TXN_AMOUNT']='100'
paytmParams['CALL_BACK_URL']='http://localhost:700/callback'
paytmParams['EMAIL']='chakribontha9@gmail.com'
paytmParams['MOBILE_NO']='1234567890'