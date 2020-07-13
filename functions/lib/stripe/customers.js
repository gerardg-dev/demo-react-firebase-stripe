"use strict";
// Docs
// https://stripe.com/docs/api/customers/object
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandlers_1 = require("./helpers/errorHandlers");
const config_1 = require("../config");
// import firebase from "firebase/app";
// const auth = firebase.auth();
//
// /**
// Create Test User in Firestore (Personal method)
// */
// export const createUser = async (uid: string, user: Object) => {
//   if (uid === undefined) {
//     uid = Date.now().toString();
//   }
//   if (user === undefined) {
//     user = {
//       uid,
//       email: "stripetest@example.com",
//       password: "12345678"
//     };
//   }
//
//   let createdUser = await auth.createUserWithEmailAndPassword(
//     user.email,
//     user.password
//   );
//   await createdUser.user.updateProfile({
//     displayName: "testDisplayName"
//   });
//
//   const uid = createdUser.user.uid;
//
//   return await db
//     .collection("users")
//     .add(user)
//     .then(doc => doc.data());
//
//   // let newUser = { uid: Date.now().toString(), email: "stripetest@example.com" };
//   // return await db
//   //   .collection("users")
//   //   .add(newUser)
//   //   .then(doc => doc.data());
// };
/**
Read the user document from Firestore
*/
exports.getUser = async (uid) => {
    return await config_1.db
        .collection("users")
        .doc(uid)
        .get()
        // .then(doc => doc.data());
        .then(doc => {
        // console.log("getUser() \n doc.data() \n\n");
        // console.log(doc.data());
        return doc.data();
    });
};
/**
Gets a customer from Stripe
*/
exports.getCustomer = async (uid) => {
    const user = await exports.getUser(uid);
    // console.log("getCustomer() \n const user = await getUser(uid); \n\n");
    // console.log(user);
    // assert will send an error if a customerId doesnt exists
    return errorHandlers_1.assert(user, "stripe_customer_id");
    // ---------------------------------------------------------------------------
    // RETRIEVE Stripe Customer
    // stripe.customers.retrieve("cus_GG5Jv5qC5bqEh1", function(err, customer) {
    //   // asynchronously called
    // });
    // ---------------------------------------------------------------------------
    // UPDATE Stripe Customer
    // stripe.customers.update(
    //   "cus_GG5Jv5qC5bqEh1",
    //   { metadata: { order_id: "6735" } },
    //   function(err, customer) {
    //     // asynchronously called
    //   }
    // );
    // ---------------------------------------------------------------------------
    // DELETE Stripe Customer
    // stripe.customers.del("cus_GG5Jv5qC5bqEh1", function(err, confirmation) {
    //   // asynchronously called
    // });
    // ---------------------------------------------------------------------------
    // LIST Stripe Customers
    // stripe.customers.list({ limit: 3 }, function(err, customers) {
    //   // asynchronously called
    // });
    // ---------------------------------------------------------------------------
};
/**
Updates the user document non-destructively
*/
exports.updateUser = async (uid, data) => {
    // { merge: true } // helps to not override the existing data
    return await config_1.db
        .collection("users")
        .doc(uid)
        .set(data, { merge: true });
};
/**
Takes a Firebase user and creates a Stripe customer account
*/
// https://stripe.com/docs/api/customers/create
exports.createCustomer = async (uid, billingDetails) => {
    const customer = await config_1.stripe.customers.create({
        metadata: { firebaseUID: uid },
    });
    await exports.updateUser(uid, { stripe_customer_id: customer.id });
    return customer;
};
// Example Stripe Customer Object:
// {
//   "id": "cus_GG4tfAcDlwBEPX",
//   "object": "customer",
//   "address": null,
//   "balance": 0,
//   "created": 1574892726,
//   "currency": "usd",
//   "default_source": null,
//   "delinquent": false,
//   "description": "Customer for jenny.rosen@example.com",
//   "discount": null,
//   "email": null,
//   "invoice_prefix": "F178D31",
//   "invoice_settings": {
//     "custom_fields": null,
//     "default_payment_method": null,
//     "footer": null
//   },
//   "livemode": false,
//   "metadata": {},
//   "name": null,
//   "phone": null,
//   "preferred_locales": [],
//   "shipping": null,
//   "sources": {
//     "object": "list",
//     "data": [],
//     "has_more": false,
//     "url": "/v1/customers/cus_GG4tfAcDlwBEPX/sources"
//   },
//   "subscriptions": {
//     "object": "list",
//     "data": [],
//     "has_more": false,
//     "url": "/v1/customers/cus_GG4tfAcDlwBEPX/subscriptions"
//   },
//   "tax_exempt": "none",
//   "tax_ids": {
//     "object": "list",
//     "data": [],
//     "has_more": false,
//     "url": "/v1/customers/cus_GG4tfAcDlwBEPX/tax_ids"
//   },
//   "tax_info": null,
//   "tax_info_verification": null
// }
/**
Read the stripe customer ID from firestore, or create a new one if missing
*/
exports.getOrCreateCustomer = async (uid, billingDetails) => {
    const user = await exports.getUser(uid);
    const customerId = user && user.stripe_customer_id;
    // If missing customerID, create it
    if (!customerId) {
        return exports.createCustomer(uid, billingDetails);
    }
    else {
        return config_1.stripe.customers.retrieve(customerId);
    }
};
//# sourceMappingURL=customers.js.map