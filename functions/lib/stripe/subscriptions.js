"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const errorHandlers_1 = require("./helpers/errorHandlers");
const config_1 = require("../config");
const customers_1 = require("./customers");
const sources_1 = require("./sources");
/**
Gets a user's subscriptions
*/
exports.getSubscriptions = async (uid) => {
    const customer = await customers_1.getCustomer(uid);
    return config_1.stripe.subscriptions.list({ customer });
};
/**
Creates and charges user for a new subscription
*/
exports.createSubscription = async (uid, source, plan, coupon) => {
    const customer = await customers_1.getCustomer(uid);
    await sources_1.attachSource(uid, source, {});
    const subscription = await config_1.stripe.subscriptions.create({
        customer,
        coupon,
        items: [
            {
                plan
            }
        ]
    });
    // Add the plan to existing subscriptions
    const docData = {
        [plan]: true,
        [subscription.id]: "active"
    };
    await config_1.db.doc(`users/${uid}`).set(docData, { merge: true });
    return subscription;
};
/**
Cancels a subscription and stops all recurring payments
*/
async function cancelSubscription(uid, subId) {
    const subscription = await config_1.stripe.subscriptions.del(subId);
    // if (subscription !== null || typeof subscription !== "undefined") {
    if (subscription && subscription.plan && subscription.id) {
        const docData = {
            [subscription.plan.id]: false,
            [subscription.id]: "canceled"
        };
        await config_1.db.doc(`users/${uid}`).set(docData, { merge: true });
        return subscription;
    }
}
exports.cancelSubscription = cancelSubscription;
//////////////////////////// DEPLOYABLE FUNCTIONS /////////////////////////////
exports.stripeCreateSubscription = functions.https.onCall(async (data, context) => {
    const uid = errorHandlers_1.assertUID(context);
    const source = errorHandlers_1.assert(data, "source");
    const plan = errorHandlers_1.assert(data, "plan");
    return errorHandlers_1.catchErrors(exports.createSubscription(uid, source, plan, data.coupon));
});
exports.stripeCancelSubscription = functions.https.onCall(async (data, context) => {
    const uid = errorHandlers_1.assertUID(context);
    const plan = errorHandlers_1.assert(data, "plan");
    return errorHandlers_1.catchErrors(cancelSubscription(uid, plan));
});
exports.stripeGetSubscriptions = functions.https.onCall(async (data, context) => {
    const uid = errorHandlers_1.assertUID(context);
    return errorHandlers_1.catchErrors(exports.getSubscriptions(uid));
});
//# sourceMappingURL=subscriptions.js.map