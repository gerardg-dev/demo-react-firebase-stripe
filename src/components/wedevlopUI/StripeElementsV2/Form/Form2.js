import React from "react";

const Form2 = props => {
  const { style, addStyle, className, addClassName } = props;
  const { baseInputStyle, showInputLabel } = props;
  const {
    addressLabel,
    cityLabel,
    stateLabel,
    zipLabel,
    //
    cardNumberLabel,
    cardExpiryLabel,
    cardCVCLabel,
    //
    addressPlaceholder,
    cityPlaceholder,
    statePlaceholder,
    zipPlaceholder,
    //
    addressSamplePlaceholder,
    citySamplePlaceholder,
    stateSamplePlaceholder,
    zipSamplePlaceholder
  } = props;

  return (
    <div style={{ width: "100%" }}>
      <div stlye={{ display: "flex", flexDirection: "column" }}>
        {showInputLabel ? (
          <label
            style={{
              ...style.inputLabel,
              ...{ width: "100%" },
              ...addStyle.inputLabel
            }}
            className={`${className.inputLabel} ${addClassName.inputLabel}`}
          >
            {addressLabel}
          </label>
        ) : (
          ""
        )}
        <input
          required
          id="stripe-card-address"
          style={{ ...baseInputStyle, ...style.input, ...addStyle.input }}
          className={`${className.input} ${addClassName.input}`}
          placeholder={
            showInputLabel ? addressSamplePlaceholder : addressPlaceholder
          }
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
                ...style.inputLabel,
                ...{ width: "100%" },
                ...addStyle.inputLabel
              }}
              className={`${className.inputLabel} ${addClassName.inputLabel}`}
            >
              {cityLabel}
            </label>
          ) : (
            ""
          )}
          <input
            required
            id="stripe-card-city"
            style={{ ...baseInputStyle, ...style.input, ...addStyle.input }}
            className={`${className.input} ${addClassName.input}`}
            placeholder={
              showInputLabel ? citySamplePlaceholder : cityPlaceholder
            }
            type="text"
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
                ...style.inputLabel,
                ...{ width: "100%" },
                ...addStyle.inputLabel
              }}
              className={`${className.inputLabel} ${addClassName.inputLabel}`}
            >
              {stateLabel}
            </label>
          ) : (
            ""
          )}
          <input
            required
            id="stripe-card-state"
            style={{ ...baseInputStyle, ...style.input, ...addStyle.input }}
            className={`${className.input} ${addClassName.input}`}
            placeholder={
              showInputLabel ? stateSamplePlaceholder : statePlaceholder
            }
            type="text"
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
                ...style.inputLabel,
                ...{ width: "100%" },
                ...addStyle.inputLabel
              }}
              className={`${className.inputLabel} ${addClassName.inputLabel}`}
            >
              {zipLabel}
            </label>
          ) : (
            ""
          )}
          <input
            required
            id="stripe-card-zip"
            style={{ ...baseInputStyle, ...style.input, ...addStyle.input }}
            className={`${className.input} ${addClassName.input}`}
            placeholder={showInputLabel ? zipSamplePlaceholder : zipPlaceholder}
            type="number"
          />
        </div>
      </div>

      <div
        style={{
          ...style.verticalInputSeparatorHeight,
          ...addStyle.verticalInputSeparatorHeight
        }}
        className={`${className.verticalInputSeparatorHeight} ${addClassName.verticalInputSeparatorHeight}`}
      />

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
          {showInputLabel ? (
            <label
              style={{
                ...style.inputLabel,
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
          {showInputLabel ? (
            <label
              style={{
                ...style.inputLabel,
                // ...{ width: "100%" },
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

export default Form2;
