export const isEmailPattern = (str) => {
  // let regularExp = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  let regularExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
}
// console.log("isValidEmail");
// console.log(isValidEmail("myname@mail.com"));
// console.log(isValidEmail("myname@mail."));
