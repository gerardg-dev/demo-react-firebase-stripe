// https://stripe.dev/elements-examples/
// // Examples JS and CSS
// https://github.com/stripe/elements-examples
// // Examples HTML
// https://github.com/stripe/elements-examples/blob/master/index.html

// formN "1" is only great with inputStyleN "1"
// add if cases to formN "1" to make it work with the other inputStyleN's

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import placeholderCSS from "./styles/css/placeholder.css";

// stripeElements element id's
// payment-form
// card-element
// card-errors
// card

const clearStyle = {};

const Form = props => {
  const {
    formN,
    inputStyleN,
    submitButtonStyleN,
    //
    showInputLabel,
    //
    formStyle,
    titleStyle,
    subtitleStyle,
    inputLabelStyle,
    inputStyle,
    invalidInputStyle,
    placeholderStyle,
    errorStyle,
    submitButtonStyle,
    footnoteStyle,
    //
    addFormStyle,
    addTitleStyle,
    addSubtitleStyle,
    addInputLabelStyle,
    addInputStyle,
    addInvalidInputStyle,
    addPlaceholderStyle,
    addErrorStyle,
    addSubmitButtonStyle,
    addFootnoteStyle,
    //
    formClassName,
    titleClassName,
    subtitleClassName,
    inputLabelClassName,
    inputClassName,
    invalidInputClassName,
    placeholderClassName,
    errorClassName,
    submitButtonClassName,
    footnoteClassName,
    //
    addFormClassName,
    addTitleClassName,
    addSubtitleClassName,
    addInputLabelClassName,
    addInputClassName,
    addInvalidInputClassName,
    addPlaceholderClassName,
    addErrorClassName,
    addSubmitButtonClassName,
    addFootnoteClassName,
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
    zipSamplePlaceholder,
    //
    verticalInputSeparatorHeight,
    horizontalInputSeparatorWidth,
    hrStyle
  } = props;

  let baseInputStyle;
  if (inputStyleN === 1) {
    baseInputStyle = styleObjects.baseInputStyle1;
  }
  if (inputStyleN === 2) {
    baseInputStyle = styleObjects.baseInputStyle2;
  }
  if (inputStyleN === 3) {
    baseInputStyle = styleObjects.baseInputStyle3;
  }
  if (inputStyleN === 4) {
    baseInputStyle = styleObjects.baseInputStyle4;
  }

  let baseSubmitButtonStyle;
  if (submitButtonStyleN === 1) {
    baseSubmitButtonStyle = styleObjects.baseSubmitButtonStyle1;
  }
  if (submitButtonStyleN === 2) {
    baseSubmitButtonStyle = styleObjects.baseSubmitButtonStyle2;
  }
  if (submitButtonStyleN === 3) {
    baseSubmitButtonStyle = styleObjects.baseSubmitButtonStyle3;
  }
  if (submitButtonStyleN === 4) {
    baseSubmitButtonStyle = styleObjects.baseSubmitButtonStyle4;
  }
  if (submitButtonStyleN === 5) {
    baseSubmitButtonStyle = styleObjects.baseSubmitButtonStyle5;
  }
  if (submitButtonStyleN === 6) {
    baseSubmitButtonStyle = styleObjects.baseSubmitButtonStyle6;
  }
  if (submitButtonStyleN === 7) {
    baseSubmitButtonStyle = styleObjects.baseSubmitButtonStyle7;
  }
  if (submitButtonStyleN === 8) {
    baseSubmitButtonStyle = styleObjects.baseSubmitButtonStyle8;
  }

  const renderTitle = () => {
    if (titleText && titleText.length > 0) {
      return (
        <p
          style={{ ...titleStyle, ...addTitleStyle }}
          className={`${titleClassName} ${addTitleClassName}`}
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
          style={{ ...subtitleStyle, ...addSubtitleStyle }}
          className={`${subtitleClassName} ${addSubtitleClassName}`}
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
          style={{ ...footnoteStyle, ...addFootnoteStyle }}
          className={`${footnoteClassName} ${addFootnoteClassName}`}
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
            style={inputStyle}
            className={`${inputClassName} ${addInputClassName}`}
          >
            {/**/}
          </div>
          <div
            id="stripe-card-number-errors"
            role="alert"
            style={errorStyle}
            className={`${errorClassName} ${addErrorClassName}`}
          >
            {/**/}
          </div>
          <div
            id="stripe-card-expiry"
            style={inputStyle}
            className={`${inputClassName} ${addInputClassName}`}
          >
            {/**/}
          </div>
          <div
            id="stripe-card-expiry-errors"
            role="alert"
            style={errorStyle}
            className={`${errorClassName} ${addErrorClassName}`}
          >
            {/**/}
          </div>
          <div
            id="stripe-card-cvc"
            style={inputStyle}
            className={`${inputClassName} ${addInputClassName}`}
          >
            {/**/}
          </div>
          <div
            id="stripe-card-cvc-errors"
            role="alert"
            style={errorStyle}
            className={`${errorClassName} ${addErrorClassName}`}
          >
            {/**/}
          </div>
          <div
            id="card-errors"
            role="alert"
            style={errorStyle}
            className={`${errorClassName} ${addErrorClassName}`}
          >
            {/*
          // Used to display Element errors.
          */}
          </div>
        </div>
      );
    }

    if (formN === 1) {
      return (
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {showInputLabel ? (
              <label
                style={{
                  ...{ width: "20%" },
                  ...inputLabelStyle,
                  ...addInputLabelStyle
                }}
                className={`${inputLabelClassName} ${addInputLabelClassName}`}
              >
                {nameLabel}
              </label>
            ) : (
              ""
            )}
            <input
              required
              id="stripe-card-name"
              style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
              className={`${inputClassName} ${addInputClassName}`}
              placeholder={
                showInputLabel ? nameSamplePlaceholder : namePlaceholder
              }
              type="text"
            />
          </div>

          <hr style={hrStyle} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {showInputLabel ? (
              <label
                style={{
                  ...{ width: "20%" },
                  ...inputLabelStyle,
                  ...addInputLabelStyle
                }}
                className={`${inputLabelClassName} ${addInputLabelClassName}`}
              >
                {emailLabel}
              </label>
            ) : (
              ""
            )}
            <input
              required
              id="stripe-card-email"
              style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
              className={`${inputClassName} ${addInputClassName}`}
              placeholder={
                showInputLabel ? emailSamplePlaceholder : emailPlaceholder
              }
              type="email"
            />
          </div>

          <hr style={hrStyle} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {showInputLabel ? (
              <label
                style={{
                  ...{ width: "20%" },
                  ...inputLabelStyle,
                  ...addInputLabelStyle
                }}
                className={`${inputLabelClassName} ${addInputLabelClassName}`}
              >
                {phoneLabel}
              </label>
            ) : (
              ""
            )}
            <input
              required
              id="stripe-card-phone"
              style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
              className={`${inputClassName} ${addInputClassName}`}
              placeholder={
                showInputLabel ? phoneSamplePlaceholder : phonePlaceholder
              }
              type="number"
            />
          </div>

          <br />

          <div
            id="card-element"
            style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
            className={`${inputClassName} ${addInputClassName}`}
          >
            {/*
              // A Stripe Element will be inserted here.
            */}
          </div>

          <div
            id="card-errors"
            role="alert"
            style={{ ...errorStyle, ...addErrorStyle }}
            className={`${errorClassName} ${addErrorClassName}`}
          >
            {/*
              // Used to display Element errors.
            */}
          </div>

          <br />
        </div>
      );
    }

    if (formN === 2) {
      return (
        <div style={{ width: "100%" }}>
          <div stlye={{ display: "flex", flexDirection: "column" }}>
            {showInputLabel ? (
              <label
                style={{
                  ...inputLabelStyle,
                  ...addInputLabelStyle,
                  ...{ width: "100%" }
                }}
                className={`${inputLabelClassName} ${addInputLabelClassName}`}
              >
                {addressLabel}
              </label>
            ) : (
              ""
            )}
            <input
              required
              id="stripe-card-address"
              style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
              className={`${inputClassName} ${addInputClassName}`}
              placeholder={
                showInputLabel ? addressSamplePlaceholder : addressPlaceholder
              }
              type="text"
            />
          </div>

          <div style={verticalInputSeparatorHeight} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "60%"
              }}
            >
              {showInputLabel ? (
                <label
                  style={{
                    ...inputLabelStyle,
                    ...addInputLabelStyle,
                    ...{ width: "100%" }
                  }}
                  className={`${inputLabelClassName} ${addInputLabelClassName}`}
                >
                  {cityLabel}
                </label>
              ) : (
                ""
              )}
              <input
                required
                id="stripe-card-city"
                style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
                className={`${inputClassName} ${addInputClassName}`}
                placeholder={
                  showInputLabel ? citySamplePlaceholder : cityPlaceholder
                }
                type="text"
              />
            </div>

            <div style={horizontalInputSeparatorWidth} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "20%"
              }}
            >
              {showInputLabel ? (
                <label
                  style={{
                    ...inputLabelStyle,
                    ...addInputLabelStyle,
                    ...{ width: "100%" }
                  }}
                  className={`${inputLabelClassName} ${addInputLabelClassName}`}
                >
                  {stateLabel}
                </label>
              ) : (
                ""
              )}
              <input
                required
                id="stripe-card-state"
                style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
                className={`${inputClassName} ${addInputClassName}`}
                placeholder={
                  showInputLabel ? stateSamplePlaceholder : statePlaceholder
                }
                type="text"
              />
            </div>

            <div style={horizontalInputSeparatorWidth} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "20%"
              }}
            >
              {showInputLabel ? (
                <label
                  style={{
                    ...inputLabelStyle,
                    ...addInputLabelStyle,
                    ...{ width: "100%" }
                  }}
                  className={`${inputLabelClassName} ${addInputLabelClassName}`}
                >
                  {zipLabel}
                </label>
              ) : (
                ""
              )}
              <input
                required
                id="stripe-card-zip"
                style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
                className={`${inputClassName} ${addInputClassName}`}
                placeholder={
                  showInputLabel ? zipSamplePlaceholder : zipPlaceholder
                }
                type="number"
              />
            </div>
          </div>

          <div style={verticalInputSeparatorHeight} />

          {showInputLabel ? (
            <label
              style={{
                ...inputLabelStyle,
                ...addInputLabelStyle,
                ...{ width: "100%" }
              }}
              className={`${inputLabelClassName} ${addInputLabelClassName}`}
            >
              {cardNumberLabel}
            </label>
          ) : (
            ""
          )}

          <div
            id="stripe-card-number"
            style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
            className={`${inputClassName} ${addInputClassName}`}
          >
            {/**/}
          </div>
          <div
            id="stripe-card-number-errors"
            role="alert"
            style={{ ...errorStyle, ...addErrorStyle }}
            className={`${errorClassName} ${addErrorClassName}`}
          >
            {/**/}
          </div>

          <div style={verticalInputSeparatorHeight} />

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%"
              }}
            >
              {showInputLabel ? (
                <label
                  style={{
                    ...inputLabelStyle,
                    ...addInputLabelStyle
                    // ...{ width: "100%" }
                  }}
                  className={`${inputLabelClassName} ${addInputLabelClassName}`}
                >
                  {cardExpiryLabel}
                </label>
              ) : (
                ""
              )}
              <div
                id="stripe-card-expiry"
                style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
                className={`${inputClassName} ${addInputClassName}`}
              >
                {/**/}
              </div>
              <div
                id="stripe-card-expiry-errors"
                role="alert"
                style={{ ...errorStyle, ...addErrorStyle }}
                className={`${errorClassName} ${addErrorClassName}`}
              >
                {/**/}
              </div>
            </div>

            <div style={horizontalInputSeparatorWidth} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%"
              }}
            >
              {showInputLabel ? (
                <label
                  style={{
                    ...inputLabelStyle,
                    ...addInputLabelStyle
                    // ...{ width: "100%" }
                  }}
                  className={`${inputLabelClassName} ${addInputLabelClassName}`}
                >
                  {cardCVCLabel}
                </label>
              ) : (
                ""
              )}
              <div
                id="stripe-card-cvc"
                style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
                className={`${inputClassName} ${addInputClassName}`}
              >
                {/**/}
              </div>
              <div
                id="stripe-card-cvc-errors"
                role="alert"
                style={{ ...errorStyle, ...addErrorStyle }}
                className={`${errorClassName} ${addErrorClassName}`}
              >
                {/**/}
              </div>
            </div>
          </div>

          <div
            id="card-errors"
            role="alert"
            style={{ ...errorStyle, ...addErrorStyle }}
            className={`${errorClassName} ${addErrorClassName}`}
          >
            {/*
              // Used to display Element errors.
            */}
          </div>

          <br />
        </div>
      );
    }

    if (formN === 3) {
      return (
        <div style={{ width: "100%" }}>
          <input
            required
            id="stripe-card-name"
            style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
            className={`${inputClassName} ${addInputClassName}`}
            placeholder={
              showInputLabel ? nameSamplePlaceholder : namePlaceholder
            }
            type="text"
          />

          <div style={verticalInputSeparatorHeight} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <input
              required
              id="stripe-card-email"
              style={{
                ...baseInputStyle,
                ...inputStyle,
                ...addInputStyle,
                ...{ width: "50%" }
              }}
              className={`${inputClassName} ${addInputClassName}`}
              placeholder={
                showInputLabel ? emailSamplePlaceholder : emailPlaceholder
              }
              type="email"
            />

            <div style={horizontalInputSeparatorWidth} />

            <input
              required
              id="stripe-card-phone"
              style={{
                ...baseInputStyle,
                ...inputStyle,
                ...addInputStyle,
                ...{ width: "50%" }
              }}
              className={`${inputClassName} ${addInputClassName}`}
              placeholder={
                showInputLabel ? phoneSamplePlaceholder : phonePlaceholder
              }
              type="number"
            />
          </div>

          <br />

          <div
            id="stripe-card-number"
            style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
            className={`${inputClassName} ${addInputClassName}`}
          >
            {/**/}
          </div>
          <div
            id="stripe-card-number-errors"
            role="alert"
            style={{ ...errorStyle, ...addErrorStyle }}
            className={`${errorClassName} ${addErrorClassName}`}
          >
            {/**/}
          </div>

          <div style={verticalInputSeparatorHeight} />

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%"
              }}
            >
              <div
                id="stripe-card-expiry"
                style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
                className={`${inputClassName} ${addInputClassName}`}
              >
                {/**/}
              </div>
              <div
                id="stripe-card-expiry-errors"
                role="alert"
                style={{ ...errorStyle, ...addErrorStyle }}
                className={`${errorClassName} ${addErrorClassName}`}
              >
                {/**/}
              </div>
            </div>

            <div style={horizontalInputSeparatorWidth} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%"
              }}
            >
              <div
                id="stripe-card-cvc"
                style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
                className={`${inputClassName} ${addInputClassName}`}
              >
                {/**/}
              </div>
              <div
                id="stripe-card-cvc-errors"
                role="alert"
                style={{ ...errorStyle, ...addErrorStyle }}
                className={`${errorClassName} ${addErrorClassName}`}
              >
                {/**/}
              </div>
            </div>
          </div>

          <div
            id="card-errors"
            role="alert"
            style={{ ...errorStyle, ...addErrorStyle }}
            className={`${errorClassName} ${addErrorClassName}`}
          >
            {/*
            // Used to display Element errors.
          */}
          </div>

          <br />
        </div>
      );
    }

    if (formN === 4) {
      return (
        <div style={{ width: "100%" }}>
          {showInputLabel ? (
            <label
              style={{
                ...inputLabelStyle,
                ...addInputLabelStyle
              }}
              className={`${inputLabelClassName} ${addInputLabelClassName}`}
            >
              {cardLabel}
            </label>
          ) : (
            ""
          )}
          <div
            id="card-element"
            style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
            className={`${inputClassName} ${addInputClassName}`}
          >
            {/*
              // A Stripe Element will be inserted here.
            */}
          </div>

          <div
            id="card-errors"
            role="alert"
            style={{ ...errorStyle, ...addErrorStyle }}
            className={`${errorClassName} ${addErrorClassName}`}
          >
            {/*
              // Used to display Element errors.
            */}
          </div>

          <div style={verticalInputSeparatorHeight} />
        </div>
      );
    }

    if (formN === 5) {
      return (
        <div style={{ width: "100%" }}>
          {showInputLabel ? (
            <label
              style={{
                ...inputLabelStyle,
                ...addInputLabelStyle
              }}
              className={`${inputLabelClassName} ${addInputLabelClassName}`}
            >
              {nameLabel}
            </label>
          ) : (
            ""
          )}
          <input
            required
            id="stripe-card-name"
            style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
            className={`${inputClassName} ${addInputClassName}`}
            placeholder={
              showInputLabel ? nameSamplePlaceholder : namePlaceholder
            }
            type="text"
          />

          <div style={verticalInputSeparatorHeight} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "50%"
              }}
            >
              {showInputLabel ? (
                <label
                  style={{
                    ...inputLabelStyle,
                    ...addInputLabelStyle
                  }}
                  className={`${inputLabelClassName} ${addInputLabelClassName}`}
                >
                  {emailLabel}
                </label>
              ) : (
                ""
              )}
              <input
                required
                id="stripe-card-email"
                style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
                className={`${inputClassName} ${addInputClassName}`}
                placeholder={
                  showInputLabel ? emailSamplePlaceholder : emailPlaceholder
                }
                type="email"
              />
            </div>

            <div style={horizontalInputSeparatorWidth} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "50%"
              }}
            >
              {showInputLabel ? (
                <label
                  style={{
                    ...inputLabelStyle,
                    ...addInputLabelStyle
                  }}
                  className={`${inputLabelClassName} ${addInputLabelClassName}`}
                >
                  {phoneLabel}
                </label>
              ) : (
                ""
              )}
              <input
                required
                id="stripe-card-phone"
                style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
                className={`${inputClassName} ${addInputClassName}`}
                placeholder={
                  showInputLabel ? phoneSamplePlaceholder : phonePlaceholder
                }
                type="number"
              />
            </div>
          </div>

          <div style={verticalInputSeparatorHeight} />

          {showInputLabel ? (
            <label
              style={{
                ...inputLabelStyle,
                ...addInputLabelStyle
              }}
              className={`${inputLabelClassName} ${addInputLabelClassName}`}
            >
              {addressLabel}
            </label>
          ) : (
            ""
          )}
          <input
            required
            id="stripe-card-address"
            style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
            className={`${inputClassName} ${addInputClassName}`}
            placeholder={
              showInputLabel ? addressSamplePlaceholder : addressPlaceholder
            }
            type="text"
          />

          <div style={verticalInputSeparatorHeight} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "33.33%"
              }}
            >
              {showInputLabel ? (
                <label
                  style={{
                    ...inputLabelStyle,
                    ...addInputLabelStyle
                  }}
                  className={`${inputLabelClassName} ${addInputLabelClassName}`}
                >
                  {cityLabel}
                </label>
              ) : (
                ""
              )}
              <input
                required
                id="stripe-card-city"
                style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
                className={`${inputClassName} ${addInputClassName}`}
                placeholder={
                  showInputLabel ? citySamplePlaceholder : cityPlaceholder
                }
                type="text"
              />
            </div>

            <div style={horizontalInputSeparatorWidth} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "33.33%"
              }}
            >
              {showInputLabel ? (
                <label
                  style={{
                    ...inputLabelStyle,
                    ...addInputLabelStyle
                  }}
                  className={`${inputLabelClassName} ${addInputLabelClassName}`}
                >
                  {stateLabel}
                </label>
              ) : (
                ""
              )}
              <input
                required
                id="stripe-card-state"
                style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
                className={`${inputClassName} ${addInputClassName}`}
                placeholder={
                  showInputLabel ? stateSamplePlaceholder : statePlaceholder
                }
                type="text"
              />
            </div>

            <div style={horizontalInputSeparatorWidth} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "33.33%"
              }}
            >
              {showInputLabel ? (
                <label
                  style={{
                    ...inputLabelStyle,
                    ...addInputLabelStyle
                  }}
                  className={`${inputLabelClassName} ${addInputLabelClassName}`}
                >
                  {zipLabel}
                </label>
              ) : (
                ""
              )}
              <input
                required
                id="stripe-card-zip"
                style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
                className={`${inputClassName} ${addInputClassName}`}
                placeholder={
                  showInputLabel ? zipSamplePlaceholder : zipPlaceholder
                }
                type="number"
              />
            </div>
          </div>

          <div style={verticalInputSeparatorHeight} />

          {showInputLabel ? (
            <label
              style={{
                ...inputLabelStyle,
                ...addInputLabelStyle
              }}
              className={`${inputLabelClassName} ${addInputLabelClassName}`}
            >
              {cardLabel}
            </label>
          ) : (
            ""
          )}
          <div
            id="card-element"
            style={{ ...baseInputStyle, ...inputStyle, ...addInputStyle }}
            className={`${inputClassName} ${addInputClassName}`}
          >
            {/*
              // A Stripe Element will be inserted here.
            */}
          </div>

          <div
            id="card-errors"
            role="alert"
            style={{ ...errorStyle, ...addErrorStyle }}
            className={`${errorClassName} ${addErrorClassName}`}
          >
            {/*
              // Used to display Element errors.
            */}
          </div>

          <br />
        </div>
      );
    }
  };

  return (
    <form
      action="/charge"
      method="post"
      id="payment-form"
      style={{ ...formStyle, ...addFormStyle }}
      className={`${formClassName} ${addFormClassName}`}
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
          ...submitButtonStyle,
          ...addSubmitButtonStyle
        }}
        className={`${submitButtonClassName} ${addSubmitButtonClassName}`}
      >
        {renderSubmitButtonText()}
      </button>
      {renderFootnote()}
    </form>
  );
};

// const {
//   formStyle,
//   titleStyle,
//   subtitleStyle,
//   inputStyle,
//   errorStyle,
//   submitButtonStyle,
//   footnoteStyle,
//   //
//   titleText,
//   subtitleText,
//   submitText,
//   footnoteText
// } = props;

Form.defaultProps = {
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  //
  formN: 1,
  inputStyleN: 4,
  submitButtonStyleN: 1,
  //
  showInputLabel: false,
  //
  formStyle: styleObjects.formStyle,
  titleStyle: styleObjects.titleStyle,
  subtitleStyle: styleObjects.subtitleStyle,
  inputLabelStyle: styleObjects.inputLabelStyle,
  inputStyle: styleObjects.inputStyle,
  invalidInputStyle: styleObjects.invalidInputStyle,
  placeholderStyle: styleObjects.placeholderStyle,
  errorStyle: styleObjects.errorStyle,
  submitButtonStyle: styleObjects.submitButtonStyle,
  footnoteStyle: styleObjects.footnoteStyle,
  //
  addFormStyle: {},
  addTitleStyle: {},
  addSubtitleStyle: {},
  addInputLabelStyle: {},
  addInputStyle: {},
  addInvalidInputStyle: {},
  addPlaceholderStyle: {},
  addErrorStyle: {},
  addSubmitButtonStyle: {},
  addFootnoteStyle: {},
  //
  formClassName: styleObjects.formClassName,
  titleClassName: styleObjects.titleClassName,
  subtitleClassName: styleObjects.subtitleClassName,
  inputLabelClassName: styleObjects.inputLabelClassName,
  inputClassName: styleObjects.inputClassName,
  invalidInputClassName: styleObjects.invalidInputClassName,
  placeholderClassName: styleObjects.placeholderClassName,
  errorClassName: styleObjects.errorClassName,
  submitButtonClassName: styleObjects.submitButtonClassName,
  footnoteClassName: styleObjects.footnoteClassName,
  //
  addFormClassName: "",
  addTitleClassName: "",
  addSubtitleClassName: "",
  addInputLabelClassName: "",
  addInputClassName: "",
  addInvalidInputClassName: "",
  addPlaceholderClassName: "",
  addErrorClassName: "",
  addSubmitButtonClassName: "",
  addFootnoteClassName: "",
  //
  titleText: "Enter your card details",
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
  zipSamplePlaceholder: "94107",
  //
  verticalInputSeparatorHeight: styleObjects.verticalInputSeparatorHeight,
  horizontalInputSeparatorWidth: styleObjects.horizontalInputSeparatorWidth,
  hrStyle: styleObjects.hrStyle
};

export default Form;
