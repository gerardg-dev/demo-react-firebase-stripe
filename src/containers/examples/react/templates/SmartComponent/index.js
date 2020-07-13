// @flow

/**
 * Documentation
 * ExampleClassBasedComponent
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
 *
 * Lifecycle Methods:
 * https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
 *
 * REMEMBER:
 *
 * this.state should not be assigned directly. Use this.setState, instead.
 *
 * this.setState cannot be used in render.
 *
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

class ExampleClassBasedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { testValue: 1 };
  }

  // componentWillReceiveProps(nextProps) {}
  // Most Common Use Case: Acting on particular prop changes to trigger state transitions.
  // Can call setState: Yes.

  // Executes after the component is rendered for the first time
  // componentDidMount() {
  //     this.setState({ testValue: 2 });
  // }
  // Most Common Use Case: Starting AJAX calls to load in data for your component.
  // Can call setState: Yes.

  // shouldComponentUpdate(nextProps, nextState) {}
  // Most Common Use Case: Controlling exactly when your component will re-render.
  // Can call setState: No.

  // componentWillUpdate() {}
  // Most Common Use Case: Used instead of componentWillReceiveProps on a
  // component that also has shouldComponentUpdate (but no access to previous props).
  // Can call setState: No.

  // componentDidUpdate() {}
  // Most Common Use Case: Updating the DOM in response to prop or state changes.
  // Can call setState: Yes.

  // componentWillUnmount() {}
  // Most Common Use Case: Cleaning up any leftover debris from your component.
  // Can call setState: No.

  render() {
    const { backgroundColor, addContainerStyle, children } = this.props;
    const { someValue } = this.state;

    const containerStyle = {
      backgroundColor: backgroundColor
    };

    return (
      <Container
        {...props}
        style={{ ...containerStyle, ...addContainerStyle }}
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
  }
}

ExampleClassBasedComponent.defaultProps = {
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  addContainerStyle: {}
};

export default ExampleClassBasedComponent;
