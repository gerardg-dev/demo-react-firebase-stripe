import {
  isNotEmpty,
  isEmailValid,
  doEmailsMatch,
  isPasswordValid,
  doPasswordsMatch,
  isFullNameValid,
  isCompanyNameValid,
  isPhoneNumberValid,
  //
  isMinChars1,
  isMinChars3,
  isMinChars5,
  isMinChars6,
  isMinChars8,
  //
  isMaxChars25,
  isMaxChars50,
  isMaxChars100,
  isMaxChars200,
  isMaxChars500
} from "../../../../util/inputValidation";

const validateRule = (ruleName, inputValues) => {
	let isRuleValid = null;

	if (ruleName === "required") {
		isRuleValid = isNotEmpty(inputValues[0]);
	}
	if (ruleName === "validEmail") {
		isRuleValid = isEmailValid(inputValues[0]);
	}
	if (ruleName === "matchEmails") {
		isRuleValid = doEmailsMatch(
			inputValues[0],
			inputValues[1]
		);
	}
  // Min 8 chars, at least: 1 uppercase, 1 lowercase, 1 numeric, 1 special char.
  if (ruleName === "validPassword1") {
		isRuleValid = isPasswordValid(inputValues[0]);
	}
	if (ruleName === "matchPasswords") {
		isRuleValid = doPasswordsMatch(
			inputValues[0],
			inputValues[1]
		);
	}

  if (ruleName === "isMinChars1") {
		isRuleValid = isMinChars1(inputValues[0]);
	}
  if (ruleName === "isMinChars3") {
		isRuleValid = isMinChars3(inputValues[0]);
	}
  if (ruleName === "isMinChars5") {
		isRuleValid = isMinChars5(inputValues[0]);
	}
  if (ruleName === "isMinChars6") {
		isRuleValid = isMinChars6(inputValues[0]);
	}
  if (ruleName === "isMinChars8") {
		isRuleValid = isMinChars8(inputValues[0]);
	}

  if (ruleName === "isMaxChars25") {
		isRuleValid = isMaxChars25(inputValues[0]);
	}
  if (ruleName === "isMaxChars50") {
		isRuleValid = isMaxChars50(inputValues[0]);
	}
  if (ruleName === "isMaxChars100") {
		isRuleValid = isMaxChars100(inputValues[0]);
	}
  if (ruleName === "isMaxChars200") {
		isRuleValid = isMaxChars200(inputValues[0]);
	}
  if (ruleName === "isMaxChars500") {
		isRuleValid = isMaxChars500(inputValues[0]);
	}

	return isRuleValid;
};

export default validateRule;
