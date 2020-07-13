import formatRow from "./row";
import formatColumn from "./column";
import formatFieldset from "./fieldset";
import formatLegend from "./legend";
import formatLabel from "./label";
import formatInput from "./input";
import formatSelect from "./select";
import formatOption from "./option";
import formatRadioControl from "./radioControl";
import formatRadio from "./radio";
import formatCheckboxControl from "./checkboxControl";
import formatCheckbox from "./checkbox";
import formatTextarea from "./textarea";
import formatButton from "./button";
import formatSubmitButton from "./submitButton";

export default elementsArr => {
  if (elementsArr === null || elementsArr === undefined) return;
  if (elementsArr.length < 1) return;

  let formattedFormElements = [];

  elementsArr.map((elementObj, index) => {
    let formattedObj = null;

    if (elementObj.element === "row") {
      formattedObj = formatRow(elementObj);
      if (
        formattedObj.columns !== undefined &&
        formattedObj.columns.length > 0
      ) {
        let columns = formattedObj.columns;
        let formattedColumns = [];
        columns.map((columnObj, index) => {
          let formattedCol = formatColumn(columnObj);
          formattedColumns.push(formattedCol);
        });
        formattedObj = {
          ...formattedObj,
          ...{ columns: formattedColumns }
        };
      }
    }

    if (elementObj.element === "column") {
      formattedObj = formatColumn(elementObj);
    }

    if (elementObj.element === "label") {
      formattedObj = formatLabel(elementObj);
    }

    if (elementObj.element === "input") {
      formattedObj = formatInput(elementObj);
    }

    if (elementObj.element === "select") {
      formattedObj = formatSelect(elementObj);
      if (
        formattedObj.options !== undefined &&
        formattedObj.options.length > 0
      ) {
        let selectOptions = formattedObj.options;
        let formattedOptions = [];
        selectOptions.map((optionObj, index) => {
          let formattedOpt = formatOption(optionObj);
          formattedOptions.push(formattedOpt);
        });
        formattedObj = {
          ...formattedObj,
          ...{ options: formattedOptions }
        };
      }
    }

    if (elementObj.element === "radioControl") {
      formattedObj = formatRadioControl(elementObj);
      if (formattedObj.inputs !== undefined && formattedObj.inputs.length > 0) {
        let radioInputs = formattedObj.inputs;
        let formattedInputs = [];
        radioInputs.map((radioObj, index) => {
          let formattedInput = formatRadio(radioObj);
          formattedInputs.push(formattedInput);
        });
        formattedObj = {
          ...formattedObj,
          ...{ inputs: formattedInputs }
        };
      }
    }

    if (elementObj.element === "checkboxControl") {
      formattedObj = formatCheckboxControl(elementObj);
      if (formattedObj.inputs !== undefined && formattedObj.inputs.length > 0) {
        let checkboxInputs = formattedObj.inputs;
        let formattedInputs = [];
        checkboxInputs.map((checkboxObj, index) => {
          let formattedInput = formatCheckbox(checkboxObj);
          formattedInputs.push(formattedInput);
        });
        formattedObj = {
          ...formattedObj,
          ...{ inputs: formattedInputs }
        };
      }
    }

    if (elementObj.element === "textarea") {
      formattedObj = formatTextarea(elementObj);
    }

    if (elementObj.element === "button") {
      formattedObj = formatButton(elementObj);
    }

    if (elementObj.element === "submitButton") {
      formattedObj = formatSubmitButton(elementObj);
    }

    if (formattedObj !== null) {
      formattedFormElements.push(formattedObj);
    }
  });

  return formattedFormElements;
};
