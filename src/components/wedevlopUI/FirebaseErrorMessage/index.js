import React from "react";
import IntlMessages from "util/IntlMessages";

const messageBoxContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderStyle: "solid",
  borderWidth: "2px",
  borderRadius: "15px",
  borderColor: "red",
  paddingLeft: "15px",
  paddingRight: "15px"
};

const fontStyle = {
  color: "red",
  justifyContent: "center",
  alignItems: "center"
};

const FirebaseErrorMessage = props => {
  let authError = null;

  if (props && props.firebaseErrorObject) {
    authError = props.firebaseErrorObject;
  }

  const showErrorMessage = () => {
    if (authError && authError.code === "auth/network-request-failed") {
      return <IntlMessages id="firebase.auth.error.networkRequestFailed" />;
    }
    if (authError && authError.code === "auth/user-not-found") {
      return <IntlMessages id="firebase.auth.error.userNotFound" />;
    }
    if (authError && authError.code === "auth/email-already-in-use") {
      return <IntlMessages id="firebase.auth.error.emailAlreadyInUse" />;
    }
    if (authError && authError.message) {
      return authError.message;
    }
    return <IntlMessages id="firebase.auth.error.generic" />;
  };

  if (
    authError &&
    authError !== null &&
    authError !== undefined &&
    authError !== ""
  ) {
    return (
      <div>
        <br />
        <br />
        <div style={messageBoxContainerStyle}>
          <br />
          <h5 style={fontStyle}>{showErrorMessage()}</h5>
          <br />
        </div>
      </div>
    );
  }

  return <div />;
};

FirebaseErrorMessage.defaultProps = {
  // backgroundColor: "rgba(255, 255, 255, 1.0)",
};

export default FirebaseErrorMessage;
