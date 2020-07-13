export default elementObj => {
	return {
			element: "checkbox",
			rowNumber: elementObj.rowNumber === undefined
			? 1
			: elementObj.rowNumber,
			columnNumber: elementObj.columnNumber === undefined
			? 1
			: elementObj.columnNumber,
			//
			id: elementObj.id === undefined
			? "checkboxInput"
			: elementObj.id,
			name: elementObj.name === undefined
			? "checkboxInput"
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
			? "Checkbox"
			: elementObj.text,
			intlMsgID: elementObj.intlMsgID === undefined
			? "myform.checkbox.text"
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
			checkboxSpan1: {
				style: elementObj.checkboxSpan1 === undefined
				|| elementObj.checkboxSpan1.style === undefined
				? {}
				: elementObj.checkboxSpan1.style,
				addStyle: elementObj.checkboxSpan1 === undefined
				|| elementObj.checkboxSpan1.addStyle === undefined
				? {}
				: elementObj.checkboxSpan1.addStyle,
				className: elementObj.checkboxSpan1 === undefined
				|| elementObj.checkboxSpan1.className === undefined
				? ""
				: elementObj.checkboxSpan1.className,
				addClassName: elementObj.checkboxSpan1 === undefined
				|| elementObj.checkboxSpan1.addClassName === undefined
				? ""
				: elementObj.checkboxSpan1.addClassName
			},
			//
			checkboxSpan2: {
				style: elementObj.checkboxSpan2 === undefined
				|| elementObj.checkboxSpan2.style === undefined
				? {}
				: elementObj.checkboxSpan2.style,
				addStyle: elementObj.checkboxSpan2 === undefined
				|| elementObj.checkboxSpan2.addStyle === undefined
				? {}
				: elementObj.checkboxSpan2.addStyle,
				className: elementObj.checkboxSpan2 === undefined
				|| elementObj.checkboxSpan2.className === undefined
				? ""
				: elementObj.checkboxSpan2.className,
				addClassName: elementObj.checkboxSpan2 === undefined
				|| elementObj.checkboxSpan2.addClassName === undefined
				? ""
				: elementObj.checkboxSpan2.addClassName
			},
	};
}
