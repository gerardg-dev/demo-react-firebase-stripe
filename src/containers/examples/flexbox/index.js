import React, { useState, useEffect } from "react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

const LayoutFlex = props => {
  const { flexDirection } = props;
  const { contentPos } = props;

  let contentPosStyle = {};

  if (flexDirection === "column") {
    //
    // column - top
    //
    if (contentPos === "topLeft") {
      contentPosStyle = styleObjects.topLeftColumnContentStyle;
    }
    if (contentPos === "topCenter") {
      contentPosStyle = styleObjects.topCenterColumnContentStyle;
    }
    if (contentPos === "topRight") {
      contentPosStyle = styleObjects.topRightColumnContentStyle;
    }
    //
    // column - center
    //
    if (contentPos === "centerLeft") {
      contentPosStyle = styleObjects.centerLeftColumnContentStyle;
    }
    if (contentPos === "center") {
      contentPosStyle = styleObjects.centerColumnContentStyle;
    }
    if (contentPos === "centerRight") {
      contentPosStyle = styleObjects.centerRightColumnContentStyle;
    }
    //
    // column - bottom
    //
    if (contentPos === "bottomLeft") {
      contentPosStyle = styleObjects.bottomLeftColumnContentStyle;
    }
    if (contentPos === "bottomCenter") {
      contentPosStyle = styleObjects.bottomCenterColumnContentStyle;
    }
    if (contentPos === "bottomRight") {
      contentPosStyle = styleObjects.bottomRightColumnContentStyle;
    }
  }

  if (flexDirection === "row") {
    //
    // row - top
    //
    if (contentPos === "topLeft") {
      contentPosStyle = styleObjects.topLeftRowContentStyle;
    }
    if (contentPos === "topCenter") {
      contentPosStyle = styleObjects.topCenterRowContentStyle;
    }
    if (contentPos === "topRight") {
      contentPosStyle = styleObjects.topRightRowContentStyle;
    }
    //
    // row - center
    //
    if (contentPos === "centerLeft") {
      contentPosStyle = styleObjects.centerLeftRowContentStyle;
    }
    if (contentPos === "center") {
      contentPosStyle = styleObjects.centerRowContentStyle;
    }
    if (contentPos === "centerRight") {
      contentPosStyle = styleObjects.centerRightRowContentStyle;
    }
    //
    // row - bottom
    //
    if (contentPos === "bottomLeft") {
      contentPosStyle = styleObjects.bottomLeftRowContentStyle;
    }
    if (contentPos === "bottomCenter") {
      contentPosStyle = styleObjects.bottomCenterRowContentStyle;
    }
    if (contentPos === "bottomRight") {
      contentPosStyle = styleObjects.bottomRightRowContentStyle;
    }
  }

  const renderInputContent = () => {
    return (
      <div
        style={{
          ...{ backgroundColor: "black" },
          ...{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 },
          ...styleObjects.centerColumnContentStyle
        }}
      >
        <div
          style={{
            ...{
              backgroundColor: "gray",
              width: "150px",
              height: "150px"
            },
            ...contentPosStyle
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "lightGreen"
            }}
          />
        </div>
      </div>
    );
  };

  return <div>{renderInputContent()}</div>;
};

LayoutFlex.defaultProps = {
  flexDirection: "column", // "column" "row"
  contentPos: "center"
  // contentPos options:
  // "topLeft"
  // "topCenter"
  // "topRight"
  // "centerLeft"
  // "center"
  // "centerRight"
  // "bottomLeft"
  // "bottomCenter"
  // "bottomRight"
};

export default LayoutFlex;
