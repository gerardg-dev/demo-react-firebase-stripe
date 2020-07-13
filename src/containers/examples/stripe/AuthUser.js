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

import { getAuthUser } from "../../../thunks/app_starter/Auth";

import MyContainer from "../../../components/wedevlopUI/layout/MyContainer";

import styles from "./styles";

class StripeExamplesAuthUser extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    console.log(this.props.getAuthUser());
  }

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

  renderAuthUser = user => {
    let statusColor = "lightGray";
    let userID = "N/A";
    let name = "N/A";
    let email = "N/A";
    let stripeCustomerID = "N/A";

    if (user === null || user === undefined) {
    } else {
      statusColor = "lightGreen";
      userID = user.uid;
      name = user.displayName;
      email = user.email;
      // get firestore /users/{user.uid}
      stripeCustomerID = user.stripe_customer_id;
    }

    return (
      <div style={styles.userStatusContainer}>
        <div style={styles.userStatus}>
          <div
            style={{
              ...styles.userIndicator,
              ...{ backgroundColor: statusColor }
            }}
          />
          <p>{`User: ${userID}`}</p>
        </div>
        <p>{`Name: ${name}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`Stripe Customer ID: ${stripeCustomerID}`}</p>
      </div>
    );
  };

  render() {
    const { email, password } = this.state;
    const {
      showMessage,
      loader,
      alertMessage,
      authUser,
      userObject
    } = this.props;
    const { locale } = this.props;

    return (
      <div style={styles.topBarContainer}>
        {this.renderAuthUser(userObject)}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, settings }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  const { locale } = settings;
  const { userObject } = auth;
  return { loader, alertMessage, showMessage, authUser, locale, userObject };
};

export default connect(
  mapStateToProps,
  {
    hideMessage,
    showAuthLoader,
    //
    getAuthUser
  }
)(StripeExamplesAuthUser);
