export default elementObj => {
	return {
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
	};
}
