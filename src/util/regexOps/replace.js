export const capitalizeFirstLetterOfString = (str) => {
  // gets first letter of string
  let regularExp = /^\w/;
  return str.replace(regularExp, match => match.toUpperCase());
}
// console.log("capitalizeFirstLetterOfString");
// console.log(capitalizeFirstLetterOfString("to be continued"));

export const capitalizeFirstLetterOfEachWord = (str) => {
  // gets initial letter from each word
  let regularExp = /(^\w{1})|(\s{1}\w{1})/g;
  return str.replace(regularExp, match => match.toUpperCase());
};
// console.log("capitalizeFirstLetterOfEachWord");
// console.log(capitalizeFirstLetterOfEachWord("the end"));

// US Phone Number
export const formatPhoneNumber1 = (str) => {
  const match = str
    .replace(/\D+/g, '').replace(/^1/, '')
    .match(/([^\d]*\d[^\d]*){1,10}$/)[0]
  const part1 = match.length > 2 ? `(${match.substring(0,3)})` : match
  const part2 = match.length > 3 ? ` ${match.substring(3, 6)}` : ''
  const part3 = match.length > 6 ? `-${match.substring(6, 10)}` : ''
  return `${part1}${part2}${part3}`;
};
// console.log("formatPhoneNumber1");
// console.log(formatPhoneNumber1("1234567890123"));
