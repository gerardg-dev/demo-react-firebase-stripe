import React, { Component } from "react";

import { intlShape, FormattedMessage } from "react-intl";
import { defineMessages, injectIntl } from "react-intl"; // https://github.com/formatjs/react-intl/issues/1051
import IntlMessages from "util/IntlMessages";

import renderErrorLabels from "./renderErrorLabels";

import getStyles from "../getStyles";

class MyInput extends React.Component {
  renderInputLabel = (elementObj, labelStyles) => {
    return (
      <label
        style={{ ...labelStyles.style, ...labelStyles.addStyle }}
        className={`${labelStyles.className} ${labelStyles.addClassName}`}
        // className={labelStyles.addClassName}
      >
        {elementObj.label.useIntlMsgID === true ? (
          <IntlMessages id={elementObj.label.intlMsgID} />
        ) : (
          elementObj.label.text
        )}
      </label>
    );
  };

  render() {
    const {
      isFormSubmitted,
      inputValues,
      value,
      elementObj,
      stateStyles,
      propsStyles,
      inputExternalComponent1,
      inputExternalComponent2,
      onChange
    } = this.props;

    let inputContainerStyles = getStyles(
      "inputContainer",
      elementObj.container.style,
      elementObj.container.addStyle,
      elementObj.container.className,
      elementObj.container.addClassName,
      stateStyles,
      propsStyles
    );
    let inputStyles = getStyles(
      "input",
      elementObj.style,
      elementObj.addStyle,
      elementObj.className,
      elementObj.addClassName,
      stateStyles,
      propsStyles
    );
    let labelStyles = getStyles(
      "inputLabel",
      elementObj.label.style,
      elementObj.label.addStyle,
      elementObj.label.className,
      elementObj.label.addClassName,
      stateStyles,
      propsStyles
    );
    let inputSpan1Styles = getStyles(
      "inputSpan1",
      elementObj.inputSpan1.style,
      elementObj.inputSpan1.addStyle,
      elementObj.inputSpan1.className,
      elementObj.inputSpan1.addClassName,
      stateStyles,
      propsStyles
    );
    let inputSpan2Styles = getStyles(
      "inputSpan2",
      elementObj.inputSpan2.style,
      elementObj.inputSpan2.addStyle,
      elementObj.inputSpan2.className,
      elementObj.inputSpan2.addClassName,
      stateStyles,
      propsStyles
    );
    let errorLabelsContainerStyles = getStyles(
      "errorLabelsContainer",
      elementObj.errorLabelsContainer.style,
      elementObj.errorLabelsContainer.addStyle,
      elementObj.errorLabelsContainer.className,
      elementObj.errorLabelsContainer.addClassName,
      stateStyles,
      propsStyles
    );
    let errorLabelStyles = getStyles(
      "errorLabel",
      elementObj.errorLabel.style,
      elementObj.errorLabel.addStyle,
      elementObj.errorLabel.className,
      elementObj.errorLabel.addClassName,
      stateStyles,
      propsStyles
    );

    const { element, initValue } = elementObj;
    const { id, name, type, autoComplete, maxLength } = elementObj;
    const { validationRules } = elementObj;

    return (
      <div
        style={{
          ...inputContainerStyles.style,
          ...inputContainerStyles.addStyle
        }}
        className={`${inputContainerStyles.className} ${inputContainerStyles.addClassName}`}
      >
        {elementObj.label.show === true &&
          elementObj.label.position === "top" &&
          this.renderInputLabel(elementObj, labelStyles)}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <span
            style={{ ...inputSpan1Styles.style, ...inputSpan1Styles.addStyle }}
            className={`${inputSpan1Styles.className} ${inputSpan1Styles.addClassName}`}
          />
          {inputExternalComponent1 !== null && (
            <div>{inputExternalComponent1}</div>
          )}
          {elementObj.label.show === true &&
            elementObj.label.position === "left" &&
            this.renderInputLabel(elementObj, labelStyles)}
          <FormattedMessage
            id={elementObj.placeholder.intlMsgID}
            defaultMessage=""
          >
            {placeholder => (
              <input
                name={name}
                type={type}
                label={
                  elementObj.label.useIntlMsgID === true
                    ? this.props.intl.formatMessage(
                        defineMessages({ id: elementObj.label.intlMsgID })
                      )
                    : elementObj.label.text
                }
                placeholder={
                  elementObj.placeholder.useIntlMsgID === true
                    ? placeholder
                    : elementObj.placeholder.text
                }
                onChange={onChange}
                value={value}
                maxLength={maxLength}
                style={{ ...inputStyles.style, ...inputStyles.addStyle }}
                className={`${inputStyles.className} ${inputStyles.addClassName}`}
                autoComplete={autoComplete}
              />
            )}
          </FormattedMessage>
          {elementObj.label.show === true &&
            elementObj.label.position === "right" &&
            this.renderInputLabel(elementObj, labelStyles)}
          {inputExternalComponent2 !== null && (
            <div>{inputExternalComponent2}</div>
          )}
          <span
            style={{ ...inputSpan2Styles.style, ...inputSpan2Styles.addStyle }}
            className={`${inputSpan2Styles.className} ${inputSpan2Styles.addClassName}`}
          />
        </div>
        {elementObj.label.show === true &&
          elementObj.label.position === "bottom" &&
          this.renderInputLabel(elementObj, labelStyles)}
        {isFormSubmitted === true && validationRules.length > 0 && (
          <div
            style={{
              ...errorLabelsContainerStyles.style,
              ...errorLabelsContainerStyles.addStyle
            }}
            className={`${errorLabelsContainerStyles.className} ${errorLabelsContainerStyles.addClassName}`}
          >
            {renderErrorLabels(
              isFormSubmitted,
              inputValues,
              name,
              validationRules,
              errorLabelStyles
            )}
          </div>
        )}
      </div>
    );
  }
}

export default injectIntl(MyInput);
