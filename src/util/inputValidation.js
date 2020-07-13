import {
  doStringStartWithSubstr,
  doStringEndWithSubstr,
  stringDoesntStartWithSubstr,
  stringDoesntEndWithSubstr,
  stringHasOnlySpaces,
  stringHasOnlyOneSpace,
  stringMeetsWordLimit,
  stringMeetsMinMaxLength,
  containsAtLeastOneLowercase,
  containsAtLeastOneUppercase,
  containsAtLeastOneNumeric,
  containsAtLeastOneSpecialChar,
  containsOnlyLowercase,
  containsOnlyUppercase,
  containsOnlyNumeric,
  containsOnlySpecialChar,
  oneUpperOneLowerOneNumericOneSpecMinEight,
  stringHasAnySpaces
} from "./regexOps/check";
// import {} from "./regexOps/replace";
import { isEmailPattern } from "./regexOps/patterns";

export const isNotEmpty = inputValue => {
  if (inputValue === undefined || inputValue === null) return false;
  if (inputValue === "") return false;
  if (inputValue.length === 0) return false;
  if (stringHasOnlySpaces(inputValue) === true) return false;
  return true;
}

export const isEmailValid = inputValue => {
  if (isNotEmpty(inputValue) === false) return false;
  if (stringDoesntStartWithSubstr(inputValue, " ") === false) return false;
  if (stringDoesntEndWithSubstr(inputValue, " ") === false) return false;
  return isEmailPattern(inputValue);
};

export const doEmailsMatch = (inputValue1, inputValue2) => {
  if (isNotEmpty(inputValue1) === false) return false;
  if (isNotEmpty(inputValue2) === false) return false;
  if (inputValue1.toString() !== inputValue2.toString()) {
    return false;
  }
  return true;
};

export const isPasswordValid = (inputValue) => {
  if (isNotEmpty(inputValue) === false) return false;
  return oneUpperOneLowerOneNumericOneSpecMinEight(inputValue);
};

export const doPasswordsMatch = (inputValue1, inputValue2) => {
  if (isNotEmpty(inputValue1) === false) return false;
  if (isNotEmpty(inputValue2) === false) return false;
  if (inputValue1.toString() !== inputValue2.toString()) {
    return false;
  }
  return true;
};

export const isFullNameValid = (inputValue) => {
  if (isNotEmpty(inputValue) === false) return false;
  // should not contain only numbers
  // should not contain only spaces
  // should only contain 2 words
  // should contain greater than and less than N characters
  if (containsOnlyNumeric(inputValue) === true) return false;
  if (containsOnlySpecialChar(inputValue) === true) return false;
  if (stringDoesntStartWithSubstr(inputValue, " ") === false) return false;
  if (stringDoesntEndWithSubstr(inputValue, " ") === false) return false;
  if (stringHasOnlySpaces(inputValue) === true) return false;
  if (stringHasOnlyOneSpace(inputValue) === false) return false;
  if (stringMeetsWordLimit(inputValue, 2, 2) === false) return false;
  if (stringMeetsMinMaxLength(inputValue, 4, 100) === false) return false;
  if (containsAtLeastOneNumeric(inputValue) === true) return false;
  if (containsAtLeastOneSpecialChar(inputValue) === true) return false;
  return true;
}

export const isCompanyNameValid = (inputValue) => {
  if (isNotEmpty(inputValue) === false) return false;
  // should not contain only numbers
  // should not contain only spaces
  // should contain greater than and less than N characters
  if (containsOnlyNumeric(inputValue) === true) return false;
  if (containsOnlySpecialChar(inputValue) === true) return false;
  if (stringDoesntStartWithSubstr(inputValue, " ") === false) return false;
  if (stringDoesntEndWithSubstr(inputValue, " ") === false) return false;
  if (stringHasOnlySpaces(inputValue) === true) return false;
  if (stringMeetsMinMaxLength(inputValue, 1, 100) === false) return false;

  return true;
}

export const isPhoneNumberValid = (inputValue) => {
  if (isNotEmpty(inputValue) === false) return false;
  // should only contain numbers
  // should not contain letters
  // should contain greater than and less than N characters
  if (containsOnlyNumeric(inputValue) === false) return false;
  if (stringMeetsMinMaxLength(inputValue, 4, 10) === false) return false;
  return true;
}

export const isMinChars1 = (inputValue) => {
  let str = inputValue.toString();
  if (str.length < 2) return false;
  return true;
}
export const isMinChars3 = (inputValue) => {
  let str = inputValue.toString();
  if (str.length < 3) return false;
  return true;
}
export const isMinChars5 = (inputValue) => {
  let str = inputValue.toString();
  if (str.length < 5) return false;
  return true;
}
export const isMinChars6 = (inputValue) => {
  let str = inputValue.toString();
  if (str.length < 6) return false;
  return true;
}
export const isMinChars8 = (inputValue) => {
  let str = inputValue.toString();
  if (str.length < 8) return false;
  return true;
}

export const isMaxChars25 = (inputValue) => {
  let str = inputValue.toString();
  if (str.length > 25) return false;
  return true;
}
export const isMaxChars50 = (inputValue) => {
  let str = inputValue.toString();
  if (str.length > 50) return false;
  return true;
}
export const isMaxChars100 = (inputValue) => {
  let str = inputValue.toString();
  if (str.length > 100) return false;
  return true;
}
export const isMaxChars200 = (inputValue) => {
  let str = inputValue.toString();
  if (str.length > 200) return false;
  return true;
}
export const isMaxChars500 = (inputValue) => {
  let str = inputValue.toString();
  if (str.length > 500) return false;
  return true;
}
