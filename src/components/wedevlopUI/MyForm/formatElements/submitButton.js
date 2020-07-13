export default elementObj => {
	return {
			isSubmitting: elementObj.isSubmitting === undefined
			? false
			: elementObj.isSubmitting,
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
