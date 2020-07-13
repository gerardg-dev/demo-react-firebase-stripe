import { firebase, auth, firestore, functions } from "../firebase";

export const attachSource = async source => {
  console.log("ATTACH SOURCE - functions.httpsCallable 'stripeAttachSource'");
  const func = functions.httpsCallable("stripeAttachSource");
  console.log("/firebase/functions/stripe func()");
  console.log(func);
  return await func(source);
};

export const createCharge = async charge => {
  const func = functions.httpsCallable("stripeCreateCharge");
  console.log("/firebase/functions/stripe func()");
  console.log(func);
  return await func(charge);
};

export const createSubscription = async subscription => {
  const func = functions.httpsCallable("stripeCreateSubscription");
  console.log("/firebase/functions/stripe func()");
  console.log(func);
  return await func(subscription);
};

export const stripe = {
  attachSource,
  createCharge,
  createSubscription
};
