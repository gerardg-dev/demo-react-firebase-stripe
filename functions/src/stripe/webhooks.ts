// IMPORTANT, on this project folder, not on /functions, use terminal and run
// firebase functions:config:set stripe.webhooks_signature="your_signing_secret"

import * as functions from "firebase-functions";
import { db, stripe } from "../config";

export const stripeWebhookSignature = functions.config().stripe
  .webhook_signature;

export const webhookHandler = async (data: any) => {
  const customerId = data.customer;
  const subId = data.subscription;
  const customer = await stripe.customers.retrieve(customerId);
  const uid = customer.metadata.firebaseUID;

  const subscription = await stripe.subscriptions.retrieve(subId);

  if (subscription && subscription.plan && subscription.id) {
    const isActive = subscription.status === "active";

    const docData = {
      [subscription.plan.id]: isActive,
      [subscription.id]: subscription.status
    };

    return await db.doc(`users/${uid}`).set(docData, { merge: true });
  }

  return {};
};

//////////////////////////// DEPLOYABLE FUNCTIONS /////////////////////////////

export const stripeInvoiceWebhookEndpoint = functions.https.onRequest(
  async (req, res) => {
    try {
      const sig = req.headers["stripe-signature"];

      if (sig) {
        const event = stripe.webhooks.constructEvent(
          (req as any).rawBody,
          sig,
          stripeWebhookSignature
        );
        const data = event.data.object;

        await webhookHandler(data);

        res.sendStatus(200);
      }
    } catch (err) {
      res.status(400).send(err);
    }
  }
);
