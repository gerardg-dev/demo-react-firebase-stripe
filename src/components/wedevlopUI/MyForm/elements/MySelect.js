import React, { Component } from "react";

import { intlShape, FormattedMessage } from "react-intl";
import { defineMessages, injectIntl } from "react-intl"; // https://github.com/formatjs/react-intl/issues/1051
import IntlMessages from "util/IntlMessages";

import renderErrorLabels from "./renderErrorLabels";

import getStyles from "../getStyles";

class MySelect extends React.Component {
	renderOptions = (
		elementObj,
		multiple,
		selectedValues,
		stateStyles,
		propsStyles
	) => {
    if (
      elementObj !== undefined &&
      elementObj.options !== undefined &&
      elementObj.options.length > 0
    ) {
      return elementObj.options.map((option, index) => {
				let optionStyles = getStyles(
					"option",
					option.style,
					option.addStyle,
					option.className,
					option.addClassName,
					stateStyles,
					propsStyles
				);

        const { element, id, name, value, text, selected, disabled } = option;
				const { useIntlMsgID, intlMsgID } = option;

				let isSelected = false;
				// let isDisabled = false;
				if (selectedValues !== undefined && selectedValues.length > 0) {
					const isValueSelected = selectedValues.includes(value);
					isSelected = isValueSelected ? true : false;
					// isDisabled = isValueSelected ? true : false;
				}

				return (
					<option
						key={index}
						id={id}
						name={name}
						value={value}
						selected={isSelected}
						disabled={disabled}
						style={{ ...optionStyles.style, ...optionStyles.addStyle }}
						className={`${optionStyles.className} ${optionStyles.addClassName}`}
					>
						{useIntlMsgID === true
							? this.props.intl.formatMessage(defineMessages({ id: intlMsgID }))
							: text}
					</option>
				);
      });
    }
  }

	render() {
		const {
			isFormSubmitted,
			inputValues,
			selectedValues,
			elementObj,
			stateStyles,
			propsStyles,
			selectExternalComponent1,
			selectExternalComponent2,
			onChange
		} = this.props;

		let selectContainerStyles = getStyles(
			"selectContainer",
			elementObj.container.style,
			elementObj.container.addStyle,
			elementObj.container.className,
			elementObj.container.addClassName,
			stateStyles,
			propsStyles
		);
		let selectStyles = getStyles(
			"select",
			elementObj.style,
			elementObj.addStyle,
			elementObj.className,
			elementObj.addClassName,
			stateStyles,
			propsStyles
		);
		let introOptionStyles = getStyles(
			"introOption",
			elementObj.introOption.style,
			elementObj.introOption.addStyle,
			elementObj.introOption.className,
			elementObj.introOption.addClassName,
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
		const { showIntroOption, introOption } = elementObj;
		const { text, useIntlMsgID, intlMsgID } = introOption;
		const { intl } = this.props;

    return (
      <div
				style={{ ...selectContainerStyles.style, ...selectContainerStyles.addStyle }}
				className={`${selectContainerStyles.className} ${selectContainerStyles.addClassName}`}
			>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {selectExternalComponent1 !== null && (
            <div>
              {selectExternalComponent1}
            </div>
          )}
          <select
            id={id}
            name={name}
						// multiple
						onChange={onChange}
						style={{ ...selectStyles.style, ...selectStyles.addStyle }}
						className={`${selectStyles.className} ${selectStyles.addClassName}`}
          >
            {showIntroOption === true && (
              <option
								value=""
								disabled
								selected
								style={{ ...introOptionStyles.style, ...introOptionStyles.addStyle }}
								className={`${introOptionStyles.className} ${introOptionStyles.addClassName}`}
							>
								{useIntlMsgID === true
									? this.props.intl.formatMessage({
										id: intlMsgID,
										defaultMessage: ""
									})
									: text}
              </option>
            )}
            {this.renderOptions(
							elementObj,
							multiple,
							selectedValues,
							stateStyles,
							propsStyles
						)}
          </select>
          {selectExternalComponent2 !== null && (
            <div>
              {selectExternalComponent2}
            </div>
          )}
        </div>
				<div
					style={{ ...errorLabelsContainerStyles.style, ...errorLabelsContainerStyles.addStyle }}
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
    )

	}
};

export default injectIntl(MySelect);
