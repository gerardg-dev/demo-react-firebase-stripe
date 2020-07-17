import React, { Component } from "react";

import { connect } from "react-redux";

import { signinWithEmailAndPassword } from "thunks/app_starter/Auth";

import MyForm from "components/wedevlopUI/MyForm";
import Body from "./Body";
import Modal from "./Modal";

import cssStyles from "../styles/css/default.css";
import cssModules from "../styles/css_modules/default.css";
import sassStyles from "../styles/sass/default.sass";
import scssStyles from "../styles/scss/default.scss";
import stylable from "../styles/stylable/default.st.css";
import styleObjects from "../styles/style_objects/index.js";
import styledComponents from "../styles/styled_components/index.js";

const AuthMethodToggle = props => (
  <button
    style={{
      ...styleObjects.submitButtonDisabled,
      ...{
        backgroundColor: "rgba(0, 0, 0, 0)",
        border: "none",
        marginTop: "10px",
        fontSize: "12px",
        color: "gray"
      }
    }}
    onClick={props.onClick}
  >
    {props.text}
  </button>
);

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authMethod: "signin", email: "", password: "" };
  }

  render() {
    return (
      <Modal>
        <Body text="Please signup or signin" />

        {this.state.authMethod === "signin" && (
          <div>
            <MyForm
              showFormTitle={true}
              formTitleText="SIGN IN"
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
              formFooterExternalComponent2={
                <AuthMethodToggle
                  onClick={() => {
                    // setAuthMethod("signup");
                    this.setState({ authMethod: "signup" });
                  }}
                  text="...OR SIGN UP HERE"
                />
              }
              addStyle={{
                form: styleObjects.form,
                formHeader: styleObjects.formHeader,
                formTitle: styleObjects.formTitle,
                formSubtitle: styleObjects.formSubtitle,
                formMainRow: styleObjects.formMainRow,
                formFooter: styleObjects.formFooter,
                inputContainer: styleObjects.inputContainer,
                input: styleObjects.input,
                submitButton: styleObjects.submitButton,
                submitButtonDisabled: styleObjects.submitButtonDisabled,
                errorLabel: styleObjects.errorLabel
              }}
              onSubmit={this.handleOnSubmit}
            />
          </div>
        )}
        {this.state.authMethod === "signup" && (
          <div>
            <MyForm
              showFormTitle={true}
              formTitleText="SIGN UP"
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
              submitButtonText="SIGN UP"
              formFooterExternalComponent2={
                <AuthMethodToggle
                  onClick={() => {
                    // setAuthMethod("signin");
                    this.setState({ authMethod: "signin" });
                  }}
                  text="...OR SIGN IN HERE"
                />
              }
              addStyle={{
                form: styleObjects.form,
                formHeader: styleObjects.formHeader,
                formTitle: styleObjects.formTitle,
                formSubtitle: styleObjects.formSubtitle,
                formMainRow: styleObjects.formMainRow,
                formFooter: styleObjects.formFooter,
                inputContainer: styleObjects.inputContainer,
                input: styleObjects.input,
                submitButton: styleObjects.submitButton,
                submitButtonDisabled: styleObjects.submitButtonDisabled,
                errorLabel: styleObjects.errorLabel
              }}
              onSubmit={this.handleOnSubmit}
            />
          </div>
        )}
      </Modal>
    );
  }
}

const mapStateToProps = ({ obbersAuth }) => {
  return {
    authUser: obbersAuth.authUser,
    authError: obbersAuth.authError
  };
};

export default connect(mapStateToProps, { signinWithEmailAndPassword })(Auth);
