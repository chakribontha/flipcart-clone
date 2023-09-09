import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams ,paytmMerchantKey } from '../index.js';
import https from "https";
import formidable from 'formidable';

export const addPaymentGateWay = async (req, res) => {
    try {
        let paytmChecksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
        let params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmChecksum
        };
    } catch (error) {
        console.log(error);
    }
};

export const paymentResponse = (req, res) => {
    const form = new formidable.IncomingForm();
    let paytmChecksum = req.body.CHECKSUMHASH;
    delete req.body.CHECKSUMHASH;

    let isVerifySignature = paytmchecksum.verifySignature(req.body, paytmMerchantKey, paytmChecksum);
    if (isVerifySignature) {
        let paytmParams = {};
        paytmParams['MID'] = req.body.MID;
        paytmParams['ORDER_ID'] = req.body.ORDER_ID;

        paytmchecksum.generateSignature(paytmParams, paytmMerchantKey).then(function(checksum) {
            paytmParams['CHECKSUMHASH'] = checksum;
            let post_data = JSON.stringify(paytmParams);

            let options = {
                hostname: 'securegw-stage-paytm.in',
                port: 443,
                path: '/order/status',
                headers: {
                    'Content-Type': 'application/json',
                    'content-Length': post_data.length
                }
            };
            let res = "";
            let post_req = https.request(options, function(post_res) {
                post_res.on('data', function(chunk) {
                    res += chunk;
                });
                post_res.on('end', function() {
                    let result = JSON.parse(res);
                    response.redirect('https://flipcartclone-0gqo.onrender.com');
                });
            });
        });
    } else {
        console.log('Checksum mismatch');
    }
};
