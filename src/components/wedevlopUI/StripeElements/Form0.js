import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

// stripeElements element id's
// payment-form
// card-element
// card-errors
// card

const clearStyle = {};

const StripeForm1 = props => {
  const {
    formStyle,
    titleStyle,
    subtitleStyle,
    cardInputStyle,
    errorStyle,
    submitButtonStyle,
    footnoteStyle,
    //
    titleText,
    subtitleText,
    submitText,
    footnoteText
  } = props;

  const renderTitle = () => {
    if (titleText && titleText.length > 0) {
      return <p style={titleStyle}>{titleText}</p>;
    }
  };

  const renderSubtitle = () => {
    if (subtitleText && subtitleText.length > 0) {
      return <p style={subtitleStyle}>{subtitleText}</p>;
    }
  };

  const renderSubmitButtonText = () => {
    if (submitText && submitText.length > 0) {
      return <p>{submitText}</p>;
    }
  };

  const renderFootnote = () => {
    if (footnoteText && footnoteText.length > 0) {
      return <p style={footnoteStyle}>{footnoteText}</p>;
    }
  };

  return (
    <form action="/charge" method="post" id="payment-form" style={formStyle}>
      {renderTitle()}
      {renderSubtitle()}
      {/*
      <label htmlFor="card-element" style={subtitleStyle}>
        {renderSubtitle()}
      </label>
      */}

      {/*
          <div id="card-element" style={cardInputStyle}>
        // A Stripe Element will be inserted here.
        </div>
        */}

      <div id="stripe-card-number" style={cardInputStyle}>
        {/**/}
      </div>
      <div id="stripe-card-number-errors" role="alert" style={errorStyle}>
        {/**/}
      </div>
      <div id="stripe-card-expiry" style={cardInputStyle}>
        {/**/}
      </div>
      <div id="stripe-card-expiry-errors" role="alert" style={errorStyle}>
        {/**/}
      </div>
      <div id="stripe-card-cvc" style={cardInputStyle}>
        {/**/}
      </div>
      <div id="stripe-card-cvc-errors" role="alert" style={errorStyle}>
        {/**/}
      </div>
      <div id="card-errors" role="alert" style={errorStyle}>
        {/*
        // Used to display Element errors.
        */}
      </div>

      <button style={submitButtonStyle}>{renderSubmitButtonText()}</button>
      {renderFootnote()}
    </form>
  );
};

// const {
//   formStyle,
//   titleStyle,
//   subtitleStyle,
//   cardInputStyle,
//   errorStyle,
//   submitButtonStyle,
//   footnoteStyle,
//   //
//   titleText,
//   subtitleText,
//   submitText,
//   footnoteText
// } = props;

StripeForm1.defaultProps = {
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  //
  formStyle: styleObjects.formStyle,
  titleStyle: styleObjects.titleStyle,
  subtitleStyle: styleObjects.subtitleStyle,
  cardInputStyle: styleObjects.cardInputStyle,
  errorStyle: styleObjects.errorStyle,
  submitButtonStyle: styleObjects.submitButtonStyle,
  footnoteStyle: styleObjects.footnoteStyle,
  //
  titleText: "Enter your card details",
  subtitleText: "",
  submitText: "Submit",
  footnoteText: ""
};

export default StripeForm1;
