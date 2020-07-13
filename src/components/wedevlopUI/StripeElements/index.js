// DOCUMENTATION EXAMPLE:
/**
 * Removes an object from by key name and value.
 * Finds object in the array by key name and value and then removes it.
 * Returns an array without the object found to remove.
 *
 * @param arr {Array} array of objects, will take off and object from it
 * @param keyName {String} Key name to find
 * @param keyVal {String, Int} Any type
 */

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

import Form from "./Form";

import styleObjects from "./styles/style_objects/index.js";

import {
  attachSource,
  createCharge,
  createSubscription
} from "../../../thunks/app_starter/Firebase/Stripe";

import { retrieveCustomer } from "../../../thunks/app_starter/Stripe";

import projectKeys from "../../../keys";

const STRIPE_CHARGE_AMOUNT = 3000;
const STRIPE_SUBSCRIPTION_PLAN = projectKeys.stripe.plan1; // Stripe Plan ID
const STRIPE_PUBLISHABLE_KEY = projectKeys.stripe.publishableKey;

class StripeElements extends Component {
  constructor(props) {
    super(props);
    this.state = { testValue: 1 };
  }

  // async componentDidMount() {}

  render() {
    // const { backgroundColor, addStyle, children } = this.props;
    // const { testValue } = this.state;
    const { stripeOperation, chargeAmount, subscriptionPlan } = this.props;

    const { formN, inputStyleN, submitButtonStyleN } = this.props;

    const { showInputLabel } = this.props;

    const { titleText, subtitleText, submitText, footnoteText } = this.props;

    const {
      formStyle,
      titleStyle,
      subtitleStyle,
      inputLabelStyle,
      inputStyle,
      invalidInputStyle,
      placeholderStyle,
      errorStyle,
      submitButtonStyle,
      footnoteStyle
    } = this.props;

    const {
      addFormStyle,
      addTitleStyle,
      addSubtitleStyle,
      addInputLabelStyle,
      addInputStyle,
      addInvalidInputStyle,
      addPlaceholderStyle,
      addErrorStyle,
      addSubmitButtonStyle,
      addFootnoteStyle
    } = this.props;

    const {
      formClassName,
      titleClassName,
      subtitleClassName,
      inputLabelClassName,
      inputClassName,
      invalidInputClassName,
      placeholderClassName,
      errorClassName,
      submitButtonClassName,
      footnoteClassName
    } = this.props;

    const {
      addFormClassName,
      addTitleClassName,
      addSubtitleClassName,
      addInputLabelClassName,
      addInputClassName,
      addInvalidInputClassName,
      addPlaceholderClassName,
      addErrorClassName,
      addSubmitButtonClassName,
      addFootnoteClassName
    } = this.props;

    const {
      nameLabel,
      emailLabel,
      phoneLabel,
      addressLabel,
      cityLabel,
      stateLabel,
      zipLabel
    } = this.props;

    const {
      cardLabel,
      cardNumberLabel,
      cardExpiryLabel,
      cardCVCLabel
    } = this.props;

    const {
      namePlaceholder,
      emailPlaceholder,
      phonePlaceholder,
      addressPlaceholder,
      cityPlaceholder,
      statePlaceholder,
      zipPlaceholder
    } = this.props;

    const {
      nameSamplePlaceholder,
      emailSamplePlaceholder,
      phoneSamplePlaceholder,
      addressSamplePlaceholder,
      citySamplePlaceholder,
      stateSamplePlaceholder,
      zipSamplePlaceholder
    } = this.props;

    const {
      verticalInputSeparatorHeight,
      horizontalInputSeparatorWidth,
      hrStyle
    } = this.props;

    // -------------------------------------------------------------------------
    // MERGE PASSED STYLES WITH STRIPE ELEMENTS STYLES

    let stripeElementsStyle = styleObjects.stripeElementsStyle;
    // stripeElementsStyle.style.base["::placeholder"].color = "yellow";

    // ADD STRIPE ELEMENTS INPUT STYLE
    let stripeElementsInputStyle = stripeElementsStyle.style.base;
    let mergedInputStyles = {
      ...stripeElementsInputStyle,
      ...inputStyle,
      ...addInputStyle
    };
    stripeElementsStyle.style.base = mergedInputStyles;

    // ADD STRIPE ELEMENTS PLACEHOLDER STYLE
    let stripeElementsPlaceholderStyle =
      stripeElementsStyle.style.base["::placeholder"];
    let mergePlaceholderStyle = { color: "lightGreen" };
    let mergedInputPlaceholderStyles = {
      ...stripeElementsPlaceholderStyle,
      ...placeholderStyle,
      ...addPlaceholderStyle
    };
    stripeElementsStyle.style.base[
      "::placeholder"
    ] = mergedInputPlaceholderStyles;

    // ADD STRIPE ELEMENTS INVALID INPUT STYLE
    let stripeElementsInvalidInputStyle = stripeElementsStyle.style.invalid;
    let mergedInvalidInputStyles = {
      ...stripeElementsInvalidInputStyle,
      ...invalidInputStyle,
      ...addInvalidInputStyle
    };
    stripeElementsStyle.style.invalid = mergedInvalidInputStyles;

    // -------------------------------------------------------------------------
    //

    const attachFun = this.props.attachSource;
    const chargeFun = this.props.createCharge;
    const subscriptionFun = this.props.createSubscription;

    const retrieveCustomer = this.props.retrieveCustomer;
    retrieveCustomer();

    document.addEventListener("DOMContentLoaded", function() {
      var stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
      var elements = stripe.elements();

      // -----------------------------------------------------------------------
      // CARD ONE BAR

      let card;
      if (formN === 1 || formN === 4 || formN === 5) {
        // Create an instance of the card Element.
        card = elements.create("card", stripeElementsStyle);

        // Add and instance of the card Element into the "card-element"
        card.mount("#card-element");

        // CARD ONE BAR - LISTEN TO INPUT ERRORS
        card.addEventListener("change", function(event) {
          var displayError = document.getElementById("card-errors");
          if (event.error) {
            displayError.textContent = event.error.message;
          } else {
            displayError.textContent = "";
          }
        });
      }

      // -----------------------------------------------------------------------
      // CARD SEPERATE ELEMENTS

      let cardNumber;
      let cardExpiry;
      let cardCvc;
      if (formN === 2 || formN === 3) {
        // var cardNumber = elements.create("cardNumber", {
        //   // style: elementStyles,
        //   // classes: elementClasses
        // });

        // CARD NUMBER

        cardNumber = elements.create(
          "cardNumber",
          styleObjects.stripeElementsStyle
        );
        cardNumber.mount("#stripe-card-number");

        // CARD EXPIRY

        cardExpiry = elements.create(
          "cardExpiry",
          styleObjects.stripeElementsStyle
        );
        cardExpiry.mount("#stripe-card-expiry");

        // CARD CVC

        cardCvc = elements.create("cardCvc", styleObjects.stripeElementsStyle);
        cardCvc.mount("#stripe-card-cvc");

        // CARD SEPERATE ELEMENTS - LISTEN TO INPUT ERRORS

        // CARD NUMBER - ERRORS

        cardNumber.addEventListener("change", function(event) {
          var displayError = document.getElementById(
            "stripe-card-number-errors"
          );
          if (event.error) {
            displayError.textContent = event.error.message;
          } else {
            displayError.textContent = "";
          }
        });

        // CARD EXPIRY - ERRORS

        cardExpiry.addEventListener("change", function(event) {
          var displayError = document.getElementById(
            "stripe-card-expiry-errors"
          );
          if (event.error) {
            displayError.textContent = event.error.message;
          } else {
            displayError.textContent = "";
          }
        });

        // CARD CVC - ERRORS

        cardCvc.addEventListener("change", function(event) {
          var displayError = document.getElementById("stripe-card-cvc-errors");
          if (event.error) {
            displayError.textContent = event.error.message;
          } else {
            displayError.textContent = "";
          }
        });
      }

      // -----------------------------------------------------------------------
      // FORM

      const form = document.getElementById("payment-form");
      form.addEventListener("submit", async event => {
        event.preventDefault();

        // GET INPUT VALUES

        let nameVal = "";
        let emailVal = "";
        let phoneVal = "";
        let addressVal = "";
        let cityVal = "";
        let stateVal = "";
        let zipVal = "";

        const nameInput = document.getElementById("stripe-card-name");
        const emailInput = document.getElementById("stripe-card-email");
        const phoneInput = document.getElementById("stripe-card-phone");
        const addressInput = document.getElementById("stripe-card-address");
        const cityInput = document.getElementById("stripe-card-city");
        const stateInput = document.getElementById("stripe-card-state");
        const zipInput = document.getElementById("stripe-card-zip");

        if (typeof nameInput != "undefined" && nameInput != null) {
          nameVal = document.getElementById("stripe-card-name").value;
        }
        if (typeof emailInput != "undefined" && emailInput != null) {
          emailVal = document.getElementById("stripe-card-email").value;
        }
        if (typeof phoneInput != "undefined" && phoneInput != null) {
          phoneVal = document.getElementById("stripe-card-phone").value;
        }
        if (typeof addressInput != "undefined" && addressInput != null) {
          addressVal = document.getElementById("stripe-card-address").value;
        }
        if (typeof cityInput != "undefined" && cityInput != null) {
          cityVal = document.getElementById("stripe-card-city").value;
        }
        if (typeof stateInput != "undefined" && stateInput != null) {
          stateVal = document.getElementById("stripe-card-state").value;
        }
        if (typeof zipInput != "undefined" && zipInput != null) {
          zipVal = document.getElementById("stripe-card-zip").value;
        }

        const billingDetails = {
          nameVal,
          emailVal,
          phoneVal,
          addressVal,
          cityVal,
          stateVal,
          zipVal
        };

        // ---------------------------------------------------------------------
        // SENDING CARD DATA

        let cardData;
        if (formN === 1 || formN === 4 || formN === 5) {
          cardData = card;
        }
        if (formN === 2 || formN === 3) {
          cardData = cardNumber;
        }
        const { source, error } = await stripe.createSource(cardData);

        // console.log(source);

        // ---------------------------------------------------------------------
        // DEFINE STRIPE OPERATION

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

      // -----------------------------------------------------------------------
      // STRIPE OPERATION HANDLERS

      // Attach a Payment Source Handler
      // const attachFun = fun.httpsCallable("stripeAttachSource");
      const sourceHandler = async source => {
        console.log(source.id);
        const res = await attachFun({ source: source.id });
        console.log("attachFun");
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
        console.log("chargeFun");
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
        console.log("subscriptionFun");
        console.log(res);
        alert("Success! Customer subscribed to plan X");
      };
    });

    // -----------------------------------------------------------------------

    return (
      <Form
        formN={formN}
        inputStyleN={inputStyleN}
        submitButtonStyleN={submitButtonStyleN}
        //
        showInputLabel={showInputLabel}
        //
        formStyle={formStyle}
        titleStyle={titleStyle}
        subtitleStyle={subtitleStyle}
        inputLabelStyle={inputLabelStyle}
        inputStyle={inputStyle}
        invalidInputStyle={invalidInputStyle}
        placeholderStyle={placeholderStyle}
        errorStyle={errorStyle}
        submitButtonStyle={submitButtonStyle}
        footnoteStyle={footnoteStyle}
        //
        addFormStyle={addFormStyle}
        addTitleStyle={addTitleStyle}
        addSubtitleStyle={addSubtitleStyle}
        addInputLabelStyle={addInputLabelStyle}
        addInputStyle={addInputStyle}
        addInvalidInputStyle={addInvalidInputStyle}
        addPlaceholderStyle={addPlaceholderStyle}
        addErrorStyle={addErrorStyle}
        addSubmitButtonStyle={addSubmitButtonStyle}
        addFootnoteStyle={addFootnoteStyle}
        //
        formClassName={formClassName}
        titleClassName={titleClassName}
        subtitleClassName={subtitleClassName}
        inputLabelClassName={inputLabelClassName}
        inputClassName={inputClassName}
        invalidInputClassName={invalidInputClassName}
        placeholderClassName={placeholderClassName}
        errorClassName={errorClassName}
        submitButtonClassName={submitButtonClassName}
        footnoteClassName={footnoteClassName}
        //
        addFormClassName={addFormClassName}
        addTitleClassName={addTitleClassName}
        addSubtitleClassName={addSubtitleClassName}
        addInputLabelClassName={addInputLabelClassName}
        addInputClassName={addInputClassName}
        addInvalidInputClassName={addInvalidInputClassName}
        addPlaceholderClassName={addPlaceholderClassName}
        addErrorClassName={addErrorClassName}
        addSubmitButtonClassName={addSubmitButtonClassName}
        addFootnoteClassName={addFootnoteClassName}
        //
        titleText={titleText}
        subtitleText={subtitleText}
        submitText={submitText}
        footnoteText={footnoteText}
        //
        nameLabel={nameLabel}
        emailLabel={emailLabel}
        phoneLabel={phoneLabel}
        addressLabel={addressLabel}
        cityLabel={cityLabel}
        stateLabel={stateLabel}
        zipLabel={zipLabel}
        //
        cardLabel={cardLabel}
        cardNumberLabel={cardNumberLabel}
        cardExpiryLabel={cardExpiryLabel}
        cardCVCLabel={cardCVCLabel}
        //
        namePlaceholder={namePlaceholder}
        emailPlaceholder={emailPlaceholder}
        phonePlaceholder={phonePlaceholder}
        addressPlaceholder={addressPlaceholder}
        cityPlaceholder={cityPlaceholder}
        statePlaceholder={statePlaceholder}
        zipPlaceholder={zipPlaceholder}
        //
        nameSamplePlaceholder={nameSamplePlaceholder}
        emailSamplePlaceholder={emailSamplePlaceholder}
        phoneSamplePlaceholder={phoneSamplePlaceholder}
        addressSamplePlaceholder={addressSamplePlaceholder}
        citySamplePlaceholder={citySamplePlaceholder}
        stateSamplePlaceholder={stateSamplePlaceholder}
        zipSamplePlaceholder={zipSamplePlaceholder}
        //
        verticalInputSeparatorHeight={verticalInputSeparatorHeight}
        horizontalInputSeparatorWidth={horizontalInputSeparatorWidth}
        hrStyle={hrStyle}
      />
    );
  }
}

StripeElements.defaultProps = {
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  addStyle: {},
  //
  // formN prop should be here in this file and set a default value,
  // cause here we create different stripe elements based on this prop value
  formN: 5,
  inputStyleN: 1
  // submitButtonStyleN: 4,
  //
  // showInputLabel: true
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
    createSubscription,
    //
    retrieveCustomer
  }
)(StripeElements);
