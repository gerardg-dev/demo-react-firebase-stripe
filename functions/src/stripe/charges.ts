import * as functions from "firebase-functions";
import { assert, assertUID, catchErrors } from "./helpers/errorHandlers";
import { stripe } from "../config";
import { getCustomer } from "./customers";
import { attachSource } from "./sources";

/**
Gets a user's charge history
limit arg, to set the limit of charge history records you want to retrieve
*/
export const getUserCharges = async (uid: string, limit?: number) => {
  const customer = await getCustomer(uid);

  return await stripe.charges.list({
    limit,
    customer
  });
};

/**
Creates a charge for a specific amount in cents. If $25.00 USD, amount = 2500.
idempotency_key, this key will ensure that if this API is called more than once
it will be executed once.
*/
export const createCharge = async (
  uid: string,
  source: string,
  amount: number,
  idempotency_key?: string
) => {
  const customer = await getCustomer(uid);

  await attachSource(uid, source, {});

  return stripe.charges.create(
    {
      amount,
      customer,
      source,
      currency: "usd"
    },
    { idempotency_key }
  );
};

//////////////////////////// DEPLOYABLE FUNCTIONS /////////////////////////////

export const stripeCreateCharge = functions.https.onCall(
  async (data, context) => {
    const uid = assertUID(context);
    const source = assert(data, "source");
    const amount = assert(data, "amount");

    // Optional
    const idempotency_key = data.itempotency_key;

    return catchErrors(createCharge(uid, source, amount, idempotency_key));
  }
);

export const stripeGetCharges = functions.https.onCall(
  async (data, context) => {
    const uid = assertUID(context);
    return catchErrors(getUserCharges(uid));
  }
);
