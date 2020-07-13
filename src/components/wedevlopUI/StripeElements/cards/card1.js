import cssCard1 from "./card1.css";
import registerElements from "./registerElements";

const STRIPE_PUBLISHABLE_KEY = "pk_test_6JBrVUQpLo1aLaf8WwfjhZju00UY0rxd5b";
var stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
var elements = stripe.elements();

const card1 = () => {
  // document.addEventListener("DOMContentLoaded", function() {});

  // 'use strict';

  var elements = stripe.elements({
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
      }
    ],
    // Stripe's examples are localized to specific languages, but if
    // you wish to have Elements automatically detect your user's locale,
    // use `locale: 'auto'` instead.
    locale: window.__exampleLocale
  });

  var card = elements.create("card", {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "#fff",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",

        ":-webkit-autofill": {
          color: "#fce883"
        },
        "::placeholder": {
          color: "#87BBFD"
        }
      },
      invalid: {
        iconColor: "#FFC7EE",
        color: "#FFC7EE"
      }
    }
  });
  card.mount("#example1-card");

  registerElements([card], "example1");
};

export default card1;
