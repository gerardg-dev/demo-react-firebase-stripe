// Stripe API Documentation
// https://stripe.com/docs/api

import { STRIPE_LOADER, STRIPE_ERROR } from "constants/app_starter/ActionTypes";

import { firebase } from "../../../firebase/firebase";
import projectKeys from "../../../keys/app_starter";

export const attachSource = source => {
  return async dispatch => {
    try {
      dispatch({ type: STRIPE_LOADER, payload: true });

      const stripeAttachSource = firebase
        .functions()
        .httpsCallable("stripeAttachSource");

      const response = await stripeAttachSource(source);

      dispatch({ type: STRIPE_LOADER, payload: false });
    } catch (err) {
      dispatch({ type: STRIPE_LOADER, payload: false });
      dispatch({ type: STRIPE_ERROR, payload: err });
      // return Promise.reject(err);
    }
  };
};

export const createCharge = charge => {
  return async dispatch => {
    try {
      dispatch({ type: STRIPE_LOADER, payload: true });

      const stripeCreateCharge = firebase
        .functions()
        .httpsCallable("stripeCreateCharge");

      const response = await stripeCreateCharge(charge);

      dispatch({ type: STRIPE_LOADER, payload: false });
    } catch (err) {
      dispatch({ type: STRIPE_LOADER, payload: false });
      dispatch({ type: STRIPE_ERROR, payload: err });
      // return Promise.reject(err);
    }
  };
};

export const createSubscription = subscription => {
  return async dispatch => {
    try {
      dispatch({ type: STRIPE_LOADER, payload: true });

      const stripeCreateSubscription = firebase
        .functions()
        .httpsCallable("stripeCreateSubscription");

      const response = await stripeCreateSubscription(subscription);

      dispatch({ type: STRIPE_LOADER, payload: false });
    } catch (err) {
      dispatch({ type: STRIPE_LOADER, payload: false });
      dispatch({ type: STRIPE_ERROR, payload: err });
      // return Promise.reject(err);
    }
  };
};
