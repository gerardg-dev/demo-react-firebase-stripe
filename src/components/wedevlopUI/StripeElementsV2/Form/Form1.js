import React from "react";

const Form1 = props => {
  const { style, addStyle, className, addClassName } = props;
  const { baseInputStyle, showInputLabel } = props;
  const {
    nameLabel,
    emailLabel,
    phoneLabel,
    //
    namePlaceholder,
    emailPlaceholder,
    phonePlaceholder,
    //
    nameSamplePlaceholder,
    emailSamplePlaceholder,
    phoneSamplePlaceholder
  } = props;

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
              ...style.inputLabel,
              ...addStyle.inputLabel
            }}
            className={`${className.inputLabel} ${addClassName.inputLabel}`}
          >
            {nameLabel}
          </label>
        ) : (
          ""
        )}
        <input
          required
          id="stripe-card-name"
          style={{ ...baseInputStyle, ...style.input, ...addStyle.input }}
          className={`${className.input} ${addClassName.input}`}
          placeholder={showInputLabel ? nameSamplePlaceholder : namePlaceholder}
          type="text"
        />
      </div>

      <hr
        style={{ ...style.hr, ...addStyle.hr }}
        className={{ ...className.hr, ...addClassName.hr }}
      />

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
              ...style.inputLabel,
              ...addStyle.inputLabel
            }}
            className={`${className.inputLabel} ${addClassName.inputLabel}`}
          >
            {emailLabel}
          </label>
        ) : (
          ""
        )}
        <input
          required
          id="stripe-card-email"
          style={{ ...baseInputStyle, ...style.input, ...addStyle.input }}
          className={`${className.input} ${addClassName.input}`}
          placeholder={
            showInputLabel ? emailSamplePlaceholder : emailPlaceholder
          }
          type="email"
        />
      </div>

      <hr
        style={{ ...style.hr, ...addStyle.hr }}
        className={{ ...className.hr, ...addClassName.hr }}
      />

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
              ...style.inputLabel,
              ...addStyle.inputLabel
            }}
            className={`${className.inputLabel} ${addClassName.inputLabel}`}
          >
            {phoneLabel}
          </label>
        ) : (
          ""
        )}
        <input
          required
          id="stripe-card-phone"
          style={{ ...baseInputStyle, ...style.input, ...addStyle.input }}
          className={`${className.input} ${addClassName.input}`}
          placeholder={
            showInputLabel ? phoneSamplePlaceholder : phonePlaceholder
          }
          type="number"
        />
      </div>

      <br />

      <div
        id="card-element"
        style={{ ...baseInputStyle, ...style.input, ...addStyle.input }}
        className={`${className.input} ${addClassName.input}`}
      >
        {/*
					// A Stripe Element will be inserted here.
				*/}
      </div>

      <div
        id="card-errors"
        role="alert"
        style={{ ...style.error, ...addStyle.error }}
        className={`${className.error} ${addClassName.error}`}
      >
        {/*
					// Used to display Element errors.
				*/}
      </div>

      <br />
    </div>
  );
};

export default Form1;
