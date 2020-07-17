import React from "react";

const Form3 = props => {
  const { style, addStyle, className, addClassName } = props;
  const { baseInputStyle, showInputLabel } = props;
  const {
    nameLabel,
    emailLabel,
    phoneLabel,
    cardLabel,
    cardNumberLabel,
    cardExpiryLabel,
    cardCVCLabel,
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        {showInputLabel ? (
          <label
            style={{
              ...style.inputLabel,
              ...{ width: "100%" },
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

      <div
        style={{
          ...style.verticalInputSeparatorHeight,
          ...addStyle.verticalInputSeparatorHeight
        }}
        className={`${className.verticalInputSeparatorHeight} ${addClassName.verticalInputSeparatorHeight}`}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {showInputLabel ? (
            <label
              style={{
                ...style.inputLabel,
                ...{ width: "100%" },
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
            style={{
              ...baseInputStyle,
              ...style.input,
              ...{ width: "100%" },
              ...addStyle.input
            }}
            className={`${className.input} ${addClassName.input}`}
            placeholder={
              showInputLabel ? emailSamplePlaceholder : emailPlaceholder
            }
            type="email"
          />
        </div>

        <div
          style={{
            ...style.horizontalInputSeparatorWidth,
            ...addStyle.horizontalInputSeparatorWidth
          }}
          className={`${className.horizontalInputSeparatorWidth} ${addClassName.horizontalInputSeparatorWidth}`}
        />

        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {showInputLabel ? (
            <label
              style={{
                ...style.inputLabel,
                ...{ width: "100%" },
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
            style={{
              ...baseInputStyle,
              ...style.input,
              ...{ width: "100%" },
              ...addStyle.input
            }}
            className={`${className.input} ${addClassName.input}`}
            placeholder={
              showInputLabel ? phoneSamplePlaceholder : phonePlaceholder
            }
            type="number"
          />
        </div>
      </div>

      <br />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {showInputLabel ? (
          <label
            style={{
              ...style.inputLabel,
              ...{ width: "100%" },
              ...addStyle.inputLabel
            }}
            className={`${className.inputLabel} ${addClassName.inputLabel}`}
          >
            {cardNumberLabel}
          </label>
        ) : (
          ""
        )}
        <div
          id="stripe-card-number"
          style={{ ...baseInputStyle, ...style.input, ...addStyle.input }}
          className={`${className.input} ${addClassName.input}`}
        >
          {/**/}
        </div>
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
        style={{
          ...style.verticalInputSeparatorHeight,
          ...addStyle.verticalInputSeparatorHeight
        }}
        className={`${className.verticalInputSeparatorHeight} ${addClassName.verticalInputSeparatorHeight}`}
      />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {showInputLabel ? (
              <label
                style={{
                  ...style.inputLabel,
                  ...{ width: "100%" },
                  ...addStyle.inputLabel
                }}
                className={`${className.inputLabel} ${addClassName.inputLabel}`}
              >
                {cardExpiryLabel}
              </label>
            ) : (
              ""
            )}
            <div
              id="stripe-card-expiry"
              style={{ ...baseInputStyle, ...style.input, ...addStyle.input }}
              className={`${className.input} ${addClassName.input}`}
            >
              {/**/}
            </div>
          </div>
          <div
            id="stripe-card-expiry-errors"
            role="alert"
            style={{ ...style.error, ...addStyle.error }}
            className={`${className.error} ${addClassName.error}`}
          >
            {/**/}
          </div>
        </div>

        <div
          style={{
            ...style.horizontalInputSeparatorWidth,
            ...addStyle.horizontalInputSeparatorWidth
          }}
          className={`${className.horizontalInputSeparatorWidth} ${addClassName.horizontalInputSeparatorWidth}`}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {showInputLabel ? (
              <label
                style={{
                  ...style.inputLabel,
                  ...{ width: "100%" },
                  ...addStyle.inputLabel
                }}
                className={`${className.inputLabel} ${addClassName.inputLabel}`}
              >
                {cardCVCLabel}
              </label>
            ) : (
              ""
            )}
            <div
              id="stripe-card-cvc"
              style={{ ...baseInputStyle, ...style.input, ...addStyle.input }}
              className={`${className.input} ${addClassName.input}`}
            >
              {/**/}
            </div>
          </div>
          <div
            id="stripe-card-cvc-errors"
            role="alert"
            style={{ ...style.error, ...addStyle.error }}
            className={`${className.error} ${addClassName.error}`}
          >
            {/**/}
          </div>
        </div>
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

export default Form3;
