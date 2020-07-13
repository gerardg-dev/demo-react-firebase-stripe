import React, { Component } from "react";

import { intlShape, FormattedMessage } from "react-intl";
import { defineMessages, injectIntl } from "react-intl"; // https://github.com/formatjs/react-intl/issues/1051
import IntlMessages from "util/IntlMessages";

import renderErrorLabels from "./renderErrorLabels";

import getStyles from "../getStyles";

class MyCheckboxControl extends React.Component {
  renderInputs = (
    checkedValues,
    elementObj,
    checkboxExternalComponent1,
    checkboxExternalComponent2,
    onClick,
    stateStyles,
    propsStyles
  ) => {
    if (
      elementObj !== undefined &&
      elementObj.inputs !== undefined &&
      elementObj.inputs.length > 0
    ) {
      return elementObj.inputs.map((input, index) => {
        let checkboxStyles = getStyles(
          "checkbox",
          input.style,
          input.addStyle,
          input.className,
          input.addClassName,
          stateStyles,
          propsStyles
        );
        let checkboxLabelStyles = getStyles(
          "checkboxLabel",
          input.label.style,
          input.label.addStyle,
          input.label.className,
          input.label.addClassName,
          stateStyles,
          propsStyles
        );
        let checkboxSpan1Styles = getStyles(
          "checkboxSpan1",
          input.checkboxSpan1.style,
          input.checkboxSpan1.addStyle,
          input.checkboxSpan1.className,
          input.checkboxSpan1.addClassName,
          stateStyles,
          propsStyles
        );
        let checkboxSpan2Styles = getStyles(
          "checkboxSpan2",
          input.checkboxSpan2.style,
          input.checkboxSpan2.addStyle,
          input.checkboxSpan2.className,
          input.checkboxSpan2.addClassName,
          stateStyles,
          propsStyles
        );

        const { element, id, name, value, text, disabled } = input;
        const { useIntlMsgID, intlMsgID } = input;

        let isChecked = false;
        if (checkedValues !== undefined && checkedValues.length > 0) {
          const isValueChecked = checkedValues.includes(value);
          isChecked = isValueChecked ? true : false;
        }

        return (
          <label
            key={index}
            style={{
              ...checkboxLabelStyles.style,
              ...checkboxLabelStyles.addStyle
            }}
            className={`checkbox ${checkboxLabelStyles.className} ${checkboxLabelStyles.addClassName}`}
          >
            <span
              style={{
                ...checkboxSpan1Styles.style,
                ...checkboxSpan1Styles.addStyle
              }}
              className={`${checkboxSpan1Styles.className} ${checkboxSpan1Styles.addClassName}`}
            />
            {checkboxExternalComponent1 !== null && (
              <div>{checkboxExternalComponent1}</div>
            )}
            <input
              type="checkbox"
              id={id}
              name={name}
              value={value}
              checked={isChecked}
              disabled={disabled}
              onClick={onClick}
              // onChange={onChange}
              style={{ ...checkboxStyles.style, ...checkboxStyles.addStyle }}
              className={`${checkboxStyles.className} ${checkboxStyles.addClassName}`}
            />
            {useIntlMsgID === true
              ? this.props.intl.formatMessage(defineMessages({ id: intlMsgID }))
              : text}
            {checkboxExternalComponent2 !== null && (
              <div>{checkboxExternalComponent2}</div>
            )}
            <span
              style={{
                ...checkboxSpan2Styles.style,
                ...checkboxSpan2Styles.addStyle
              }}
              className={`${checkboxSpan2Styles.className} ${checkboxSpan2Styles.addClassName}`}
            />
          </label>
        );
      });
    }
  };

  render() {
    const {
      isFormSubmitted,
      inputValues,
      checkedValues,
      elementObj,
      stateStyles,
      propsStyles,
      checkboxExternalComponent1,
      checkboxExternalComponent2,
      onClick
    } = this.props;

    let checkboxControlContainerStyles = getStyles(
      "checkboxControlContainer",
      elementObj.container.style,
      elementObj.container.addStyle,
      elementObj.container.className,
      elementObj.container.addClassName,
      stateStyles,
      propsStyles
    );
    let checkboxControlStyles = getStyles(
      "checkboxControl",
      elementObj.style,
      elementObj.addStyle,
      elementObj.className,
      elementObj.addClassName,
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

    const { id, name, orientation, validationRules } = elementObj;
    return (
      <div
        style={{
          ...checkboxControlContainerStyles.style,
          ...checkboxControlContainerStyles.addStyle
        }}
        className={`${checkboxControlContainerStyles.className} ${checkboxControlContainerStyles.addClassName}`}
      >
        <div
          // class="control"
          style={{
            ...checkboxControlStyles.style,
            ...checkboxControlStyles.addStyle
          }}
          className={`control ${checkboxControlStyles.className} ${checkboxControlStyles.addClassName}`}
        >
          {this.renderInputs(
            checkedValues,
            elementObj,
            checkboxExternalComponent1,
            checkboxExternalComponent2,
            onClick,
            stateStyles,
            propsStyles
          )}
        </div>
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
      </div>
    );
  }
}

export default injectIntl(MyCheckboxControl);
