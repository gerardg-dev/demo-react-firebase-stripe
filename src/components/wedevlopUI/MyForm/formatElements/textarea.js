export default elementObj => {
	return {
			element: "textarea",
			rowNumber: elementObj.rowNumber === undefined
			? 1
			: elementObj.rowNumber,
			columnNumber: elementObj.columnNumber === undefined
			? 1
			: elementObj.columnNumber,
			//
			id: elementObj.id === undefined
			? ""
			: elementObj.id,
			name: elementObj.name === undefined
			? "myTextarea"
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
			//
			rows: elementObj.rows === undefined
			? 5
			: elementObj.rows,
			cols: elementObj.cols === undefined
			? 40
			: elementObj.cols,
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
			textareaSpan1: {
				style: elementObj.textareaSpan1 === undefined
				|| elementObj.textareaSpan1.style === undefined
				? {}
				: elementObj.textareaSpan1.style,
				addStyle: elementObj.textareaSpan1 === undefined
				|| elementObj.textareaSpan1.addStyle === undefined
				? {}
				: elementObj.textareaSpan1.addStyle,
				className: elementObj.textareaSpan1 === undefined
				|| elementObj.textareaSpan1.className === undefined
				? ""
				: elementObj.textareaSpan1.className,
				addClassName: elementObj.textareaSpan1 === undefined
				|| elementObj.textareaSpan1.addClassName === undefined
				? ""
				: elementObj.textareaSpan1.addClassName
			},
			//
			textareaSpan2: {
				style: elementObj.textareaSpan2 === undefined
				|| elementObj.textareaSpan2.style === undefined
				? {}
				: elementObj.textareaSpan2.style,
				addStyle: elementObj.textareaSpan2 === undefined
				|| elementObj.textareaSpan2.addStyle === undefined
				? {}
				: elementObj.textareaSpan2.addStyle,
				className: elementObj.textareaSpan2 === undefined
				|| elementObj.textareaSpan2.className === undefined
				? ""
				: elementObj.textareaSpan2.className,
				addClassName: elementObj.textareaSpan2 === undefined
				|| elementObj.textareaSpan2.addClassName === undefined
				? ""
				: elementObj.textareaSpan2.addClassName
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
				? "top"
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
			placeholder: {
				text: elementObj.placeholder === undefined
				|| elementObj.placeholder.text === undefined
				? "Enter Description"
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
			//
			validationRules: elementObj.validationRules === undefined
			? []
			: elementObj.validationRules,
	};
}
