export default elementObj => {
	return {
			element: "column",
			rowNumber: elementObj.rowNumber === undefined
			? 1
			: elementObj.rowNumber,
			columnNumber: elementObj.columnNumber === undefined
			? 1
			: elementObj.columnNumber,
			columnSize: elementObj.columnSize === undefined
			? "1-of-1"
			: elementObj.columnSize,
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
			: elementObj.addClassName
	};
}
