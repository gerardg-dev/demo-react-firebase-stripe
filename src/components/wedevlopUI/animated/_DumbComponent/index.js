// @flow

/**
 * Documentation
 * ExampleFunctionalComponent
 *
 * Default Props
 * Has default props, so it works if no props are passed.
 *
 * Dimensions
 * Fixed width and height, but can be set to 100% width and height to fit its parent.
 *
 * MIN and MAX width & height
 * Defaults to none, not any min or max values set for width and height, but
 * they can accept that values if passed.
 *
 * Children
 * It accepts and renders children, if passed.
 *
 * Props Destructure
 * Right inside the function is the very first thing we do.
 *
 * Props for Styling
 * We add the styles object inside the function, in case we need to make use
 * props as style values.
 *
 * add Styles
 * Component can accept a styles object and add the ones it has by default.
 *
 * Component Receives Parent Attrbutes {...props}
 * Parent can pass html or component attributes and this functional component
 * will apply those to itself.
 *
 * Can Talk to Parent
 * Component can talk to its parent.
 *
 * Parent Can Talk to Children
 * Component who renders this component can also talk to this functional component.
 *
 * Controlled Component
 * Some of its values can be controlled by state or other similar approaches.
 *
 * Multiple Styling Options Ready
 * It has folder structure ready to accept different ways of styling, such as
 * css, css3, css modules, sass, scss, inline, style objects and styled components.
 *
 * Multiple CSS Modules Ready
 * You can easily pass multiple css modules (local css classes).
 */

import React, { Component, Fragment } from "react";

import { Container, Grid } from "semantic-ui-react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const ExampleFunctionalComponent = props => {
  const { backgroundColor, addStyle, children } = props;

  const buttonStyle = {
    backgroundColor: backgroundColor
  };

  return (
    <Container
      {...props}
      style={{ ...buttonStyle, ...addStyle }}
      //
      // className={[cssModules.container]}
      // CSS Modules, join 2 classes
      // className={[cssModules.classA, cssModules.classB].join(" ")}
      //
      // className="container"
      // Vanilla CSS, join 2 classes
      // className="container classA classB"
    >
      {children}
    </Container>
  );
};

ExampleFunctionalComponent.defaultProps = {
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  addStyle: {}
};

export default ExampleFunctionalComponent;
