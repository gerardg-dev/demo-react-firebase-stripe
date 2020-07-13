// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp
// http://www.regexlib.com/CheatSheet.aspx
// http://www.regexlib.com/Search.aspx

// expression: (((^\s*)*\S+\s+)|(\S+)){1,3}
// add / expression_here /g : /(((^\s*)*\S+\s+)|(\S+)){1,3}/g"
// ADD: /^ + regexlib.com_expression_here + $/g
// add ^ and $ for full string: /^(((^\s*)*\S+\s+)|(\S+)){1,3}$/g
// let regularExp = /^(((^\s*)*\S+\s+)|(\S+)){1,3}$/g;
//
// convert expression to string and pass js variables
// expression:
// we dont need / at start and no /g at the end
// just add am extra \ for any \ in the literal expression
// (((^\s*)*\S+\s+)|(\S+)){1,3}
// to
// (((^\\s*)*\\S+\\s+)|(\\S+)){1,3}
// and under quotes of course
// "(((^\\s*)*\\S+\\s+)|(\\S+)){1,3}"

export const areFirstAndLastCharsSimilar = (str) => {
  let regularExp = /^(.).*\1$/;
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("areFirstAndLastCharsSimilar");
// console.log(areFirstAndLastCharsSimilar("scss"));
// console.log(areFirstAndLastCharsSimilar("scsS"));

export const doStringStartsWithUppercase = (str) => {
  let regularExp = "(?=.*^[A-Z])";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("doStringStartsWithUppercase");
// console.log(doStringStartsWithUppercase("Css"));
// console.log(doStringStartsWithUppercase("csS"));

export const doStringStartsWithLowercase = (str) => {
  let regularExp = "(?=.*^[a-z])";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("doStringStartsWithLowercase");
// console.log(doStringStartsWithLowercase("abc"));
// console.log(doStringStartsWithLowercase("Abc"));

export const doStringEndsWithUppercase = (str) => {
  let regularExp = "(?=.*[A-Z]$)";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("doStringEndsWithUppercase");
// console.log(doStringEndsWithUppercase("cssS"));
// console.log(doStringEndsWithUppercase("Csss"));

export const doStringEndsWithLowercase = (str) => {
  let regularExp = "(?=.*[a-z]$)";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("doStringEndsWithLowercase");
// console.log(doStringEndsWithLowercase("css"));
// console.log(doStringEndsWithLowercase("cSS"));

export const doStringStartWithSubstr = (str, substr) => {
  let regularExp = "^(?=" + substr + ")";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("doStringStartWithSubstr");
// console.log(doStringStartWithSubstr("Hey", "Hey"));
// console.log(doStringStartWithSubstr("Hey", "hey"));

export const stringDoesntStartWithSubstr = (str, substr) => {
  let regularExp = "^(?!" + substr + ")";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("stringDoesntStartWithSubstr");
// console.log(stringDoesntStartWithSubstr("Hey!", "hey"));
// console.log(stringDoesntStartWithSubstr("Hey!", "Hey"));

export const doStringEndWithSubstr = (str, substr) => {
  let regularExp = "^.*\." + substr + "$";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("doStringEndWithSubstr");
// console.log(doStringEndWithSubstr("Hey!", "y!"));
// console.log(doStringEndWithSubstr("Hey!", "ey"));

export const stringDoesntEndWithSubstr = (str, substr) => {
  let regularExp = "^(?!.*\." + substr + "$)";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("stringDoesntEndWithSubstr");
// console.log(stringDoesntEndWithSubstr("Hey!", "ey"));
// console.log(stringDoesntEndWithSubstr("Hey!", "y!"));

export const stringContainsSubstr = (str, substr) => {
  let regularExp = "^.*" + substr + ".*$";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("stringContainsSubstr");
// console.log(stringContainsSubstr("Hello!", "ell"));
// console.log(stringContainsSubstr("Hello!", "eo"));

export const stringDoesntContainSubstr = (str, substr) => {
  let regularExp = "^((?!" + substr + ").)*$";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("stringDoesntContainSubstr");
// console.log(stringDoesntContainSubstr("Hello!", "eo"));
// console.log(stringDoesntContainSubstr("Hello!", "ell"));

export const stringHasAnySpaces = (str) => {
  let regularExp = /\s/;
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("stringHasAnySpaces");
// console.log(stringHasAnySpaces("Hello !"));
// console.log(stringHasAnySpaces(" Hello! "));
// console.log(stringHasAnySpaces("Hello!"));

// hasOnlySpaces or Empty no characters
export const stringHasOnlySpaces = (str) => {
  let regularExp = /^ *$/;
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("stringHasOnlySpaces");
// console.log(stringHasOnlySpaces("     "));
// console.log(stringHasOnlySpaces(""));
// console.log(stringHasOnlySpaces(" Hello ! "));

// hasOnlyWhiteSpace or Empty no characters
export const stringHasOnlyWhiteSpace = (str) => {
  let regularExp = /^\s*$/;
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("stringHasOnlyWhiteSpace");
// console.log(stringHasOnlyWhiteSpace("     "));
// console.log(stringHasOnlyWhiteSpace(""));
// console.log(stringHasOnlyWhiteSpace(" Hello ! "));

export const stringHasOnlyOneSpace = (str) => {
  // let regularExp = new RegExp(/^[^ ]* [^ ]*$/);
    let regularExp = /^[^ ]* [^ ]*$/;
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("stringHasOnlyOneSpace");
// console.log(stringHasOnlyOneSpace("Hello !"));
// console.log(stringHasOnlyOneSpace(" Hello!"));
// console.log(stringHasOnlyOneSpace("Hello! "));
// console.log(stringHasOnlyOneSpace("Hello  !"));
// console.log(stringHasOnlyOneSpace("     "));
// console.log(stringHasOnlyOneSpace(""));
// console.log(stringHasOnlyOneSpace(" Hello ! "));

export const containsAtLeastOneLowercase = (str) => {
  let regularExp = "(?=.*[a-z])";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("containsAtLeastOneLowercase");
// console.log(containsAtLeastOneLowercase("YeS"));
// console.log(containsAtLeastOneLowercase("YES"));

export const containsOnlyLowercase = (str) => {
  let regularExp = /^[a-z]*$/; // or "^[a-z]*$"
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("containsOnlyLowercase");
// console.log(containsOnlyLowercase("yes"));
// console.log(containsOnlyLowercase("NO"));
// console.log(containsOnlyLowercase("No"));

export const containsAtLeastOneUppercase = (str) => {
  let regularExp = "(?=.*[A-Z])";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("containsAtLeastOneUppercase");
// console.log(containsAtLeastOneUppercase("Yes"));
// console.log(containsAtLeastOneUppercase("yes"));

export const containsOnlyUppercase = (str) => {
  let regularExp = /^[A-Z]*$/; // or "^[A-Z]*$"
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("containsOnlyUppercase");
// console.log(containsOnlyUppercase("YES"));
// console.log(containsOnlyUppercase("no"));
// console.log(containsOnlyUppercase("No"));

export const containsAtLeastOneNumeric = (str) => {
  let regularExp = "(?=.*[0-9])";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("containsAtLeastOneNumeric");
// console.log(containsAtLeastOneNumeric("Hi1"));
// console.log(containsAtLeastOneNumeric("Hi!"));

export const containsOnlyNumeric = (str) => {
  let regularExp = /^[0-9]*$/; // or "^[0-9]*$"
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("containsOnlyNumeric");
// console.log(containsOnlyNumeric("123"));
// console.log(containsOnlyNumeric("+123"));
// console.log(containsOnlyNumeric("No1"));

export const containsAtLeastOneSpecialChar = (str) => {
  let regularExp = "(?=.*[!@#$%^&*])";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("containsAtLeastOneSpecialChar");
// console.log(containsAtLeastOneSpecialChar("Yes*"));
// console.log(containsAtLeastOneSpecialChar("No"));

export const containsOnlySpecialChar = (str) => {
  let regularExp = /^[!@#$%^&*]*$/; // or "^[!@#$%^&*]*$"
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("containsOnlySpecialChar");
// console.log(containsOnlySpecialChar("!@#$%^&*"));
// console.log(containsOnlySpecialChar("No!@#$%^&*"));
// console.log(containsOnlySpecialChar("No"));

export const stringMeetsMinMaxLength = (str, min, max) => {
  let regularExp = "^.{"+min+","+max+"}$";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("stringMeetsMinMaxLength");
// console.log(stringMeetsMinMaxLength("1234ABcd", 8, 12));
// console.log(stringMeetsMinMaxLength("123ABc*", 8, 12));
// console.log(stringMeetsMinMaxLength("12345678ABCDefgh*", 8, 12));

// 1 uppercase or lowercase alphanumeric char
// 1 numeric char
// more than 6 chars
export const oneAlphaOneNumericMinSix = (str) => {
  let regularExp = "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("oneAlphaOneNumericMinSix");
// console.log(oneAlphaOneNumericMinSix("123ABcd*&"));
// console.log(oneAlphaOneNumericMinSix("123ABcd"));
// console.log(oneAlphaOneNumericMinSix("12Ab"));

// 1 uppercase alphanumeric char
// 1 lowecase alphanumeric char
// 1 numeric char
// 1 special char
// more than 8 chars
export const oneUpperOneLowerOneNumericOneSpecMinEight = (str) => {
  let regularExp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("oneUpperOneLowerOneNumericOneSpecMinEight");
// console.log(oneUpperOneLowerOneNumericOneSpecMinEight("123ABcd*&"));
// console.log(oneUpperOneLowerOneNumericOneSpecMinEight("123ABcd%"));
// console.log(oneUpperOneLowerOneNumericOneSpecMinEight("123ABcd"));

export const stringMeetsWordLimit = (str, min, max) => {
  // let regularExp = /^(((^\s*)*\S+\s+)|(\S+)){2,3}$/g;
  let regularExp = "^(((^\\s*)*\\S+\\s+)|(\\S+)){"+min+","+max+"}$";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("stringMeetsWordLimit");
// console.log(stringMeetsWordLimit("", 1, 3));
// console.log(stringMeetsWordLimit(" ", 1, 3));
// console.log(stringMeetsWordLimit("abc", 2, 3));
// console.log(stringMeetsWordLimit("abc cde", 2, 3));
// console.log(stringMeetsWordLimit("abc cde fgh", 2, 3));
// console.log(stringMeetsWordLimit("abc cde fgh ijk", 2, 3));

// 8 to 64 characters. Spaces not allowed. Require at least one UPPER, one lower and one number. Then limit the input to a-z A-Z 0-9 _-+.$ # @ and !
// (?=.*\d)(?=.*[a-z])(?=.*[A-Z])^[\w!@$#.+-]{8,64}$
export const stringFormat1 = (str) => {
  let regularExp = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z])^[\w!@$#.+-]{8,64}$";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("stringFormat1");
// console.log(stringFormat1("Ab2SSSSSSSSSBCD"));
// console.log(stringFormat1("Ab2_-+.*$#@!"));
// console.log(stringFormat1("_-+.*$#@!"));

// NUMBER
// ^\s*[+-]?\s*(?:\d{1,3}(?:(,?)\d{3})?(?:\1\d{3})*(\.\d*)?|\.\d+)\s*$

// CHECK FULL STRING TO SEE IF FULL STRING VALIDATES SOME RULE
// /^_ADD_RULE_HERE_*$/
// _ADD_RULE_HERE_ can be [a-z] to make sure string contains only lowercases
// /^[a-z]*$/
