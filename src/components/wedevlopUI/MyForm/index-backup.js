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

import configObjs from "./configObjs";
import defaultStyles from "./defaultStyles";
import defaultClassNames from "./defaultClassNames";

import formatElements from "./formatElements";

// utils

const objHasKey = (obj, key) => key in obj;

const isObjectEmpty = obj => {
  if (obj === null || obj === undefined) return null;
  let ans =
    Object.keys(obj).length === 0 && obj.constructor === Object ? true : false;
  return ans;
};

const arrIncludesValue = (arr, value) => {

}

let rulesValidationResultsByInputName = {};

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
      // rulesValidationResultsByInputName: {},
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
      formElements: [],
      // formElements: [...configObjs.formElements, ...props.formElements],
      // formElements: [ _.merge(configObjs.formElements, props.formElements) ]
      //
      formErrorText: props.formErrorText,
      formErrorIntlMsgID: props.formErrorIntlMsgID,
      formErrorUseIntlMsgID: props.formErrorUseIntlMsgID
      //
    };
  }

  async componentDidMount() {
    console.log("AT COMPONENT DID MOUNT");
    if (
      this.props
      && this.props.formElements !== undefined
      && this.props.formElements.length > 0
    ) {
      const { formElements } = this.props;
      const _configObjs = configObjs;

      console.log(formElements.length);
      console.log(formElements);

      const formattedFormElements = formatElements(formElements);
      await this.setState({ formElements: formattedFormElements });
      console.log(formElements.length);
      console.log("this.state.formElements");
      console.log(this.state.formElements);

    }
  }

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

  setInitialInputValues = (element, name, value) => {
    let val;
    if (
      // element.toString() === "select" ||
      // element.toString() === "radioControl" ||
      element.toString() === "checkboxControl"
    ) {
      val = value.length > 0 ? value : [];
    } else {
      val = value.length > 0 ? value : "";
    };
    if (this.state.inputValues && this.state.inputValues[name] === undefined) {
      // console.log("input name and value");
      // console.log(name + ": " + value);
      this.setState({
        ...this.state,
        ...{
          inputValues: {
            ...this.state.inputValues,
            ...{ [name]: val }
          }
        }
      });
    };
  };

  // OBJECT FORMATTING

  // formatElementObj = elementObj => {
  //   // if (elementObj && elementObj.element === "select") {
  //   //   console.log(">>> AT: formatElementObj()");
  //   //   console.log("elementObj");
  //   //   console.log(elementObj);
  //   //   console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  //   // }
  //
  //   if (elementObj && elementObj.element === undefined) return;
  //
  //   let element = elementObj.element;
  //   let elementConfigObj = configObjs[element];
  //
  //   let formattedElementObj = _.merge(elementConfigObj, elementObj);
  //
  //   if (element === "select" && formattedElementObj.options.length > 0) {
  //     let selectOptions = formattedElementObj.options;
  //     let formattedSelectOptions = [];
  //     let optionConfigObj = configObjs.option;
  //     selectOptions.map((option, index) => {
  //       let formattedOpt = { ...optionConfigObj, ...option };
  //       formattedSelectOptions.push(formattedOpt);
  //     });
  //     formattedElementObj = {
  //       ...formattedElementObj,
  //       ...{ options: formattedSelectOptions }
  //     }
  //   }
  //
  //   if (element === "radioControl" && formattedElementObj.inputs.length > 0) {
  //     let radioInputs = formattedElementObj.inputs;
  //     let formattedInputs = [];
  //     let radioConfigObj = configObjs.radio;
  //     radioInputs.map((radio, index) => {
  //       let formattedInput = { ...radioConfigObj, ...radio };
  //       formattedInputs.push(formattedInput);
  //     });
  //     formattedElementObj = {
  //       ...formattedElementObj,
  //       ...{ inputs: formattedInputs }
  //     }
  //   }
  //
  //   if (element === "checkboxControl" && formattedElementObj.inputs.length > 0) {
  //     let checkboxInputs = formattedElementObj.inputs;
  //     let formattedInputs = [];
  //     let checkboxConfigObj = configObjs.checkbox;
  //     checkboxInputs.map((checkbox, index) => {
  //       let formattedInput = { ...checkboxConfigObj, ...checkbox };
  //       formattedInputs.push(formattedInput);
  //     });
  //     formattedElementObj = {
  //       ...formattedElementObj,
  //       ...{ inputs: formattedInputs }
  //     }
  //   }
  //
  //   // if (elementObj && elementObj.element === "select") {
  //   //   console.log("formatted elementObj");
  //   //   console.log(formattedElementObj);
  //   // }
  //
  //   return formattedElementObj;
  // };

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

  getStylesTest = (
    nameOfStyle,
    individualStyle,
    individualAddStyle,
    individualClassName,
    individualAddClassName
  ) => {
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

    let style = {};
    let addStyle = {};
    let className = "";
    let addClassName = "";

    // ASSING STYLES FOR ALL ELEMENTS OF SAME KIND (input, select, textarea, etc.)
    // (style, addStyle, className, addClassName)
    // CHECKING COMPONENT PROPS: style, addStyle, className and addClassName
    // <MyForm style={ element: {} } addStyle={ element: {} } className={ element: {} } addClassName={ element: {} } />

    const isElementStyleObjectPassedAsProp = name => {
      if (propsStyles.style === undefined) return false;
      if (propsStyles.style === null) return false;
      if (isObjectEmpty(propsStyles.style)) return false;
      if (!objHasKey(propsStyles.style, name)) return false;
      if (isObjectEmpty(propsStyles.style[name])) return false;
      return true;
    };
    const isElementAddStyleObjectPassedAsProp = name => {
      if (propsStyles.addStyle === undefined) return false;
      if (propsStyles.addStyle === null) return false;
      if (isObjectEmpty(propsStyles.addStyle)) return false;
      if (!objHasKey(propsStyles.addStyle, name)) return false;
      if (isObjectEmpty(propsStyles.addStyle[name])) return false;
      return true;
    };
    const isElementClassNamePassedAsProp = name => {
      if (propsStyles.className === undefined) return false;
      if (propsStyles.className === null) return false;
      if (isObjectEmpty(propsStyles.className)) return false;
      if (!objHasKey(propsStyles.className, name)) return false;
      if (propsStyles.className[name].length === 0) return false;
      return true;
    };
    const isElementAddClassNamePassedAsProp = name => {
      if (propsStyles.addClassName === undefined) return false;
      if (propsStyles.addClassName === null) return false;
      if (isObjectEmpty(propsStyles.addClassName)) return false;
      if (!objHasKey(propsStyles.addClassName, name)) return false;
      if (propsStyles.addClassName[name].length === 0) return false;
      return true;
    };

    style = isElementStyleObjectPassedAsProp(nameOfStyle)
      ? propsStyles.style[nameOfStyle]
      : stateStyles.style[nameOfStyle];
    addStyle = isElementAddStyleObjectPassedAsProp(nameOfStyle)
      ? { ...stateStyles.addStyle[nameOfStyle], ...propsStyles.addStyle[nameOfStyle] }
      : stateStyles.addStyle[nameOfStyle];
    className = isElementClassNamePassedAsProp(nameOfStyle)
      ? propsStyles.className[nameOfStyle]
      : stateStyles.className[nameOfStyle];
    addClassName = isElementAddClassNamePassedAsProp(nameOfStyle)
      ? `${stateStyles.addClassName[nameOfStyle]} ${propsStyles.addClassName[nameOfStyle]}`
      : stateStyles.addClassName[nameOfStyle];

    // ASSING STYLES FOR A SINGLE ELEMENT (input, select, textarea, etc.)
    // (style, addStyle, className, addClassName)
    // CHECKING ELEMENT OBJECT KEYS: style, addStyle, className and addClassName
    // <MyForm formElements{[
    //   { element: "input", style: {} addStyle: {} className: "" addClassName: "" }
    // ]} />

    const isObjValid = obj => {
      if (obj === null || obj === undefined) return false;
      if (isObjectEmpty(obj)) return false;
      return true;
    };
    const isStrValid = str => {
      if (str === null || str === undefined) return false;
      if (str.length === 0) return false;
      return true;
    };

    style = isObjValid(individualStyle)
      ? individualStyle
      : style;
    addStyle = isObjValid(individualAddStyle)
      ? individualAddStyle
      : addStyle;
    className = isStrValid(individualClassName)
      ? individualClassName
      : className;
    addClassName = isStrValid(individualAddClassName)
      ? individualAddClassName
      : addClassName;

    return { style, addStyle, className, addClassName };
  }

  getStyles = elementObj => {
    // styles = (style,addStyle,className,addClassName)
    // merge default element styles with the styles passed as props, well only style and className replaces default
    // then check if elementObj has single styles for such element,

    // here we only need to receive the name we use as style... and the styles for such single element

    //

    // state (style, addStyle, className, addClassName)
    // merges default objects or strings, with whatever the user passsed in props
    // but
    // once we have that, we still need to know of general or single
    // element style objects and class names strings were passed...

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

    if (elementObj.name === "input") {
      console.log(">>> --- >>> --- >>>");
      console.log(">>> elementObj at renderColumnElements()");
      console.log(elementObj);

      console.log("<<< formatted:");
      console.log(_elementObj);
      console.log("<<< --- <<< --- <<<");
    }

    // console.log("--- getStyles() elementObj");
    // console.log(elementObj);
    // console.log("--- getStyles() _elementObj");
    // console.log(_elementObj);
    // console.log("--- getStyles() element");
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
    const { formOptions, formElements } = this.state;
    if (formElements === undefined || formElements.length === 0) return;

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
    let elementStyles = this.getStyles(elementObj);

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

    if (elementObj.name === "input") {
      console.log(">>> --- >>> --- >>>");
      console.log(">>> elementObj at renderColumnElements()");
      console.log(elementObj);

      console.log("<<< formatted:");
      console.log(_elementObj);
      console.log("<<< --- <<< --- <<<");
    }

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
    let elementStyles = this.getStyles(columnObj);

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

    let formattedColumnElements = [];
    formElements.map((elementObj, index) => {

      if (elementObj.element === "input") {

        // let formattedElementObj = _.merge(configObjs.input, elementObj);
        //
        // // let formattedElementObj = {
        // //   ...configObjs.input,
        // //   ...{
        // //     ...elementObj,
        // //     ...{
        // //       label: elementObj["label"] !== undefined
        // //       ? { ...configObjs.input.label, ...elementObj.label }
        // //       : configObjs.input.label
        // //     }
        // //   }
        // // };
        //
        // formattedColumnElements.push(formattedElementObj);
        formattedColumnElements.push(elementObj);

        // console.log("ELEMENTOBJ " + elementObj.name);
        // console.log(elementObj);
        //
        // console.log("FORMTATTED " + formattedElementObj.name);
        // console.log(formattedElementObj);
      }
    })

    // console.log("formElements");
    // console.log(formElements);
    //
    // console.log("formattedColumnElements");
    // console.log(formattedColumnElements);

    // return formElements.map((elementObj, i) => {
    return formattedColumnElements.map((elementObj, i) => {

      // let _elementObj = this.formatElementObj(elementObj);
      let _elementObj = elementObj;

      // if (elementObj.name === "input") {
      //   console.log(">>> --- >>> --- >>>");
      //   console.log(">>> elementObj at renderColumnElements()");
      //   console.log(elementObj);
      //
      //   console.log("<<< formatted:");
      //   console.log(_elementObj);
      //   console.log("<<< --- <<< --- <<<");
      // }

      // console.log(">>> AT: renderColumnElements()");
      // console.log("elementObj");
      // console.log(elementObj);
      // console.log("_elementObj");
      // console.log(_elementObj);
      // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

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

    // if (elementObj.name === "input") {
    //   console.log(">>> --- >>> --- >>>");
    //   console.log(">>> elementObj at renderColumnElements()");
    //   console.log(elementObj);
    //
    //   console.log("<<< formatted:");
    //   console.log(_elementObj);
    //   console.log("<<< --- <<< --- <<<");
    // }

    let elementStyles = this.getStyles(_elementObj);

    // if (elementObj.element === "checkboxControl") {
    //   console.log(">>> AT: renderElement()");
    //   console.log("elementObj");
    //   console.log(elementObj);
    //   console.log("_elementObj");
    //   console.log(_elementObj);
    //   console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    // }

    // console.log("getStyles() returned object elementStyles{}");
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
    if (elementObj.element.toString() === "label") {
      return this.renderLabel(_elementObj, elementStyles);
    }
    if (elementObj.element.toString() === "input") {
      return this.renderInput(_elementObj, elementStyles);
    }
    if (elementObj.element.toString() === "select") {
      return this.renderSelect(_elementObj, elementStyles);
    }
    // if (elementObj.element.toString() === "radio") {
    if (elementObj.element.toString() === "radioControl") {
      return this.renderRadioControl(_elementObj, elementStyles);
    }
    // if (elementObj.element.toString() === "checkbox") {
    if (elementObj.element.toString() === "checkboxControl") {
      return this.renderCheckboxControl(_elementObj, elementStyles);
    }
    if (elementObj.element.toString() === "button") {
      return this.renderButton(_elementObj, elementStyles);
    }
  };

  validateRule = (ruleName, inputNames) => {
    const { isFormValid, inputValues } = this.state;
    let isRuleValid = null;

    if (ruleName === "required") {
      isRuleValid = isNotEmpty(inputValues[inputNames[0]]);
    }
    if (ruleName === "email") {
      isRuleValid = isEmailValid(inputValues[inputNames[0]]);
    }
    if (ruleName === "emails-match") {
      isRuleValid = doEmailsMatch(
        inputValues[inputNames[0]],
        inputValues[inputNames[1]]
      );
    }
    if (ruleName === "passwords-match") {
      isRuleValid = doPasswordsMatch(
        inputValues[inputNames[0]],
        inputValues[inputNames[1]]
      );
    }

    // if (isFormValid === false && isRuleValid === true) {
    //   this.setState({ isFormValid: true })
    // }
    // if (isFormValid === true && isRuleValid === false) {
    //   this.setState({ isFormValid: false })
    // }

    return isRuleValid;
  };

  renderErrorLabels = (validationRules, inputNames) => {
    const { isFormSubmitted } = this.state;
    // get error label styles
    // get single error label styles
    if (validationRules === null) return null;
    if (validationRules === undefined) return null;
    if (validationRules && validationRules.length === 0) return null;
    if (inputNames === undefined) return null;

    if (isFormSubmitted === true) {
      let rulesValidationResults = [];

      return validationRules.map((rule, index) => {
        if (rule.mame === "none") return;
        const _rule = _.merge(configObjs.validationRules[rule.name], rule);
        //
        const isRuleValid = this.validateRule(rule.name, inputNames);
        //
        rulesValidationResults.push({ name: rule.name, result: isRuleValid });
        rulesValidationResultsByInputName = {
          ...rulesValidationResultsByInputName,
          ...{
            [inputNames[0]]: rulesValidationResults
          }
        };
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
        // this.setState({
        //   ...this.state,
        //   ...{
        //     ...this.state.rulesValidationResultsByInputName,
        //     ...{
        //       [inputNames[0]]: rulesValidationResults
        //     }
        //   }
        // });
        //
      });

    };
  };

  renderLabel = (elementObj, elementStyles) => {
    const { labelExternalComponent1, labelExternalComponent2 } = this.props;

    // let styles = { ...this.state.style.labelContainer, ...this.state.addStyle.labelContainer };
    // let classes = `${this.state.className.labelContainer} ${this.state.addClassName.labelContainer}`;
    //
    // let singleStyles = { ...elementObj.style, ...elementObj.addStyle };
    // let singleClasses = { ...elementObj.className, ...elementObj.addClassName };
    //
    // let finalStyles = { ...styles, ...singleStyles };
    // let finalClasses = { ...classes, ...singleClasses };

    let labelContainerStyles = this.getStylesTest(
      "labelContainer",
      elementObj.container.style,
      elementObj.container.addStyle,
      elementObj.container.className,
      elementObj.container.addClassName
    );
    let labelStyles = this.getStylesTest(
      "label",
      elementObj.style,
      elementObj.addStyle,
      elementObj.className,
      elementObj.addClassName
    );

    return (
      <div
        style={{ ...labelContainerStyles.style, ...labelContainerStyles.addStyle }}
        className={`${labelStyles.className} ${labelStyles.addClassName}`}
      >
        {labelExternalComponent1 !== null && (
          <div>
            {labelExternalComponent1}
          </div>
        )}
        <label
          style={{ ...labelStyles.style, ...labelStyles.addStyle }}
          className={`${labelStyles.className} ${labelStyles.addClassName}`}
        >
          {elementObj.text}
        </label>
        {labelExternalComponent2 !== null && (
          <div>
            {labelExternalComponent2}
          </div>
        )}
      </div>
    )
  }

  renderInput = (elementObj, elementStyles) => {
    // console.log(">>> rendering input - obj");
    // console.log(elementObj);
    // console.log(this.state);
    // console.log("<<< rendering input - styles");
    // console.log(elementStyles);
    const { inputExternalComponent1, inputExternalComponent2 } = this.props;
    const { isFormFilled, isFormSubmitted, isFormValid } = this.state;

    const { inputValues } = this.state;
    const { element, initValue } = elementObj;
    const { id, name, type, value, autoComplete } = elementObj;
    const { validationRules } = elementObj;

    this.setInitialInputValues(element, name, value);

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

    return (
      <div
        // className="obbers-sign-form__input-container"
        // INPUT CONTAINER
        style={{
          // border: "solid yellow 2px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {elementObj.label.show === true && elementObj.label.position === "top" && getInputLabel()}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <span style={{ border: "solid lightBlue 2px" }} />
          {inputExternalComponent1 !== null && (
            <div>
              {inputExternalComponent1}
            </div>
          )}
          {elementObj.label.show === true && elementObj.label.position === "left" && getInputLabel()}
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
          {elementObj.label.show === true && elementObj.label.position === "right" && getInputLabel()}
          {inputExternalComponent2 !== null && (
            <div>
              {inputExternalComponent2}
            </div>
          )}
          <span style={{ border: "solid lightGreen 2px" }} />
        </div>
        {elementObj.label.show === true && elementObj.label.position === "bottom" && getInputLabel()}
        <div>
          {this.renderErrorLabels(validationRules, [name])}
        </div>
      </div>
    );
  };

  renderSelect = (elementObj, elementStyles) => {
    const { selectExternalComponent1, selectExternalComponent2 } = this.props;
    // select styles
    // option styles
    const renderOptions = () => {
      if (
        elementObj !== undefined &&
        elementObj.options !== undefined &&
        elementObj.options.length > 0
      ) {
        return elementObj.options.map((option, index) => {
          const { element, id, name, value, text, selected, disabled } = option;

          if (index === 0 && selected === false) {
            this.setInitialInputValues(
              elementObj.element,
              elementObj.name,
              ""
            );
          }
          if (selected === true) {
            this.setInitialInputValues(
              elementObj.element,
              elementObj.name,
              value
            );
          };

          if (option.useIntlMsgID === true) {
            // let intlMsgID = option.intlMsgID;
            // return (
            //   {/*
            //   <FormattedMessage id="word.selectLanguage" defaultMessage="">
            //     {placeholder => (
            //       <option
            //         key={index}
            //         id={id}
            //         name={name}
            //         value={value}
            //         selected={selected}
            //         disabled={disabled}
            //       >
            //         {placeholder}
            //       </option>
            //     )}
            //   </FormattedMessage>
            //   */}
            // )
          } else {
            // <option key={index} value={option.value} disabled selected>
            return (
              <option
                key={index}
                id={id}
                name={name}
                value={value}
                selected={selected}
                disabled={disabled}
              >
                {text}
              </option>
            );
          }
        });
      }
    }

    const { id, name, showIntroOption, introOption, validationRules } = elementObj;
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {selectExternalComponent1 !== null && (
            <div>
              {selectExternalComponent1}
            </div>
          )}
          <select
            id={id}
            name={name}
            // style={{}}
            // className="obbers-sign-form__input"
            // onChange={e => {
            //   // this.addSelectedLanguage(index, e.target.value, allLanguages);
            //   this.handleOnInputChange(e);
            // }}
            onChange={this.handleOnInputChange}
          >
            {showIntroOption === true && introOption.useIntlMsgID === true && (
              <FormattedMessage id={introOption.intlMsgID} defaultMessage="">
                {placeholder => (
                  <option value="" disabled selected>
                    {placeholder}
                  </option>
                )}
              </FormattedMessage>
            )}
            {showIntroOption === true && introOption.useIntlMsgID === false && (
              <option value="" disabled selected>
                {introOption.text}
              </option>
            )}
            {renderOptions()}
          </select>
          {selectExternalComponent2 !== null && (
            <div>
              {selectExternalComponent2}
            </div>
          )}
        </div>
        {/* RENDER VALIDATION ERRORS */}
        <div>
          {this.renderErrorLabels(validationRules, [name])}
        </div>
      </div>
    )
  };

  renderRadioControl = (elementObj, elementStyles) => {
    const { radioExternalComponent1, radioExternalComponent2 } = this.props;

    // radio control styles
    // radio input styles
    const renderInputs = () => {
      if (
        elementObj !== undefined &&
        elementObj.inputs !== undefined &&
        elementObj.inputs.length > 0
      ) {
        return elementObj.inputs.map((input, index) => {
          const { element, id, name, value, text, checked, disabled } = input;
          const { useIntlMsgID, intlMsgID } = input;

          // For now, keep multiple to false. Later add logic for multiple.
          // For now, value at inputValues shall be "" or number, or bool.
          // Later, if multiple, value will be an array.
          // let inputName = elementObj.multiple === true ? name : elementObj.name;
          let inputName = elementObj.name;

          // Add ability to set first radio checked by default later.
          // default checked input
          // let isChecked = false;
          // if (
          //   (elementObj.checkFirstInputByDefault === true && index === 0) ||
          //   checked === true
          // ) {
          //   isChecked = true;
          //   this.setInitialInputValues(
          //     elementObj.element,
          //     elementObj.name,
          //     value
          //   );
          // }

          // Just save this input name in state inputValues object
          if (index === 0) {
            this.setInitialInputValues(
              elementObj.element,
              elementObj.name,
              ""
            );
          }

          if (useIntlMsgID === true) {
            // return (
            //   {/*
            //   <label class="radio">
            //     <span style={{ border: "solid lightBlue 2px" }} />
            //     <FormattedMessage id="word.selectLanguage" defaultMessage="">
            //       {placeholder => (
            //         <input
            //         key={index}
            //           type="radio"
            //           id={id}
            //           name={name}
            //           value={value}
            //           // checked={checked}
            //           disabled={disabled}
            //         />
            //         {placeholder}
            //       )}
            //     </FormattedMessage>
            //     <span style={{ border: "solid lightGreen 2px" }} />
            //   </label>
            //   */}
            // )
          } else {
            // <option key={index} value={option.value} disabled selected>
            return (
              <label class="radio" style={{ display: "flex", flexDirection: "row" }}>
                <span style={{ border: "solid lightBlue 2px" }} />
                {radioExternalComponent1 !== null && (
                  <div>
                    {radioExternalComponent1}
                  </div>
                )}
                <input
                  key={index}
                  type="radio"
                  id={id}
                  name={inputName}
                  value={value}
                  disabled={disabled}
                  onClick={this.handleOnInputChange}
                />
                {text}
                {radioExternalComponent2 !== null && (
                  <div>
                    {radioExternalComponent2}
                  </div>
                )}
                <span style={{ border: "solid lightGreen 2px" }} />
              </label>
            );
          }
        });
      }
    }

    const { id, name, orientation, validationRules } = elementObj;
    return (
      <div>
        <div
          id={id}
          class="control"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // center row, flex-start makes em left
            justifyContent: "flex-end"
          }}
        >
          {renderInputs()}
        </div>
        {/* RENDER VALIDATION ERRORS */}
        <div>
          {this.renderErrorLabels(validationRules, [name])}
        </div>
      </div>
    )
  };

  renderCheckboxControl = (elementObj, elementStyles) => {
    const { checkboxExternalComponent1, checkboxExternalComponent2 } = this.props;

    // checkbox control styles
    // checkbox input styles
    const renderInputs = () => {
      if (
        elementObj !== undefined &&
        elementObj.inputs !== undefined &&
        elementObj.inputs.length > 0
      ) {
        return elementObj.inputs.map((input, index) => {
          const { element, id, name, value, text, disabled } = input;
          const { useIntlMsgID, intlMsgID } = input;

          // let inputName = elementObj.name;

          // Just save this input name in state inputValues object
          if (index === 0) {
            this.setInitialInputValues(
              elementObj.element,
              elementObj.name,
              ""
            );
          }

          if (useIntlMsgID === true) {
            // return (
            //   {/*
            //   <label class="radio">
            //     <span style={{ border: "solid lightBlue 2px" }} />
            //     <FormattedMessage id="word.selectLanguage" defaultMessage="">
            //       {placeholder => (
            //         <input
            //         key={index}
            //           type="radio"
            //           id={id}
            //           name={name}
            //           value={value}
            //           // checked={checked}
            //           disabled={disabled}
            //         />
            //         {placeholder}
            //       )}
            //     </FormattedMessage>
            //     <span style={{ border: "solid lightGreen 2px" }} />
            //   </label>
            //   */}
            // )
          } else {
            // <option key={index} value={option.value} disabled selected>
            return (
              <label class="checkbox" style={{ display: "flex", flexDirection: "row" }}>
                <span style={{ border: "solid lightBlue 2px" }} />
                {checkboxExternalComponent1 !== null && (
                  <div>
                    {checkboxExternalComponent1}
                  </div>
                )}
                <input
                  key={index}
                  type="checkbox"
                  id={id}
                  name={name}
                  value={value}
                  disabled={disabled}
                  // onClick={this.handleOnInputChange}
                  onClick={async e => {
                    let checkboxName = e.target.name;
                    let checkboxValue = e.target.value;
                    let checkedItems = this.state.inputValues[elementObj.name];
                    let newCheckedItemsArr = checkedItems;
                    let isItemChecked = checkedItems.includes(checkboxValue);
                    if (isItemChecked === true) {
                      // get index and pop
                      // var itemIndex = newCheckedItemsArr.indexOf(checkboxValue);
                      // newCheckedItemsArr.splice(itemIndex);
                      newCheckedItemsArr = newCheckedItemsArr.filter(
                        e => e !== checkboxValue
                      );
                    } else {
                      newCheckedItemsArr.push(checkboxValue);
                    };
                    await this.setState({
                      ...this.state,
                      ...{
                        inputValues: {
                          ...this.state.inputValues,
                          ...{ [elementObj.name]: newCheckedItemsArr }
                        }
                      }
                    });
                  }}
                />
                {text}
                {checkboxExternalComponent2 !== null && (
                  <div>
                    {checkboxExternalComponent2}
                  </div>
                )}
                <span style={{ border: "solid lightGreen 2px" }} />
              </label>
            );
          }
        });
      }
    }

    const { id, name, orientation, validationRules } = elementObj;
    return (
      <div>
        <div
          class="control"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // center row, flex-start makes em left
            justifyContent: "flex-end"
          }}
        >
          {renderInputs()}
        </div>
        {/* RENDER VALIDATION ERRORS */}
        <div>
          {this.renderErrorLabels(validationRules, [name])}
        </div>
      </div>
    )
  }

  renderButton = (elementObj, elementStyles) => {
    const { buttonExternalComponent1, buttonExternalComponent2 } = this.props;

    return (
      <div style={{display:"flex", flexDirection: "row" }}>
        <button
          type="button"
          onClick={elementObj.onClick}
          style={{ display: "flex", flexDirection: "row" }}
        >
          {buttonExternalComponent1 !== null && (
            <div>
              {buttonExternalComponent1}
            </div>
          )}
          Click Me!
          {buttonExternalComponent2 !== null && (
            <div>
              {buttonExternalComponent2}
            </div>
          )}
        </button>
      </div>
    );
  }

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

  validateForm = async () => {
    const { isFormValid } = this.state;
    // console.log(rulesValidationResultsByInputName);

    let allInputRulesAreValid = true;

    if (isObjectEmpty(rulesValidationResultsByInputName) === false ) {

      let inputNames = Object.keys(rulesValidationResultsByInputName);

      if (inputNames !== undefined && inputNames.length > 0) {

        inputNames.map(inputName => {
          let rulesValidationResults = rulesValidationResultsByInputName[inputName];
          if (
            rulesValidationResults !== undefined &&
            rulesValidationResults.length > 0
          ) {
            rulesValidationResults.map(ruleValidationResult => {
              const { name, result } = ruleValidationResult;
              if (result === false) allInputRulesAreValid = false;
            })
          }
        });

      }

    };

    if (allInputRulesAreValid === false && isFormValid === true) {
      await this.setState({ isFormValid: false });
    }
    if (allInputRulesAreValid === true && isFormValid === false) {
      await this.setState({ isFormValid: true });
    }

  }

  handleOnSubmit = async () => {
    const { isFormFilled, isFormSubmitted, isFormValid } = this.state;
    // const { authError } = this.props;
    // const { clearAuthError } = this.props;

    if (isFormSubmitted === false) {
      await this.setState({ isFormSubmitted: true });
    }
    // console.log("handleOnSubmit() this.state");
    // console.log(this.state);
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
    const {
      showFormTitle,
      formTitleText,
      formTitleUseIntlMsgID,
      formTitleIntlMsgID,
      showFormSubtitle,
      formSubtitleText,
      formSubtitleUseIntlMsgID,
      formSubtitleIntlMsgID,
    } = this.props;
    const {
      formHeaderExternalComponent1,
      formHeaderExternalComponent2,
      formFooterExternalComponent1,
      formFooterExternalComponent2,
      submitButtonExternalComponent1,
      submitButtonExternalComponent2
    } = this.props;

    const { isFormFilled, isFormSubmitted, isFormValid } = this.state;
    const { style, addStyle, className, addClassName } = this.state;
    const { inputValues } = this.state;
    const { formOptions } = this.state;
    const { formElements } = this.state;

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
          style={{ ...style.formHeader, ...addStyle.formHeader }}
          className={`${className.formHeader} ${addClassName.formHeader}`}
        >
          {formHeaderExternalComponent1 !== null && (
            <div>{formHeaderExternalComponent1}</div>
          )}

          {showFormTitle === true && formTitleUseIntlMsgID === true && (
            <label><IntlMessages id={formTitleIntlMsgID} /></label>
          )}
          {showFormTitle === true && formTitleUseIntlMsgID === false && (
            <label>{formTitleText}</label>
          )}

          {showFormSubtitle === true && formSubtitleUseIntlMsgID === true && (
            <label><IntlMessages id={formSubtitleIntlMsgID} /></label>
          )}
          {showFormSubtitle === true && formSubtitleUseIntlMsgID === false && (
            <label>{formSubtitleText}</label>
          )}

          {formHeaderExternalComponent2 !== null && (
            <div>{formHeaderExternalComponent2}</div>
          )}
        </div>
        <div
          style={{ ...style.formMainRow, ...addStyle.formMainRow }}
          className={`${className.formMainRow} ${addClassName.formMainRow}`}
        >
          {this.renderFormMainRowContent()}
        </div>
        <div
          style={{ ...style.formFooter, ...addStyle.formFooter }}
          className={`${className.formFooter} ${addClassName.formFooter}`}
        >
          {formFooterExternalComponent1 !== null && (
            <div>{formFooterExternalComponent1}</div>
          )}
          <Link
            onClick={async e => {
              e.preventDefault();
              await this.handleOnSubmit();
              await this.validateForm();
              if (this.state.isFormValid === true) {
                this.props.onSumbit(inputValues);
              } else {
                console.log("FORM IS NOT VALID! HAS INPUT ERRORS!");
              }
            }}
            to=""
            disabled={isFormFilled ? true : false}
            style={
              isFormFilled
                ? {
                    width: "100px",
                    height: "20px",
                    border: "solid lightGreen 2px",
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
                    backgroundColor: "gray",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none"
                  }
            }
            // style={
            //   isFormFilled
            //     ? { ...style.submitButton, ...addStyle.submitButton }
            //     : { ...style.submitButtonDisabled, ...addStyle.submitButtonDisabled }
            // }
            // className={
            //   isFormFilled
            //     ? `${className.submitButton} ${addClassName.submitButton}`
            //     : `${className.submitButtonDisabled} ${addClassName.submitButtonDisabled}`
            // }
          >
            {submitButtonExternalComponent1 !== null && (
              <div>
                {submitButtonExternalComponent1}
              </div>
            )}
            {this.props.shouldShowSubmitBtnLoader && (
              <CircularProgress size={30} thickness={5} color="inherit" />
            )}
            {!this.props.shouldShowSubmitBtnLoader &&
              this.props.submitButtonUsesIntlMsgID === false && (
                <div>{this.props.submitButtonText}</div>
              )}
            {!this.props.shouldShowSubmitBtnLoader &&
              this.props.submitButtonUsesIntlMsgID === true && (
                <IntlMessages id={this.props.submitButtonIntlMsgID} />
              )}
            {submitButtonExternalComponent2 !== null && (
              <div>
                {submitButtonExternalComponent2}
              </div>
            )}
          </Link>
          {formFooterExternalComponent2 !== null && (
            <div>
              {formFooterExternalComponent2}
            </div>
          )}
          {this.renderFormError()}
        </div>
      </form>
    );
  }
}

export default injectIntl(MyForm);

MyForm.defaultProps = {
  shouldRenderComponent: true,
  //
  showFormTitle: true,
  formTitleText: "TITLE",
  formTitleUseIntlMsgID: false,
  formTitleIntlMsgID: "myform.title",
  //
  showFormSubtitle: true,
  formSubtitleText: "Subtitle",
  formSubtitleUseIntlMsgID: false,
  formSubtitleIntlMsgID: "myform.subtitle",
  //
  shouldShowSubmitBtnLoader: false,
  submitButtonText: "SUBMIT",
  submitButtonIntlMsgID: "submit",
  submitButtonUsesIntlMsgID: false,
  //
  formErrorText: "",
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
  formHeaderExternalComponent1: null,
  formHeaderExternalComponent2: null,
  formFooterExternalComponent1: null,
  formFooterExternalComponent2: null,
  //
  labelExternalComponent1: null,
  labelExternalComponent2: null,
  inputExternalComponent1: null,
  inputExternalComponent2: null,
  selectExternalComponent1: null,
  selectExternalComponent2: null,
  radioExternalComponent1: null,
  radioExternalComponent2: null,
  checkboxExternalComponent1: null,
  checkboxExternalComponent2: null,
  buttonExternalComponent1: null,
  buttonExternalComponent2: null,
  submitButtonExternalComponent1: null,
  submitButtonExternalComponent2: null
  //
};
