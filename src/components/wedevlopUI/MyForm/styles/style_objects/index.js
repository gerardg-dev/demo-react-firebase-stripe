import flexColumn from "./flexPositions/column";
import flexRow from "./flexPositions/row";

const fontFamily = "Georgia, serif"; // "Roboto, Open Sans, Segoe UI, sans-serif"
const fontColor = "rgba(0, 0, 0, 1.0)";
const fontSize = "10px";
const fontWeight = 500;

const defaultPlaceholderFontColor = "rgba(0, 0, 0, 0.5)";

const form = {
  // border: "solid lightGreen 10px",
  display: "inline-block",
  backgroundColor: "white",
  margin: 0,
  padding: 0,
  color: "black",
  fontSize: fontSize,
  fontFamily: fontFamily
};

const formHeader = {
  // ...flexColumn.center,
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  ...{
    // border: "solid green 2px",
    width: "100%"
  }
};

const formFooter = {
  // ...flexColumn.center,
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  ...{
    // border: "solid blue 2px",
    width: "100%"
  }
};

// leave as is if possible, to avoid breaking functionality
const formMainRow = {
  // border: "solid 2px orange",
  // maxWidth: "100%",
  // height: "100px",
  margin: "0 auto",
  padding: 0,
  //
  boxSizing: "borderBox",
  //
  overflow: "hidden"
  //
  // content: "",
  // display: "table",
  // clear: "both",
};

const formTitle = {};
const formSubtitle = {};

// leave as is if possible, to avoid breaking functionality
const row = {
  // border: "solid 2px pink",
  width: "100%",
  margin: "0 auto",
  padding: 0,
  boxSizing: "borderBox",
  overflow: "hidden"
};

// leave as is if possible, to avoid breaking functionality
const column = {
  // width: "100%",
  display: "flex",
  flexDirection: "column"
};

// leave as is if possible, to avoid breaking functionality
const columnOneOfOne = {
  // border: "solid red 2px",
  // width: "calc(100% - 5px)",
  width: "100%",
  float: "left"
  /* set column min and max width */
  /* do NOT set height, or content will not be seen properly */
};
// leave as is if possible, to avoid breaking functionality
const columnOneOfTwo = {
  // border: "solid green 2px",
  /*     width: calc((100% - 2 * 5px) / 2); */
  // width: "calc((100% - 8 * 1px) / 2)",
  width: "calc(100% / 2)",
  float: "left"
  /* set column min and max width */
  /* do NOT set height, or content will not be seen properly */
};
// leave as is if possible, to avoid breaking functionality
const columnOneOfThree = {
  // border: "solid blue 2px",
  // width: "calc((100% - 2.5 * 5px) / 3)",
  width: "calc(100% / 3)",
  float: "left"
  /* set column min and max width */
  /* do NOT set height, or content will not be seen properly */
};
// leave as is if possible, to avoid breaking functionality
const columnTwoOfThree = {
  // border: "solid blue 2px",
  width: "calc((100% / 3) * 2)",
  float: "left"
  /* set column min and max width */
  /* do NOT set height, or content will not be seen properly */
};
// leave as is if possible, to avoid breaking functionality
const columnOneOfFour = {
  // border: "solid black 2px",
  // width: "calc((100% - 3.25 * 5px) / 4)",
  width: "calc(100% / 4)",
  float: "left"
  /* set column min and max width */
  /* do NOT set height, or content will not be seen properly */
};
// leave as is if possible, to avoid breaking functionality
const columnTwoOfFour = {
  // border: "solid black 2px",
  width: "calc((100% / 4) * 2)",
  float: "left"
  /* set column min and max width */
  /* do NOT set height, or content will not be seen properly */
};
// leave as is if possible, to avoid breaking functionality
const columnThreeOfFour = {
  // border: "solid orange 2px",
  // width: "calc(((100% - 3.25 * 5px) / 4) * 3)",
  width: "calc((100% / 4) * 3)",
  float: "left"
  /* set column min and max width */
  /* do NOT set height, or content will not be seen properly */
};

const fieldset = {};
const legend = {};
const inputGroup = {};

const labelContainer = {
  ...flexRow.center,
  // ...{
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  ...{
    // display: "inline-block",
    // border: "solid green 2px",
  }
};
const label = {
  ...flexRow.center,
  ...{
    // border: "solid blue 2px"
  }
};

const inputContainer = {};
const input = {};
const inputLabel = {};
const inputSpan1 = { display: "none" };
const inputSpan2 = { display: "none" };

const selectContainer = {};
const select = {};
const introOption = {};
const option = {};

const radioControlContainer = { ...flexColumn.center, ...{} };
const radioControl = {};
const radio = {};
const radioLabel = { ...flexRow.centerLeft, ...{} };
const radioSpan1 = { display: "none" };
const radioSpan2 = { display: "none" };

const checkboxControlContainer = { ...flexColumn.center, ...{} };
const checkboxControl = {};
const checkbox = {};
const checkboxLabel = { ...flexRow.centerLeft, ...{} };
const checkboxSpan1 = { display: "none" };
const checkboxSpan2 = { display: "none" };

const button = {
  ...flexRow.center,
  ...{
    // border: "solid orange 3px"
  }
};

const textareaContainer = {};
const textarea = {};
const textareaLabel = {};
const textareaSpan1 = { display: "none" };
const textareaSpan2 = { display: "none" };

const formError = { color: "red" };

const errorLabelsContainer = { ...flexColumn.topLeft, ...{ color: "red" } };
const errorLabel = { color: "red" };

const submitButton = {
  ...flexRow.center,
  ...{
    // border: "solid lightGreen 2px",
    backgroundColor: "lightGreen",
    padding: "5px",
    color: "white",
    textDecoration: "none"
  }
};
const submitButtonDisabled = {
  ...flexRow.center,
  ...{
    // border: "solid black 2px",
    backgroundColor: "lightGray",
    padding: "5px",
    color: "gray",
    textDecoration: "none"
  }
};

export default {
  form,
  formHeader,
  formFooter,
  formMainRow,
  //
  formTitle,
  formSubtitle,
  //
  row,
  column,
  columnOneOfOne,
  columnOneOfTwo,
  columnOneOfThree,
  columnTwoOfThree,
  columnOneOfFour,
  columnTwoOfFour,
  columnThreeOfFour,
  //
  fieldset,
  legend,
  inputGroup,
  //
  labelContainer,
  label,
  //
  inputContainer,
  input,
  inputLabel,
  inputSpan1,
  inputSpan2,
  //
  selectContainer,
  select,
  introOption,
  option,
  //
  radioControlContainer,
  radioControl,
  radio,
  radioLabel,
  radioSpan1,
  radioSpan2,
  //
  checkboxControlContainer,
  checkboxControl,
  checkbox,
  checkboxLabel,
  checkboxSpan1,
  checkboxSpan2,
  //
  button,
  //
  textareaContainer,
  textarea,
  textareaLabel,
  textareaSpan1,
  textareaSpan2,
  //
  formError,
  //
  errorLabelsContainer,
  errorLabel,
  //
  submitButton,
  submitButtonDisabled
};
