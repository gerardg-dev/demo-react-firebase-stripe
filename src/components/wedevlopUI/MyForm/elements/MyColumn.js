import React from "react";

import getStyles from "../getStyles";
import defaultStyles from "../styles/style_objects";

const MyColumn = props => {
  const { elementObj, stateStyles, propsStyles, children } = props;
  const { columnSize } = elementObj;

  let columnStyles = getStyles(
    "column",
    elementObj.style,
    elementObj.addStyle,
    elementObj.className,
    elementObj.addClassName,
    stateStyles,
    propsStyles
  );

  let columnSizingStyle;
  let columnSizingClassName;

  if (columnSize === "1-of-1") {
    columnSizingStyle = defaultStyles.columnOneOfOne;
  }
  if (columnSize === "1-of-2") {
    columnSizingStyle = defaultStyles.columnOneOfTwo;
  }
  if (columnSize === "1-of-3") {
    columnSizingStyle = defaultStyles.columnOneOfThree;
  }
  if (columnSize === "2-of-3") {
    columnSizingStyle = defaultStyles.columnTwoOfThree;
  }
  if (columnSize === "1-of-4") {
    columnSizingStyle = defaultStyles.columnOneOfFour;
  }
  if (columnSize === "2-of-4") {
    columnSizingStyle = defaultStyles.columnTwoOfFour;
  }
  if (columnSize === "3-of-4") {
    columnSizingStyle = defaultStyles.columnThreeOfFour;
  }

  return (
    <div
      style={{
        ...columnSizingStyle,
        ...columnStyles.style,
        ...columnStyles.addStyle
      }}
      className={`${columnStyles.className} ${columnStyles.addClassName}`}
    >
      {children}
    </div>
  );
};

export default MyColumn;
