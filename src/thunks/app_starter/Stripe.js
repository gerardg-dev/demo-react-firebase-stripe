// Stripe API Documentation
// https://stripe.com/docs/api

import {
  STRIPE_CUSTOMER,
  STRIPE_CUSTOMER_SOURCES,
  STRIPE_CUSTOMER_CHARGES,
  STRIPE_CUSTOMER_SUBSCRIPTIONS,
  STRIPE_LOADER,
  STRIPE_ERROR
} from "constants/app_starter/ActionTypes";

import axios from "axios";
import projectKeys from "../../keys/app_starter";

const skStripe = `Bearer ${projectKeys.stripe.secretKey}`;

export const retrieveCustomer = stripeCustomerID => {
  return async dispatch => {
    // CURL ------------------------------------------------------------------
    // curl https://api.stripe.com/v1/customers/cus_GF2GCpTVufHJvL \
    //   -u sk_test_ZrRvT2I8N70Z2tVDuoPKDmS200hY41pKZk:

    await axios
      .get(`https://api.stripe.com/v1/customers/${stripeCustomerID}`, {
        headers: { Authorization: skStripe }
      })
      .then(res => {
        const data = res.data;
        dispatch({ type: STRIPE_CUSTOMER, payload: data });
        dispatch({ type: STRIPE_CUSTOMER_SOURCES, payload: data.sources });
        dispatch({
          type: STRIPE_CUSTOMER_SUBSCRIPTIONS,
          payload: data.subscriptions
        });
        dispatch({ type: STRIPE_LOADER, payload: false });
      })
      .catch(err => {
        dispatch({ type: STRIPE_LOADER, payload: false });
        dispatch({ type: STRIPE_ERROR, payload: err });
      });
  };
};

export const customerCharges = stripeCustomerID => {
  return async dispatch => {
    // CURL ------------------------------------------------------------------
    // curl https://api.stripe.com/v1/charges \
    // -u sk_test_ZrRvT2I8N70Z2tVDuoPKDmS200hY41pKZk: \
    // -d limit=3 \
    // -G

    await axios
      .get(`https://api.stripe.com/v1/charges`, {
        headers: { Authorization: skStripe },
        params: {
          limit: 3,
          customer: stripeCustomerID
        }
      })
      .then(res => {
        const data = res.data;
        dispatch({ type: STRIPE_CUSTOMER_CHARGES, payload: data.data });
        dispatch({ type: STRIPE_LOADER, payload: false });
      })
      .catch(err => {
        dispatch({ type: STRIPE_LOADER, payload: false });
        dispatch({ type: STRIPE_ERROR, payload: err });
      });
  };
};

export const customerSubscriptions = stripeCustomerID => {
  return async dispatch => {
    // CURL ------------------------------------------------------------------
    // curl https://api.stripe.com/v1/subscriptions \
    // -u sk_test_ZrRvT2I8N70Z2tVDuoPKDmS200hY41pKZk: \
    // -d limit=3 \
    // -G

    await axios
      .get(`https://api.stripe.com/v1/subscriptions`, {
        headers: { Authorization: skStripe },
        params: {
          limit: 3,
          customer: stripeCustomerID
        }
      })
      .then(res => {
        const data = res.data;
        dispatch({ type: STRIPE_CUSTOMER_SUBSCRIPTIONS, payload: data.data });
        dispatch({ type: STRIPE_LOADER, payload: false });
      })
      .catch(err => {
        dispatch({ type: STRIPE_LOADER, payload: false });
        dispatch({ type: STRIPE_ERROR, payload: err });
      });
  };
};
