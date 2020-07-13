import React from "react";

import getStyles from "../getStyles";
import defaultStyles from "../styles/style_objects";

const MyRow = props => {
  const { elementObj, stateStyles, propsStyles, children } = props;

  let rowStyles = getStyles(
    "row",
    elementObj.style,
    elementObj.addStyle,
    elementObj.className,
    elementObj.addClassName,
    stateStyles,
    propsStyles
  );

  return (
    <div
      style={{
        ...defaultStyles.row,
        ...rowStyles.style,
        ...rowStyles.addStyle
      }}
      className={`${rowStyles.className} ${rowStyles.addClassName}`}
    >
      {children}
    </div>
  );
};

export default MyRow;
