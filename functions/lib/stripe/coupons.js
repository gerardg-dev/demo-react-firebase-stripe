"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const config_1 = require("../config");
const errorHandlers_1 = require("./helpers/errorHandlers");
/**
Returns a coupon from Stripe
*/
function getCoupon(coupon) {
    return config_1.stripe.coupons.retrieve(coupon);
}
exports.getCoupon = getCoupon;
//////////////////////////// DEPLOYABLE FUNCTIONS /////////////////////////////
exports.stripeGetCoupon = functions.https.onCall(async (data, context) => {
    const coupon = errorHandlers_1.assert(data, "coupon");
    return errorHandlers_1.catchErrors(getCoupon(coupon));
});
//# sourceMappingURL=coupons.js.map