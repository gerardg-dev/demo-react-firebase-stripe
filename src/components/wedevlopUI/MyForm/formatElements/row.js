export default elementObj => {
	return {
			element: "row",
			// form contains a main row, formMainRow, which rowNumber is 1, any additional row starts with rowNumber 2
			rowNumber: elementObj.rowNumber === undefined
			? 2
			: elementObj.rowNumber,
			columnNumber: elementObj.columnNumber === undefined
			? 1
			: elementObj.columnNumber,
			columns: elementObj.columns === undefined
			? [{
					element: "column",
					rowNumber: 1,
					columnNumber: 1,
					columnSize: "1-of-1",
					style: {},
					addStyle: {},
					className: "",
					addClassName: ""
			}]
			: elementObj.columns,
			formElements: elementObj.formElements === undefined
			? []
			: elementObj.formElements,
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
