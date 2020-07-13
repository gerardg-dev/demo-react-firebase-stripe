import {
	STRIPE_CUSTOMER,
	STRIPE_CUSTOMER_SOURCES,
	STRIPE_CUSTOMER_CHARGES,
	STRIPE_CUSTOMER_SUBSCRIPTIONS,
	STRIPE_CUSTOMERS,
	STRIPE_CHARGES,
	STRIPE_SUBSCRIPTIONS,
	STRIPE_LOADER,
	STRIPE_ERROR
} from "constants/app_starter/ActionTypes";

export const stripeCustomer = payload => {
  return {
    type: STRIPE_CUSTOMER,
    payload: payload
  };
};

export const stripeCustomerSources = payload => {
  return {
    type: STRIPE_CUSTOMER_SOURCES,
    payload: payload
  };
};

export const stripeCustomerCharges = payload => {
  return {
    type: STRIPE_CUSTOMER_CHARGES,
    payload: payload
  };
};

export const stripeCustomerSubscriptions = payload => {
  return {
    type: STRIPE_CUSTOMER_SUBSCRIPTIONS,
    payload: payload
  };
};

export const stripeCustomers = payload => {
  return {
    type: STRIPE_CUSTOMERS,
    payload: payload
  };
};

export const stripeCharges = payload => {
  return {
    type: STRIPE_CHARGES,
    payload: payload
  };
};

export const stripeSubscriptions = payload => {
  return {
    type: STRIPE_SUBSCRIPTIONS,
    payload: payload
  };
};
export const stripeLoader = payload => {
  return {
    type: STRIPE_LOADER,
    payload: payload
  };
};
export const stripeError = payload => {
  return {
    type: STRIPE_ERROR,
    payload: payload
  };
};
