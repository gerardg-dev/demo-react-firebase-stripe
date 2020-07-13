import * as functions from "firebase-functions";
import { stripe } from "../config";
import { assert, catchErrors } from "./helpers/errorHandlers";

/**
Returns a coupon from Stripe
*/
export function getCoupon(coupon: string) {
  return stripe.coupons.retrieve(coupon);
}

//////////////////////////// DEPLOYABLE FUNCTIONS /////////////////////////////

export const stripeGetCoupon = functions.https.onCall(async (data, context) => {
  const coupon = assert(data, "coupon");
  return catchErrors(getCoupon(coupon));
});
