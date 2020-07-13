const defaultFontFamily = "Roboto, Open Sans, Segoe UI, sans-serif";
const defaultFontColor = "rgba(0, 0, 0, 1.0)";
const defaultFontSize = "14px";
const defaultFontWeight = 500;

const defaultPlaceholderFontColor = "rgba(0, 0, 0, 0.5)";

// FORM CONTAINER
const formStyle = {
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

const titleStyle = {
  color: defaultFontColor,
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeight: defaultFontWeight
};

const subtitleStyle = {
  color: defaultFontColor,
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeight: defaultFontWeight
};

const inputLabelStyle = {
  color: defaultFontColor,
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeight: defaultFontWeight
};

const inputStyle = {
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

const baseInputStyle1 = {
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  borderStyle: "none"
};

const baseInputStyle2 = {
  backgroundColor: "rgba(255, 255, 255, 0.0)",
  borderStyle: "solid",
  borderTopWidth: "0px",
  borderLeftWidth: "0px",
  borderRightWidth: "0px",
  borderBottomWidth: "1px",
  borderColor: "white"
};

const baseInputStyle3 = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  borderRadius: "20px",
  borderStyle: "none"
};

const baseInputStyle4 = {
  backgroundColor: "rgba(255, 255, 255, 0.0)",
  borderRadius: "20px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "rgba(255, 255, 255, 1.0)"
};

const invalidInputStyle = {};

const placeholderStyle = {};

const errorStyle = {
  color: "red",
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeight: defaultFontWeight
  // backgroundColor: "orange",
  // borderStyle: "solid",
  // borderWidth: "2px",
  // borderColor: "red"
};

const baseSubmitButtonStyle1 = {
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  borderStyle: "none",
  borderRadius: "2px"
};
const baseSubmitButtonStyle2 = {
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  borderStyle: "solid",
  borderRadius: "2px",
  borderWidth: "2px",
  borderColor: "rgba(0, 0, 0, 0.75)"
};
const baseSubmitButtonStyle3 = {
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  borderStyle: "none",
  borderRadius: "50px"
};
const baseSubmitButtonStyle4 = {
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  borderStyle: "solid",
  borderRadius: "50px",
  borderWidth: "2px",
  borderColor: "rgba(0, 0, 0, 0.75)"
};
const baseSubmitButtonStyle5 = {};
const baseSubmitButtonStyle6 = {};
const baseSubmitButtonStyle7 = {};
const baseSubmitButtonStyle8 = {};

const submitButtonStyle = {
  width: "100%",
  height: "50px",
  padding: "12px",
  color: defaultFontColor,
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeight: defaultFontWeight
};

const footnoteStyle = {};

// Stripe Element Inputs: Card Detals, Card Number, Card Expiry, Card CVC
// const stripeElementsStyle = {
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

const stripeElementsStyle = {
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
const hrStyle = { margin: 0, height: "1px", backgroundColor: "white" };

export default {
  formStyle,
  titleStyle,
  subtitleStyle,
  inputLabelStyle,
  baseInputStyle1,
  baseInputStyle2,
  baseInputStyle3,
  baseInputStyle4,
  inputStyle,
  invalidInputStyle,
  placeholderStyle,
  errorStyle,
  baseSubmitButtonStyle1,
  baseSubmitButtonStyle2,
  baseSubmitButtonStyle3,
  baseSubmitButtonStyle4,
  baseSubmitButtonStyle5,
  baseSubmitButtonStyle6,
  baseSubmitButtonStyle7,
  baseSubmitButtonStyle8,
  submitButtonStyle,
  footnoteStyle,
  stripeElementsStyle,
  //
  verticalInputSeparatorHeight,
  horizontalInputSeparatorWidth,
  hrStyle
};
