import React from "react";

const Form5 = props => {
  const { style, addStyle, className, addClassName } = props;
  const { baseInputStyle, showInputLabel } = props;
  const {
    nameLabel,
    emailLabel,
    phoneLabel,
    addressLabel,
    cityLabel,
    stateLabel,
    zipLabel,
    //
    cardLabel,
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

  return (
    <div style={{ width: "100%" }}>
      {showInputLabel ? (
        <label
          style={{
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
            width: "33.33%"
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
            width: "33.33%"
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
            width: "33.33%"
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
            ...style.inputLabe,
            ...addStyle.inputLabel
          }}
          className={`${className.inputLabel} ${addClassName.inputLabel}`}
        >
          {cardLabel}
        </label>
      ) : (
        ""
      )}
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

export default Form5;
