import React, { Component } from "react";
import _ from "lodash";

import IntlMessages from "util/IntlMessages";

import configObjs from "../configObjs";
import validateRule from "../validationRules/validateRule";

import getStyles from "../getStyles";

let rulesValidationResultsByInputName = {};

const renderErrorLabels = (
	isFormSubmitted,
	inputValues,
	inputName,
	validationRules,
	errorLabelStyles
) => {
  if (validationRules === null) return null;
  if (validationRules === undefined) return null;
  if (validationRules && validationRules.length === 0) return null;
  if (inputValues === undefined) return null;

  if (isFormSubmitted === true) {
    let rulesValidationResults = [];

    return validationRules.map((rule, index) => {
      if (rule.mame === "none") return;
      const _rule = _.merge(configObjs.validationRules[rule.name], rule);

			let thisRuleInputValues = [];
			rule.inputNames.map(inputName => {
				thisRuleInputValues.push(inputValues[inputName]);
			})

      let isRuleValid = validateRule(rule.name, thisRuleInputValues);

      rulesValidationResults.push({ name: rule.name, result: isRuleValid });
      rulesValidationResultsByInputName = {
        ...rulesValidationResultsByInputName,
        ...{
          [inputName]: rulesValidationResults
        }
      };

			if (isRuleValid === false) {
				return (
	        <label
						key={index}
						style={{ ...errorLabelStyles.style, ...errorLabelStyles.addStyle }}
						className={`${errorLabelStyles.className} ${errorLabelStyles.addClassName}`}
					>
						{_rule.useIntlMsgID === true
							? <IntlMessages id={_rule.intlMsgID} />
							: _rule.errorText}
	        </label>
	      );
			};
    });
  };
};

export default renderErrorLabels;
