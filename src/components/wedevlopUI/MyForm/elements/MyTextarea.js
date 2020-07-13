import React, { Component } from "react";

import { intlShape, FormattedMessage } from "react-intl";
import { defineMessages, injectIntl } from "react-intl"; // https://github.com/formatjs/react-intl/issues/1051
import IntlMessages from "util/IntlMessages";

import renderErrorLabels from "./renderErrorLabels";

import getStyles from "../getStyles";

class MyTextarea extends React.Component {
	renderInputLabel = (elementObj, labelStyles) => {
		return (
			<label
				style={{ ...labelStyles.style, ...labelStyles.addStyle }}
				className={`${labelStyles.className} ${labelStyles.addClassName}`}
			>
				{elementObj.label.useIntlMsgID === true
					? <IntlMessages id={elementObj.label.intlMsgID} />
					: elementObj.label.text}
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
			textareaExternalComponent1,
			textareaExternalComponent2,
			onChange
		} = this.props;

		let textareaContainerStyles = getStyles(
			"textareaContainer",
			elementObj.container.style,
			elementObj.container.addStyle,
			elementObj.container.className,
			elementObj.container.addClassName,
			stateStyles,
			propsStyles
		);
		let textareaStyles = getStyles(
			"textarea",
			elementObj.style,
			elementObj.addStyle,
			elementObj.className,
			elementObj.addClassName,
			stateStyles,
			propsStyles
		);
		let labelStyles = getStyles(
			"textareaLabel",
			elementObj.label.style,
			elementObj.label.addStyle,
			elementObj.label.className,
			elementObj.label.addClassName,
			stateStyles,
			propsStyles
		);
		let textareaSpan1Styles = getStyles(
			"textareaSpan1",
			elementObj.textareaSpan1.style,
			elementObj.textareaSpan1.addStyle,
			elementObj.textareaSpan1.className,
			elementObj.textareaSpan1.addClassName,
			stateStyles,
			propsStyles
		);
		let textareaSpan2Styles = getStyles(
			"textareaSpan2",
			elementObj.textareaSpan2.style,
			elementObj.textareaSpan2.addStyle,
			elementObj.textareaSpan2.className,
			elementObj.textareaSpan2.addClassName,
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
		const { id, name, type, maxLength, rows, cols } = elementObj;
	  const { validationRules } = elementObj;

		return (
			<div
				style={{ ...textareaContainerStyles.style, ...textareaContainerStyles.addStyle }}
				className={`${textareaContainerStyles.className} ${textareaContainerStyles.addClassName}`}
			>
				{elementObj.label.show === true && elementObj.label.position === "top" && this.renderInputLabel(elementObj, labelStyles)}
				<div
					style={{
						position: "relative",
						display: "flex",
						flexDirection: "row"
					}}
				>
					<span
						style={{ ...textareaSpan1Styles.style, ...textareaSpan1Styles.addStyle }}
						className={`${textareaSpan1Styles.className} ${textareaSpan1Styles.addClassName}`}
					/>
					{textareaExternalComponent1 !== null && (
						<div>
							{textareaExternalComponent1}
						</div>
					)}
					{elementObj.label.show === true && elementObj.label.position === "left" && this.renderInputLabel(elementObj, labelStyles)}
					<FormattedMessage
						id={elementObj.placeholder.intlMsgID}
						defaultMessage=""
					>
						{placeholder => (
							<textarea
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
								rows={rows}
								cols={cols}
								style={{ ...textareaStyles.style, ...textareaStyles.addStyle }}
								className={`${textareaStyles.className} ${textareaStyles.addClassName}`}
							/>
						)}
					</FormattedMessage>
					{elementObj.label.show === true && elementObj.label.position === "right" && this.renderInputLabel(elementObj, labelStyles)}
					{textareaExternalComponent2 !== null && (
						<div>
							{textareaExternalComponent2}
						</div>
					)}
					<span
						style={{ ...textareaSpan2Styles.style, ...textareaSpan2Styles.addStyle }}
						className={`${textareaSpan2Styles.className} ${textareaSpan2Styles.addClassName}`}
					/>
				</div>
				{elementObj.label.show === true && elementObj.label.position === "bottom" && this.renderInputLabel(elementObj, labelStyles)}
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
		);
	}
};

export default injectIntl(MyTextarea);
