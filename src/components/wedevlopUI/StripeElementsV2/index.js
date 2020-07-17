import React from "react";
import Form from "./Form";
import defaultStyles from "./styles/defaultStyles";
import defaultClassNames from "./styles/defaultClassNames";

const StripeElements = props => {
  const style = { ...defaultStyles.style, ...props.style };
  const addStyle = { ...defaultStyles.addStyle, ...props.addStyle };
  const className = {
    ...defaultClassNames.className,
    ...props.className
  };
  const addClassName = {
    ...defaultClassNames.addClassName,
    ...props.addClassName
  };

  const { formN } = props;

  const { publishableKey, stripeOperation, chargeAmount, pricingID } = props;

  const {
    attachFun,
    chargeFun,
    subscriptionFun,
    onAttachSourceSuccessHandler,
    onCreateChargeSuccessHandler,
    onCreateSubscriptionSuccessHandler
  } = props;

  // -------------------------------------------------------------------------
  // MERGE PASSED STYLES WITH STRIPE ELEMENTS STYLES

  let stripeElementsStyle = {
    ...style.stripeElements,
    ...addStyle.stripeElements
  };
  // stripeElementsStyle.style.base["::placeholder"].color = "yellow";

  // INPUT STYLE

  let stripeElementsInputStyle = stripeElementsStyle.style.base;

  let mergedInputStyles = {
    ...stripeElementsInputStyle,
    ...style.input,
    ...addStyle.input
  };
  stripeElementsStyle.style.base = mergedInputStyles;

  // PLACEHOLDER STYLE

  let stripeElementsPlaceholderStyle =
    stripeElementsStyle.style.base["::placeholder"];

  let mergePlaceholderStyle = { color: "lightGreen" };

  let mergedInputPlaceholderStyles = {
    ...stripeElementsPlaceholderStyle,
    ...style.placeholder,
    ...addStyle.placeholder
  };

  stripeElementsStyle.style.base[
    "::placeholder"
  ] = mergedInputPlaceholderStyles;

  // INVALID INPUT STYLE

  let stripeElementsInvalidInputStyle = stripeElementsStyle.style.invalid;

  let mergedInvalidInputStyles = {
    ...stripeElementsInvalidInputStyle,
    ...style.invalidInput,
    ...addStyle.invalidInput
  };

  stripeElementsStyle.style.invalid = mergedInvalidInputStyles;

  // -------------------------------------------------------------------------

  document.addEventListener("DOMContentLoaded", function() {
    var stripe = window.Stripe(publishableKey);
    var elements = stripe.elements();

    // -----------------------------------------------------------------------
    // CARD - ELEMENTS IN ONE INPUT

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
    // CARD - ELEMENTS IN SEPARATED INPUTS

    let cardNumber;
    let cardExpiry;
    let cardCvc;
    if (formN === 2 || formN === 3) {
      // CARD NUMBER

      cardNumber = elements.create("cardNumber", stripeElementsStyle);
      cardNumber.mount("#stripe-card-number");

      // CARD EXPIRY

      cardExpiry = elements.create("cardExpiry", stripeElementsStyle);
      cardExpiry.mount("#stripe-card-expiry");

      // CARD CVC

      cardCvc = elements.create("cardCvc", stripeElementsStyle);
      cardCvc.mount("#stripe-card-cvc");

      // CARD SEPERATE ELEMENTS - LISTEN TO INPUT ERRORS

      // CARD NUMBER - ERRORS

      cardNumber.addEventListener("change", function(event) {
        var displayError = document.getElementById("stripe-card-number-errors");
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = "";
        }
      });

      // CARD EXPIRY - ERRORS

      cardExpiry.addEventListener("change", function(event) {
        var displayError = document.getElementById("stripe-card-expiry-errors");
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

      let billingDetails = {
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: ""
      };

      const nameInput = document.getElementById("stripe-card-name");
      const emailInput = document.getElementById("stripe-card-email");
      const phoneInput = document.getElementById("stripe-card-phone");
      const addressInput = document.getElementById("stripe-card-address");
      const cityInput = document.getElementById("stripe-card-city");
      const stateInput = document.getElementById("stripe-card-state");
      const zipInput = document.getElementById("stripe-card-zip");

      if (typeof nameInput != "undefined" && nameInput != null) {
        billingDetails.name = nameInput.value;
      }
      if (typeof emailInput != "undefined" && emailInput != null) {
        billingDetails.email = emailInput.value;
      }
      if (typeof phoneInput != "undefined" && phoneInput != null) {
        billingDetails.phone = phoneInput.value;
      }
      if (typeof addressInput != "undefined" && addressInput != null) {
        billingDetails.address = addressInput.value;
      }
      if (typeof cityInput != "undefined" && cityInput != null) {
        billingDetails.city = cityInput.value;
      }
      if (typeof stateInput != "undefined" && stateInput != null) {
        billingDetails.state = stateInput.value;
      }
      if (typeof zipInput != "undefined" && zipInput != null) {
        billingDetails.zip = zipInput.value;
      }

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

      // ---------------------------------------------------------------------
      // DEFINE STRIPE OPERATION

      if (error) {
        // Inform the customer that there was an error.
        const errorElement = document.getElementById("card-errors");
        errorElement.textContent = error.message;
      } else {
        // Send the token to your server
        if (stripeOperation === "sendToken") {
          //
        }

        // Attach a Payment Source Handler
        if (stripeOperation === "attachSource") {
          sourceHandler(source, onAttachSourceSuccessHandler, billingDetails);
        }

        // Create a Charge for a Specific Amount
        if (stripeOperation === "createCharge") {
          chargeHandler(source, onCreateChargeSuccessHandler, billingDetails);
        }

        // Create a Subscription Charge
        if (stripeOperation === "createSubscription") {
          subscriptionHandler(
            source,
            onCreateSubscriptionSuccessHandler,
            billingDetails
          );
        }
      }
    });

    // -----------------------------------------------------------------------
    // STRIPE OPERATION HANDLERS

    const sourceHandler = async (
      source,
      onAttachSourceSuccessHandler,
      billingDetails
    ) => {
      await attachFun({ source: source.id, billingDetails });
      onAttachSourceSuccessHandler();
    };

    const chargeHandler = async (
      source,
      onCreateChargeSuccessHandler,
      billingDetails
    ) => {
      await chargeFun({
        source: source.id,
        amount: chargeAmount,
        billingDetails
      });
      onCreateChargeSuccessHandler();
    };

    const subscriptionHandler = async (
      source,
      onCreateSubscriptionSuccessHandler,
      billingDetails
    ) => {
      await subscriptionFun({
        plan: pricingID,
        source: source.id,
        billingDetails
      });
      onCreateSubscriptionSuccessHandler();
    };
  });

  return (
    <Form
      style={style}
      addStyle={addStyle}
      className={className}
      addClassName={addClassName}
      //
      formN={props.formN}
      inputStyleN={props.inputStyleN}
      submitButtonStyleN={props.submitButtonStyleN}
      showInputLabel={props.showInputLabel}
      //
      titleText={props.titleText}
      subtitleText={props.subtitleText}
      submitText={props.submitText}
      footnoteText={props.footnoteText}
      //
      nameLabel={props.nameLabel}
      emailLabel={props.emailLabel}
      phoneLabel={props.phoneLabel}
      addressLabel={props.addressLabel}
      cityLabel={props.cityLabel}
      stateLabel={props.stateLabel}
      zipLabel={props.zipLabel}
      //
      cardLabel={props.cardLabel}
      cardNumberLabel={props.cardNumberLabel}
      cardExpiryLabel={props.cardExpiryLabel}
      cardCVCLabel={props.cardCVCLabel}
      //
      namePlaceholder={props.namePlaceholder}
      emailPlaceholder={props.emailPlaceholder}
      phonePlaceholder={props.phonePlaceholder}
      addressPlaceholder={props.addressPlaceholder}
      cityPlaceholder={props.cityPlaceholder}
      statePlaceholder={props.statePlaceholder}
      zipPlaceholder={props.zipPlaceholder}
      //
      nameSamplePlaceholder={props.nameSamplePlaceholder}
      emailSamplePlaceholder={props.emailSamplePlaceholder}
      phoneSamplePlaceholder={props.phoneSamplePlaceholder}
      addressSamplePlaceholder={props.addressSamplePlaceholder}
      citySamplePlaceholder={props.citySamplePlaceholder}
      stateSamplePlaceholder={props.stateSamplePlaceholder}
      zipSamplePlaceholder={props.zipSamplePlaceholder}
      //
      verticalInputSeparatorHeight={props.verticalInputSeparatorHeight}
      horizontalInputSeparatorWidth={props.horizontalInputSeparatorWidth}
      hrStyle={props.hrStyle}
    />
  );
};

export default StripeElements;

StripeElements.defaultProps = {
  formN: 5,
  inputStyleN: 1,
  submitButtonStyleN: 1,
  showInputLabel: true,
  //
  publishableKey: "", // Stripe Publishable Key
  stripeOperation: "attachSource", // "sendToken" "attachSource" "createCharge" "createSubscription"
  chargeAmount: 0, // integer, cents, required if stripeOperation === "createCharge"
  pricingID: "", // required if stripeOperation === "createSubscription"
  //
  attachFun: () => console.log("Stripe Op - 'attachSource' - attachFun()"),
  chargeFun: () => console.log("Stripe Op - 'createCharge' - chargeFun()"),
  subscriptionFun: () =>
    console.log("Stripe Op - 'createSubscription' - subscriptionFun()"),
  //
  onAttachSourceSuccessHandler: () => alert("Source Attached!"),
  onCreateChargeSuccessHandler: () => alert("Charge Created!"),
  onCreateSubscriptionSuccessHandler: () => alert("Subscription Created!")
};
