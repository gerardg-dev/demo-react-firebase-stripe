const defaultFontFamily = "Roboto, Open Sans, Segoe UI, sans-serif";
const defaultFontColor = "rgba(0, 0, 0, 1.0)";
const defaultFontSize = "14px";
const defaultFontWeight = 500;

const defaultPlaceholderFontColor = "rgba(0, 0, 0, 0.5)";

// FORM CONTAINER
const form = {
  backgroundColor: "lightGray",
  // backgroundColor: "rgba(0, 0, 0, 0.25)",
  // borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "gray",
  borderRadius: "10px",
  width: "100%",
  minWidth: "250px",
  maxWidth: "600px"
};

const title = {
  color: defaultFontColor,
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeight: defaultFontWeight
};

const subtitle = {
  color: defaultFontColor,
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeight: defaultFontWeight
};

const inputLabel = {
  color: defaultFontColor,
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeight: defaultFontWeight
};

const input = {
  // backgroundColor: "rgba(255, 255, 255, 1.0)",
  width: "100%",
  height: "40px",
  margin: 0,
  padding: "10px",
  color: defaultFontColor, // affects the border color, and text, but not stripe elements inputs text
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeight: defaultFontWeight,
  outline: "none" // removes the glow color when input is focus
  //
  // "::-webkit-input-placeholder": {
  //   /* Edge */
  //   color: "green",
  //   fontSize: "4px"
  // },
  // ":-ms-input-placeholder": {
  //   /* Internet Explorer 10-11 */
  //   color: "green",
  //   fontSize: "4px"
  // }
};

const baseInput1 = {
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  borderStyle: "none"
};

const baseInput2 = {
  backgroundColor: "rgba(255, 255, 255, 0.0)",
  borderStyle: "solid",
  borderTopWidth: "0px",
  borderLeftWidth: "0px",
  borderRightWidth: "0px",
  borderBottomWidth: "1px",
  borderColor: "white"
};

const baseInput3 = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  borderRadius: "20px",
  borderStyle: "none"
};

const baseInput4 = {
  backgroundColor: "rgba(255, 255, 255, 0.0)",
  borderRadius: "20px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "rgba(255, 255, 255, 1.0)"
};

const invalidInput = {};

const placeholder = {};

const error = {
  color: "red",
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeight: defaultFontWeight
  // backgroundColor: "orange",
  // borderStyle: "solid",
  // borderWidth: "2px",
  // borderColor: "red"
};

const baseSubmitButton1 = {
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  borderStyle: "none",
  borderRadius: "2px"
};
const baseSubmitButton2 = {
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  borderStyle: "solid",
  borderRadius: "2px",
  borderWidth: "2px",
  borderColor: "rgba(0, 0, 0, 0.75)"
};
const baseSubmitButton3 = {
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  borderStyle: "none",
  borderRadius: "50px"
};
const baseSubmitButton4 = {
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  borderStyle: "solid",
  borderRadius: "50px",
  borderWidth: "2px",
  borderColor: "rgba(0, 0, 0, 0.75)"
};
const baseSubmitButton5 = {};
const baseSubmitButton6 = {};
const baseSubmitButton7 = {};
const baseSubmitButton8 = {};

const submitButton = {
  width: "100%",
  height: "50px",
  padding: "12px",
  color: defaultFontColor,
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeight: defaultFontWeight
};

const footnote = {
  color: defaultFontColor,
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeight: defaultFontWeight,
  marginTop: "10px"
};

// Stripe Element Inputs: Card Detals, Card Number, Card Expiry, Card CVC
// const stripeElements = {
//   // style: {
//   base: {
//     // Add your base input styles here. For example:
//     backgroundColor: "black",
//     // fontSize: "10px",
//     // color: "#32325g",
//     color: "blue",
//     fontWeight: 500,
//     fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//     fontSize: "16px",
//     ":-webkit-autofill": {
//       color: "#fce883"
//     },
//     "::placeholder": {
//       // color: "#87BBFD"
//       color: "green",
//       fontWeight: 500,
//       fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//       fontSize: "16px"
//     }
//   }
//   // }
// };

const stripeElements = {
  iconStyle: "solid",
  style: {
    base: {
      // iconColor: "#c4f0ff",
      iconColor: "gray",
      // backgroundColor: "black",
      color: defaultFontColor,
      fontSize: defaultFontSize,
      fontFamily: defaultFontFamily,
      fontWeight: defaultFontWeight,
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883"
      },
      "::placeholder": {
        color: defaultPlaceholderFontColor,
        fontSize: defaultFontSize,
        fontFamily: defaultFontFamily,
        fontWeight: defaultFontWeight
      }
    },
    invalid: {
      // iconColor: "#FFC7EE",
      iconColor: "red",
      color: "red",
      fontSize: defaultFontSize,
      fontFamily: defaultFontFamily,
      fontWeight: defaultFontWeight
      // ":focus": {
      //   color: "#303238"
      // }
    }
  }
};

const verticalInputSeparatorHeight = { height: "10px" };
const horizontalInputSeparatorWidth = { width: "10px" };
const hr = { margin: 0, height: "1px", backgroundColor: "white" };

export default {
  form,
  title,
  subtitle,
  inputLabel,
  baseInput1,
  baseInput2,
  baseInput3,
  baseInput4,
  input,
  invalidInput,
  placeholder,
  error,
  baseSubmitButton1,
  baseSubmitButton2,
  baseSubmitButton3,
  baseSubmitButton4,
  baseSubmitButton5,
  baseSubmitButton6,
  baseSubmitButton7,
  baseSubmitButton8,
  submitButton,
  footnote,
  stripeElements,
  //
  verticalInputSeparatorHeight,
  horizontalInputSeparatorWidth,
  hr
};
