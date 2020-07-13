import styleObjects from "../styles/style_objects/index.js";

const STRIPE_PUBLISHABLE_KEY = "pk_test_6JBrVUQpLo1aLaf8WwfjhZju00UY0rxd5b";
var stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
var elements = stripe.elements();

const card0 = (
  tokenFun,
  attachFun,
  chargeFun,
  subscriptionFun,
  stripeOperation,
  chargeAmount,
  subscriptionPlan
) => {
  document.addEventListener("DOMContentLoaded", function() {
    var stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
    var elements = stripe.elements();

    // -----------------------------------------------------------------------

    // Create an instance of the card Element.
    const card = elements.create("card", {
      // style: styleObjects.stripeElementsStyle
    });

    // Add and instance of the card Element into the "card-element"
    card.mount("#card-element");

    // -----------------------------------------------------------------------

    var cardNumber = elements.create("cardNumber", {
      // style: elementStyles,
      // classes: elementClasses
    });
    cardNumber.mount("#stripe-card-number");

    var cardExpiry = elements.create("cardExpiry", {
      // style: elementStyles,
      // classes: elementClasses
    });
    cardExpiry.mount("#stripe-card-expiry");

    var cardCvc = elements.create("cardCvc", {
      // style: elementStyles,
      // classes: elementClasses
    });
    cardCvc.mount("#stripe-card-cvc");

    // -----------------------------------------------------------------------

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

      var cardData = {
        // id: "card_edf214abc789",
        // number: "4242424242424242",
        name: "Test Jeny Rosen",
        // exp_month: 1,
        // exp_year: 2020,
        address_line1: "Test 123 Main St.",
        address_line2: null,
        address_city: "Test Springfield",
        address_state: "Test MA",
        address_zip: "01101"
        // address_country: "US"
      };

      // const token = await stripe.createToken(cardNumber, cardData);
      // console.log(token);

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
};

export default card0;
