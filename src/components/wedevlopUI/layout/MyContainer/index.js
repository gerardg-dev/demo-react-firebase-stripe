// @flow

/**
 * -----------------------------------------------------------------------------
 * SIZE
 *
 * - fitParent: 100% width, 100% height.
 * - fitScreen: 100% width, 100vh height.
 * - fitContent: width and height is set depending on children content size. Expands.
 * - fixed: pass fixed Width and height values, wether they are Pixels or Percent.
 * Defaults to width 100% and height 100%
 *
 * -----------------------------------------------------------------------------
 * WIDTH x HEIGHT
 *
 * min & max width & height it can be resized to
 * Defaults to NO min and NO max
 *
 * min & max width & height it can be visible
 * Defaults to NO min and NO max
 *
 * -----------------------------------------------------------------------------
 * MARGIN: Defaults to 0.
 * PADDING: Defaults to 0.
 *
 * By default it has margin and padding 0.
 * If want to change that, it is recommended to pass those values in the
 * addStyle object.
 *
 * -----------------------------------------------------------------------------
 * POSITION
 * LAYOUT
 *
 * Absolute?
 * Defaults to FALSE
 * Defaults to "relative"
 *
 * -----------------------------------------------------------------------------
 * CONTENT CENTERING
 *
 * TopLeft, TopCenter, TopRight
 * CenterLeft, Center, CenterRight
 * BottomLeft, BottomCenter, BottomRight
 *
 * IF row - justifyContent
 * IF column - alignItems
 *
 * column_XLeft_YTop
 * column_XCenter_YTop
 * column_XRight_YTop
 * column_XLeft_YCenter
 * column_XCenter_YCenter
 * column_XRight_YCenter
 * column_XLeft_YBottom
 * column_XCenter_YBottom
 * column_XRight_YBottom
 *
 * row_XLeft_YTop
 * row_XCenter_YTop
 * row_XRight_YTop
 * row_XLeft_YCenter
 * row_XCenter_YCenter
 * row_XRight_YCenter
 * row_XLeft_YBottom
 * row_XCenter_YBottom
 * row_XRight_YBottom
 *
 * Content Alignment thru the X and Y axis:
 * display: "flex"
 * flexDirection
 * justifyContent
 * alignItems
 *
 * - justifyContent
 *
 * It defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.
 *
 * The justify-content property accepts five different values:
 *
 * flex-start (default): items are packed toward the start line
 * flex-end: items are packed toward to end line
 * center: items are centered along the line
 * space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line
 * space-around: items are evenly distributed in the line with equal space around them
 * space-evenly: items are distributed so that the spacing between any two adjacent alignment subjects, before the first alignment subject, and after the last alignment subject is the same
 *
 * - alignItems
 *
 * The align-items property is a sub-property of the Flexible Box Layout module.
 *
 * It defines the default behaviour for how flex items are laid out along the cross axis on the current line. You can think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).
 *
 * The align-items property accepts 5 different values:
 *
 * flex-start: cross-start margin edge of the items is placed on the cross-start line
 * flex-end: cross-end margin edge of the items is placed on the cross-end line
 * center: items are centered in the cross-axis
 * baseline: items are aligned such as their baselines align
 * stretch (default): stretch to fill the container (still respect min-width/max-width)
 *
 * -----------------------------------------------------------------------------
 * RESPONSIVE
 *
 * Defaults to TRUE
 * it resizes and fixes its size
 * if set to false, it will always keep its width and height no matter the device
 *
 * -----------------------------------------------------------------------------
 * OVERFLOW
 *
 * visible: content is not clipped when it proceeds outside its box. This is the default value of the property
 * hidden: overflowing content will be hidden.
 * scroll: similar to hidden except users will be able to scroll through the hidden content
 * auto: if the content proceeds outside its box then that content will be hidden whilst a scroll bar should be visible for users to read the rest of the content.
 * initial: uses the default value which is visible
 * inherit: sets the overflow to the value of its parent element.
 *
 * Visible: this will display the overflowing content beyond the parents boundaries
 * Hidden: will hide the overflowing content without re-sizing it
 * Scroll: will apply scrollbars to the element – overflowing or not
 * Auto: which will apply horizontal, vertical or both scrollbars is necessary
 *
 * Sources:
 * http://www.sudo-juice.com/remove-scrollbars-from-any-div-web-page/
 * -----------------------------------------------------------------------------
 */

import React, { Component, Fragment } from "react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

// internal config values

let setTestBorders = false;
let setTestBorderColor = "red";

const MyContainer = props => {
  const {
    size, // fixed, fitParent, fitScreen, fitContent, ...,
    fitScreens, // if size="fitScreen", set here the num of screens to fit ...,
    fixedWidth,
    fixedHeight,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    position, // HTML div positions: static, relative, fixed, absolute, sticky ...,
    display, // defaults to "display: flex" ...,
    flexDirection,
    justifyContent,
    alignItems,
    textAlign,
    // responsive,
    overflow, // visible, hidden, scroll, auto, initial, inherit ...,
    overflowY,
    showHorizontalScrollBar,
    showVerticalScrollBar,
    backgroundColor,
    opacity,
    testBorder,
    testBorderWidth,
    testBorderColor,
    testBorderStyle,
    addStyle,
    children
  } = props;

  // Default Style -----------------------------------------------------------

  let containerStyle = {
    margin: 0,
    padding: 0,
    position,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    textAlign,
    // responsive,
    // overflow,
    // overflowY,
    backgroundColor,
    opacity
  };

  // Container Size ----------------------------------------------------------

  if (size === "mainContainer") {
    let addStyle = {
      margin: 0,
      padding: 0,
      textAlign: "center",
      // overflow: "auto",
      // overflowX: "auto",
      overflowY: "auto",
      // overflowY: "scroll", // <------
      width: "100%",
      height: "100vh",
      color: "white"
    };

    return (
      <div
        {...props}
        style={{
          // ...containerStyle,
          // ...addStyle,
          ...addStyle
        }}
      >
        {children}
      </div>
    );
  }

  // Fixed Width and Height

  if (fixedWidth !== false) {
    let addStyle = { width: fixedWidth };
    containerStyle = { ...containerStyle, ...addStyle };
  }
  if (fixedHeight !== false) {
    let addStyle = { height: fixedHeight };
    containerStyle = { ...containerStyle, ...addStyle };
  }

  //

  if (size === "fixed") {
    let addStyle = {
      width: fixedWidth ? fixedWidth : "1px",
      height: fixedHeight ? fixedHeight : "1px"
    };
    containerStyle = { ...containerStyle, ...addStyle };
  }
  if (size === "fitParent") {
    let addStyle = {
      width: "100%",
      height: "100%"
    };
    containerStyle = { ...containerStyle, ...addStyle };
  }
  if (size === "fitScreen") {
    let xxx = fitScreens * 100;
    let yyy = `${xxx.toString()}vh`;
    let addStyle = {
      width: "100%",
      height: yyy // 100vh,
    };
    containerStyle = { ...containerStyle, ...addStyle };
  }
  if (size === "fitContent") {
    let addStyle = {};
    containerStyle = { ...containerStyle, ...addStyle };
  }
  if (size === "fitContentFullWidth") {
    let addStyle = { width: "100%" };
    containerStyle = { ...containerStyle, ...addStyle };
  }
  if (size === "fitContentFullHeight") {
    let addStyle = { height: "100%" };
    containerStyle = { ...containerStyle, ...addStyle };
  }
  if (size === "fitContentFullWidthHeight") {
    let addStyle = { width: "100%", height: "100%" };
    containerStyle = { ...containerStyle, ...addStyle };
  }

  // Min and Max values for Width and Height ---------------------------------

  if (minWidth !== false) {
    let addStyle = { minWidth };
    containerStyle = { ...containerStyle, ...addStyle };
  }
  if (minHeight !== false) {
    let addStyle = { minHeight };
    containerStyle = { ...containerStyle, ...addStyle };
  }
  if (maxWidth !== false) {
    let addStyle = { maxWidth };
    containerStyle = { ...containerStyle, ...addStyle };
  }
  if (maxHeight !== false) {
    let addStyle = { maxHeight };
    containerStyle = { ...containerStyle, ...addStyle };
  }

  // Test Border -------------------------------------------------------------
  // Comment the if statement and leave contents uncommented to see test border

  if (setTestBorders === true || testBorder === true) {
    let addStyle = {
      borderWidth: testBorderWidth,
      borderColor: testBorderColor,
      borderStyle: testBorderStyle
    };
    containerStyle = { ...containerStyle, ...addStyle };
  }

  // Container Position ------------------------------------------------------

  const relativeDivStyle = {
    position: "relative"
  };

  const absoluteDivStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };

  if (position === "relativeAbsolute") {
    return (
      <div style={relativeDivStyle}>
        <div
          {...props}
          style={{
            ...containerStyle,
            ...absoluteDivStyle,
            ...addStyle
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  if (position === "absolute") {
    return (
      <div
        {...props}
        style={{
          ...containerStyle,
          ...absoluteDivStyle,
          ...addStyle
        }}
      >
        {children}
      </div>
    );
  }

  // Container Content -------------------------------------------------------

  return (
    <div
      {...props}
      style={{ ...containerStyle, ...addStyle }}
      // className={[cssModules.container]}
      // CSS Modules, join 2 classes
      // className={[cssModules.classA, cssModules.classB].join(" ")}
      //
      // className="container"
      // Vanilla CSS, join 2 classes
      // className="container classA classB"
    >
      {children}
    </div>
  );
};

MyContainer.defaultProps = {
  size: "fitParent",
  fitScreens: 1,
  fixedWidth: false,
  fixedHeight: false,
  minWidth: false,
  minHeight: false, // 550px by default if container is set to size: "fitScreen"
  maxWidth: false,
  maxHeight: false,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  // responsive: true,
  overflow: "auto", // visible, hidden, scroll, auto, initial, inherit ...,
  overflowY: "auto",
  showHorizontalScrollBar: false,
  showVerticalScrollBar: false,
  backgroundColor: "rgba(255, 255, 255, 0.0)",
  opacity: 1,
  testBorder: setTestBorders,
  testBorderWidth: 3,
  testBorderColor: setTestBorderColor,
  testBorderStyle: "solid", // dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden
  addStyle: {}
};

export default MyContainer;
