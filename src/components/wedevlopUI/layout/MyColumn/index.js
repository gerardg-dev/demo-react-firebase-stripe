/**
 * SemanticUI React - Column Width - Max Width is 16
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

const MyColumn = props => {
    const {
        columnWidth,
        display,
        flexDirection,
        justifyContent,
        alignItems,
        backgroundColor,
        addStyle,
        children,
    } = props;

    const columnStyle = {
        display,
        flexDirection,
        justifyContent,
        alignItems,
        backgroundColor,
    };

    return (
        <Grid.Column
            {...props}
            style={{ ...columnStyle, ...addStyle }}
            width={columnWidth}
        >
            {children}
        </Grid.Column>
    );
};

MyColumn.defaultProps = {
    columnWidth: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    addStyle: {},
};

export default MyColumn;
