import React, { Component } from "react";

import { intlShape, FormattedMessage } from "react-intl";
import { defineMessages, injectIntl } from "react-intl"; // https://github.com/formatjs/react-intl/issues/1051
import IntlMessages from "util/IntlMessages";

import renderErrorLabels from "./renderErrorLabels";

import getStyles from "../getStyles";

class MyRadioControl extends React.Component {
  renderInputs = (
    checkedValues,
    elementObj,
    radioExternalComponent1,
    radioExternalComponent2,
    onClick,
    stateStyles,
    propsStyles
  ) => {
    if (elementObj === undefined) return;
    if (elementObj && elementObj.inputs === undefined) return;
    if (elementObj.inputs.length < 1) return;

    return elementObj.inputs.map((input, index) => {
      let radioStyles = getStyles(
        "radio",
        input.style,
        input.addStyle,
        input.className,
        input.addClassName,
        stateStyles,
        propsStyles
      );
      let radioLabelStyles = getStyles(
        "radioLabel",
        input.label.style,
        input.label.addStyle,
        input.label.className,
        input.label.addClassName,
        stateStyles,
        propsStyles
      );
      let radioSpan1Styles = getStyles(
        "radioSpan1",
        input.radioSpan1.style,
        input.radioSpan1.addStyle,
        input.radioSpan1.className,
        input.radioSpan1.addClassName,
        stateStyles,
        propsStyles
      );
      let radioSpan2Styles = getStyles(
        "radioSpan2",
        input.radioSpan2.style,
        input.radioSpan2.addStyle,
        input.radioSpan2.className,
        input.radioSpan2.addClassName,
        stateStyles,
        propsStyles
      );

      const { element, id, name, value, text, checked, disabled } = input;
      const { useIntlMsgID, intlMsgID } = input;

      let isChecked = false;
      if (checkedValues !== undefined && checkedValues.length > 0) {
        const isValueChecked = checkedValues.includes(value);
        isChecked = isValueChecked ? true : false;
      }

      let inputName = elementObj.name;

      return (
        <label
          key={index}
          style={{ ...radioLabelStyles.style, ...radioLabelStyles.addStyle }}
          className={`radio ${radioLabelStyles.className} ${radioLabelStyles.addClassName}`}
        >
          <span
            style={{ ...radioSpan1Styles.style, ...radioSpan1Styles.addStyle }}
            className={`${radioSpan1Styles.className} ${radioSpan1Styles.addClassName}`}
          />
          {radioExternalComponent1 !== null && (
            <div>{radioExternalComponent1}</div>
          )}
          <input
            type="radio"
            id={id}
            name={inputName}
            value={value}
            checked={isChecked}
            disabled={disabled}
            onClick={onClick}
            // onChange={onChange}
            style={{ ...radioStyles.style, ...radioStyles.addStyle }}
            className={`${radioStyles.className} ${radioStyles.addClassName}`}
          />
          {useIntlMsgID === true
            ? this.props.intl.formatMessage(defineMessages({ id: intlMsgID }))
            : text}
          {radioExternalComponent2 !== null && (
            <div>{radioExternalComponent2}</div>
          )}
          <span
            style={{ ...radioSpan2Styles.style, ...radioSpan2Styles.addStyle }}
            className={`${radioSpan2Styles.className} ${radioSpan2Styles.addClassName}`}
          />
        </label>
      );
    });
  };

  render() {
    const {
      isFormSubmitted,
      inputValues,
      checkedValues,
      elementObj,
      stateStyles,
      propsStyles,
      radioExternalComponent1,
      radioExternalComponent2,
      onClick
    } = this.props;

    let radioControlContainerStyles = getStyles(
      "radioControlContainer",
      elementObj.container.style,
      elementObj.container.addStyle,
      elementObj.container.className,
      elementObj.container.addClassName,
      stateStyles,
      propsStyles
    );
    let radioControlStyles = getStyles(
      "radioControl",
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

    const { id, name, multiple, validationRules } = elementObj;

    return (
      <div
        style={{
          ...radioControlContainerStyles.style,
          ...radioControlContainerStyles.addStyle
        }}
        className={`${radioControlContainerStyles.className} ${radioControlContainerStyles.addClassName}`}
      >
        <div
          id={id}
          // class="control"
          style={{
            ...radioControlStyles.style,
            ...radioControlStyles.addStyle
          }}
          className={`control ${radioControlStyles.className} ${radioControlStyles.addClassName}`}
        >
          {this.renderInputs(
            checkedValues,
            elementObj,
            radioExternalComponent1,
            radioExternalComponent2,
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

export default injectIntl(MyRadioControl);
