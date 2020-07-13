"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const errorHandlers_1 = require("./helpers/errorHandlers");
const config_1 = require("../config");
const customers_1 = require("./customers");
const sources_1 = require("./sources");
/**
Gets a user's charge history
limit arg, to set the limit of charge history records you want to retrieve
*/
exports.getUserCharges = async (uid, limit) => {
    const customer = await customers_1.getCustomer(uid);
    return await config_1.stripe.charges.list({
        limit,
        customer
    });
};
/**
Creates a charge for a specific amount
amount, if $25.00 USD, then amount = 2500
idempotency_key, this key will ensure that if this API is called more than once
it will be executed once. This is more relevants to backends that will automatically
retry or request if it fails, but http functions will be invoked at most once.
Firestore functions will be indeed invoked more than once, but were not using those here.
Anyway, is important to use idempotency_key, to avoid charging more than once.
*/
exports.createCharge = async (uid, source, amount, idempotency_key) => {
    const customer = await customers_1.getCustomer(uid);
    await sources_1.attachSource(uid, source, {});
    return config_1.stripe.charges.create({
        amount,
        customer,
        source,
        currency: "usd"
    }, { idempotency_key });
};
//////////////////////////// DEPLOYABLE FUNCTIONS /////////////////////////////
exports.stripeCreateCharge = functions.https.onCall(async (data, context) => {
    const uid = errorHandlers_1.assertUID(context);
    const source = errorHandlers_1.assert(data, "source");
    const amount = errorHandlers_1.assert(data, "amount");
    // Optional
    const idempotency_key = data.itempotency_key;
    return errorHandlers_1.catchErrors(exports.createCharge(uid, source, amount, idempotency_key));
});
exports.stripeGetCharges = functions.https.onCall(async (data, context) => {
    const uid = errorHandlers_1.assertUID(context);
    return errorHandlers_1.catchErrors(exports.getUserCharges(uid));
});
//# sourceMappingURL=charges.js.map