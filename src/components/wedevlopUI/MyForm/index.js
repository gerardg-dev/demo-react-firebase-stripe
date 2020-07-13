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

import MyRow from "./elements/MyRow";
import MyColumn from "./elements/MyColumn";
import MyLabel from "./elements/MyLabel";
import MyInput from "./elements/MyInput";
import MySelect from "./elements/MySelect";
import MyRadioControl from "./elements/MyRadioControl";
import MyCheckboxControl from "./elements/MyCheckboxControl";
import MyTextarea from "./elements/MyTextarea";
import MyButton from "./elements/MyButton";

import configObjs from "./configObjs";
import defaultStyles from "./styles/defaultStyles";
import defaultClassNames from "./styles/defaultClassNames";

import formatElements from "./formatElements";
import validateRule from "./validationRules/validateRule";

// utils

const objHasKey = (obj, key) => key in obj;

const isObjectEmpty = obj => {
  if (obj === null || obj === undefined) return null;
  let ans =
    Object.keys(obj).length === 0 && obj.constructor === Object ? true : false;
  return ans;
};

const arrIncludesValue = (arr, value) => {};

let rulesValidationResultsByInputName = {};

class MyForm extends React.Component {
  handleOnInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      inputValues: { ...this.state.inputValues, ...{ [name]: value } }
    });
    // this.setState({ ...this.state.inputValues, ...{ [name]: value } });
  };

  addRemoveMultipleInputValues = async (inputName, value) => {
    let currentValues = this.state.inputValues[inputName];
    let newValues = currentValues;
    let isValueFound = currentValues.includes(value);
    if (isValueFound === true) {
      newValues = newValues.filter(e => e !== value);
    } else {
      newValues.push(value);
    }
    await this.setState({
      ...this.state,
      ...{
        inputValues: {
          ...this.state.inputValues,
          ...{ [inputName]: newValues }
        }
      }
    });
  };

  setInitialInputValues = async (element, name, value) => {
    let val;
    if (
      element.toString() === "select" ||
      element.toString() === "radioControl" ||
      element.toString() === "checkboxControl"
    ) {
      val = value.length > 0 ? value : [];
    } else {
      val = value.length > 0 ? value : "";
    }
    if (this.state.inputValues && this.state.inputValues[name] === undefined) {
      await this.setState({
        ...this.state,
        ...{
          inputValues: {
            ...this.state.inputValues,
            ...{ [name]: val }
          }
        }
      });
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      isFormFilled: false,
      isFormSubmitted: false,
      isFormValid: false,
      inputValues: props.inputValues,
      // rulesValidationResultsByInputName: {},
      style: { ...defaultStyles.style, ...props.style },
      addStyle: { ...defaultStyles.addStyle, ...props.addStyle },
      className: { ...defaultClassNames.className, ...props.className },
      addClassName: {
        ...defaultClassNames.addClassName,
        ...props.addClassName
      },
      formOptions: {},
      formElements: []
    };
  }

  async componentDidMount() {
    // Format Form Options and Form Main Row Columns
    if (this.props && this.props.formOptions !== undefined) {
      let formattedMainRowColumns = [];
      if (
        this.props.formOptions.columns !== undefined &&
        this.props.formOptions.columns.length > 0
      ) {
        const mainRowColumns = this.props.formOptions.columns;
        formattedMainRowColumns = formatElements(mainRowColumns);
      }

      let formattedMainRowColumnsObj =
        formattedMainRowColumns.length === 0 ? {} : formattedMainRowColumns;

      const formattedFormOptions = {
        ...configObjs.formOptions,
        ...this.props.formOptions,
        ...formattedMainRowColumnsObj
      };
      await this.setState({ formOptions: formattedFormOptions });
    }

    // Format Form Elements
    if (
      this.props &&
      this.props.formElements !== undefined &&
      this.props.formElements.length > 0
    ) {
      const { formElements } = this.props;
      let formattedFormElements = formatElements(formElements);

      formattedFormElements.map((formElement, i) => {
        if (formElement.element === "row") {
          let rowFormElements = formElement.formElements;
          if (rowFormElements.length < 1) return;
          let formattedRowFormElements = formatElements(rowFormElements);
          formattedFormElements[i].formElements = formattedRowFormElements;
        }
      });

      await this.setState({ formElements: formattedFormElements });
    }
  }

  renderFormMainRowContent = () => {
    const { formOptions, formElements } = this.state;
    if (formElements === undefined) return;

    if (this.state.formOptions && this.state.formOptions.columns === undefined)
      return;

    if (this.state.formOptions.columns.length === 0) return;

    return this.state.formOptions.columns.map((columnObj, index) => {
      return this.renderColumn(index, columnObj, formElements);
    });
  };

  renderRow = (index, elementObj) => {
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

    const rowFormElements = elementObj.formElements;

    return (
      <MyRow
        // key={index}
        elementObj={elementObj}
        stateStyles={stateStyles}
        propsStyles={propsStyles}
      >
        {this.renderRowColumns(elementObj, rowFormElements)}
      </MyRow>
    );
  };

  renderRowColumns = (elementObj, formElements) => {
    if (elementObj.columns === undefined || elementObj.columns.length === 0) {
      return;
    }

    return elementObj.columns.map((columnObj, index) => {
      return this.renderColumn(index, columnObj, formElements);
    });
  };

  renderColumn = (index, columnObj, formElements) => {
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
    const { columnNumber, columnSize } = columnObj;

    return (
      <MyColumn
        // key={index}
        elementObj={columnObj}
        stateStyles={stateStyles}
        propsStyles={propsStyles}
      >
        {this.renderColumnElements(index, columnNumber, formElements)}
      </MyColumn>
    );
  };

  renderColumnElements = (index, columnNumber, formElements) => {
    if (columnNumber === undefined) return;
    if (formElements === undefined) return;
    if (formElements.length === 0) return;

    return formElements.map((elementObj, i) => {
      if (
        Object.keys(elementObj).length === 0 &&
        elementObj.constructor === Object
      ) {
        return;
      }
      if (elementObj && elementObj.element === undefined) return;
      if (elementObj && elementObj.columnNumber === undefined) return;

      if (columnNumber.toString() === elementObj.columnNumber.toString()) {
        return this.renderElement(index, columnNumber, elementObj);
      }
    });
  };

  renderElement = (index, columnNumber, elementObj) => {
    // Math.random() as key may affect when DOM reorder elements.
    // index = `${columnNumber}-${index}-${Math.random() * 100}`;

    if (elementObj.element.toString() === "row") {
      return this.renderRow(index, elementObj);
    }
    if (elementObj.element.toString() === "label") {
      return this.renderLabel(index, elementObj);
    }
    if (elementObj.element.toString() === "input") {
      return this.renderInput(index, elementObj);
    }
    if (elementObj.element.toString() === "select") {
      return this.renderSelect(index, elementObj);
    }
    if (elementObj.element.toString() === "radioControl") {
      return this.renderRadioControl(index, elementObj);
    }
    if (elementObj.element.toString() === "checkboxControl") {
      return this.renderCheckboxControl(index, elementObj);
    }
    if (elementObj.element.toString() === "textarea") {
      return this.renderTextarea(index, elementObj);
    }
    if (elementObj.element.toString() === "button") {
      return this.renderButton(index, elementObj);
    }
  };

  renderLabel = (index, elementObj) => {
    const { labelExternalComponent1, labelExternalComponent2 } = this.props;

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

    return (
      <MyLabel
        // key={index}
        elementObj={elementObj}
        stateStyles={stateStyles}
        propsStyles={propsStyles}
        labelExternalComponent1={labelExternalComponent1}
        labelExternalComponent2={labelExternalComponent2}
      />
    );
  };

  renderInput = (index, elementObj) => {
    const { isFormSubmitted, inputValues } = this.state;

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

    const { inputExternalComponent1, inputExternalComponent2 } = this.props;

    const { element, name, value } = elementObj;
    this.setInitialInputValues(element, name, value);

    let inputValue = inputValues[name];

    return (
      <MyInput
        // key={index}
        isFormSubmitted={isFormSubmitted}
        value={inputValue}
        elementObj={elementObj}
        stateStyles={stateStyles}
        propsStyles={propsStyles}
        inputExternalComponent1={inputExternalComponent1}
        inputExternalComponent2={inputExternalComponent2}
        onChange={this.handleOnInputChange}
        inputValues={this.state.inputValues}
      />
    );
  };

  renderSelect = (index, elementObj) => {
    const { element, name, multiple, selectedValues } = elementObj;
    this.setInitialInputValues(element, name, selectedValues);

    const { selectExternalComponent1, selectExternalComponent2 } = this.props;

    const { isFormSubmitted, inputValues } = this.state;

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

    return (
      <MySelect
        // key={index}
        selectedValues={inputValues[name]}
        isFormSubmitted={isFormSubmitted}
        inputValues={inputValues}
        elementObj={elementObj}
        stateStyles={stateStyles}
        propsStyles={propsStyles}
        selectExternalComponent1={selectExternalComponent1}
        selectExternalComponent2={selectExternalComponent2}
        onChange={e => {
          if (multiple === false) {
            this.handleOnInputChange(e);
          }
          if (multiple === true) {
            this.addRemoveMultipleInputValues(name, e.target.value);
          }
        }}
      />
    );
  };

  renderRadioControl = (index, elementObj) => {
    const { element, name, multiple, checkedValues } = elementObj;
    this.setInitialInputValues(element, name, checkedValues);

    const { radioExternalComponent1, radioExternalComponent2 } = this.props;

    const { isFormSubmitted, inputValues } = this.state;

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

    return (
      <MyRadioControl
        // key={index}
        checkedValues={inputValues[name]}
        isFormSubmitted={isFormSubmitted}
        inputValues={inputValues}
        elementObj={elementObj}
        stateStyles={stateStyles}
        propsStyles={propsStyles}
        radioExternalComponent1={radioExternalComponent1}
        radioExternalComponent2={radioExternalComponent2}
        onClick={e => {
          if (multiple === false) {
            this.handleOnInputChange(e);
          }
          if (multiple === true) {
            this.addRemoveMultipleInputValues(name, e.target.value);
          }
        }}
      />
    );
  };

  renderCheckboxControl = (index, elementObj) => {
    const { element, name, checkedValues } = elementObj;
    this.setInitialInputValues(element, name, checkedValues);

    const {
      checkboxExternalComponent1,
      checkboxExternalComponent2
    } = this.props;

    const { isFormSubmitted, inputValues } = this.state;

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

    return (
      <MyCheckboxControl
        // key={index}
        checkedValues={inputValues[name]}
        isFormSubmitted={isFormSubmitted}
        inputValues={inputValues}
        elementObj={elementObj}
        stateStyles={stateStyles}
        propsStyles={propsStyles}
        checkboxExternalComponent1={checkboxExternalComponent1}
        checkboxExternalComponent2={checkboxExternalComponent2}
        onClick={e => {
          this.addRemoveMultipleInputValues(elementObj.name, e.target.value);
        }}
      />
    );
  };

  renderTextarea = (index, elementObj) => {
    const { isFormSubmitted, inputValues } = this.state;

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

    // const {
    //   textareaExternalComponent1,
    //   textareaExternalComponent2
    // } = this.props;

    const { element, name, value } = elementObj;
    this.setInitialInputValues(element, name, value);

    let inputValue = inputValues[name];

    return (
      <MyTextarea
        // key={index}
        isFormSubmitted={isFormSubmitted}
        value={inputValue}
        elementObj={elementObj}
        stateStyles={stateStyles}
        propsStyles={propsStyles}
        // textareaExternalComponent1={textareaExternalComponent1}
        // textareaExternalComponent2={textareaExternalComponent2}
        onChange={this.handleOnInputChange}
        inputValues={this.state.inputValues}
      />
    );
  };

  renderButton = (index, elementObj) => {
    const { buttonExternalComponent1, buttonExternalComponent2 } = this.props;

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

    return (
      <MyButton
        // key={index}
        elementObj={elementObj}
        stateStyles={stateStyles}
        propsStyles={propsStyles}
        buttonExternalComponent1={buttonExternalComponent1}
        buttonExternalComponent2={buttonExternalComponent2}
        onClick={elementObj.onClick}
      />
    );
  };

  isFormFilledVerifier = async () => {
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
    let allInputRulesAreValid = true;

    // if (isObjectEmpty(rulesValidationResultsByInputName) === false ) {
    //   let inputNames = Object.keys(rulesValidationResultsByInputName);
    //
    //   if (inputNames !== undefined && inputNames.length > 0) {
    //     inputNames.map(inputName => {
    //       let rulesValidationResults = rulesValidationResultsByInputName[inputName];
    //       if (
    //         rulesValidationResults !== undefined &&
    //         rulesValidationResults.length > 0
    //       ) {
    //         rulesValidationResults.map(ruleValidationResult => {
    //           const { name, result } = ruleValidationResult;
    //           if (result === false) allInputRulesAreValid = false;
    //         })
    //       }
    //     });
    //   }
    // };

    const checkRule = rule => {
      let thisRuleInputValues = [];
      rule.inputNames.map(inputName => {
        thisRuleInputValues.push(this.state.inputValues[inputName]);
      });
      let isRuleValid = validateRule(rule.name, thisRuleInputValues);
      if (isRuleValid === false) allInputRulesAreValid = false;
    };

    if (
      this.state.formElements !== undefined ||
      this.state.formElements.length > 0
    ) {
      this.state.formElements.map(e => {
        if (e && e.validationRules !== undefined && e.validationRules > 0) {
          e.validationRules.map(rule => checkRule(rule));
        }
        if (e.element === "row") {
          if (e.formElements !== undefined && e.formElements.length > 0) {
            e.formElements.map(ee => {
              if (
                ee &&
                ee.validationRules !== undefined &&
                ee.validationRules > 0
              ) {
                ee.validationRules.map(rule => checkRule(rule));
              }
            });
          }
        }
      });
    }

    if (allInputRulesAreValid === false && this.state.isFormValid === true) {
      await this.setState({ isFormValid: false });
    }
    if (allInputRulesAreValid === true && this.state.isFormValid === false) {
      await this.setState({ isFormValid: true });
    }
  };

  handleOnSubmit = async () => {
    const { isFormFilled, isFormSubmitted, isFormValid } = this.state;

    if (isFormSubmitted === false) {
      await this.setState({ isFormSubmitted: true });
    }

    // if (this.props && this.props.onSubmit !== undefined) {
    //   this.props.onSubmit(this.state.inputValues);
    // };
  };

  renderFormError = () => {
    const {
      showFormError,
      formErrorText,
      formErrorIntlMsgID,
      formErrorUseIntlMsgID
    } = this.props;
    const { style, addStyle, className, addClassName } = this.state;

    if (showFormError === true) {
      return (
        <label
          style={{ ...style.formError, ...addStyle.formError }}
          className={`${className.formError} ${addClassName.formError}`}
        >
          {formErrorUseIntlMsgID === true ? (
            <IntlMessages id={formErrorIntlMsgID} />
          ) : (
            formErrorText
          )}
        </label>
      );
    }
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
      formSubtitleIntlMsgID
    } = this.props;
    const {
      formHeaderExternalComponent1,
      formHeaderExternalComponent2,
      formFooterExternalComponent1,
      formFooterExternalComponent2,
      submitButtonExternalComponent1,
      submitButtonExternalComponent2
    } = this.props;
    const { onSubmit } = this.props;

    const { isFormFilled, isFormSubmitted, isFormValid } = this.state;
    const { style, addStyle, className, addClassName } = this.state;
    const { inputValues, formOptions, formElements } = this.state;

    this.isFormFilledVerifier();

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
          {showFormTitle === true && (
            <label
              style={{ ...style.formTitle, ...addStyle.formTitle }}
              className={`${className.formTitle} ${addClassName.formTitle}`}
            >
              {formTitleUseIntlMsgID === true ? (
                <IntlMessages id={formTitleIntlMsgID} />
              ) : (
                formTitleText
              )}
            </label>
          )}
          {showFormSubtitle === true && (
            <label
              style={{ ...style.formSubtitle, ...addStyle.formSubtitle }}
              className={`${className.formSubtitle} ${addClassName.formSubtitle}`}
            >
              {formSubtitleUseIntlMsgID === true ? (
                <IntlMessages id={formSubtitleIntlMsgID} />
              ) : (
                formSubtitleText
              )}
            </label>
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
            // onClick={e => this.handleOnSubmit()}
            onClick={async e => {
              e.preventDefault();
              await this.handleOnSubmit();
              await this.validateForm();
              // if (this.state.isFormValid === false) return;
              this.props.onSubmit(inputValues);
            }}
            to=""
            disabled={isFormFilled ? true : false}
            style={
              isFormFilled === true
                ? { ...style.submitButton, ...addStyle.submitButton }
                : {
                    ...style.submitButtonDisabled,
                    ...addStyle.submitButtonDisabled
                  }
            }
            className={
              isFormFilled === true
                ? `${className.submitButton} ${addClassName.submitButton}`
                : `${className.submitButtonDisabled} ${addClassName.submitButtonDisabled}`
            }
          >
            {submitButtonExternalComponent1 !== null && (
              <div>{submitButtonExternalComponent1}</div>
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
              <div>{submitButtonExternalComponent2}</div>
            )}
          </Link>
          {formFooterExternalComponent2 !== null && (
            <div>{formFooterExternalComponent2}</div>
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
  showFormTitle: false,
  formTitleText: "TITLE",
  formTitleUseIntlMsgID: false,
  formTitleIntlMsgID: "myform.title",
  //
  showFormSubtitle: false,
  formSubtitleText: "Subtitle",
  formSubtitleUseIntlMsgID: false,
  formSubtitleIntlMsgID: "myform.subtitle",
  //
  shouldShowSubmitBtnLoader: false,
  submitButtonText: "SUBMIT",
  submitButtonIntlMsgID: "submit",
  submitButtonUsesIntlMsgID: false,
  //
  showFormError: false,
  formErrorText: "There was an error!",
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
  onSubmit: () => console.log("SUBMIT"),
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
};
