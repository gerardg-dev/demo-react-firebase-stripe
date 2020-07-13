// HOW TO MAKE IT RESPONSIVE ?
// FORM MAIN ROW? AND FORM COLUMNS?
// PASS MIN AND MAX WIDTHS, 2 approaches, by propery name, or by passing a class or style object
// If by property, easier, but hard if youre not working with pixels but REMs
// If by styling obj or className, harder, but very dianamic if working with REMS, EMs or others

// IMPORTANT
// Column Styles or ClassNames
// You can pass min-width and max-width but do not pass height, or content
// will not show properly
// Normally you will pass min and max widths along with padding, flex content align

// This Component makes use of Style Objects by default and ClassNames as secondary
// Use style objects by default,
// But classNames as second,
// Default style objects with options to override, and 2nd style obj to Add
// Default classNames with options to override, and 2nd classNames to Add
// COMPONENT PROPS for Styling
// • styles: { elementName } // Overrides Default styles
// • addStyles: { elementName } // Adds styles without overriding default
// • className: { elementName } // Overrides Default className
// • addClassName: { elementName } // Adds classes without overriding default

// TASKS:
// FIGURE OUT HOW TO RENDER COLUMNS AND MAKE IT ONLY 1 COLUMN for responsiveness
// HOW TO RENDER A ROW CONTAINER, FOR A SET OF INPIUTS IN A ROW
// OR A SET OF CHECK, RADIO, OR CUSTOM BUTTONS IN A ROW
// ORDER CONTENT INLINE NEXT TO EACH OTHER, ORRR, IN A GRID OF 1x1 2x3 etc
// configObjs for each Form Element
// configObjs, initValue, currValue, cbFunctions, and functions to return values
// hooks?
// use refs to make parent able to call child functions (this component functions)

// be able to pass external validation function, callback,
// that way we can run some other logic outside this component to validate this form,
// perhaps at parent, there might be other external logic that may
// decide if this form is valid or not...

import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import { intlShape, FormattedMessage } from "react-intl";
import { defineMessages, injectIntl } from "react-intl"; // https://github.com/formatjs/react-intl/issues/1051
import IntlMessages from "util/IntlMessages";

import intlMsgFirebaseErr from "../../../util/intlMsgFirebaseErr";
import {
  isNotEmpty,
  isEmailValid,
  doEmailsMatch,
  isPasswordValid,
  doPasswordsMatch,
  isFullNameValid,
  isCompanyNameValid,
  isPhoneNumberValid
} from "../../../util/inputValidation";

// Material UI Icons Full List
// https://material-ui.com/components/material-icons/
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ArrowBack } from "@material-ui/icons";

import styleObjects from "./styles/style_objects/index.js";
import stylesCSS from "./styles/css/default.css";

// utils

const objHasKey = (obj, key) => key in obj;

const isObjectEmpty = obj => {
  if (obj === null || obj === undefined) return null;
  let ans =
    Object.keys(obj).length === 0 && obj.constructor === Object ? true : false;
  return ans;
};

// default styles
const defaultStyles = {
  style: {
    form: styleObjects.form,
    formHeader: styleObjects.formHeader,
    formFooter: styleObjects.formFooter,
    formMainRow: styleObjects.formMainRow,
    // form elements
    row: styleObjects.row,
    column: styleObjects.column,
    columnOneOfOne: styleObjects.columnOneOfOne,
    columnOneOfTwo: styleObjects.columnOneOfTwo,
    columnOneOfThree: styleObjects.columnOneOfThree,
    columnTwoOfThree: styleObjects.columnTwoOfThree,
    columnOneOfFour: styleObjects.columnOneOfFour,
    columnTwoOfFour: styleObjects.columnTwoOfFour,
    columnThreeOfFour: styleObjects.columnThreeOfFour,
    fieldset: {},
    legend: {},
    inputGroup: {},
    input: {},
    inputContainer: {},
    inputLabel: {},
    inputErrorLabel: {},
    inputSpan1: styleObjects.inputSpan1,
    inputSpan2: styleObjects.inputSpan2,
    label: {},
    select: {},
    radioBtns: {},
    checkBtns: {},
    customBtns: {},
    textarea: {},
    formError: {},
    btnClose: {},
    btnCancel: {},
    btnSubmit: { border: "solid lightGreen 5px" }, // row, disabled and enabled styles
    btnSubmitDisabled: { solid: "solid white 5px" }, // row, disabled and enabled styles
    btnExtra: {}
  },
  addStyle: {
    form: {},
    formHeader: {},
    formFooter: {},
    formMainRow: {},
    // form elements
    row: {},
    column: {},
    columnOneOfOne: {},
    columnOneOfTwo: {},
    columnOneOfThree: {},
    columnTwoOfThree: {},
    columnOneOfFour: {},
    columnTwoOfFour: {},
    columnThreeOfFour: {},
    fieldset: {},
    legend: {},
    inputGroup: {},
    input: {},
    inputContainer: {},
    inputLabel: {},
    inputErrorLabel: {},
    inputSpan1: {},
    inputSpan2: {},
    label: {},
    select: {},
    radioBtns: {},
    checkBtns: {},
    customBtns: {},
    textarea: {},
    formError: {},
    btnClose: {},
    btnCancel: {},
    btnSubmit: {},
    btnSubmitDisabled: {},
    btnExtra: {}
  }
};

// default class names
const defaultClassNames = {
  className: {
    form: "",
    formHeader: "",
    formFooter: "",
    formMainRow: "wedevlopUI-myform-form-main-row",
    // form elements
    row: "",
    column: "",
    columnOneOfOne: "",
    columnOneOfTwo: "",
    columnOneOfThree: "",
    columnTwoOfThree: "",
    columnOneOfFour: "",
    columnTwoOfFour: "",
    columnThreeOfFour: "",
    fieldset: "",
    legend: "",
    inputGroup: "",
    input: "",
    inputContainer: "",
    inputLabel: "",
    inputErrorLabel: "",
    inputSpan1: "",
    inputSpan2: "",
    label: "",
    select: "",
    radioBtns: "",
    checkBtns: "",
    customBtns: "",
    textarea: "",
    formError: "",
    btnClose: "",
    btnCancel: "",
    btnSubmit: "",
    btnSubmitDisabled: "",
    btnExtra: ""
  },
  addClassName: {
    form: "",
    formHeader: "",
    formFooter: "",
    formMainRow: "",
    // form elements
    row: "",
    column: "",
    columnOneOfOne: "",
    columnOneOfTwo: "",
    columnOneOfThree: "",
    columnTwoOfThree: "",
    columnOneOfFour: "",
    columnTwoOfFour: "",
    columnThreeOfFour: "",
    fieldset: "",
    legend: "",
    inputGroup: "",
    input: "",
    inputContainer: "",
    inputLabel: "",
    inputErrorLabel: "",
    inputSpan1: "",
    inputSpan2: "",
    label: "",
    select: "",
    radioBtns: "",
    checkBtns: "",
    customBtns: "",
    textarea: "",
    formError: "",
    btnClose: "",
    btnCancel: "",
    btnSubmit: "",
    btnSubmitDisabled: "",
    btnExtra: ""
  }
};

const configObjs = {
  //
  // FORM CONFIG ---------------------------------------------------------------
  //
  formOptions: {
    autoComplete: "off",
    columns: [
      {
        element: "column",
        rowNumber: 1,
        columnNumber: 1,
        columnSize: "1-of-1",
        style: {},
        addStyle: {},
        className: "",
        addClassName: ""
      }
    ]
  },
  formElements: [],
  //
  // VALIDATION RULES ----------------------------------------------------------
  //
  validationRules: {
    none: {
      name: "none"
    },
    required: {
      name: "required",
      inputNames: [],
      errorText: "Required",
      intlMsgID: "input.validation.error",
      useIntlMsgID: false
    }
  },
  //
  // FORM ELEMENTS -------------------------------------------------------------
  //
  row: {
    // • Element Init Config
    element: "row",
    rowNumber: 2, // form contains a main row, formMainRow, which rowNumber is 1, any additional row starts with rowNumber 2
    columnNumber: 1,
    columns: [
      {
        element: "column",
        rowNumber: 1,
        columnNumber: 1,
        columnSize: "1-of-1",
        style: {},
        addStyle: {},
        className: "",
        addClassName: ""
      }
    ],
    formElements: [],
    // • Styling
    style: {}, // in case you need a unique style for an element
    addStyle: {},
    className: "", // in case you need a unique className for an element
    addClassName: ""
  },
  column: {
    // • Element Init Config
    element: "column",
    rowNumber: 1,
    columnNumber: 1,
    columnSize: "1-of-1",
    // • Styling
    style: {}, // in case you need a unique style for an element
    addStyle: {},
    className: "", // in case you need a unique className for an element
    addClassName: ""
  },
  fieldset: {
    // • Element Init Config
    // • Element Properties
    // • Styling
    style: {}, // in case you need a unique style for an element
    addStyle: {},
    className: "", // in case you need a unique className for an element
    addClassName: ""
  },
  legend: {
    // • Element Init Config
    // • Element Properties
    // • Styling
    style: {}, // in case you need a unique style for an element
    addStyle: {},
    className: "", // in case you need a unique className for an element
    addClassName: ""
  },
  label: {
    // • Element Init Config
    element: "label",
    rowNumber: 1,
    columnNumber: 1,
    // • Element Properties
    // • Styling
    style: {}, // in case you need a unique style for an element
    addStyle: {},
    className: "", // in case you need a unique className for an element
    addClassName: ""
  },
  input: {
    // • Element Init Config
    element: "input",
    rowNumber: 1,
    columnNumber: 1,
    initValue: "",
    // • Element Properties
    id: "",
    name: "myInput",
    type: "text",
    value: "",
    autoComplete: "off",
    // • Styling
    style: {}, // in case you need a unique style for an element
    addStyle: {},
    className: "", // in case you need a unique className for an element
    addClassName: "",
    //
    container: {
      // • Styling
      style: {}, // in case you need a unique style for an element
      addStyle: {},
      className: "", // in case you need a unique className for an element
      addClassName: ""
    },
    inputSpan1: {
      // • Styling
      style: {}, // in case you need a unique style for an element
      addStyle: {},
      className: "", // in case you need a unique className for an element
      addClassName: ""
    },
    inputSpan2: {
      // • Styling
      style: {}, // in case you need a unique style for an element
      addStyle: {},
      className: "", // in case you need a unique className for an element
      addClassName: ""
    },
    placeholder: {
      text: "Placeholder",
      intlMsgID: "enter.text",
      useIntlMsgID: false
    },
    label: {
      text: "Label",
      intlMsgID: "enter.text",
      useIntlMsgID: false,
      //
      position: "left", // "top", "bottom", "left", "right".
      // • Styling
      style: {}, // in case you need a unique style for an element
      addStyle: {},
      className: "", // in case you need a unique className for an element
      addClassName: ""
    },
    errorLabel: {
      text: "Error Label",
      intlMsgID: "invalid.input",
      useIntlMsgID: false,
      // • Styling
      style: {}, // in case you need a unique style for an element
      addStyle: {},
      className: "", // in case you need a unique className for an element
      addClassName: ""
    },
    validationRules: []
    // validationRules: [
    //   {
    //     name: "",
    //     inputNames: {},
    //     // names may vary, can be your own custom names, or specific names
    //     // required set by the validation rule.
    //     // If custom name just pass { name: "your_input_name" }
    //     // If required name check docs to see what keynames you should use instead of key 'name'
    //     errorText: "Validation Rule Did Not Passed",
    //     errorIntlMsgID: "input.validation.error",
    //     useIntlMsgID: false
    //   }
    // ]
  },
  textarea: {
    // • Element Init Config
    element: "textarea",
    rowNumber: 1,
    columnNumber: 1,
    // • Element Properties
    // • Styling
    style: {}, // in case you need a unique style for an element
    addStyle: {},
    className: "", // in case you need a unique className for an element
    addClassName: ""
  },
  select: {
    // • Element Init Config
    element: "select",
    rowNumber: 1,
    columnNumber: 1,
    // • Element Properties
    id: "",
    name: "",
    type: "text",
    autoComplete: "off",
    // • Styling
    style: {}, // in case you need a unique style for an element
    addStyle: {},
    className: "", // in case you need a unique className for an element
    addClassName: ""
  },
  radioBtns: {
    // • Element Init Config
    element: "radioBtns",
    rowNumber: 1,
    columnNumber: 1,
    // • Element Properties
    // • Styling
    style: {}, // in case you need a unique style for an element
    addStyle: {},
    className: "", // in case you need a unique className for an element
    addClassName: ""
  },
  checkBtns: {
    // • Element Init Config
    element: "checkBtns",
    rowNumber: 1,
    columnNumber: 1,
    // • Element Properties
    // • Styling
    style: {}, // in case you need a unique style for an element
    addStyle: {},
    className: "", // in case you need a unique className for an element
    addClassName: ""
  },
  customBtns: {
    // • Element Init Config
    element: "customButton",
    rowNumber: 1,
    columnNumber: 1,
    orientation: "", // "horizontal" "vertical"
    // • Element Properties
    // inline next to each other, vs using a grid 1x1 3x2
    // • Styling
    style: {}, // in case you need a unique style for an element
    addStyle: {},
    className: "", // in case you need a unique className for an element
    addClassName: ""
  },
  submitBtn: {
    // • Element Init Config
    // • Element Properties
    // • Styling
    style: {}, // in case you need a unique style for an element
    addStyle: {},
    className: "", // in case you need a unique className for an element
    addClassName: ""
  }
};

class MyForm extends React.Component {
  handleOnInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      inputValues: { ...this.state.inputValues, ...{ [name]: value } }
    });
    // this.setState({ ...this.state.inputValues, ...{ [name]: value } });
  };

  constructor(props) {
    super(props);
    this.state = {
      //
      isFormFilled: false,
      isFormSubmitted: false,
      isFormValid: false,
      //
      inputValues: props.inputValues,
      //
      // This component makes use of an object to organize the styles and classes of the form elmements:
      // style: { form: {}, input: {}, button: {} };
      // addStyle: { form: {}, input: {}, button: {} };
      // className: { form: "", input: "", button: "" };
      // addClassName: { form: "", input: "", button: "" };
      // Hence, below we merge the default styles container object, with the
      // styles container object the user passed as props.
      style: { ...defaultStyles.style, ...props.style },
      addStyle: { ...defaultStyles.addStyle, ...props.addStyle },
      className: { ...defaultClassNames.className, ...props.className },
      addClassName: {
        ...defaultClassNames.addClassName,
        ...props.addClassName
      },
      //
      formOptions: { ...configObjs.formOptions, ...props.formOptions },
      formElements: [...configObjs.formElements, ...props.formElements],
      // formElements: [ _.merge(configObjs.formElements, props.formElements) ]
      //
      formErrorText: props.formErrorText,
      formErrorIntlMsgID: props.formErrorIntlMsgID,
      formErrorUseIntlMsgID: props.formErrorUseIntlMsgID
      //
    };
  }

  async componentDidMount() {}

  componentDidUpdate() {
    // if (this.props.shouldShowAlertMessage) {
    //   setTimeout(() => {
    //     this.props.hideAlertMessage();
    //   }, 100);
    // }
    // if (this.props.authUser === null) {
    //   this.props.history.push(urls.home);
    // }
  }

  renderFormError = () => {
    const { formErrorText, formErrorIntlMsgID, formErrorUseIntlMsgID } = this.state;

    if (formErrorUseIntlMsgID === false && formErrorText.length > 0) {
      return (
        <label style={{ border: "solid red 2px", padding: "5px" }}>
          {formErrorText}
        </label>
      );
    }
    if (formErrorUseIntlMsgID === true) {
      return (
        <label style={{ border: "solid red 2px", padding: "5px" }}>
          <IntlMessages id={formErrorIntlMsgID} />
        </label>
      );
    }
  };

  // OBJECT FORMATTING

  formatElementObj = elementObj => {
    console.log(">>> AT: formatElementObj()");
    console.log("elementObj");
    console.log(elementObj);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

    if (elementObj && elementObj.element === undefined) return;
    let element = elementObj.element;
    let elementConfigObj = configObjs[element];
    // return { ...configObjs[element], ...elementObj };
    // return _.merge(elementConfigObj, elementObj);
    const formattedElementObj = _.merge(elementConfigObj, elementObj);
    return formattedElementObj;
  };

  formatFormOptions = formOptions => {
    // formOptions format
    let _formOptions = { ...configObjs.formOptions, ...formOptions };

    // formOptions.columns format
    let formatttedColsArr = [];
    let _columns = _formOptions.columns;

    _columns.map((col, i) => {
      let formattedCol = { ...configObjs.column, ..._columns[i] };
      formatttedColsArr.push(formattedCol);
    });

    return {
      ..._formOptions,
      ...{ columns: formatttedColsArr }
    };
  };

  getElementStyles = elementObj => {
    // an element has default styling for all elements of same kind in form
    // default styles are: styles, addStyles, className, addClassName
    // with style objects as default and classNames empty string, no classes by default
    // However, classes are on top of styles...
    // An element, gets styling provided general for all elements of same kind,
    // however if you need a unique styling for only one element of the same kind
    // without affecting all other default styling of same kind, then you can also
    // pass styling for individual element of same kind, (styles, addStyles, className, addClassName)
    const stateStyles = {
      style: this.state.style,
      addStyle: this.state.addStyle,
      className: this.state.className,
      addClassName: this.state.addClassName
    };
    const propsStyles = {
      style: this.props.style,
      addStyle: this.props.addStyle,
      className: this.props.className,
      addClassName: this.props.addClassName
    };

    // console.log("PROPS STYLES");
    // console.log(propsStyles);
    // console.log("STATE STYLES");
    // console.log(stateStyles);

    let _elementObj = this.formatElementObj(elementObj);
    let element = _elementObj.element;

    // console.log("--- getElementStyles() elementObj");
    // console.log(elementObj);
    // console.log("--- getElementStyles() _elementObj");
    // console.log(_elementObj);
    // console.log("--- getElementStyles() element");
    // console.log(element);

    let _style = {};
    let _addStyle = {};
    let _className = "";
    let _addClassName = "";

    // ASSING STYLES FOR ALL ELEMENTS OF SAME KIND (input, select, textarea, etc.)
    // (style, addStyle, className, addClassName)
    // CHECKING COMPONENT PROPS: style, addStyle, className and addClassName
    // <MyForm style={ element: {} } addStyle={ element: {} } className={ element: {} } addClassName={ element: {} } />

    const isElementStyleObjectPassedAsProp = elementName => {
      if (propsStyles.style === undefined) return false;
      if (propsStyles.style === null) return false;
      if (isObjectEmpty(propsStyles.style)) return false;
      if (!objHasKey(propsStyles.style, elementName)) return false;
      if (isObjectEmpty(propsStyles.style[elementName])) return false;
      return true;
    };
    const isElementAddStyleObjectPassedAsProp = elementName => {
      if (propsStyles.addStyle === undefined) return false;
      if (propsStyles.addStyle === null) return false;
      if (isObjectEmpty(propsStyles.addStyle)) return false;
      if (!objHasKey(propsStyles.addStyle, elementName)) return false;
      if (isObjectEmpty(propsStyles.addStyle[elementName])) return false;
      return true;
    };
    const isElementClassNamePassedAsProp = elementName => {
      if (propsStyles.className === undefined) return false;
      if (propsStyles.className === null) return false;
      if (isObjectEmpty(propsStyles.className)) return false;
      if (!objHasKey(propsStyles.className, elementName)) return false;
      if (propsStyles.className[elementName].length === 0) return false;
      return true;
    };
    const isElementAddClassNamePassedAsProp = elementName => {
      if (propsStyles.addClassName === undefined) return false;
      if (propsStyles.addClassName === null) return false;
      if (isObjectEmpty(propsStyles.addClassName)) return false;
      if (!objHasKey(propsStyles.addClassName, elementName)) return false;
      if (propsStyles.addClassName[elementName].length === 0) return false;
      return true;
    };

    _style = isElementStyleObjectPassedAsProp(element)
      ? propsStyles.style[element]
      : stateStyles.style[element];
    _addStyle = isElementAddStyleObjectPassedAsProp(element)
      ? { ...stateStyles.addStyle[element], ...propsStyles.addStyle[element] }
      : stateStyles.addStyle[element];
    _className = isElementClassNamePassedAsProp(element)
      ? propsStyles.className[element]
      : stateStyles.className[element];
    _addClassName = isElementAddClassNamePassedAsProp(element)
      ? `${stateStyles.addClassName[element]} ${propsStyles.addClassName[element]}`
      : stateStyles.addClassName[element];

    // ASSING STYLES FOR A SINGLE ELEMENT (input, select, textarea, etc.)
    // (style, addStyle, className, addClassName)
    // CHECKING ELEMENT OBJECT KEYS: style, addStyle, className and addClassName
    // <MyForm formElements{[
    //   { element: "input", style: {} addStyle: {} className: "" addClassName: "" }
    // ]} />

    const isStyleObjectFoundAtElementObj = elemObj => {
      if (!objHasKey(elemObj, "style")) return false;
      if (isObjectEmpty(elemObj.style)) return false;
      return true;
    };
    const isAddStyleObjectFoundAtElementObj = elemObj => {
      if (!objHasKey(elemObj, "addStyle")) return false;
      if (isObjectEmpty(elemObj.addStyle)) return false;
      return true;
    };
    const isClassNameFoundAtElementObj = elemObj => {
      if (!objHasKey(elemObj, "className")) return false;
      if (elemObj.className.length === 0) return false;
      return true;
    };
    const isAddClassNameFoundAtElementObj = elemObj => {
      if (!objHasKey(elemObj, "addClassName")) return false;
      if (elemObj.addClassName.length === 0) return false;
      return true;
    };

    _style = isStyleObjectFoundAtElementObj(_elementObj)
      ? _elementObj.style
      : _style;
    _addStyle = isAddStyleObjectFoundAtElementObj(_elementObj)
      ? _elementObj.addStyle
      : _addStyle;
    _className = isClassNameFoundAtElementObj(_elementObj)
      ? _elementObj.className
      : _className;
    _addClassName = isAddClassNameFoundAtElementObj(_elementObj)
      ? _elementObj.addClassName
      : _addClassName;

    return {
      style: _style,
      addStyle: _addStyle,
      className: _className,
      addClassName: _addClassName
    };
  };

  renderFormMainRowContent = () => {
    const { formOptions } = this.state;
    const { formElements } = this.state;

    let _formOptions = this.formatFormOptions(formOptions);

    // console.log("renderFormMainRowContent() _formOptions");
    // console.log(_formOptions);

    if (_formOptions && _formOptions.columns === undefined) return;
    if (_formOptions.columns.length === 0) return;
    return _formOptions.columns.map((col, i) => {
      return this.renderColumn(
        col,
        1,
        col.columnNumber,
        col.columnSize,
        formElements
      );
    });
  };

  renderRow = elementObj => {
    const { style, addStyle, className, addClassName } = this.state;
    let elementStyles = this.getElementStyles(elementObj);

    const { formElements } = elementObj;

    return (
      <div
        style={{
          ...style.row,
          ...elementStyles.style,
          ...elementStyles.addStyle
        }}
        className={`${className.row} ${elementStyles.className} ${elementStyles.addClassName}`}
      >
        {this.renderRowColumns(elementObj, formElements)}
      </div>
    );
  };

  renderRowColumns = (elementObj, formElements) => {
    let _elementObj = this.formatElementObj(elementObj);

    if (_elementObj && _elementObj.columns === undefined) return;
    if (_elementObj.columns.length === 0) return;
    if (_elementObj && _elementObj.formElements === undefined) return;
    if (_elementObj.formElements.length === 0) return;

    return _elementObj.columns.map((col, i) => {
      // format column object
      let columnObj = this.formatElementObj({
        ...{ element: "column" },
        ...col
      });
      return this.renderColumn(
        columnObj,
        columnObj.rowNumber,
        columnObj.columnNumber,
        columnObj.columnSize,
        formElements
      );
    });
  };

  renderColumn = (
    columnObj,
    rowNumber,
    columnNumber,
    columnSize,
    formElements
  ) => {
    const { style, addStyle, className, addClassName } = this.state;
    let elementStyles = this.getElementStyles(columnObj);

    let columnStyles;
    let columnClassNames;

    if (columnSize === "1-of-1") {
      // columnStyles = { ...style.columnOneOfOne, ...addStyle.columnOneOfOne };
      // columnClassNames = `${className.columnOneOfOne} ${addClassName.columnOneOfOne}`;
      columnStyles = {
        ...style.columnOneOfOne,
        ...elementStyles.style,
        ...elementStyles.addStyle
      };
      columnClassNames = `${className.columnOneOfOne} ${elementStyles.className} ${elementStyles.addClassName}`;
    }
    if (columnSize === "1-of-2") {
      // columnStyles = { ...style.columnOneOfTwo, ...addStyle.columnOneOfTwo };
      // columnClassNames = `${className.columnOneOfTwo} ${addClassName.columnOneOfTwo}`;
      columnStyles = {
        ...style.columnOneOfTwo,
        ...elementStyles.style,
        ...elementStyles.addStyle
      };
      columnClassNames = `${className.columnOneOfTwo} ${elementStyles.className} ${elementStyles.addClassName}`;
    }
    if (columnSize === "1-of-3") {
      // columnStyles = { ...style.columnOneOfThree, ...addStyle.columnOneOfThree };
      // columnClassNames = `${className.columnOneOfThree} ${addClassName.columnOneOfThree}`;
      columnStyles = {
        ...style.columnOneOfThree,
        ...elementStyles.style,
        ...elementStyles.addStyle
      };
      columnClassNames = `${className.columnOneOfThree} ${elementStyles.className} ${elementStyles.addClassName}`;
    }
    if (columnSize === "2-of-3") {
      // columnStyles = { ...style.columnTwoOfThree, ...addStyle.columnTwoOfThree };
      // columnClassNames = `${className.columnTwoOfThree} ${addClassName.columnTwoOfThree}`;
      columnStyles = {
        ...style.columnTwoOfThree,
        ...elementStyles.style,
        ...elementStyles.addStyle
      };
      columnClassNames = `${className.columnTwoOfThree} ${elementStyles.className} ${elementStyles.addClassName}`;
    }
    if (columnSize === "1-of-4") {
      // columnStyles = { ...style.columnOneOfFour, ...addStyle.columnOneOfFour };
      // columnClassNames = `${className.columnOneOfFour} ${addClassName.columnOneOfFour}`;
      columnStyles = {
        ...style.columnOneOfFour,
        ...elementStyles.style,
        ...elementStyles.addStyle
      };
      columnClassNames = `${className.columnOneOfFour} ${elementStyles.className} ${elementStyles.addClassName}`;
    }
    if (columnSize === "2-of-4") {
      // columnStyles = { ...style.columnTwoOfFour, ...addStyle.columnTwoOfFour };
      // columnClassNames = `${className.columnTwoOfFour} ${addClassName.columnTwoOfFour}`;
      columnStyles = {
        ...style.columnTwoOfFour,
        ...elementStyles.style,
        ...elementStyles.addStyle
      };
      columnClassNames = `${className.columnTwoOfFour} ${elementStyles.className} ${elementStyles.addClassName}`;
    }
    if (columnSize === "3-of-4") {
      // columnStyles = { ...style.columnThreeOfFour, ...addStyle.columnThreeOfFour };
      // columnClassNames = `${className.columnThreeOfFour} ${addClassName.columnThreeOfFour}`;
      columnStyles = {
        ...style.columnThreeOfFour,
        ...elementStyles.style,
        ...elementStyles.addStyle
      };
      columnClassNames = `${className.columnThreeOfFour} ${elementStyles.className} ${elementStyles.addClassName}`;
    }

    return (
      <div style={columnStyles} className={columnClassNames}>
        {/* "COLUMN ELEMENTS XXXXX" */}
        {this.renderColumnElements(rowNumber, columnNumber, formElements)}
      </div>
    );
  };

  renderColumnElements = (rowNumber, columnNumber, formElements) => {
    const { style, addStyle, className, addClassName } = this.state;

    if (formElements.length === 0) return;

    return formElements.map((elementObj, i) => {
      let _elementObj = this.formatElementObj(elementObj);

      console.log(">>> AT: renderColumnElements()");
      console.log("elementObj");
      console.log(elementObj);
      console.log("_elementObj");
      console.log(_elementObj);
      console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

      if (
        Object.keys(_elementObj).length === 0 &&
        _elementObj.constructor === Object
      ) {
        return;
      }
      if (_elementObj && _elementObj.element === undefined) return;
      if (_elementObj && _elementObj.columnNumber === undefined) return;

      if (columnNumber.toString() === _elementObj.columnNumber.toString()) {
        // return this.renderElement(rowNumber, _elementObj);
        return this.renderElement(rowNumber, elementObj);
      }
    });
  };

  renderElement = (rowNumber, elementObj) => {
    // console.log("rendering element");
    // console.log(elementObj);
    let _elementObj = this.formatElementObj(elementObj);
    let elementStyles = this.getElementStyles(_elementObj);

    console.log(">>> AT: renderElement()");
    console.log("elementObj");
    console.log(elementObj);
    console.log("_elementObj");
    console.log(_elementObj);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

    // console.log("getElementStyles() returned object elementStyles{}");
    // console.log(elementStyles);

    if (elementObj.element.toString() === "row") {
      // return <div>{"row"}</div>;
      return this.renderRow(_elementObj);
    }
    if (elementObj.element.toString() === "column") {
      return <div>{"column"}</div>;
      // call render column elements
      // {this.renderColumnElements(rowNumber, columnNumber, formElements)}
    }
    if (elementObj.element.toString() === "input") {
      return this.renderInput(_elementObj, elementStyles);
      // return this.renderInput(elementObj, elementStyles);
    }
    if (elementObj.element.toString() === "select") {
      // renderDropdown(elementObj);
      // return;
      // return <div>{"select"}</div>;
      return <select />;
    }
    // if (elementObj.element.toString() === "radio") {
    if (elementObj.element.toString() === "radioBtns") {
      // renderRadioBtns(elementObj);
      // return;
      // return <div>{"radioBtns"}</div>;
      return <input type="radio" />;
    }
    // if (elementObj.element.toString() === "checkbox") {
    if (elementObj.element.toString() === "checkBtns") {
      // renderCheckBtns(elementObj);
      // return;
      // return <div>{"checkBtns"}</div>;
      return <input type="checkbox" />;
    }
    if (elementObj.element.toString() === "customBtns") {
      // renderCustomBtns(elementObj);
      // return;
      return <div>{"customBtns"}</div>;
    }
    if (elementObj.element.toString() === "button") {
      // renderCustomBtns(elementObj);
      // return;
      return <div>{"button"}</div>;
    }
  };

  renderInput = (elementObj, elementStyles) => {
    // console.log(">>> rendering input - obj");
    // console.log(elementObj);
    // console.log(this.state);
    // console.log("<<< rendering input - styles");
    // console.log(elementStyles);

    const { isFormFilled, isFormSubmitted, isFormValid } = this.state;

    const { inputValues } = this.state;
    const { element, initValue } = elementObj;
    const { id, name, type, value, autoComplete } = elementObj;
    const { validationRules } = elementObj;

    if (this.state.inputValues && this.state.inputValues[name] === undefined) {
      console.log("input name and value");
      console.log(name + ": " + value);
      this.setState({
        ...this.state,
        ...{
          inputValues: {
            ...this.state.inputValues,
            // ...{ [name]: initValue === "" ? "" : initValue }
            ...{ [name]: value.length > 0 ? value : "" }
          }
        }
      });
    }

    // For some reason spans cause input not to render when added inside FormattedMessage
    // <span style={{ padding: "10px", border: "solid lightBlue 2px" }} />
    // <span style={{ padding: "10px", border: "solid lightGreen 2px" }} />

    // input value...
    // check if element object key 'initValue' exists or is equal to ""
    // if is not === to ""
    // and this.state.inputValues[elementObj.name] does not exists or is equal to ""

    const getInputLabel = () => {
      if (elementObj.label.useIntlMsgID === false) {
        return (
          <label style={{ border: "solid blue 2px", padding: "5px" }}>
            {elementObj.label.text}
          </label>
        );
      }
      if (elementObj.label.useIntlMsgID === true) {
        return (
          <label style={{ border: "solid blue 2px", padding: "5px" }}>
            <IntlMessages id={elementObj.label.intlMsgID} />
          </label>
        );
      }
    };

    const getErrorLabels = () => {
      if (validationRules === null) return null;
      if (validationRules && validationRules.length === 0) return null;
      if (isFormSubmitted === true) {
        return validationRules.map((rule, index) => {
          if (rule.mame === "none") return;
          const _rule = _.merge(configObjs.validationRules[rule.name], rule);
          //
          const isRuleValid = this.validateRule(rule.name, [name]);
          //
          if (isRuleValid === false && _rule.useIntlMsgID === false) {
            return (
              <label style={{ border: "solid red 2px" }}>
                {_rule.errorText}
              </label>
            );
          }
          if (isRuleValid === false && _rule.useIntlMsgID === true) {
            return (
              <label style={{ border: "solid red 2px" }}>
                <IntlMessages id={_rule.intlMsgID} />
              </label>
            );
          }
          //
        });
      }
    };

    return (
      <div
        // className="obbers-sign-form__input-container"
        // INPUT CONTAINER
        style={{
          border: "solid yellow 2px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {elementObj.label.position === "top" && getInputLabel()}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <span style={{ border: "solid lightBlue 2px" }} />
          {elementObj.label.position === "left" && getInputLabel()}
          <FormattedMessage
            id={elementObj.placeholder.intlMsgID}
            defaultMessage=""
          >
            {placeholder => (
              <input
                // name="location"
                name={name}
                type={type}
                // label={placeholder}
                label={
                  elementObj.label.useIntlMsgID === true
                    ? this.props.intl.formatMessage(
                        defineMessages({ id: elementObj.label.intlMsgID })
                      )
                    : elementObj.label.text
                }
                // placeholder={placeholder}
                placeholder={
                  elementObj.placeholder.useIntlMsgID === true
                    ? placeholder
                    : elementObj.placeholder.text
                }
                // placeholder="NIGGA"
                onChange={this.handleOnInputChange}
                // value={location}
                // value={async () => await getInputValue()}
                // value={getInputValue()}
                value={inputValues[name]}
                style={{ border: "solid green 2px", backgroundColor: "white" }}
                // className="obbers-sign-form__input"
                autoComplete={autoComplete}
              />
            )}
          </FormattedMessage>
          {elementObj.label.position === "right" && getInputLabel()}
          <span style={{ border: "solid lightGreen 2px" }} />
        </div>
        {elementObj.label.position === "bottom" && getInputLabel()}
        {getErrorLabels()}
      </div>
    );
  };

  // call this from render()
  // map thru every formElements,
  // and row.formElements
  // get validationRules... and if its length is not 0
  // map validation rules, and get ruleName === required,
  // if ruleName "required" found, get formElement name
  // and check its value at this.state.inputValues
  // if inputValue === "" then its not filled
  checIfFormIsFilled = async () => {
    const { isFormFilled } = this.state;
    const { inputValues } = this.state;
    const { formElements } = this.state;
    let filled = true;

    let allFormElements = [];
    let elementNames = [];

    if (formElements !== undefined && formElements.length > 0) {
      formElements.map(elementObj => {
        if (elementObj.element === "row") {
          if (
            elementObj !== undefined &&
            elementObj.formElements !== undefined &&
            elementObj.formElements.length > 0
          ) {
            elementObj.formElements.map(rowElementObj => {
              allFormElements.push(rowElementObj);
            });
          }
        } else {
          allFormElements.push(elementObj);
        }
      });
    }

    if (allFormElements !== undefined && allFormElements.length > 0) {
      allFormElements.map(elementObj => {
        if (
          elementObj !== undefined &&
          elementObj.validationRules !== null &&
          elementObj.validationRules !== undefined &&
          elementObj.validationRules.length > 0
        ) {
          elementObj.validationRules.map(rule => {
            if (rule && rule.name === "required") {
              elementNames.push(elementObj.name);
            }
          });
        }
      });
    }

    if (elementNames !== undefined && elementNames.length > 0) {
      elementNames.map(elName => {
        if (
          inputValues !== undefined &&
          inputValues[elName] !== undefined &&
          inputValues[elName].toString() === ""
        ) {
          filled = false;
        }
      });
    }

    if (isFormFilled === true && filled === false) {
      await this.setState({ isFormFilled: filled });
    }
    if (isFormFilled === false && filled === true) {
      await this.setState({ isFormFilled: filled });
    }
  };

  validateRule = (ruleName, inputNames) => {
    const { inputValues } = this.state;
    if (ruleName === "required") {
      return isNotEmpty(inputValues[inputNames[0]]);
    }
    if (ruleName === "email") {
      return isEmailValid(inputValues[inputNames[0]]);
    }
    if (ruleName === "emails-match") {
      return doEmailsMatch(
        inputValues[inputNames[0]],
        inputValues[inputNames[1]]
      );
    }
    if (ruleName === "passwords-match") {
      return doPasswordsMatch(
        inputValues[inputNames[0]],
        inputValues[inputNames[1]]
      );
    }
  };

  handleOnSubmit = async () => {
    const { isFormFilled, isFormSubmitted, isFormValid } = this.state;
    // const { authError } = this.props;
    // const { clearAuthError } = this.props;

    if (isFormSubmitted === false) {
      await this.setState({ isFormSubmitted: true });
    }
    console.log("handleOnSubmit() this.state");
    console.log(this.state);
    // clearAuthError();

    // RETURN FORM INPUT VALUES TO PARENT ...

    // if (isFormValid === true) {
    //   await this.submitSignupData();
    //   if (this.props.authError === null) {
    //     this.props.history.push(urls.next);
    //   }
    // } else {
    //   // Show Error Notification
    //   NotificationManager.error(
    //     <IntlMessages id="invalid.form" />
    //   );
    // };

    // clear input error messages...
    // this.props.onSubmit(this.state.inputValues);
  };

  render() {
    if (this.props.shouldRenderComponent === false) return null;

    const { isFormFilled, isFormSubmitted, isFormValid } = this.state;
    const { style, addStyle, className, addClassName } = this.state;
    const { inputValues } = this.state;
    const { formOptions } = this.state;
    const { formElements } = this.state;
    const { children } = this.props;

    // const allElementsStyles = {
    //   style: { ...defaultStyles.style, ...props.style },
    //   addStyle: { ...defaultStyles.addStyle, ...props.addStyle },
    //   className: { ...defaultClassNames.className, ...props.className },
    //   addClassName: { ...defaultClassNames.addClassName, ...props.addClassName }
    // };

    this.checIfFormIsFilled();

    return (
      <form
        style={{ ...style.form, ...addStyle.form }}
        className={`${className.form} ${addClassName.form}`}
        autoComplete={formOptions.autoComplete}
      >
        <div
          style={{ ...style.formMainRow, ...addStyle.formMainRow }}
          className={`${className.formMainRow} ${addClassName.formMainRow}`}
        >
          {/*
          <div
            // style={{ ...style.formHeader, ...addStyle.formHeader }}
            // className={`${className.formHeader} ${addClassName.formHeader}`}
          >
          </div>
          */}
          {this.renderFormMainRowContent()}
          {/*
          <div
            style={{ ...style.formFooter, ...addStyle.formFooter }}
            className={`${className.formFooter} ${addClassName.formFooter}`}
          >
            <Link
              onClick={async e => {
                e.preventDefault();
                await this.handleOnSubmit();
                this.props.onSumbit(inputValues);
                console.log(this.state);
              }}
              to=""
              disabled={isFormFilled ? true : false}
              style={
                isFormFilled
                  ? {
                      width: "100px",
                      height: "20px",
                      border: "solid green 2px",
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      textDecoration: "none"
                    }
                  : {
                      width: "100px",
                      height: "20px",
                      border: "solid black 2px",
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      textDecoration: "none"
                    }
              }
              // style={
              //   isFormFilled
              //     ? { ...style.submitBtn, ...addStyle.submitBtn }
              //     : { ...style.submitBtnDisabled, ...addStyle.submitBtnDisabled }
              // }
              // className={
              //   isFormFilled
              //     ? `${className.submitBtn} ${addClassName.submitBtn}`
              //     : `${className.submitBtnDisabled} ${addClassName.submitBtnDisabled}`
              // }
            >
              {this.props.shouldShowSubmitBtnLoader && (
                <CircularProgress size={30} thickness={5} color="inherit" />
              )}
              {!this.props.shouldShowSubmitBtnLoader &&
                this.props.submitBtnUsesIntlMsgID === false && (
                  <div>{this.props.submitBtnText}</div>
                )}
              {!this.props.shouldShowSubmitBtnLoader &&
                this.props.submitBtnUsesIntlMsgID === true && (
                  <IntlMessages id={this.props.submitBtnIntlMsgID} />
                )}
            </Link>
            {this.renderFormError()}
          </div>
          */}
        </div>
      </form>
    );
  }
}

export default injectIntl(MyForm);

MyForm.defaultProps = {
  shouldRenderComponent: true,
  //
  shouldShowSubmitBtnLoader: false,
  submitBtnText: "SUBMIT",
  submitBtnIntlMsgID: "submit",
  submitBtnUsesIntlMsgID: false,
  //
  formErrorText: "Form Error!",
  formErrorIntlMsgID: "",
  formErrorUseIntlMsgID: false,
  //
  style: {},
  addStyle: {},
  className: {},
  addClassName: {},
  //
  formOptions: {},
  //
  formElements: [],
  //
  inputValues: {},
  //
  onSubmit: () => "Form Submitted!",
  //
};
