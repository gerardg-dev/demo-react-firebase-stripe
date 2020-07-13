"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const errorHandlers_1 = require("./helpers/errorHandlers");
const config_1 = require("../config");
const customers_1 = require("./customers");
// const cors = require('cors')({ origin: true })
// import cors from "cors";
// cors({ origin: true });
/**
Attaches a payment source to a stripe customer account.
A Stripe customer account is needed to attach a payment source.
*/
exports.attachSource = async (uid, source, billingDetails) => {
    const customer = await customers_1.getOrCreateCustomer(uid, billingDetails);
    let existingSource;
    if (customer && customer.sources) {
        // existingSource = customer.sources.data.filter(s => s.id === source).pop();
        existingSource = customer.sources.data
            .filter((s) => s.id === source)
            .pop();
    }
    // Check if source exists, Stripe will throw an error if we try to attach a
    // source that already exists, thats why we create this if statement below
    if (existingSource) {
        return existingSource;
    }
    else {
        await config_1.stripe.customers.createSource(customer.id, { source: source });
        // update default
        return await config_1.stripe.customers.update(customer.id, {
            default_source: source
        });
    }
};
//////////////////////////// DEPLOYABLE FUNCTIONS /////////////////////////////
exports.stripeAttachSource = functions.https.onCall(async (data, context) => {
    const uid = errorHandlers_1.assertUID(context);
    const source = errorHandlers_1.assert(data, "source");
    const billingDetails = errorHandlers_1.assert(data, "billingDetails");
    return errorHandlers_1.catchErrors(exports.attachSource(uid, source, billingDetails));
});
//# sourceMappingURL=sources.js.map