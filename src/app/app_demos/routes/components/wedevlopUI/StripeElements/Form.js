import React, { Component } from "react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import MyForm from "../../../../../../components/wedevlopUI/MyForm";
import StripeElements from "../../../../../../components/wedevlopUI/StripeElementsV2";

import Heading from "./ui/Heading";
import Subheading from "./ui/Subheading";
import Body from "./ui/Body";
import SeeCodeButton from "./ui/SeeCodeButton";
import ExternalComponent from "./ui/ExternalComponent";
import Modal from "./ui/Modal";
import Auth from "./ui/Auth";
import Loading from "./ui/Loading";

const Form = props => <StripeElements {...props} />;

export default Form;
