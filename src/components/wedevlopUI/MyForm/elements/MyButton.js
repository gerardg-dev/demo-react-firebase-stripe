import React, { Component } from "react";

import IntlMessages from "util/IntlMessages";

import getStyles from "../getStyles";

const MyButton = props => {
	const {
		elementObj,
		stateStyles,
		propsStyles,
		buttonExternalComponent1,
		buttonExternalComponent2,
		onClick
	} = props;

	let buttonStyles = getStyles(
		"button",
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
				<button
					type="button"
					onClick={onClick}
					style={{ ...buttonStyles.style, ...buttonStyles.addStyle }}
					className={`${buttonStyles.className} ${buttonStyles.addClassName}`}
				>
					{buttonExternalComponent1 !== null && (
						<div>
							{buttonExternalComponent1}
						</div>
					)}
					{useIntlMsgID === true
						? <IntlMessages id={intlMsgID} />
						: text}
					{buttonExternalComponent2 !== null && (
						<div>
							{buttonExternalComponent2}
						</div>
					)}
				</button>
			</div>
	);
};

export default MyButton;
