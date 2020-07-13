import * as functions from "firebase-functions";
import { assert, assertUID, catchErrors } from "./helpers/errorHandlers";
import { stripe } from "../config";
import { getOrCreateCustomer } from "./customers";

/**
Attaches a payment source to a stripe customer account.
A Stripe customer account is needed to attach a payment source.
*/
export const attachSource = async (uid: string, source: string, billingDetails: Object) => {
  const customer = await getOrCreateCustomer(uid, billingDetails);

  let existingSource;

  if (customer && customer.sources) {
    existingSource = customer.sources.data
      .filter((s: any) => s.id === source)
      .pop();
  }

  // Check if source exists, Stripe will throw an error if we try to attach a
  // source that already exists, thats why we create this if statement below
  if (existingSource) {
    return existingSource;
  } else {
    await stripe.customers.createSource(customer.id, { source: source });
    // update default
    return await stripe.customers.update(customer.id, {
      default_source: source
    });
  }
};

//////////////////////////// DEPLOYABLE FUNCTIONS /////////////////////////////

export const stripeAttachSource = functions.https.onCall(
  async (data, context) => {
    const uid = assertUID(context);
    const source = assert(data, "source");
    const billingDetails = assert(data, "billingDetails");

    return catchErrors(attachSource(uid, source, billingDetails));
  }
);
