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

const INIT_STATE = {
  stripeCustomer: null,
  stripeCustomerSources: null,
  stripeCustomerCharges: null,
  stripeCustomerSubscriptions: null,
  stripeCustomers: null,
  stripeCharges: null,
  stripeSubscriptions: null,
  stripeLoader: false,
  stripeError: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case STRIPE_CUSTOMER: {
      return {
        ...state,
        stripeCustomer: action.payload,
      };
    }
    case STRIPE_CUSTOMER_SOURCES: {
      return {
        ...state,
        stripeCustomerSources: action.payload,
      };
    }
    case STRIPE_CUSTOMER_CHARGES: {
      return {
        ...state,
        stripeCustomerCharges: action.payload,
      };
    }
    case STRIPE_CUSTOMER_SUBSCRIPTIONS: {
      return {
        ...state,
        stripeCustomerSubscriptions: action.payload,
      };
    }
    case STRIPE_CUSTOMERS: {
      return {
        ...state,
        stripeCustomers: action.payload,
      };
    }
    case STRIPE_CHARGES: {
      return {
        ...state,
        stripeCharges: action.payload,
      };
    }
    case STRIPE_SUBSCRIPTIONS: {
      return {
        ...state,
        stripeSubscriptions: action.payload,
      };
    }
    case STRIPE_LOADER: {
      return {
        ...state,
        stripeLoader: action.payload,
      };
    }
    case STRIPE_ERROR: {
      return {
        ...state,
        stripeError: action.payload,
      };
    }
    default:
      return state;
  }
};
