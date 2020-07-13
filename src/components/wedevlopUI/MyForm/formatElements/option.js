export default elementObj => {
	return {
		element: "option",
		//
		id: elementObj.id === undefined
		? ""
		: elementObj.id,
		name: elementObj.name === undefined
		? ""
		: elementObj.name,
		value: elementObj.value === undefined
		? ""
		: elementObj.value,
		selected: elementObj.selected === undefined
		? false
		: elementObj.selected,
		disabled: elementObj.disabled === undefined
		? false
		: elementObj.disabled,
		//
		text: elementObj.text === undefined
		? "Option"
		: elementObj.text,
		intlMsgID: elementObj.intlMsgID === undefined
		? "myform.select.option"
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
	};
}
