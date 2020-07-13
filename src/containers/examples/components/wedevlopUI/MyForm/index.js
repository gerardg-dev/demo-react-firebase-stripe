import React, { Component } from "react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import MyForm from "../../../../../components/wedevlopUI/MyForm";

import Heading from "./ui/Heading";
import Subheading from "./ui/Subheading";
import Body from "./ui/Body";
import SeeCodeButton from "./ui/SeeCodeButton";
import ExternalComponent from "./ui/ExternalComponent";

const ExamplesWeDevlopUIMyForm = props => {
  const handleOnSubmit = inputValues => {
    console.log("MyForm handleOnSubmit()");
    if (inputValues === undefined || inputValues.length === 0) return null;
    alert(JSON.stringify(inputValues, null, "\t"));
    // - stringify with tabs inserted at each level
    // JSON.stringify(inputValues, null, "\t");
    // - stringify with 4 spaces at each level
    // JSON.stringify(inputValues, null, 4);
  };

  return (
    <div style={styleObjects.container}>
      <h1 style={styleObjects.demo}>
        <strong>DEMO</strong>
      </h1>

      {/* DEMO - EXAMPLES -------------------------------------------------- */}

      <Heading text="FORM EXAMPLES" />

      <Subheading text="EXAMPLE 1" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        formTitleText="WELCOME BACK!"
        showFormSubtitle={true}
        formSubtitleText="We missed you."
        formElements={[
          {
            element: "input",
            name: "myEmail",
            label: { show: false },
            placeholder: { text: "Enter Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myEmail"]
              },
              {
                name: "validEmail",
                inputNames: ["myEmail"]
              }
            ]
          },
          {
            element: "input",
            name: "myPassword",
            type: "password",
            label: { show: false },
            placeholder: { text: "Enter Password" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myPassword"]
              },
              {
                name: "validPassword1",
                inputNames: ["myPassword"]
              }
            ]
          }
        ]}
        submitButtonText="SIGN IN"
        addStyle={{
          form: {
            padding: "10px",
            borderRadius: "20px",
            width: "100%",
            minWidth: "300px",
            maxWidth: "300px"
          },
          formHeader: {
            padding: "10px",
            fontFamily: "Verdana, Geneva, sans-serif",
            color: "gray"
          },
          formTitle: { fontSize: "20px", fontWeight: "bold" },
          formSubtitle: { fontSize: "14px" },
          formMainRow: {
            padding: "10px"
          },
          formFooter: {
            padding: "10px"
          },
          inputContainer: { paddingBottom: "5px" },
          input: {
            borderRadius: "20px",
            width: "100%",
            height: "32px",
            border: "none",
            backgroundColor: "lightGray",
            fontFamily: "Verdana, Geneva, sans-serif",
            paddingLeft: "10px"
          },
          submitButton: {
            backgroundColor: "lightGreen",
            borderRadius: "25px",
            width: "100%",
            minWidth: "100px",
            maxWidth: "200px",
            height: "40px",
            color: "white",
            fontFamily: "Verdana, Geneva, sans-serif",
            fontSize: "14px",
            fontWeight: "bold"
          },
          submitButtonDisabled: {
            backgroundColor: "gray",
            borderRadius: "25px",
            width: "100%",
            minWidth: "100px",
            maxWidth: "200px",
            height: "40px",
            color: "white",
            fontFamily: "Verdana, Geneva, sans-serif",
            fontSize: "14px",
            fontWeight: "bold"
          },
          errorLabel: {
            fontSize: "12px",
            paddingLeft: "10px"
          }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/HVTN9zaG9dGlvRNmGMIK" />

      <Subheading text="EXAMPLE 2" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        formTitleText="SIGN UP"
        showFormSubtitle={true}
        formSubtitleText="Create a new account."
        formElements={[
          {
            element: "input",
            name: "myEmail",
            label: { show: false },
            placeholder: { text: "Enter Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myEmail"]
              },
              {
                name: "validEmail",
                inputNames: ["myEmail"]
              }
            ]
          },
          {
            element: "input",
            name: "myEmailConfirm",
            label: { show: false },
            placeholder: { text: "Confirm Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myEmailConfirm"]
              },
              {
                name: "matchEmails",
                inputNames: ["myEmail", "myEmailConfirm"]
              }
            ]
          },
          {
            element: "input",
            name: "myPassword",
            type: "password",
            label: { show: false },
            placeholder: { text: "Enter Password" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myPassword"]
              },
              {
                name: "validPassword1",
                inputNames: ["myPassword"]
              }
            ]
          },
          {
            element: "input",
            name: "myPasswordConfirm",
            label: { show: false },
            placeholder: { text: "Confirm Password" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myPasswordConfirm"]
              },
              {
                name: "matchPasswords",
                inputNames: ["myPassword", "myPasswordConfirm"]
              }
            ]
          }
        ]}
        submitButtonText="CREATE ACCOUNT"
        addStyle={{
          form: {
            backgroundColor: "black",
            padding: "10px",
            width: "100%",
            minWidth: "300px",
            maxWidth: "300px"
          },
          formHeader: {
            padding: "10px",
            fontFamily: "Courier New, Courier, monospace",
            color: "white"
          },
          formTitle: { fontSize: "20px", fontWeight: "bold" },
          formSubtitle: { fontSize: "14px" },
          formMainRow: {
            padding: "10px"
          },
          formFooter: {
            padding: "10px"
          },
          inputContainer: { paddingBottom: "5px" },
          input: {
            width: "100%",
            height: "32px",
            border: "none",
            backgroundColor: "lightGray",
            fontFamily: "Courier New, Courier, monospace",
            paddingLeft: "10px"
          },
          submitButton: {
            backgroundColor: "lightGreen",
            width: "100%",
            minWidth: "100px",
            maxWidth: "200px",
            height: "40px",
            color: "white",
            fontFamily: "Courier New, Courier, monospace",
            fontSize: "14px",
            fontWeight: "bold"
          },
          submitButtonDisabled: {
            backgroundColor: "rgba(255,255,255,0)",
            border: "solid gray 2px",
            width: "100%",
            minWidth: "100px",
            maxWidth: "200px",
            height: "40px",
            color: "white",
            fontFamily: "Courier New, Courier, monospace",
            fontSize: "14px",
            fontWeight: "bold"
          },
          errorLabel: {
            fontSize: "12px",
            paddingLeft: "10px"
          }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/4DXm8HKtFPJU3Krcf7xG" />

      {/* DEMO - ALL FORM ELEMENTS ----------------------------------------- */}

      <Heading text="FORM ELEMENTS" />

      <Subheading text="FORM ELEMENTS - ALL" />
      <Body text="All form elements below: Label, Input with its own Label, Textarea with its own Label, Select with Options, Radio Control with Radio Inputs, Checkbox Control with Checkbox Inputs, a Button and the Form Submit Button." />
      <MyForm
        formElements={[
          //
          // LABEL ------------------------------------------------------------
          //
          {
            element: "label",
            name: "myLabel"
          },
          //
          // INPUT -------------------------------------------------------------
          //
          {
            element: "input",
            name: "myInput"
          },
          //
          // TEXTAREA ----------------------------------------------------------
          //
          {
            element: "textarea",
            name: "myTextarea"
          },
          //
          // SELECT ------------------------------------------------------------
          //
          {
            element: "select",
            name: "mySelect",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1",
                text: "Option 1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2",
                text: "Option 2"
              },
              {
                id: "option3",
                name: "option3",
                value: "option3",
                text: "Option 3"
              }
            ]
          },
          //
          // RADIO CONTROL -----------------------------------------------------
          //
          {
            element: "radioControl",
            name: "myRadio",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1",
                text: "Radio 1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2",
                text: "Radio 2"
              },
              {
                id: "radio3",
                name: "radio3",
                value: "radio3",
                text: "Radio 3"
              }
            ]
          },
          //
          // CHECKBOX CONTROL --------------------------------------------------
          //
          {
            element: "checkboxControl",
            name: "myCheckbox",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1",
                text: "Checkbox 1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2",
                text: "Checkbox 2"
              },
              {
                id: "checkbox3",
                name: "checkbox3",
                value: "checkbox3",
                text: "Checkbox 3"
              }
            ]
          },
          //
          // BUTTON ------------------------------------------------------------
          //
          {
            element: "button",
            name: "myButton",
            onClick: () => alert("Button Clicked!")
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/q7W2jCGwKiQ5xTkKaDW1" />

      {/* DEMO - FORM ELEMENT - LABEL -------------------------------------- */}

      <Heading text="FORM ELEMENT - LABEL" />

      <Subheading text="LABEL - DEFAULT VALUES" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "label",
            name: "myLabel"
          }
        ]}
      />
      <SeeCodeButton href="https://carbon.now.sh/fC8k4KS785CYJTgACGQG" />

      <Subheading text="LABEL - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "label",
            name: "myLabel",
            text: "LABEL CUSTOM TEXT"
          }
        ]}
      />
      <SeeCodeButton href="https://carbon.now.sh/NNawfxOVgCNt9b6Ge7xB" />

      <Subheading text="LABEL - SET TEXT VALUE WITH react-intl" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "label",
            name: "myLabel",
            useIntlMsgID: true,
            intlMsgID: "myform.label"
          }
        ]}
      />
      <SeeCodeButton href="https://carbon.now.sh/gpo4tjDAxeHPLMmiw8Mp" />

      <Subheading text="LABEL - STYLING ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "label",
            name: "myLabel1"
          },
          {
            element: "label",
            name: "myLabel2"
          }
        ]}
        addStyle={{
          label: { border: "solid red 1px" },
          labelContainer: { border: "solid black 3px" }
        }}
      />
      <SeeCodeButton href="https://carbon.now.sh/OQWGa5MEXCit0fgOUHvZ" />

      <Subheading text="LABEL - STYLING AN INDIVIDUAL ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "label",
            name: "myLabel1"
          },
          {
            element: "label",
            name: "myLabel2",
            addStyle: { border: "solid blue 1px" },
            container: {
              addStyle: { border: "solid gray 3px" }
            }
          }
        ]}
        addStyle={{
          label: { border: "solid red 1px" },
          labelContainer: { border: "solid black 3px" }
        }}
      />
      <SeeCodeButton href="https://carbon.now.sh/ZQ3RcmdZhsZrHhTKdf8w" />

      <Subheading text="LABEL - STYLING ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "label",
            name: "myLabel1"
          },
          {
            element: "label",
            name: "myLabel2"
          }
        ]}
        addClassName={{
          label: "border-red-1px",
          labelContainer: "border-black-3px"
        }}
      />
      <SeeCodeButton href="https://carbon.now.sh/nFEeO8vucJlOWboEnfrs" />

      <Subheading text="LABEL - STYLING AN INDIVIDUAL ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "label",
            name: "myLabel1"
          },
          {
            element: "label",
            name: "myLabel2",
            addClassName: "border-blue-1px",
            container: {
              addClassName: "border-gray-3px"
            }
          }
        ]}
        addClassName={{
          label: "border-red-1px",
          labelContainer: "border-black-3px"
        }}
      />
      <SeeCodeButton href="https://carbon.now.sh/Pz5xklbogbl9Yzq77MtJ" />

      <Subheading text="LABEL - EXTERNAL COMPONENTS" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "label",
            name: "myLabel1"
          },
          {
            element: "label",
            name: "myLabel2"
          }
        ]}
        labelExternalComponent1={<ExternalComponent text="COMPONENT 1" />}
        labelExternalComponent2={<ExternalComponent text="COMPONENT 2" />}
      />
      <SeeCodeButton href="https://carbon.now.sh/Me171F3IeOk84COkKEEc" />

      {/* DEMO - FORM ELEMENT - INPUT -------------------------------------- */}

      <Heading text="FORM ELEMENT - INPUT" />

      <Subheading text="INPUT - DEFAULT VALUES" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/LgOxqVAZF7VWmTAfX12Y" />

      <Subheading text="INPUT - TYPE TEXT" />
      <Body text="Type is text by default." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            type: "text"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/St8ThLYNj18rigsz7gp3" />

      <Subheading text="INPUT - TYPE EMAIL" />
      <Body text="Type is text by default." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            type: "email"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/ikl7F2LVRIUNrpUtjppn" />

      <Subheading text="INPUT - TYPE PASSWORD" />
      <Body text="Type is text by default." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            type: "password"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/TpxGQLBfRsGlJyZE5GA8" />

      <Subheading text="INPUT - TYPE NUMBER" />
      <Body text="Type is text by default." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            type: "number"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/CvvwksDeOYC19zxmbpPn" />

      <Subheading text="INPUT - TYPE SEARCH" />
      <Body text="Type is text by default." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            type: "search"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/5k6GxrnU63TRscZ31bHm" />

      <Subheading text="INPUT - SET INIT VALUE" />
      <Body text="Set an initial value." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            value: "Initial Value"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/drZFWsULoxE14mA9X3Mt" />

      <Subheading text="INPUT - MAX LENGTH" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            maxLength: "3"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/2DgwtBldJ2Zo7lJFi6sJ" />

      <Subheading text="INPUT PLACEHOLDER - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            placeholder: { text: "ENTER TEXT HERE" }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/tCig21detwsFiYgJwxiB" />

      <Subheading text="INPUT PLACEHOLDER - SET TEXT VALUE WITH react-intl" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            placeholder: {
              useIntlMsgID: true,
              intlMsgID: "myform.input.placeholder"
            }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/vb7ak15B91XjtXQS5h10" />

      <Subheading text="INPUT LABEL - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            label: { text: "ENTER TEXT HERE" }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/EmybQbg0Yqr2qsE0zoYX" />

      <Subheading text="INPUT LABEL - SET TEXT VALUE WITH react-intl" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            label: {
              useIntlMsgID: true,
              intlMsgID: "myform.input.label"
            }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/4Hs1zldjDKbfiHXukRyw" />

      <Subheading text="INPUT LABEL - HIDE" />
      <Body text="Set show to false." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            label: { show: false }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/oz4QFP78JttY4SQhpvEG" />

      <Subheading text="INPUT LABEL - POSITION LEFT" />
      <Body text="Input label position is set to left by default." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            label: { position: "left" }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/5CT0FWJiQtgLjOtYmaUV" />

      <Subheading text="INPUT LABEL - POSITION RIGHT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            label: { position: "right" }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/GaojoFT32K40rwUfc5tI" />

      <Subheading text="INPUT LABEL - POSITION TOP" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            label: { position: "top" }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/ZKp4sDFHnbrS8jK6CYAR" />

      <Subheading text="INPUT LABEL - POSITION BOTTOM" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput",
            label: { position: "bottom" }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/yT3nr6KuJWAhP9lrFefj" />

      <Subheading text="INPUT - BUILT-IN SPANS" />
      <Body text="Span 'display' property is set to 'none' in the default style object." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2",
            inputSpan1: {
              style: { border: "solid blue 10px" }
            },
            inputSpan2: {
              style: { border: "solid yellow 10px" }
            }
          }
        ]}
        style={{
          inputSpan1: { border: "solid red 10px" },
          inputSpan2: { border: "solid green 10px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/Ra0vqu9YjmBEXnabTWgm" />

      <Subheading text="INPUT - EXTERNAL COMPONENTS" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2"
          }
        ]}
        inputExternalComponent1={<ExternalComponent text="COMPONENT 1" />}
        inputExternalComponent2={<ExternalComponent text="COMPONENT 2" />}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/w3YGJPgN3ZLsT8bz42tR" />

      <Subheading text="INPUT - STYLING ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput"
          }
        ]}
        addStyle={{
          input: { border: "solid red 1px" },
          inputLabel: { border: "solid green 1px" },
          inputContainer: { border: "solid black 3px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/wnFb4Puy1cotSNOx8Y5J" />

      <Subheading text="INPUT - STYLING AN INDIVIDUAL ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2",
            addStyle: { border: "solid blue 1px" },
            label: {
              addStyle: { border: "solid yellow 1px" }
            },
            container: {
              addStyle: { border: "solid gray 3px" }
            }
          }
        ]}
        addStyle={{
          input: { border: "solid red 1px" },
          inputLabel: { border: "solid green 1px" },
          inputContainer: { border: "solid black 3px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/FJ0IlcSAtwTdpVWY5OCQ" />

      <Subheading text="INPUT - STYLING ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput"
          }
        ]}
        addClassName={{
          input: "border-red-1px",
          inputLabel: "border-green-1px",
          inputContainer: "border-black-3px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/G6JRcDnFCd3mTgE0AFrW" />

      <Subheading text="INPUT - STYLING AN INDIVIDUAL ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2",
            addClassName: "border-blue-1px",
            label: {
              addClassName: "border-yellow-1px"
            },
            container: {
              addClassName: "border-gray-3px"
            }
          }
        ]}
        addClassName={{
          input: "border-red-1px",
          inputLabel: "border-green-1px",
          inputContainer: "border-black-3px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/b3Azbzs25NkWFPAd1NF9" />

      <Subheading text="INPUT PLACEHOLDER - STYLING ELEMENT WITH A CLASS NAME" />
      <Body text="Input placeholder styling can only be done using css classes." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2",
            addClassName: "input-placeholder-two"
          }
        ]}
        addClassName={{
          input: "input-placeholder-one"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/VuX9zcsHxIgAlBYSaFGB" />

      {/* DEMO - VALIDATION RULES ------------------------------------------ */}

      <Heading text="VALIDATION RULES" />

      <Subheading text="VALIDATION RULES - ALL" />
      <Body text="Click the submit button to see the error label." />
      <Body text="Very important to set an input name and then add that name as a string in the inputNames array of every validation rules object." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myNameInput",
            label: { position: "top", text: "Name" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myNameInput"]
              }
            ]
          },
          {
            element: "input",
            name: "myEmailInput",
            label: { position: "top", text: "Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myEmailInput"]
              },
              {
                name: "validEmail",
                inputNames: ["myEmailInput"]
              }
            ]
          },
          {
            element: "input",
            name: "myConfirmEmailInput",
            label: { position: "top", text: "Confirm Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myConfirmEmailInput"]
              },
              {
                name: "matchEmails",
                inputNames: ["myEmailInput", "myConfirmEmailInput"]
              }
            ]
          },
          {
            element: "input",
            name: "myPasswordInput",
            type: "password",
            label: { position: "top", text: "Password" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myPasswordInput"]
              },
              {
                name: "validPassword1",
                inputNames: ["myPasswordInput"]
              }
            ]
          },
          {
            element: "input",
            name: "myConfirmPasswordInput",
            type: "password",
            label: { position: "top", text: "Confirm Password" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myConfirmPasswordInput"]
              },
              {
                name: "matchPasswords",
                inputNames: ["myPasswordInput", "myConfirmPasswordInput"]
              }
            ]
          },
          {
            element: "input",
            name: "myPhoneNumberInput",
            type: "number",
            label: { position: "top", text: "Phone Number" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myPhoneNumberInput"]
              },
              {
                name: "isMinChars6",
                inputNames: ["myPhoneNumberInput"]
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/QRztntVQxpFDOJyO3pme" />

      <Subheading text="VALIDATION RULES - SET ERROR TEXT VALUE" />
      <Body text="Click the submit button to see the error label." />
      <Body text="Very important to set an input name and then add that name as a string in the inputNames array of every validation rules object." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myNameInputWithCustomErr",
            label: { position: "top", text: "Name" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myNameInputWithCustomErr"],
                errorText: "Required! (Custom)"
              }
            ]
          },
          {
            element: "input",
            name: "myEmailInputWithCustomErr",
            label: { position: "top", text: "Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myEmailInputWithCustomErr"],
                errorText: "Required! (Custom)"
              },
              {
                name: "validEmail",
                inputNames: ["myEmailInputWithCustomErr"],
                errorText: "Invalid Email! (Custom)"
              }
            ]
          },
          {
            element: "input",
            name: "myConfirmEmailInputWithCustomErr",
            label: { position: "top", text: "Confirm Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myConfirmEmailInputWithCustomErr"],
                errorText: "Required! (Custom)"
              },
              {
                name: "matchEmails",
                inputNames: [
                  "myEmailInputWithCustomErr",
                  "myConfirmEmailInputWithCustomErr"
                ],
                errorText: "Different Emails! (Custom)"
              }
            ]
          },
          {
            element: "input",
            name: "myPasswordInputWithCustomErr",
            type: "password",
            label: { position: "top", text: "Password" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myPasswordInputWithCustomErr"],
                errorText: "Required! (Custom)"
              },
              {
                name: "validPassword1",
                inputNames: ["myPasswordInputWithCustomErr"],
                errorText: "Invalid Password! (Custom)"
              }
            ]
          },
          {
            element: "input",
            name: "myConfirmPasswordInputWithCustomErr",
            type: "password",
            label: { position: "top", text: "Confirm Password" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myConfirmPasswordInputWithCustomErr"],
                errorText: "Required! (Custom)"
              },
              {
                name: "matchPasswords",
                inputNames: [
                  "myPasswordInputWithCustomErr",
                  "myConfirmPasswordInputWithCustomErr"
                ],
                errorText: "Different Passwords! (Custom)"
              }
            ]
          },
          // Add min max chars validation rule
          {
            element: "textarea",
            name: "myTextarea"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/j36Q8SCmE8nv32XDqqtP" />

      <Subheading text="VALIDATION RULES - SET ERROR TEXT VALUE WITH react-intl" />
      <Body text="Click the submit button to see the error label." />
      <Body text="Very important to set an input name and then add that name as a string in the inputNames array of every validation rules object." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myNameInputWithIntlMsgID",
            label: { position: "top", text: "Name" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myNameInputWithIntlMsgID"],
                useIntlMsgID: true,
                intlMsgID: "myform.invalid.rule.required"
              }
            ]
          },
          {
            element: "input",
            name: "myEmailInputWithIntlMsgID",
            label: { position: "top", text: "Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myEmailInputWithIntlMsgID"],
                useIntlMsgID: true,
                intlMsgID: "myform.invalid.rule.required"
              },
              {
                name: "validEmail",
                inputNames: ["myEmailInputWithIntlMsgID"],
                useIntlMsgID: true,
                intlMsgID: "myform.invalid.rule.validEmail"
              }
            ]
          },
          {
            element: "input",
            name: "myConfirmEmailInputWithIntlMsgID",
            label: { position: "top", text: "Confirm Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myConfirmEmailInputWithIntlMsgID"],
                useIntlMsgID: true,
                intlMsgID: "myform.invalid.rule.required"
              },
              {
                name: "matchEmails",
                inputNames: [
                  "myEmailInputWithIntlMsgID",
                  "myConfirmEmailInputWithIntlMsgID"
                ],
                useIntlMsgID: true,
                intlMsgID: "myform.invalid.rule.matchEmails"
              }
            ]
          },
          {
            element: "input",
            name: "myPasswordInputWithIntlMsgID",
            type: "password",
            label: { position: "top", text: "Password" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myPasswordInputWithIntlMsgID"],
                useIntlMsgID: true,
                intlMsgID: "myform.invalid.rule.required"
              },
              {
                name: "validPassword1",
                inputNames: ["myPasswordInputWithIntlMsgID"],
                useIntlMsgID: true,
                intlMsgID: "myform.invalid.rule.validPassword1"
              }
            ]
          },
          {
            element: "input",
            name: "myConfirmPasswordInputWithIntlMsgID",
            type: "password",
            label: { position: "top", text: "Confirm Password" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myConfirmPasswordInputWithIntlMsgID"],
                useIntlMsgID: true,
                intlMsgID: "myform.invalid.rule.required"
              },
              {
                name: "matchPasswords",
                inputNames: [
                  "myPasswordInputWithIntlMsgID",
                  "myConfirmPasswordInputWithIntlMsgID"
                ],
                useIntlMsgID: true,
                intlMsgID: "myform.invalid.rule.matchPasswords"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/wLVDXPntDl8XgLBaw43N" />

      <Subheading text="ERROR LABEL - STYLING ELEMENT WITH A STYLE OBJECT" />
      <Body text="Click the submit button to see the error label." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myEmailInput",
            label: { position: "top", text: "Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myEmailInput"]
              },
              {
                name: "validEmail",
                inputNames: ["myEmailInput"]
              }
            ]
          }
        ]}
        addStyle={{
          errorLabelsContainer: { border: "solid black 3px" },
          errorLabel: { border: "solid red 1px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/kIWRIfymdKizIP2MVRdZ" />

      <Subheading text="ERROR LABEL - STYLING AN INDIVIDUAL ELEMENT WITH A STYLE OBJECT" />
      <Body text="Click the submit button to see the error label." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myEmailInput1",
            label: { position: "top", text: "Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myEmailInput1"]
              },
              {
                name: "validEmail",
                inputNames: ["myEmailInput1"]
              }
            ]
          },
          {
            element: "input",
            name: "myEmailInput2",
            label: { position: "top", text: "Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myEmailInput2"]
              },
              {
                name: "validEmail",
                inputNames: ["myEmailInput2"]
              }
            ],
            errorLabelsContainer: {
              addStyle: { border: "solid gray 3px" }
            },
            errorLabel: {
              addStyle: { border: "solid blue 1px" }
            }
          }
        ]}
        addStyle={{
          errorLabelsContainer: { border: "solid black 3px" },
          errorLabel: { border: "solid red 1px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/CtFZGQ40lvh2QpYFzBaA" />

      <Subheading text="ERROR LABEL - STYLING ELEMENT WITH A CLASS NAME" />
      <Body text="Click the submit button to see the error label." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myEmailInput",
            label: { position: "top", text: "Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myEmailInput"]
              },
              {
                name: "validEmail",
                inputNames: ["myEmailInput"]
              }
            ]
          }
        ]}
        addClassName={{
          errorLabelsContainer: "border-black-3px",
          errorLabel: "border-red-1px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/kkycV3Al2EqUZwdH7vJa" />

      <Subheading text="ERROR LABEL - STYLING AN INDIVIDUAL ELEMENT WITH A CLASS NAME" />
      <Body text="Click the submit button to see the error label." />
      <MyForm
        formElements={[
          {
            element: "input",
            name: "myEmailInput1",
            label: { position: "top", text: "Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myEmailInput1"]
              },
              {
                name: "validEmail",
                inputNames: ["myEmailInput1"]
              }
            ]
          },
          {
            element: "input",
            name: "myEmailInput2",
            label: { position: "top", text: "Email" },
            validationRules: [
              {
                name: "required",
                inputNames: ["myEmailInput2"]
              },
              {
                name: "validEmail",
                inputNames: ["myEmailInput2"]
              }
            ],
            errorLabelsContainer: {
              addClassName: "border-gray-3px"
            },
            errorLabel: {
              addClassName: "border-blue-1px"
            }
          }
        ]}
        addClassName={{
          errorLabelsContainer: "border-black-3px",
          errorLabel: "border-red-1px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/2dN3jcaSFjwZdvC8KNVF" />

      {/* DEMO - FORM ELEMENT - SELECT ------------------------------------- */}

      <Heading text="FORM ELEMENT - SELECT" />

      <Subheading text="SELECT - DEFAULT VALUES" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/XclvVHt0052PdETjbLoV" />

      <Subheading text="INTRO OPTION - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect",
            introOption: {
              text: "Select option (custom)"
            }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/vIX019m4rSxxvNXv0uF9" />

      <Subheading text="INTRO OPTION - SET TEXT VALUE WITH react-intl" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect",
            introOption: {
              text: "kaka",
              useIntlMsgID: true,
              intlMsgID: "myform.select.introOption"
            }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/9agYRjSUVxPpFUfEs3LT" />

      <Subheading text="INTRO OPTION - HIDE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect",
            showIntroOption: false,
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              },
              {
                id: "option3",
                name: "option3",
                value: "option3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/QzfMiKhVqxZgtR182eN8" />

      <Subheading text="OPTION - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1",
                text: "My Option 1 (custom)"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2",
                text: "My Option 2 (custom)"
              },
              {
                id: "option3",
                name: "option3",
                value: "option3",
                text: "My Option 3 (custom)"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/MyxKTgATMbhPfZzrDtxs" />

      <Subheading text="OPTION - SET TEXT VALUE WITH react-intl" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1",
                useIntlMsgID: true,
                intlMsgID: "myform.select.option.1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2",
                useIntlMsgID: true,
                intlMsgID: "myform.select.option.2"
              },
              {
                id: "option3",
                name: "option3",
                value: "option3",
                useIntlMsgID: true,
                intlMsgID: "myform.select.option.3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/KtjV6iNp3h0KzO3M9392" />

      <Subheading text="OPTION - DISABLED" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1",
                text: "My Option 1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2",
                text: "My Option 2",
                disabled: true
              },
              {
                id: "option3",
                name: "option3",
                value: "option3",
                text: "My Option 3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/CsSxb4ZMQ0US8E94dEHh" />

      <Subheading text="OPTION - SELECTED" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect",
            selectedValues: ["option2"],
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1",
                text: "My Option 1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2",
                text: "My Option 2",
                selected: true
              },
              {
                id: "option3",
                name: "option3",
                value: "option3",
                text: "My Option 3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/9N3OsfbEzJkmr9KTrGc1" />

      <Subheading text="SELECT - VALIDATION RULE - REQUIRED" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1",
                text: "My Option 1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2",
                text: "My Option 2"
              },
              {
                id: "option3",
                name: "option3",
                value: "option3",
                text: "My Option 3"
              }
            ],
            validationRules: [
              {
                name: "required",
                inputNames: ["mySelect"]
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/ISVsKmPuGqyprscI0WuP" />

      <Subheading text="SELECT - EXTERNAL COMPONENTS" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect1",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ]
          },
          {
            element: "select",
            name: "mySelect2",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ]
          }
        ]}
        selectExternalComponent1={<ExternalComponent text="COMPONENT 1" />}
        selectExternalComponent2={<ExternalComponent text="COMPONENT 2" />}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/UpTK4mC1MatjSMjTloPV" />

      <Subheading text="SELECT - STYLING ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect1",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ]
          },
          {
            element: "select",
            name: "mySelect2",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ]
          },
          {
            element: "select",
            name: "mySelect3",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ]
          }
        ]}
        addStyle={{
          select: { border: "solid red 1px" },
          selectContainer: { border: "solid black 3px" },
          introOption: { border: "solid green 1px" },
          option: { border: "solid purple 1px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/anoQXnmsFDNJ5yzav6Se" />

      <Subheading text="SELECT - STYLING AN INDIVIDUAL ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect1",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ]
          },
          {
            element: "select",
            name: "mySelect2",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ]
          },
          {
            element: "select",
            name: "mySelect3",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ],
            addStyle: { border: "solid blue 1px" },
            container: {
              addStyle: { border: "solid gray 3px" }
            },
            introOption: {
              addStyle: { border: "solid yellow 1px" }
            },
            option: {
              addStyle: { border: "solid pink 1px" }
            }
          }
        ]}
        addStyle={{
          select: { border: "solid red 1px" },
          selectContainer: { border: "solid black 3px" },
          introOption: { border: "solid green 1px" },
          option: { border: "solid purple 1px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/Cgtb8icVPu4gimi1sfPk" />

      <Subheading text="SELECT - STYLING ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect1",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ]
          },
          {
            element: "select",
            name: "mySelect2",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ]
          },
          {
            element: "select",
            name: "mySelect3",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ]
          }
        ]}
        addClassName={{
          select: "border-red-1px",
          selectContainer: "border-black-3px",
          introOption: "border-green-1px",
          option: "border-purple-1px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/A9iSZCZDMg7QFCjKyOmu" />

      <Subheading text="SELECT - STYLING AN INDIVIDUAL ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "select",
            name: "mySelect1",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ]
          },
          {
            element: "select",
            name: "mySelect2",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ]
          },
          {
            element: "select",
            name: "mySelect3",
            options: [
              {
                id: "option1",
                name: "option1",
                value: "option1"
              },
              {
                id: "option2",
                name: "option2",
                value: "option2"
              }
            ],
            addClassName: "border-blue-1px",
            container: {
              addClassName: "border-gray-3px"
            },
            introOption: {
              addClassName: "border-yellow-1px"
            },
            option: {
              addClassName: "border-pink-1px"
            }
          }
        ]}
        addClassName={{
          select: "border-red-1px",
          selectContainer: "border-black-3px",
          introOption: "border-green-1px",
          option: "border-purple-1px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/PGKmNeNufjLZbrbSKn8O" />

      {/* DEMO - FORM ELEMENT - RADIO CONTROL ------------------------------ */}

      <Heading text="FORM ELEMENT - RADIO CONTROL" />

      <Subheading text="RADIO CONTROL - SET INPUT VALUES" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "radioControl",
            name: "myRadioControl",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2"
              },
              {
                id: "radio3",
                name: "radio3",
                value: "radio3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/NGJk3fMkT3Kmml6naQFM" />

      <Subheading text="RADIO CONTROL - SET INIT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "radioControl",
            name: "myRadioControl",
            checkedValues: ["radio2"],
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2"
              },
              {
                id: "radio3",
                name: "radio3",
                value: "radio3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/HSRydl6Fj4JwauNacs1a" />

      <Subheading text="RADIO INPUT - DISABLED" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "radioControl",
            name: "myRadioControl",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2",
                disabled: true
              },
              {
                id: "radio3",
                name: "radio3",
                value: "radio3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/SmKcnICsg3k1Xw0zCv6P" />

      <Subheading text="RADIO INPUT - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "radioControl",
            name: "myRadioControl",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1",
                text: "Radio 1 (custom)"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2",
                text: "Radio 2 (custom)"
              },
              {
                id: "radio3",
                name: "radio3",
                value: "radio3",
                text: "Radio 3 (custom)"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/Ej6MkI8afonsE10v4yRY" />

      <Subheading text="RADIO INPUT - SET TEXT VALUE WITH (react-intl)" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "radioControl",
            name: "myRadioControl",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1",
                useIntlMsgID: true,
                intlMsgID: "myform.radioControl.radio.1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2",
                useIntlMsgID: true,
                intlMsgID: "myform.radioControl.radio.2"
              },
              {
                id: "radio3",
                name: "radio3",
                value: "radio3",
                useIntlMsgID: true,
                intlMsgID: "myform.radioControl.radio.3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/c64JvnWo1GrNYRqgW302" />

      <Subheading text="RADIO CONTROL - VALIDATION RULE - REQUIRED" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "radioControl",
            name: "myRadioControl",
            validationRules: [
              {
                name: "required",
                inputNames: ["myRadioControl"],
                errorText: "Required",
                intlMsgID: "input.validation.error",
                useIntlMsgID: false
              }
            ],
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2"
              },
              {
                id: "radio3",
                name: "radio3",
                value: "radio3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/NqDchhROLVP43kn4iHlA" />

      <Subheading text="RADIO INPUT - BUILT-IN SPANS" />
      <Body text="Span 'display' property is set to 'none' in the default style object." />
      <MyForm
        formElements={[
          {
            element: "radioControl",
            name: "myRadioControl",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2",
                radioSpan1: {
                  style: { border: "solid blue 10px" }
                },
                radioSpan2: {
                  style: { border: "solid yellow 10px" }
                }
              }
            ]
          }
        ]}
        style={{
          radioSpan1: { border: "solid red 10px" },
          radioSpan2: { border: "solid green 10px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/Aemyl77XlSdg5OfYjhwH" />

      <Subheading text="RADIO INPUT - EXTERNAL COMPONENTS" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "radioControl",
            name: "myRadioControl",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2"
              }
            ]
          }
        ]}
        radioExternalComponent1={<ExternalComponent text="COMPONENT 1" />}
        radioExternalComponent2={<ExternalComponent text="COMPONENT 2" />}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/EpfnSYQId9X7pcXHw3MC" />

      <Subheading text="RADIO CONTROL - STYLING ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "radioControl",
            name: "myRadioControl",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2"
              }
            ]
          }
        ]}
        addStyle={{
          radioControlContainer: { border: "solid black 3px" },
          radioControl: { border: "solid red 1px" },
          radio: { border: "solid green 1px" },
          radioLabel: { border: "solid purple 1px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/C8e7Q42lpOTkMFz3hs61" />

      <Subheading text="RADIO CONTROL - STYLING AN INDIVIDUAL ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "radioControl",
            name: "myRadioControl1",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2"
              }
            ]
          },
          {
            element: "radioControl",
            name: "myRadioControl2",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2",
                addStyle: { border: "solid yellow 1px" },
                label: {
                  addStyle: { border: "solid pink 1px" }
                }
              }
            ],
            addStyle: { border: "solid blue 1px" },
            container: {
              addStyle: { border: "solid gray 3px" }
            }
          }
        ]}
        addStyle={{
          radioControlContainer: { border: "solid black 3px" },
          radioControl: { border: "solid red 1px" },
          radio: { border: "solid green 1px" },
          radioLabel: { border: "solid purple 1px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/i6mxiiC7l6p0ggA6GDzp" />

      <Subheading text="RADIO CONTROL - STYLING ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "radioControl",
            name: "myRadioControl",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2"
              }
            ]
          }
        ]}
        addClassName={{
          radioControlContainer: "border-black-3px",
          radioControl: "border-red-1px",
          radio: "border-green-1px",
          radioLabel: "border-purple-1px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/FQm2tfDZGYb4V0eM98yB" />

      <Subheading text="RADIO CONTROL - STYLING AN INDIVIDUAL ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "radioControl",
            name: "myRadioControl1",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2"
              }
            ]
          },
          {
            element: "radioControl",
            name: "myRadioControl2",
            inputs: [
              {
                id: "radio1",
                name: "radio1",
                value: "radio1"
              },
              {
                id: "radio2",
                name: "radio2",
                value: "radio2",
                addClassName: "border-yellow-1px",
                label: {
                  addClassName: "border-pink-1px"
                }
              }
            ],
            addClassName: "border-blue-1px",
            container: {
              addClassName: "border-gray-3px"
            }
          }
        ]}
        addClassName={{
          radioControlContainer: "border-black-3px",
          radioControl: "border-red-1px",
          radio: "border-green-1px",
          radioLabel: "border-purple-1px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/pWVOd6QtWAkv1deZE1Q5" />

      {/* DEMO - FORM ELEMENT - CHECKBOX CONTROL --------------------------- */}

      <Heading text="FORM ELEMENT - CHECKBOX CONTROL" />

      <Subheading text="CHECKBOX CONTROL - CHECKBOX INPUTS" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "checkboxControl",
            name: "myCheckboxControl",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2"
              },
              {
                id: "checkbox3",
                name: "checkbox3",
                value: "checkbox3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/MGPtrzd02dTTJCGTm8cj" />

      <Subheading text="CHECKBOX CONTROL - SET INIT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "checkboxControl",
            name: "myCheckboxControl",
            checkedValues: ["checkbox2", "checkbox3"],
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2"
              },
              {
                id: "checkbox3",
                name: "checkbox3",
                value: "checkbox3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/rW38t0HJ35Ur25pHM20S" />

      <Subheading text="CHECKBOX INPUT - DISABLED" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "checkboxControl",
            name: "myCheckboxControl",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2",
                disabled: true
              },
              {
                id: "checkbox3",
                name: "checkbox3",
                value: "checkbox3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/CxjQkUX8NMD120gMrHc9" />

      <Subheading text="CHECKBOX INPUT - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "checkboxControl",
            name: "myCheckboxControl",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1",
                text: "Checkbox 1 (custom)"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2",
                text: "Checkbox 2 (custom)"
              },
              {
                id: "checkbox3",
                name: "checkbox3",
                value: "checkbox3",
                text: "Checkbox 3 (custom)"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/iT4xJfsNaY7qnhqm3XsJ" />

      <Subheading text="CHECKBOX INPUT - SET TEXT VALUE WITH react-intl" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "checkboxControl",
            name: "myCheckboxControl",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1",
                useIntlMsgID: true,
                intlMsgID: "myform.checkboxControl.checkbox.1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2",
                useIntlMsgID: true,
                intlMsgID: "myform.checkboxControl.checkbox.2"
              },
              {
                id: "checkbox3",
                name: "checkbox3",
                value: "checkbox3",
                useIntlMsgID: true,
                intlMsgID: "myform.checkboxControl.checkbox.3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/DUna9sFLCrhA0DpsIw5L" />

      <Subheading text="CHECKBOX CONTROL - VALIDATION RULE - REQUIRED" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "checkboxControl",
            name: "myCheckboxControl",
            validationRules: [
              {
                name: "required",
                inputNames: ["myCheckboxControl"],
                errorText: "Required",
                intlMsgID: "input.validation.error",
                useIntlMsgID: false
              }
            ],
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2"
              },
              {
                id: "checkbox3",
                name: "checkbox3",
                value: "checkbox3"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/hBGVjteAdGftI88tqMZK" />

      <Subheading text="CHECKBOX INPUTS - BUILT-IN SPANS" />
      <Body text="Span 'display' property is set to 'none' in the default style object." />
      <MyForm
        formElements={[
          {
            element: "checkboxControl",
            name: "myCheckboxControl",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2",
                checkboxSpan1: {
                  style: { border: "solid blue 10px" }
                },
                checkboxSpan2: {
                  style: { border: "solid yellow 10px" }
                }
              }
            ]
          }
        ]}
        style={{
          checkboxSpan1: { border: "solid red 10px" },
          checkboxSpan2: { border: "solid green 10px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/oRHwhr7UaTcooKWg0e5D" />

      <Subheading text="CHECKBOX INPUTS - EXTERNAL COMPONENTS" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "checkboxControl",
            name: "myCheckboxControl",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2"
              }
            ]
          }
        ]}
        checkboxExternalComponent1={<ExternalComponent text="COMPONENT 1" />}
        checkboxExternalComponent2={<ExternalComponent text="COMPONENT 2" />}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/OyMWZEpoER7r6mgdBVZ7" />

      <Subheading text="CHECKBOX CONTROL - STYLING ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "checkboxControl",
            name: "myCheckboxControl",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2"
              }
            ]
          }
        ]}
        addStyle={{
          checkboxControlContainer: { border: "solid black 3px" },
          checkboxControl: { border: "solid red 1px" },
          checkbox: { border: "solid green 1px" },
          checkboxLabel: { border: "solid purple 1px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/NW8kIpWix8G15X5PvdoS" />

      <Subheading text="CHECKBOX CONTROL - STYLING AN INDIVIDUAL ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "checkboxControl",
            name: "myCheckboxControl1",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2"
              }
            ]
          },
          {
            element: "checkboxControl",
            name: "myCheckboxControl2",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2",
                addStyle: { border: "solid yellow 1px" },
                label: {
                  addStyle: { border: "solid pink 1px" }
                }
              }
            ],
            addStyle: { border: "solid blue 1px" },
            container: {
              addStyle: { border: "solid gray 3px" }
            }
          }
        ]}
        addStyle={{
          checkboxControlContainer: { border: "solid black 3px" },
          checkboxControl: { border: "solid red 1px" },
          checkbox: { border: "solid green 1px" },
          checkboxLabel: { border: "solid purple 1px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/q2Fu0GuJeqYuI8eItqoc" />

      <Subheading text="CHECKBOX CONTROL - STYLING ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "checkboxControl",
            name: "myCheckboxControl",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2"
              }
            ]
          }
        ]}
        addClassName={{
          radioControlContainer: "border-black-3px",
          radioControl: "border-red-1px",
          radio: "border-green-1px",
          radioLabel: "border-purple-1px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/JCkwiXba5vq9HlSxlrWn" />

      <Subheading text="CHECKBOX CONTROL - STYLING AN INDIVIDUAL ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "checkboxControl",
            name: "myCheckboxControl1",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2"
              }
            ]
          },
          {
            element: "checkboxControl",
            name: "myCheckboxControl2",
            inputs: [
              {
                id: "checkbox1",
                name: "checkbox1",
                value: "checkbox1"
              },
              {
                id: "checkbox2",
                name: "checkbox2",
                value: "checkbox2",
                addClassName: "border-yellow-1px",
                label: {
                  addClassName: "border-pink-1px"
                }
              }
            ],
            addClassName: "border-blue-1px",
            container: {
              addClassName: "border-gray-3px"
            }
          }
        ]}
        addClassName={{
          radioControlContainer: "border-black-3px",
          radioControl: "border-red-1px",
          radio: "border-green-1px",
          radioLabel: "border-purple-1px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/GVoRmpZftwcayvZnlBFD" />

      {/* DEMO - FORM ELEMENT - TEXTAREA ----------------------------------- */}

      <Heading text="FORM ELEMENT - TEXTAREA" />

      <Subheading text="TEXTAREA - DEFAULT VALUES" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/ymRX4zhe4EYYB3haRP3L" />

      <Subheading text="TEXTAREA - SET INIT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea",
            value:
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/u5Fs2r823ZWrJVMste1x" />

      <Subheading text="TEXTAREA LABEL - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea",
            label: {
              text: "Label (custom)"
            }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/tRKGTH9BKwmbiLIkGQk9" />

      <Subheading text="TEXTAREA LABEL - SET TEXT VALUE WITH react-intl" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea",
            label: {
              useIntlMsgID: true,
              intlMsgID: "myform.textarea.label"
            }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/fm0aYRwk5KPYywCOcvav" />

      <Subheading text="TEXTAREA - ROWS AND COLUMNSS" />
      <Body text="Defaults to 5 rows and 40 cols." />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea",
            rows: 10,
            cols: 20
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/fc7rWhCWW058jwFAaN5M" />

      <Subheading text="TEXTAREA - MAX LENGTH" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea",
            maxLength: "3"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/ekRcqiwCwSZWzzOLTFgt" />

      <Subheading text="TEXTAREA PLACEHOLDER - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea",
            placeholder: { text: "Placeholder text (custom)" }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/gqhrZdyaNz6phyj44I0r" />

      <Subheading text="TEXTAREA PLACEHOLDER - SET TEXT VALUE WITH react-intl" />
      <Body text="Textarea placeholder styling can only be done using css classes." />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea",
            placeholder: {
              useIntlMsgID: true,
              intlMsgID: "myform.textarea.placeholder"
            }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/RjQc8eCm2s771MVbFCK3" />

      <Subheading text="TEXTAREA LABEL - HIDE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea",
            label: { show: false }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/hSDDrWxaexTLQHPblqlO" />

      <Subheading text="TEXTAREA LABEL - POSITION TOP" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea"
            // label: { position: "top" }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/rdUfm7L0o6XZHN5Nwfp7" />

      <Subheading text="TEXTAREA LABEL - POSITION LEFT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea",
            label: { position: "left" }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/ooj9A80uauOWW4SfUdcp" />

      <Subheading text="TEXTAREA - VALIDATION RULE - REQUIRED" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea",
            validationRules: [
              {
                name: "required",
                inputNames: ["myTextarea"],
                text: "Required Input",
                useIntlMsgID: true,
                intlMsgID: "myform.invalid.rule.required"
              }
            ]
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/0LeUA0iFOqEjMz4dQ2fn" />

      <Subheading text="TEXTAREA - BUILT-IN SPANS" />
      <Body text="Span 'display' property is set to 'none' in the default style object." />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea1"
          },
          {
            element: "textarea",
            name: "myTextarea2",
            textareaSpan1: {
              style: { border: "solid blue 10px" }
            },
            textareaSpan2: {
              style: { border: "solid yellow 10px" }
            }
          }
        ]}
        style={{
          textareaSpan1: { border: "solid red 10px" },
          textareaSpan2: { border: "solid green 10px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/RlmmBm2uNPlNCIViDLen" />

      <Subheading text="TEXTAREA - STYLING ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea1"
          },
          {
            element: "textarea",
            name: "myTextarea2"
          }
        ]}
        addStyle={{
          textareaContainer: { border: "solid black 3px" },
          textarea: { border: "solid red 1px" },
          textareaLabel: { border: "solid green 1px" },
          placeholder: { border: "solid purple 1px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/B1LjZaUxhWZdY6o39jg1" />

      <Subheading text="TEXTAREA - STYLING AN INDIVIDUAL ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea1"
          },
          {
            element: "textarea",
            name: "myTextarea2",
            //
            container: { addStyle: { border: "solid gray 3px" } },
            addStyle: { border: "solid blue 1px" },
            label: { addStyle: { border: "solid yellow 1px" } },
            placeholder: { addStyle: { border: "solid pink 1px" } }
          }
        ]}
        addStyle={{
          textareaContainer: { border: "solid black 3px" },
          textarea: { border: "solid red 1px" },
          textareaLabel: { border: "solid green 1px" },
          placeholder: { border: "solid purple 1px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/fiMPtkJn4jjZloxD8GXY" />

      <Subheading text="TEXTAREA - STYLING ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea1"
          },
          {
            element: "textarea",
            name: "myTextarea2"
          }
        ]}
        addClassName={{
          textareaContainer: "border-black-3px",
          textarea: "border-red-1px",
          textareaLabel: "border-green-1px",
          placeholder: "border-purple-1px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/jFlKKOlggex8YTlpY4q9" />

      <Subheading text="TEXTAREA - STYLING AN INDIVIDUAL ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "textarea",
            name: "myTextarea1"
          },
          {
            element: "textarea",
            name: "myTextarea2",
            //
            container: { addClassName: "border-gray-3px" },
            addClassName: "border-blue-1px",
            label: { addClassName: "border-yellow-1px" },
            placeholder: { addClassName: "border-pink-1px" }
          }
        ]}
        addClassName={{
          textareaContainer: "border-black-3px",
          textarea: "border-red-1px",
          textareaLabel: "border-green-1px",
          placeholder: "border-purple-1px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/cAsvjDtxEviT9KUu3tN8" />

      {/* DEMO - FORM ELEMENT - BUTTON ------------------------------------- */}

      <Heading text="FORM ELEMENT - BUTTON" />

      <Subheading text="BUTTON - DEFAULT VALUES" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "button",
            name: "myButton"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/V6bSDrXwETv9lXxC7QyR" />

      <Subheading text="BUTTON - ON CLICK" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "button",
            name: "myButton",
            onClick: () => {
              console.log("Button Clicked !!!");
              alert("Button Clicked !!!");
            }
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/461Yi7vJLmW7MkTGLSG9" />

      <Subheading text="BUTTON - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "button",
            name: "myButton",
            text: "MyButtonText (custom)"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/mCOvm3aPlo5A4qujYUyV" />

      <Subheading text="BUTTON - SET TEXT VALUE WITH react-intl" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "button",
            name: "myButton",
            useIntlMsgID: true,
            intlMsgID: "myform.button.text"
          }
        ]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/PXSRhZvjT8aJQKdaWe94" />

      <Subheading text="BUTTON - BUILT-IN SPANS" />
      <Body text="Span 'display' property is set to 'none' in the default style object." />
      <MyForm
        formElements={[
          {
            element: "button",
            name: "myButton1"
          },
          {
            element: "button",
            name: "myButton2",
            buttonSpan1: {
              style: { border: "solid blue 10px" }
            },
            buttonSpan2: {
              style: { border: "solid yellow 10px" }
            }
          }
        ]}
        style={{
          buttonSpan1: { border: "solid red 10px" },
          buttonSpan2: { border: "solid green 10px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/PG1aiTV8ncBMG6jG9flt" />

      <Subheading text="BUTTON - EXTERNAL COMPONENTS" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "button",
            name: "myButton"
          }
        ]}
        buttonExternalComponent1={<ExternalComponent text="COMPONENT 1" />}
        buttonExternalComponent2={<ExternalComponent text="COMPONENT 2" />}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/gLx7lswjdh9QWGmddqZw" />

      <Subheading text="BUTTON - STYLING ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "button",
            name: "myButton1"
          },
          {
            element: "button",
            name: "myButton2"
          }
        ]}
        addStyle={{
          button: { border: "solid black 3px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/bgwPRLiFbJtjMf9lpXrY" />

      <Subheading text="BUTTON - STYLING AN INDIVIDUAL ELEMENT WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "button",
            name: "myButton1"
          },
          {
            element: "button",
            name: "myButton2",
            //
            addStyle: { border: "solid gray 3px" }
          }
        ]}
        addStyle={{
          button: { border: "solid black 3px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/a8ql8cqqRtL5Mosbmrly" />

      <Subheading text="BUTTON - STYLING ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "button",
            name: "myButton1"
          },
          {
            element: "button",
            name: "myButton2"
          }
        ]}
        addClassName={{
          button: "border-black-3px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/OUja1qYtP8MOFjOsNEiz" />

      <Subheading text="BUTTON - STYLING AN INDIVIDUAL ELEMENT WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        formElements={[
          {
            element: "button",
            name: "myButton1"
          },
          {
            element: "button",
            name: "myButton2",
            //
            addClassName: "border-gray-3px"
          }
        ]}
        addClassName={{
          button: "border-black-3px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/lDp0efEttn6r8Uljsk3k" />

      {/* DEMO - FORM LAYOUT ----------------------------------------------- */}

      <Heading text="FORM LAYOUT" />

      <Subheading text="FORM LAYOUT" />
      <Body text="Form is composed of 4 containers, form is the main container, form header is the container for title, subtitle or external components passed. Form main row is the container for all elements, including rows and columns. Form footer is the container for the submit button, you can additionally pass external components to the form footer container like more buttons, etc." />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addStyle={{
          form: { border: "solid black 3px", width: "400px" },
          formHeader: { border: "solid red 3px", height: "80px" },
          formMainRow: { border: "solid green 3px", height: "80px" },
          formFooter: { border: "solid purple 3px", height: "80px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/WJjqk9edxhACmcDYIJ8c" />

      <Subheading text="FORM - STYLING WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addStyle={{
          form: { border: "solid black 3px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/Xf0DX3EBCucyX532UuTX" />

      <Subheading text="FORM - STYLING WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addClassName={{
          form: "border-black-3px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/OPEU5lft2tRdowlQ7uzw" />

      {/* DEMO - FORM HEADER ----------------------------------------------- */}

      <Heading text="FORM HEADER" />

      <Subheading text="FORM HEADER - TITLE - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        formTitleText={"FORM TITLE (custom)"}
        formElements={[{ element: "input", name: "myInput" }]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/GsJcc5TpO9XhJspyqbUJ" />

      <Subheading text="FORM HEADER - TITLE - SET TEXT VALUE WITH react-intl" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        formTitleUseIntlMsgID={true}
        formTitleIntlMsgID={"myform.title"}
        formElements={[{ element: "input", name: "myInput" }]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/ToWd88F1Q6E5DkrSeqiF" />

      <Subheading text="FORM HEADER - TITLE - STYLING WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addStyle={{
          formTitle: { border: "solid black 3px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/TI7wqnkoDsMVglR4TUhQ" />

      <Subheading text="FORM HEADER - TITLE - STYLING WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addClassName={{
          formTitle: "border-black-3px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/eynABbW1GsotZNtUkw0L" />

      <Subheading text="FORM HEADER - SUBTITLE - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        showFormSubtitle={true}
        formSubtitleText={"FORM SUBTITLE (custom)"}
        formElements={[{ element: "input", name: "myInput" }]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/eynABbW1GsotZNtUkw0L" />

      <Subheading text="FORM HEADER - SUBTITLE - SET TEXT VALUE WITH react-intl" />
      <Body text="Preview" />
      <MyForm
        showFormSubtitle={true}
        formSubtitleUseIntlMsgID={true}
        formSubtitleIntlMsgID={"myform.subtitle"}
        formElements={[{ element: "input", name: "myInput" }]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/IOXptyrb57VKZDSWQwNB" />

      <Subheading text="FORM HEADER - SUBTITLE - STYLING WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addStyle={{
          formSubtitle: { border: "solid black 3px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/DUi4onJPUcmBEEK992PR" />

      <Subheading text="FORM HEADER - SUBTITLE - STYLING WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addClassName={{
          formSubtitle: "border-black-3px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/MDLg3QlRtndTSylrdmYb" />

      <Subheading text="FORM HEADER - EXTERNAL COMPONENTS" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formHeaderExternalComponent1={<ExternalComponent text="COMPONENT 1" />}
        formHeaderExternalComponent2={<ExternalComponent text="COMPONENT 2" />}
        formElements={[{ element: "input", name: "myInput" }]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/W8FL47brMbxUhop96FQU" />

      <Subheading text="FORM HEADER - STYLING WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addStyle={{
          formHeader: { border: "solid black 3px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/OkkiwmhjDdleAnP0LncQ" />

      <Subheading text="FORM HEADER - STYLING WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addClassName={{
          formHeader: "border-black-3px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/Wb0GkKewhfTSWsrdlOZ0" />

      {/* DEMO - FORM FOOTER ----------------------------------------------- */}

      <Heading text="FORM FOOTER" />

      <Subheading text="FORM FOOTER - SUBMIT BUTTON" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/7NRC46a5xgy0w6nfr8wh" />

      <Subheading text="SUBMIT BUTTON - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        submitButtonText="SUBMIT (custom)"
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/nknFQMwVWGIVtwvOSRY8" />

      <Subheading text="SUBMIT BUTTON - SET TEXT VALUE WITH react-intl" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        submitButtonUsesIntlMsgID={true}
        submitButtonIntlMsgID="myform.submitButton"
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/AlWM8R40eNOdFaIqNCOY" />

      <Subheading text="SUBMIT BUTTON - ON SUBMIT" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/99LhJC5xeGAZVIzsL8mZ" />

      <Subheading text="SUBMIT BUTTON - EXTERNAL COMPONENTS" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        submitButtonExternalComponent1={
          <ExternalComponent text="COMPONENT 1" />
        }
        submitButtonExternalComponent2={
          <ExternalComponent text="COMPONENT 2" />
        }
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/0d6aPrattWobVSSXKqQY" />

      <Subheading text="SUBMIT BUTTON - STYLING WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addStyle={{
          submitButton: { border: "solid black 3px" },
          submitButtonDisabled: { border: "solid gray 3px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/7zBnDPSsiPp1XMkEX9mU" />

      <Subheading text="SUBMIT BUTTON - STYLING WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addClassName={{
          submitButton: "border-black-3px",
          submitButtonDisabled: "border-gray-3px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/QY3mYDJfPUBtRwtpNlLX" />

      <Subheading text="FORM FOOTER - EXTERNAL COMPONENTS" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        formFooterExternalComponent1={<ExternalComponent text="COMPONENT 1" />}
        formFooterExternalComponent2={<ExternalComponent text="COMPONENT 2" />}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/VQa4XA5lziRzJ2VY7KbZ" />

      <Subheading text="FORM FOOTER - STYLING WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addStyle={{
          formFooter: { border: "solid black 3px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/2sGmEnEgG35X484kAZ8t" />

      <Subheading text="FORM FOOTER - STYLING WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addClassName={{
          formFooter: "border-black-3px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/Oe8ABhHbWYNseXNdPv0X" />

      {/* DEMO - FORM MAIN ROW --------------------------------------------- */}

      <Heading text="FORM MAIN ROW" />

      <Subheading text="FORM MAIN ROW - STYLING WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addStyle={{
          formMainRow: { border: "solid black 3px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/jRosNSRwPagqXCpJdvfg" />

      <Subheading text="FORM MAIN ROW - STYLING WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[{ element: "input", name: "myInput" }]}
        addClassName={{
          formMainRow: "border-black-3px"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/zqhRSofUii6jcgdDyFGn" />

      <Subheading text="FORM MAIN ROW - FORM ELEMENTS" />
      <Body text="Here is where all of our form elements belong." />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2"
          }
        ]}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", padding: "5px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/nRIG5wusJUBKTzSK3CfK" />

      {/* DEMO - COLUMNS --------------------------------------------------- */}

      <Heading text="FORM MAIN ROW - COLUMNS" />

      <Subheading text="FORM MAIN ROW - COLUMNS WITH ELEMENTS" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formOptions={{
          columns: [
            {
              element: "column",
              columnNumber: 1,
              columnSize: "1-of-2"
            },
            {
              element: "column",
              columnNumber: 2,
              columnSize: "1-of-2"
            }
          ]
        }}
        formElements={[
          {
            element: "input",
            name: "myInput1",
            columnNumber: 1
          },
          {
            element: "input",
            name: "myInput2",
            columnNumber: 2
          },
          {
            element: "row",
            columnNumber: 2,
            columns: [
              {
                element: "column",
                columnNumber: 1,
                columnSize: "1-of-2"
              },
              {
                element: "column",
                columnNumber: 2,
                columnSize: "1-of-2"
              }
            ],
            formElements: [
              {
                element: "button",
                name: "myButton1",
                columnNumber: 1
              },
              {
                element: "button",
                name: "myButton2",
                columnNumber: 2
              }
            ]
          }
        ]}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", padding: "5px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/EW8hFwbrCDwZ6iM8w9Af" />

      <Subheading text="FORM MAIN ROW - RESPONSIVE COLUMNS" />
      <Body text="Set CSS min and max width property for all columns in the same group." />
      <MyForm
        formOptions={{
          columns: [
            {
              element: "column",
              columnNumber: 1,
              columnSize: "1-of-2",
              addStyle: {
                minWidth: "300px",
                maxWidth: "300px"
              }
            },
            {
              element: "column",
              columnNumber: 2,
              columnSize: "1-of-2",
              addStyle: {
                minWidth: "300px",
                maxWidth: "300px"
              }
            }
          ]
        }}
        formElements={[
          {
            element: "input",
            name: "myInput1",
            columnNumber: 1
          },
          {
            element: "input",
            name: "myInput2",
            columnNumber: 2
          }
        ]}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", padding: "5px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/0uqZK87u6DOr9djzQR4z" />

      <Subheading text="FORM MAIN ROW - 2 COLUMNS - columnSize: 1-of-2" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formOptions={{
          columns: [
            {
              element: "column",
              columnNumber: 1,
              columnSize: "1-of-2"
            },
            {
              element: "column",
              columnNumber: 2,
              columnSize: "1-of-2"
            }
          ]
        }}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px", width: "300px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", height: "50px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/0uqZK87u6DOr9djzQR4z" />

      <Subheading text="FORM MAIN ROW - 3 COLUMNS - columnSize: 1-of-3" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formOptions={{
          columns: [
            {
              element: "column",
              columnNumber: 1,
              columnSize: "1-of-3"
            },
            {
              element: "column",
              columnNumber: 2,
              columnSize: "1-of-3"
            },
            {
              element: "column",
              columnNumber: 3,
              columnSize: "1-of-3"
            }
          ]
        }}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px", width: "300px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", height: "50px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/ylQlPZeitRac4y8Q1xxx" />

      <Subheading text="FORM MAIN ROW - 3 COLUMNS - columnSize: 2-of-3" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formOptions={{
          columns: [
            {
              element: "column",
              columnNumber: 1,
              columnSize: "1-of-3"
            },
            {
              element: "column",
              columnNumber: 2,
              columnSize: "2-of-3"
            }
          ]
        }}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px", width: "300px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", height: "50px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/cUMtAezz7z8ZnjfuevYv" />

      <Subheading text="FORM MAIN ROW - 4 COLUMNS - columnSize: 1-of-4" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formOptions={{
          columns: [
            {
              element: "column",
              columnNumber: 1,
              columnSize: "1-of-4"
            },
            {
              element: "column",
              columnNumber: 2,
              columnSize: "1-of-4"
            },
            {
              element: "column",
              columnNumber: 3,
              columnSize: "1-of-4"
            },
            {
              element: "column",
              columnNumber: 4,
              columnSize: "1-of-4"
            }
          ]
        }}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px", width: "300px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", height: "50px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/kpjcso2Zf11eX4qf08Zg" />

      <Subheading text="FORM MAIN ROW - 4 COLUMNS - columnSize: 2-of-4" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formOptions={{
          columns: [
            {
              element: "column",
              columnNumber: 1,
              columnSize: "1-of-4"
            },
            {
              element: "column",
              columnNumber: 2,
              columnSize: "1-of-4"
            },
            {
              element: "column",
              columnNumber: 3,
              columnSize: "2-of-4"
            }
          ]
        }}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px", width: "300px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", height: "50px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/IiFY9fDL7RWAw3BsI2yY" />

      <Subheading text="FORM MAIN ROW - 4 COLUMNS - columnSize: 3-of-4" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formOptions={{
          columns: [
            {
              element: "column",
              columnNumber: 1,
              columnSize: "1-of-4"
            },
            {
              element: "column",
              columnNumber: 2,
              columnSize: "3-of-4"
            }
          ]
        }}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px", width: "300px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", height: "50px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/SaovL6L6wpJCp2REobRD" />

      <Subheading text="FORM MAIN ROW - COLUMN - STYLING WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formOptions={{
          columns: [
            {
              element: "column",
              columnNumber: 1,
              columnSize: "1-of-2"
            },
            {
              element: "column",
              columnNumber: 2,
              columnSize: "1-of-2",
              addStyle: { border: "solid pink 2px" }
            }
          ]
        }}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px", width: "300px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", height: "50px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/GplUGgyXcefNouG0xRxZ" />

      <Subheading text="FORM MAIN ROW - COLUMN - STYLING WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formOptions={{
          columns: [
            {
              element: "column",
              columnNumber: 1,
              columnSize: "1-of-2"
            },
            {
              element: "column",
              columnNumber: 2,
              columnSize: "1-of-2",
              addClassName: "border-pink-1px"
            }
          ]
        }}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px", width: "300px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", height: "50px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/gNgRNrrH3Sie2p1siUfw" />

      {/* DEMO - ROWS ------------------------------------------------------ */}

      <Heading text="FORM MAIN ROW - ROWS" />

      <Subheading text="FORM MAIN ROW - INNER ROW WITH ELEMENTS" />
      <Body text="By default, creating a new row automatically creates 1 column to render the elements that belong to that row inside this auto created column. In addition to craete a row, you can add 2 columns and 1 element on each, columns will be placed next to the other from left to right inside the inner row." />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2"
          },
          {
            element: "row",
            formElements: [
              {
                element: "button",
                name: "myButton1"
              },
              {
                element: "button",
                name: "myButton2"
              }
            ]
          }
        ]}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", padding: "5px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/ZCkIMEU2R3N26UaW9cQ9" />

      <Subheading text="FORM MAIN ROW - INNER ROW - COLUMNS WITH ELEMENTS" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2"
          },
          {
            element: "row",
            columns: [
              {
                element: "column",
                columnNumber: 1,
                columnSize: "1-of-2"
              },
              {
                element: "column",
                columnNumber: 2,
                columnSize: "1-of-2"
              }
            ],
            formElements: [
              {
                element: "button",
                name: "myButton1",
                columnNumber: 1
              },
              {
                element: "button",
                name: "myButton2",
                columnNumber: 2
              }
            ]
          }
        ]}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", padding: "5px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/0KYipoQkm2zotTtaBq1F" />

      <Subheading text="FORM MAIN ROW - INNER ROW - STYLING WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2"
          },
          {
            element: "row"
          },
          {
            element: "row",
            addStyle: { border: "solid yellow 2px", padding: "5px" }
          }
        ]}
        addStyle={{
          form: { border: "solid black 2px", padding: "5px" },
          formMainRow: { border: "solid red 2px", padding: "5px" },
          row: { border: "solid green 2px", padding: "5px" },
          column: { border: "solid purple 2px", padding: "5px" }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/2MSCHzZNTBljs1KVeQud" />

      <Subheading text="FORM MAIN ROW - INNER ROW - STYLING WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2"
          },
          {
            element: "row"
          },
          {
            element: "row",
            addClassName: "border-yellow-1px"
          }
        ]}
        addClassName={{
          form: `border-black-3px padding-5px`,
          formMainRow: `border-solid-3px padding-5px`,
          row: `border-green-3px padding-5px`,
          column: `border-purple-3px padding-5px`
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/8YahW99fQ7sDYVy3DzGm" />

      {/* DEMO - FORM ERROR ------------------------------------------------ */}

      <Heading text="FORM ERROR" />

      <Subheading text="FORM ERROR - DEFAULT TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2"
          }
        ]}
        showFormError={true}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/bYMkRgvmY7mX6CI37Tzm" />

      <Subheading text="FORM ERROR - SET TEXT VALUE" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2"
          }
        ]}
        showFormError={true}
        formErrorText="There was an error! (custom)"
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/Xl1Yg0FUbPxSesVoMqSi" />

      <Subheading text="FORM ERROR - SET TEXT VALUE WITH react-intl" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2"
          }
        ]}
        showFormError={true}
        formErrorUseIntlMsgID={true}
        formErrorIntlMsgID="myform.error"
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/RLQWBR0XpjJdSxzWn6wC" />

      <Subheading text="FORM ERROR - STYLING WITH A STYLE OBJECT" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2"
          }
        ]}
        showFormError={true}
        addStyle={{
          formError: {
            border: "solid red 3px",
            padding: "5px",
            color: "red"
          }
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/gGcVhIK13wXI4GRLtll7" />

      <Subheading text="FORM ERROR - STYLING WITH A CLASS NAME" />
      <Body text="Preview" />
      <MyForm
        showFormTitle={true}
        showFormSubtitle={true}
        formElements={[
          {
            element: "input",
            name: "myInput1"
          },
          {
            element: "input",
            name: "myInput2"
          }
        ]}
        showFormError={true}
        addClassName={{
          formError: "border-red-3px padding-5px color-red"
        }}
        onSubmit={handleOnSubmit}
      />
      <SeeCodeButton href="https://carbon.now.sh/i72MFQkXu9pEwqKjrph5" />

      <Heading text="WORK IN PROGRESS" />
      <Body text="This is still a work in progress." />
      <Body text="There are many more things i want to add/fix/improve." />
      <Body text="Planning on making this an npm package." />
      <Body text="Hope to keep adding more functionality soon!" />
    </div>
  );
};

ExamplesWeDevlopUIMyForm.defaultProps = {
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  addStyle: {}
};

export default ExamplesWeDevlopUIMyForm;
