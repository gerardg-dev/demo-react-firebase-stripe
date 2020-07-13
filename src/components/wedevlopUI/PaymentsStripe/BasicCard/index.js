// props
// • stripeOperation
// String = "sendToken" || "attachSource" || "createCharge" || "createSubscription"
// also being the options above,
// if "sendToken", receives prop "token"
// if "attachSource", receives prop ""
// if "createCharge", receives prop "chargeAmount"
// if "createSubscription", receives prop "subscriptionPlan"

// Make sure to already have Stripe keys, secret key & publishable key
// Same data as set in Stripe dashboard, such as "Product" and "Plans"

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

// Import Firebase here or use a redux action thunk which uses functions
import {
  attachSource,
  createCharge,
  createSubscription
} from "../../../../thunks/app_starter/Stripe";

const STRIPE_CHARGE_AMOUNT = 3000;
const STRIPE_SUBSCRIPTION_PLAN = "TestProduct1";

const formStyle = {
  backgroundColor: "lightGray",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  borderStyle: "solid",
  borderWidth: "4px",
  borderColor: "gray"
};

const titleStyle = {};

const subtitleStyle = {};

const cardInputStyle = {
  width: "600px",
  height: "40px",
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  borderRadius: "50px",
  padding: "10px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderRadius: "2px",
  color: "lightGreen"
};

const submitButtonStyle = {
  width: "100%",
  backgroundColor: "lightGreen",
  borderRadius: "20px",
  padding: "12px",
  color: "white"
};

const notesStyle = {};

const stripeElementsStyle = {
  base: {
    // Add your base input styles here. For example:
    fontSize: "30px",
    // color: "#32325g",
    color: "blue",
    borderStyle: "solid",
    borderWidth: "6px"
  }
};

const SimpleForm = () => {
  return (
    <form action="/charge" method="post" id="payment-form" style={formStyle}>
      <p style={titleStyle}>TITLE</p>
      <label htmlFor="card-element" style={subtitleStyle}>
        Credit or debit card
      </label>
      <br />
      <div id="card-element" style={cardInputStyle}>
        {/*
        // A Stripe Element will be inserted here.
        */}
      </div>
      <div id="card-errors" role="alert">
        {/*
        // Used to display Element errors.
        */}
      </div>
      <br />
      <button style={submitButtonStyle}>Submit</button>
    </form>
  );
};

class BasicCard extends Component {
  constructor(props) {
    super(props);
    this.state = { testValue: 1 };
  }

  render() {
    // const { backgroundColor, addStyle, children } = this.props;
    // const { testValue } = this.state;
    const { stripeOperation, chargeAmount, subscriptionPlan } = this.props;

    const containerStyle = {
      // backgroundColor: backgroundColor
    };

    // *************************************************************************
    const attachFun = this.props.attachSource;
    const chargeFun = this.props.createCharge;
    const subscriptionFun = this.props.createSubscription;

    document.addEventListener("DOMContentLoaded", function() {
      var stripe = window.Stripe("pk_test_6JBrVUQpLo1aLaf8WwfjhZju00UY0rxd5b");
      var elements = stripe.elements();

      // Create an instance of the card Element.
      const card = elements.create("card", { stripeElementsStyle });

      // Add and instance of the card Element into the "card-element"
      card.mount("#card-element");

      card.addEventListener("change", function(event) {
        var displayError = document.getElementById("card-errors");
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = "";
        }
      });

      const form = document.getElementById("payment-form");
      form.addEventListener("submit", async event => {
        event.preventDefault();

        const { source, error } = await stripe.createSource(card);
        console.log(source);

        if (error) {
          // Inform the customer that there was an error.
          const errorElement = document.getElementById("card-errors");
          errorElement.textContent = error.message;
        } else {
          // # Option #1
          // Send the token to your server
          // Not touched at Fireshio.io
          if (stripeOperation === "sendToken") {
          }

          // # Option #2
          // Attach a Payment Source Handler
          if (stripeOperation === "attachSource") {
            sourceHandler(source);
          }

          // # Option #3
          // Create a Charge for a Specific Amount
          if (stripeOperation === "createCharge") {
            chargeHandler(source);
          }

          // # Option #4
          // Create a Subscription Charge
          if (stripeOperation === "createSubscription") {
            subscriptionHandler(source);
          }
        }
      });

      // Attach a Payment Source Handler
      // const attachFun = fun.httpsCallable("stripeAttachSource");
      const sourceHandler = async source => {
        console.log(source.id);
        const res = await attachFun({ source: source.id });
        console.log(res);
        alert("Success! Source attached to Customer");
      };

      // Create a Charge for a Specific Amount
      // const chargeFun = fun.httpsCallable("stripeCreateCharge");
      const chargeHandler = async source => {
        const res = await chargeFun({
          source: source.id,
          // amount: 3000
          // amount: STRIPE_CHARGE_AMOUNT
          amount: chargeAmount
        });
        console.log(res);
        alert("Success! Charged customer $30.00");
      };

      // Create a Subscription Charge
      // const subscriptionFun = fun.httpsCallable("stripeCreateSubscription");
      const subscriptionHandler = async source => {
        console.log(source.id);
        const res = await subscriptionFun({
          // plan: "TestProduct1",
          // plan: STRIPE_SUBSCRIPTION_PLAN,
          plan: subscriptionPlan,
          source: source.id
        });
        console.log(res);
        alert("Success! Customer subscribed to plan X");
      };
    });

    // *************************************************************************

    // return <div {...props} style={{ ...containerStyle, ...addStyle }}></div>;
    return <SimpleForm />;
    // return <div></div>;
  }
}

BasicCard.defaultProps = {
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  addStyle: {}
};

const mapStateToProps = state => {
  return {
    // testProp: state.testProp
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     // someAction: () => {
//     //   dispatch(actionsFile.someAction());
//     // },
//   };
// };

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  {
    attachSource,
    createCharge,
    createSubscription
  }
)(BasicCard);

// Create Firebase Customer
// Create Stripe Customer
// Create Customer Payment Source (Debit/Credit)
// Create a Charge
// Create a Suscription

// Create a Refund
