"use strict";
// important, on this project folder, not on /functions, use terminal and run
// firebase functions:config:set stripe.webhooks_signature="your_signing_secret"
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const config_1 = require("../config");
exports.stripeWebhookSignature = functions.config().stripe
    .webhook_signature;
exports.webhookHandler = async (data) => {
    const customerId = data.customer;
    const subId = data.subscription;
    const customer = await config_1.stripe.customers.retrieve(customerId);
    const uid = customer.metadata.firebaseUID;
    const subscription = await config_1.stripe.subscriptions.retrieve(subId);
    // if (subscription !== null || typeof subscription !== "undefined") {
    if (subscription && subscription.plan && subscription.id) {
        const isActive = subscription.status === "active";
        const docData = {
            [subscription.plan.id]: isActive,
            [subscription.id]: subscription.status
        };
        return await config_1.db.doc(`users/${uid}`).set(docData, { merge: true });
    }
    return {};
};
//////////////////////////// DEPLOYABLE FUNCTIONS /////////////////////////////
// export const invoiceWebhookEndpoint = functions.https.onRequest(
exports.stripeInvoiceWebhookEndpoint = functions.https.onRequest(async (req, res) => {
    try {
        const sig = req.headers["stripe-signature"];
        if (sig) {
            const event = config_1.stripe.webhooks.constructEvent(req.rawBody, sig, exports.stripeWebhookSignature);
            const data = event.data.object;
            await exports.webhookHandler(data);
            res.sendStatus(200);
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
});
//# sourceMappingURL=webhooks.js.map