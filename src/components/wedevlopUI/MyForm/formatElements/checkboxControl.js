export default elementObj => {
	return {
			element: "checkboxControl",
			rowNumber: elementObj.rowNumber === undefined
			? 1
			: elementObj.rowNumber,
			columnNumber: elementObj.columnNumber === undefined
			? 1
			: elementObj.columnNumber,
			// "vertical" "horizontal"
			orientation: elementObj.orientation === undefined
			? "vertical"
			: elementObj.orientation,
			//
			id: elementObj.id === undefined
			? "checkboxControl"
			: elementObj.id,
			name: elementObj.name === undefined
			? "checkboxControl"
			: elementObj.name,
			checkedValues: elementObj.checkedValues === undefined
			? []
			: elementObj.checkedValues,
			//
			validationRules: elementObj.validationRules === undefined
			? []
			: elementObj.validationRules,
			//
			inputs: elementObj.inputs === undefined
			? []
			: elementObj.inputs,
			//
			style: elementObj.style === undefined
			? {}
			: elementObj.style,
			addStyle: elementObj.addStyle === undefined
			? {}
			: elementObj.addStyle,
			className: elementObj.className === undefined
			? ""
			: elementObj.className,
			addClassName: elementObj.addClassName === undefined
			? ""
			: elementObj.addClassName,
			//
			container: {
				style: elementObj.container === undefined
				|| elementObj.container.style === undefined
				? {}
				: elementObj.container.style,
				addStyle: elementObj.container === undefined
				|| elementObj.container.addStyle === undefined
				? {}
				: elementObj.container.addStyle,
				className: elementObj.container === undefined
				|| elementObj.container.className === undefined
				? ""
				: elementObj.container.className,
				addClassName: elementObj.container === undefined
				|| elementObj.container.addClassName === undefined
				? ""
				: elementObj.container.addClassName
			},
			//
			errorLabelsContainer: {
				style: elementObj.errorLabelsContainer === undefined
				|| elementObj.errorLabelsContainer.style === undefined
				? {}
				: elementObj.errorLabelsContainer.style,
				addStyle: elementObj.errorLabelsContainer === undefined
				|| elementObj.errorLabelsContainer.addStyle === undefined
				? {}
				: elementObj.errorLabelsContainer.addStyle,
				className: elementObj.errorLabelsContainer === undefined
				|| elementObj.errorLabelsContainer.className === undefined
				? ""
				: elementObj.errorLabelsContainer.className,
				addClassName: elementObj.errorLabelsContainer === undefined
				|| elementObj.errorLabelsContainer.addClassName === undefined
				? ""
				: elementObj.errorLabelsContainer.addClassName,
			},
			//
			errorLabel: {
				text: elementObj.errorLabel === undefined
				|| elementObj.errorLabel.text === undefined
				? "Error Label"
				: elementObj.errorLabel.text,
				intlMsgID: elementObj.errorLabel === undefined
				|| elementObj.errorLabel.intlMsgID === undefined
				? "myform.invalid.input"
				: elementObj.errorLabel.intlMsgID,
				useIntlMsgID: elementObj.errorLabel === undefined
				|| elementObj.errorLabel.useIntlMsgID === undefined
				? false
				: elementObj.errorLabel.useIntlMsgID,
				//
				style: elementObj.errorLabel === undefined
				|| elementObj.errorLabel.style === undefined
				? {}
				: elementObj.errorLabel.style,
				addStyle: elementObj.errorLabel === undefined
				|| elementObj.errorLabel.addStyle === undefined
				? {}
				: elementObj.errorLabel.addStyle,
				className: elementObj.errorLabel === undefined
				|| elementObj.errorLabel.className === undefined
				? ""
				: elementObj.errorLabel.className,
				addClassName: elementObj.errorLabel === undefined
				|| elementObj.errorLabel.addClassName === undefined
				? ""
				: elementObj.errorLabel.addClassName,
			},
	};
}
