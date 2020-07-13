export default elementObj => {
	return {
		element: "input",
		rowNumber: elementObj.rowNumber === undefined
		? 1
		: elementObj.rowNumber,
		columnNumber: elementObj.columnNumber === undefined
		? 1
		: elementObj.columnNumber,
		initValue: elementObj.initValue === undefined
		? ""
		: elementObj.initValue,
		//
		id: elementObj.id === undefined
		? ""
		: elementObj.id,
		name: elementObj.name === undefined
		? "myInput"
		: elementObj.name,
		type: elementObj.type === undefined
		? "text"
		: elementObj.type,
		value: elementObj.value === undefined
		? ""
		: elementObj.value,
		maxLength: elementObj.maxLength === undefined
		? "524288"
		: elementObj.maxLength,
		autoComplete: elementObj.autoComplete === undefined
		? "off"
		: elementObj.autoComplete,
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
		inputSpan1: {
			style: elementObj.inputSpan1 === undefined
			|| elementObj.inputSpan1.style === undefined
			? {}
			: elementObj.inputSpan1.style,
			addStyle: elementObj.inputSpan1 === undefined
			|| elementObj.inputSpan1.addStyle === undefined
			? {}
			: elementObj.inputSpan1.addStyle,
			className: elementObj.inputSpan1 === undefined
			|| elementObj.inputSpan1.className === undefined
			? ""
			: elementObj.inputSpan1.className,
			addClassName: elementObj.inputSpan1 === undefined
			|| elementObj.inputSpan1.addClassName === undefined
			? ""
			: elementObj.inputSpan1.addClassName
		},
		//
		inputSpan2: {
			style: elementObj.inputSpan2 === undefined
			|| elementObj.inputSpan2.style === undefined
			? {}
			: elementObj.inputSpan2.style,
			addStyle: elementObj.inputSpan2 === undefined
			|| elementObj.inputSpan2.addStyle === undefined
			? {}
			: elementObj.inputSpan2.addStyle,
			className: elementObj.inputSpan2 === undefined
			|| elementObj.inputSpan2.className === undefined
			? ""
			: elementObj.inputSpan2.className,
			addClassName: elementObj.inputSpan2 === undefined
			|| elementObj.inputSpan2.addClassName === undefined
			? ""
			: elementObj.inputSpan2.addClassName
		},
		//
		placeholder: {
			text: elementObj.placeholder === undefined
			|| elementObj.placeholder.text === undefined
			? "Enter Text"
			: elementObj.placeholder.text,
			intlMsgID: elementObj.placeholder === undefined
			|| elementObj.placeholder.intlMsgID === undefined
			? "myform.input.placeholder"
			: elementObj.placeholder.intlMsgID,
			useIntlMsgID: elementObj.placeholder === undefined
			|| elementObj.placeholder.useIntlMsgID === undefined
			? false
			: elementObj.placeholder.useIntlMsgID
		},
		//
		label: {
			text: elementObj.label === undefined
			|| elementObj.label.text === undefined
			? "Label"
			: elementObj.label.text,
			intlMsgID: elementObj.label === undefined
		 	|| elementObj.label.intlMsgID === undefined
			? "myform.input.label"
			: elementObj.label.intlMsgID,
			useIntlMsgID: elementObj.label === undefined
			|| elementObj.label.useIntlMsgID === undefined
			? false
			: elementObj.label.useIntlMsgID,
			//
			show: elementObj.label === undefined
			|| elementObj.label.show === undefined
			? true
			: elementObj.label.show,
			// "top", "bottom", "left", "right".
			position: elementObj.label === undefined
			|| elementObj.label.position === undefined
			? "left"
			: elementObj.label.position,
			//
			style: elementObj.label === undefined
			|| elementObj.label.style === undefined
			? {}
			: elementObj.label.style,
			addStyle: elementObj.label === undefined
			|| elementObj.label.addStyle === undefined
			? {}
			: elementObj.label.addStyle,
			className: elementObj.label === undefined
			|| elementObj.label.className === undefined
			? ""
			: elementObj.label.className,
			addClassName: elementObj.label === undefined
			|| elementObj.label.addClassName === undefined
			? ""
			: elementObj.label.addClassName
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
		//
		validationRules: elementObj.validationRules === undefined
		? []
		: elementObj.validationRules,
	};
}
