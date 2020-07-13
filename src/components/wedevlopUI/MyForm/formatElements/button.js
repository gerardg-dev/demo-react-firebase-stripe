export default elementObj => {
	return {
			element: "button",
			rowNumber: elementObj.rowNumber === undefined
			? 1
			: elementObj.rowNumber,
			columnNumber: elementObj.columnNumber === undefined
			? 1
			: elementObj.columnNumber,
			orientation: elementObj.orientation === undefined
			? "horizontal"
			: elementObj.orientation,
			//
			text: elementObj.text === undefined
			? "Button"
			: elementObj.text,
			intlMsgID: elementObj.intlMsgID === undefined
			? "myform.button"
			: elementObj.intlMsgID,
			useIntlMsgID: elementObj.useIntlMsgID === undefined
			? false
			: elementObj.useIntlMsgID,
			//
			onClick: elementObj.onClick === undefined
			? () => console.log("Button Clicked")
			: elementObj.onClick,
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
				: elementObj.container.addClassName,
			}
	};
}
