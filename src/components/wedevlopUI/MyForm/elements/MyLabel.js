import React, { Component } from "react";

import IntlMessages from "util/IntlMessages";

import getStyles from "../getStyles";

const MyLabel = props => {
	const {
		elementObj,
		stateStyles,
		propsStyles,
		labelExternalComponent1,
		labelExternalComponent2
	} = props;

	let labelContainerStyles = getStyles(
		"labelContainer",
		elementObj.container.style,
		elementObj.container.addStyle,
		elementObj.container.className,
		elementObj.container.addClassName,
		stateStyles,
		propsStyles
	);
	let labelStyles = getStyles(
		"label",
		elementObj.style,
		elementObj.addStyle,
		elementObj.className,
		elementObj.addClassName,
		stateStyles,
		propsStyles
	);

	const { text, intlMsgID, useIntlMsgID } = elementObj;

	return (
		<div>
			<div
				style={{ ...labelContainerStyles.style, ...labelContainerStyles.addStyle }}
				className={`${labelContainerStyles.className} ${labelContainerStyles.addClassName}`}
			>
				{labelExternalComponent1 !== null && labelExternalComponent1 !== undefined && (
					<div>
						{labelExternalComponent1}
					</div>
				)}
				<label
					style={{ ...labelStyles.style, ...labelStyles.addStyle }}
					className={`${labelStyles.className} ${labelStyles.addClassName}`}
				>
					{useIntlMsgID === true
						? <IntlMessages id={intlMsgID} />
						: text}
				</label>
				{labelExternalComponent2 !== null && labelExternalComponent2 !== undefined && (
					<div>
						{labelExternalComponent2}
					</div>
				)}
			</div>
		</div>
	)
};

// let styles = { ...this.state.style.labelContainer, ...this.state.addStyle.labelContainer };
// let classes = `${this.state.className.labelContainer} ${this.state.addClassName.labelContainer}`;
//
// let singleStyles = { ...elementObj.style, ...elementObj.addStyle };
// let singleClasses = { ...elementObj.className, ...elementObj.addClassName };
//
// let finalStyles = { ...styles, ...singleStyles };
// let finalClasses = { ...classes, ...singleClasses };

export default MyLabel;
