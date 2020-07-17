import React from "react";

import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";

import defaultStyles from "../styles/defaultStyles";
import defaultClassNames from "../styles/defaultClassNames";

import placeholderCSS from "../styles/css/placeholder.css";

const Form = props => {
  const style = { ...defaultStyles.style, ...props.style };
  const addStyle = { ...defaultStyles.addStyle, ...props.addStyle };
  const className = { ...defaultClassNames.className, ...props.className };
  const addClassName = {
    ...defaultClassNames.addClassName,
    ...props.addClassName
  };

  const {
    formN,
    inputStyleN,
    submitButtonStyleN,
    //
    showInputLabel,
    //
    titleText,
    subtitleText,
    submitText,
    footnoteText,
    //
    nameLabel,
    emailLabel,
    phoneLabel,
    addressLabel,
    cityLabel,
    stateLabel,
    zipLabel,
    //
    cardLabel,
    cardNumberLabel,
    cardExpiryLabel,
    cardCVCLabel,
    //
    namePlaceholder,
    emailPlaceholder,
    phonePlaceholder,
    addressPlaceholder,
    cityPlaceholder,
    statePlaceholder,
    zipPlaceholder,
    //
    nameSamplePlaceholder,
    emailSamplePlaceholder,
    phoneSamplePlaceholder,
    addressSamplePlaceholder,
    citySamplePlaceholder,
    stateSamplePlaceholder,
    zipSamplePlaceholder
  } = props;

  let baseInputStyle;
  if (inputStyleN === 1) {
    baseInputStyle = style.baseInput1;
  }
  if (inputStyleN === 2) {
    baseInputStyle = style.baseInput2;
  }
  if (inputStyleN === 3) {
    baseInputStyle = style.baseInput3;
  }
  if (inputStyleN === 4) {
    baseInputStyle = style.baseInput4;
  }

  let baseSubmitButtonStyle;
  if (submitButtonStyleN === 1) {
    baseSubmitButtonStyle = style.baseSubmitButton1;
  }
  if (submitButtonStyleN === 2) {
    baseSubmitButtonStyle = style.baseSubmitButton2;
  }
  if (submitButtonStyleN === 3) {
    baseSubmitButtonStyle = style.baseSubmitButton3;
  }
  if (submitButtonStyleN === 4) {
    baseSubmitButtonStyle = style.baseSubmitButton4;
  }
  if (submitButtonStyleN === 5) {
    baseSubmitButtonStyle = style.baseSubmitButton5;
  }
  if (submitButtonStyleN === 6) {
    baseSubmitButtonStyle = style.baseSubmitButton6;
  }
  if (submitButtonStyleN === 7) {
    baseSubmitButtonStyle = style.baseSubmitButton7;
  }
  if (submitButtonStyleN === 8) {
    baseSubmitButtonStyle = style.baseSubmitButton8;
  }

  const renderTitle = () => {
    if (titleText && titleText.length > 0) {
      return (
        <p
          style={{ ...style.title, ...addStyle.title }}
          className={`${className.title} ${addClassName.title}`}
        >
          {titleText}
        </p>
      );
    }
  };

  const renderSubtitle = () => {
    if (subtitleText && subtitleText.length > 0) {
      return (
        <p
          style={{ ...style.subtitle, ...addStyle.subtitle }}
          className={`${className.subtitle} ${addClassName.subtitle}`}
        >
          {subtitleText}
        </p>
      );
    }
  };

  const renderSubmitButtonText = () => {
    if (submitText && submitText.length > 0) {
      return <p>{submitText}</p>;
    }
  };

  const renderFootnote = () => {
    if (footnoteText && footnoteText.length > 0) {
      return (
        <p
          style={{ ...style.footnote, ...addStyle.footnote }}
          className={`${className.footnote} ${addClassName.footnote}`}
        >
          {footnoteText}
        </p>
      );
    }
  };

  const renderFormInputs = () => {
    if (formN === 0) {
      return (
        <div style={{ width: "100%" }}>
          <div
            id="stripe-card-number"
            style={{ ...style.input, ...addStyle.input }}
            className={`${className.input} ${addClassName.input}`}
          >
            {/**/}
          </div>
          <div
            id="stripe-card-number-errors"
            role="alert"
            style={{ ...style.error, ...addStyle.error }}
            className={`${className.error} ${addClassName.error}`}
          >
            {/**/}
          </div>
          <div
            id="stripe-card-expiry"
            style={{ ...style.input, ...addStyle.input }}
            className={`${className.input} ${addClassName.input}`}
          >
            {/**/}
          </div>
          <div
            id="stripe-card-expiry-errors"
            role="alert"
            style={{ ...style.error, ...addStyle.error }}
            className={`${className.error} ${addClassName.error}`}
          >
            {/**/}
          </div>
          <div
            id="stripe-card-cvc"
            style={{ ...style.input, ...addStyle.input }}
            className={`${className.input} ${addClassName.input}`}
          >
            {/**/}
          </div>
          <div
            id="stripe-card-cvc-errors"
            role="alert"
            style={{ ...style.error, ...addStyle.error }}
            className={`${className.error} ${addClassName.error}`}
          >
            {/**/}
          </div>
          <div
            id="card-errors"
            role="alert"
            style={{ ...style.error, ...addStyle.error }}
            className={`${className.error} ${addClassName.error}`}
          >
            {/* Stripe Element errors here. */}
          </div>
        </div>
      );
    }

    if (formN === 1) {
      return (
        <Form1
          style={style}
          addStyle={addStyle}
          className={className}
          addClassName={addClassName}
          //
          baseInputStyle={baseInputStyle}
          showInputLabel={showInputLabel}
          //
          nameLabel={nameLabel}
          emailLabel={emailLabel}
          phoneLabel={phoneLabel}
          //
          namePlaceholder={namePlaceholder}
          emailPlaceholder={emailPlaceholder}
          phonePlaceholder={phonePlaceholder}
          //
          nameSamplePlaceholder={nameSamplePlaceholder}
          emailSamplePlaceholder={emailSamplePlaceholder}
          phoneSamplePlaceholder={phoneSamplePlaceholder}
        />
      );
    }

    if (formN === 2) {
      return (
        <Form2
          style={style}
          addStyle={addStyle}
          className={className}
          addClassName={addClassName}
          //
          baseInputStyle={baseInputStyle}
          showInputLabel={showInputLabel}
          //
          addressLabel={addressLabel}
          cityLabel={cityLabel}
          stateLabel={stateLabel}
          zipLabel={zipLabel}
          //
          cardNumberLabel={cardNumberLabel}
          cardExpiryLabel={cardExpiryLabel}
          cardCVCLabel={cardCVCLabel}
          //
          addressPlaceholder={addressPlaceholder}
          cityPlaceholder={cityPlaceholder}
          statePlaceholder={statePlaceholder}
          zipPlaceholder={zipPlaceholder}
          //
          addressSamplePlaceholder={addressSamplePlaceholder}
          citySamplePlaceholder={citySamplePlaceholder}
          stateSamplePlaceholder={stateSamplePlaceholder}
          zipSamplePlaceholder={zipSamplePlaceholder}
        />
      );
    }

    if (formN === 3) {
      return (
        <Form3
          style={style}
          addStyle={addStyle}
          className={className}
          addClassName={addClassName}
          //
          baseInputStyle={baseInputStyle}
          showInputLabel={showInputLabel}
          //
          nameLabel={nameLabel}
          emailLabel={emailLabel}
          phoneLabel={phoneLabel}
          cardLabel={cardLabel}
          cardNumberLabel={cardNumberLabel}
          cardExpiryLabel={cardExpiryLabel}
          cardCVCLabel={cardCVCLabel}
          //
          namePlaceholder={namePlaceholder}
          emailPlaceholder={emailPlaceholder}
          phonePlaceholder={phonePlaceholder}
          //
          nameSamplePlaceholder={nameSamplePlaceholder}
          emailSamplePlaceholder={emailSamplePlaceholder}
          phoneSamplePlaceholder={phoneSamplePlaceholder}
        />
      );
    }

    if (formN === 4) {
      return (
        <Form4
          style={style}
          addStyle={addStyle}
          className={className}
          addClassName={addClassName}
          //
          baseInputStyle={baseInputStyle}
          showInputLabel={showInputLabel}
          //
          cardLabel={cardLabel}
        />
      );
    }

    if (formN === 5) {
      return (
        <Form5
          style={style}
          addStyle={addStyle}
          className={className}
          addClassName={addClassName}
          //
          baseInputStyle={baseInputStyle}
          showInputLabel={showInputLabel}
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
        />
      );
    }
  };

  return (
    <form
      action="/charge"
      method="post"
      id="payment-form"
      style={{ ...style.form, ...addStyle.form }}
      className={`${className.form} ${addClassName.form}`}
    >
      {renderTitle()}
      {renderSubtitle()}
      {/*
        <label htmlFor="card-element" style={subtitleStyle}>
          {renderSubtitle()}
        </label>
      */}

      {/*
        <div id="card-element" style={inputStyle}>
        // A Stripe Element will be inserted here.
        </div>
      */}

      {renderFormInputs()}

      <button
        style={{
          ...baseSubmitButtonStyle,
          ...style.submitButton,
          ...addStyle.submitButton
        }}
        className={`${className.submitButton} ${addClassName.submitButton}`}
      >
        {renderSubmitButtonText()}
      </button>
      {renderFootnote()}
    </form>
  );
};

Form.defaultProps = {
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  //
  formN: 1,
  inputStyleN: 4,
  submitButtonStyleN: 1,
  //
  showInputLabel: false,
  //
  style: {},
  addStyle: {},
  className: {},
  addClassName: {},
  //
  titleText: "",
  subtitleText: "",
  submitText: "Submit",
  footnoteText: "",
  //
  nameLabel: "Name",
  emailLabel: "Email",
  phoneLabel: "Phone",
  addressLabel: "Address",
  cityLabel: "City",
  stateLabel: "State",
  zipLabel: "ZIP",
  //
  cardLabel: "Card Details",
  cardNumberLabel: "Card Number",
  cardExpiryLabel: "Expiry",
  cardCVCLabel: "CVC",
  //
  namePlaceholder: "Name",
  emailPlaceholder: "Email",
  phonePlaceholder: "Phone",
  addressPlaceholder: "Address",
  cityPlaceholder: "City",
  statePlaceholder: "State",
  zipPlaceholder: "ZIP",
  //
  nameSamplePlaceholder: "John Doe",
  emailSamplePlaceholder: "johndoe@gmail.com",
  phoneSamplePlaceholder: "(941) 555-0123",
  addressSamplePlaceholder: "185 Berry St",
  citySamplePlaceholder: "San Francisco",
  stateSamplePlaceholder: "CA",
  zipSamplePlaceholder: "94107"
};

export default Form;
