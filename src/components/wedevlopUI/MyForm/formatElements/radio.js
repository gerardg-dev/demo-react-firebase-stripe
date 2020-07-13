export default elementObj => {
	return {
		element: "radio",
		rowNumber: elementObj.rowNumber === undefined
		? 1
		: elementObj.rowNumber,
		columnNumber: elementObj.columnNumber === undefined
		? 1
		: elementObj.columnNumber,
		//
		id: elementObj.id === undefined
		? "radioInput"
		: elementObj.id,
		name: elementObj.name === undefined
		? "radioInput"
		: elementObj.name,
		value: elementObj.value === undefined
		? ""
		: elementObj.value,
		checked: elementObj.checked === undefined
		? false
		: elementObj.checked,
		disabled: elementObj.disabled === undefined
		? false
		: elementObj.disabled,
		//
		text: elementObj.text === undefined
		? "Radio Button"
		: elementObj.text,
		intlMsgID: elementObj.intlMsgID === undefined
		? "myform.radio.text"
		: elementObj.intlMsgID,
		useIntlMsgID: elementObj.useIntlMsgID === undefined
		? false
		: elementObj.useIntlMsgID,
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
		label: {
			text: elementObj.label === undefined
			|| elementObj.label.text === undefined
			? "Label"
			: elementObj.label.text,
			intlMsgID: elementObj.label === undefined
			|| elementObj.label.intlMsgID === undefined
			? "myform.invalid.input"
			: elementObj.label.intlMsgID,
			useIntlMsgID: elementObj.label === undefined
			|| elementObj.label.useIntlMsgID === undefined
			? false
			: elementObj.label.useIntlMsgID,
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
			: elementObj.label.addClassName,
		},
		radioSpan1: {
			style: elementObj.radioSpan1 === undefined
			|| elementObj.radioSpan1.style === undefined
			? {}
			: elementObj.radioSpan1.style,
			addStyle: elementObj.radioSpan1 === undefined
			|| elementObj.radioSpan1.addStyle === undefined
			? {}
			: elementObj.radioSpan1.addStyle,
			className: elementObj.radioSpan1 === undefined
			|| elementObj.radioSpan1.className === undefined
			? ""
			: elementObj.radioSpan1.className,
			addClassName: elementObj.radioSpan1 === undefined
			|| elementObj.radioSpan1.addClassName === undefined
			? ""
			: elementObj.radioSpan1.addClassName
		},
		//
		radioSpan2: {
			style: elementObj.radioSpan2 === undefined
			|| elementObj.radioSpan2.style === undefined
			? {}
			: elementObj.radioSpan2.style,
			addStyle: elementObj.radioSpan2 === undefined
			|| elementObj.radioSpan2.addStyle === undefined
			? {}
			: elementObj.radioSpan2.addStyle,
			className: elementObj.radioSpan2 === undefined
			|| elementObj.radioSpan2.className === undefined
			? ""
			: elementObj.radioSpan2.className,
			addClassName: elementObj.radioSpan2 === undefined
			|| elementObj.radioSpan2.addClassName === undefined
			? ""
			: elementObj.radioSpan2.addClassName
		},
	};
}
