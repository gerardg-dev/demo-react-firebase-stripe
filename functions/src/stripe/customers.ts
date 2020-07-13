// Docs
// https://stripe.com/docs/api/customers/object

import { assert } from "./helpers/errorHandlers";
import { db, stripe } from "../config";

/**
Read the user document from Firestore
*/
export const getUser = async (uid: string) => {
  return await db
    .collection("users")
    .doc(uid)
    .get()
    .then(doc => {
      return doc.data();
    });
};

/**
Gets a customer from Stripe
*/
export const getCustomer = async (uid: string) => {
  const user = await getUser(uid);
  return assert(user, "stripe_customer_id");
};

/**
Updates the user document non-destructively
*/
export const updateUser = async (uid: string, data: Object) => {
  return await db
    .collection("users")
    .doc(uid)
    .set(data, { merge: true });
};

/**
Takes a Firebase user and creates a Stripe customer account
Take a look at the Stripe customer object and api methods
https://stripe.com/docs/api/customers/create
*/
export const createCustomer = async (uid: any, billingDetails: Object) => {
  const customer = await stripe.customers.create({
    metadata: { firebaseUID: uid }
  });

  await updateUser(uid, { stripe_customer_id: customer.id });

  return customer;
};

/**
Read the stripe customer ID from firestore, or create a new one if missing
*/
export const getOrCreateCustomer = async (uid: string, billingDetails: Object) => {
  const user = await getUser(uid);
  const customerId = user && user.stripe_customer_id;

  // If missing customerID, create it
  if (!customerId) {
    return createCustomer(uid, billingDetails);
  } else {
    return stripe.customers.retrieve(customerId);
  }
};
