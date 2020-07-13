import React, { Component, Fragment } from "react";

import MyContainer from "../../../../components/wedevlopUI/layout/MyContainer";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const FullScreenNFixed = props => {
  // const { backgroundColor, addStyle, children } = props;
  const { children } = props;

  const containerStyle = {
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderStyle: "solid",
    borderWidth: "10px",
    borderColor: "red"
  };

  return (
    <MyContainer size="mainContainer">
      <MyContainer size="fitScreen" {...props} addStyle={{ ...containerStyle }}>
        {"Example - Layout - FullScreen"}
        {children}
      </MyContainer>
      <MyContainer
        size="fixed"
        fixedWidth="100%"
        fixedHeight="2000px"
        {...props}
        addStyle={{ ...containerStyle }}
      >
        {"Example - Layout - Fixed"}
        <br />
        {"fixedWidth: '100%'"}
        <br />
        {"fixedHeight: '2000px'"}
        {children}
      </MyContainer>
    </MyContainer>
  );
};

FullScreenNFixed.defaultProps = {
  // backgroundColor: "rgba(255, 255, 255, 1.0)",
  // addStyle: {}
};

export default FullScreenNFixed;
