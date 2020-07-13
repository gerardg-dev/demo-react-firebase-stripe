import React from "react";

const Form4 = props => {
  const { style, addStyle, className, addClassName } = props;
  const { baseInputStyle, showInputLabel } = props;
  const { cardLabel } = props;

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

      <div
        style={{
          ...style.verticalInputSeparatorHeight,
          ...addStyle.verticalInputSeparatorHeight
        }}
        className={`${className.verticalInputSeparatorHeight} ${addClassName.verticalInputSeparatorHeight}`}
      />
    </div>
  );
};

export default Form4;
