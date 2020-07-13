import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import IntlMessages from "util/IntlMessages";
import CircularProgress from "@material-ui/core/CircularProgress";
import { hideMessage, showAuthLoader } from "actions/app_starter/Auth";

import MyContainer from "../../../../components/wedevlopUI/layout/MyContainer";
import LanguageDropdown from "../../../../components/materialUI/LanguageDropdown";
import StripeElements from "../../../../components/wedevlopUI/StripeElements";

import AuthUser from "../AuthUser";

import styles from "../styles";

class StripeExamplesCreateCharge extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    // if (this.props.authUser !== null) {
    //   this.props.history.push("/");
    // }
  }

  render() {
    const {} = this.state;
    const { showMessage, loader, alertMessage, authUser } = this.props;
    const { locale } = this.props;

    return (
      <div style={styles.mainContainer}>
        <div>
          <AuthUser />

          <div style={{ height: styles.topMarginStr }} />

          <div style={styles.contentSection}>
            <p>Create Charge</p>
            <StripeElements
              stripeOperation="createCharge"
              chargeAmount={1000}
              // addInputStyle={{ color: "lightGreen", borderColor: "red" }}
              // addPlaceholderStyle={{ color: "white" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, settings }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  const { locale } = settings;
  return { loader, alertMessage, showMessage, authUser, locale };
};

export default connect(
  mapStateToProps,
  {
    hideMessage,
    showAuthLoader
  }
)(StripeExamplesCreateCharge);
