import React, { Component, Fragment } from "react";

import MyContainer from "../../../../components/wedevlopUI/layout/MyContainer";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const MinMax = props => {
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
      <MyContainer
        {...props}
        addStyle={{ ...containerStyle }}
        minWidth="600px"
        maxWidth="1200px"
        minHeight="400px"
        maxHeight="800px"
      >
        {"Example - Layout - MinMax"}
        <br />
        {"MinWidth: '600px'"}
        <br />
        {"MaxWidth: '1200px'"}
        <br />
        {"MinHeight: '400px'"}
        <br />
        {"MaxHeight: '800px'"}
        {children}
      </MyContainer>
    </MyContainer>
  );
};

MinMax.defaultProps = {
  // backgroundColor: "rgba(255, 255, 255, 1.0)",
  // addStyle: {}
};

export default MinMax;
