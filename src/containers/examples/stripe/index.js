// Add each feature screens and on each render:
// user auth status
// notifications for error/success , success redirection?
// load stripe data
// write to database after success or fail (declined payment)

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

import MyContainer from "../../../components/wedevlopUI/layout/MyContainer";
import LanguageDropdown from "../../../components/materialUI/LanguageDropdown";

import AuthUser from "./AuthUser";

import styles from "./styles";

class StripeExamples extends React.Component {
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
            <p>SOURCES</p>

            <Link
              to="/examples/stripe/sources"
              style={styles.mainMenuButtonStyle}
            >
              {"PAYMENT SOURCES"}
              {/*
              <IntlMessages id="pages.home.signin" />
              */}
            </Link>

            <div style={styles.elementSeparator} />

            <Link
              to="/examples/stripe/attachsource"
              style={styles.mainMenuButtonStyle}
            >
              {"ATTACH SOURCE"}
              {/*
              <IntlMessages id="pages.home.signin" />
              */}
            </Link>

            <div style={styles.elementSeparator} />

            <Link
              to="/examples/stripe/changedefaultsource"
              style={styles.mainMenuButtonStyle}
            >
              {"CHANGE DEFAULT SOURCE"}
              {/*
              <IntlMessages id="pages.home.signin" />
              */}
            </Link>

            <hr style={styles.hLine} />
          </div>

          <div style={styles.contentSection}>
            <p>CHARGES</p>

            <Link
              to="/examples/stripe/createcharge"
              style={styles.mainMenuButtonStyle}
            >
              {"CREATE CHARGE"}
              {/*
                <IntlMessages id="pages.home.signin" />
                */}
            </Link>

            <div style={styles.elementSeparator} />

            <Link
              to="/examples/stripe/allcharges"
              style={styles.mainMenuButtonStyle}
            >
              {"ALL CHARGES"}
              {/*
                <IntlMessages id="pages.home.signin" />
              */}
            </Link>

            <div style={styles.elementSeparator} />

            <Link
              to="/examples/stripe/customercharges"
              style={styles.mainMenuButtonStyle}
            >
              {"CUSTOMER CHARGES"}
              {/*
                <IntlMessages id="pages.home.signin" />
              */}
            </Link>

            <hr style={styles.hLine} />
          </div>

          <div style={styles.contentSection}>
            <p>SUBSCRIPTIONS</p>

            <Link
              to="/examples/stripe/createsubscription"
              style={styles.mainMenuButtonStyle}
            >
              {"CREATE SUBSCRIPTION"}
              {/*
                  <IntlMessages id="pages.home.signin" />
                  */}
            </Link>

            <div style={styles.elementSeparator} />

            <Link
              to="/examples/stripe/subscriptionaddons"
              style={styles.mainMenuButtonStyle}
            >
              {"SUBSCRIPTION ADD-ONS"}
              {/*
                    <IntlMessages id="pages.home.signin" />
                    */}
            </Link>

            <div style={styles.elementSeparator} />

            <Link
              to="/examples/stripe/upgradesubscription"
              style={styles.mainMenuButtonStyle}
            >
              {"UPGRADE SUBSCRIPTION"}
              {/*
                      <IntlMessages id="pages.home.signin" />
                      */}
            </Link>

            <div style={styles.elementSeparator} />

            <Link
              to="/examples/stripe/subscriptiondetails"
              style={styles.mainMenuButtonStyle}
            >
              {"SUBSCRIPTION DETAILS"}
              {/*
                    <IntlMessages id="pages.home.signin" />
                    */}
            </Link>

            <div style={styles.elementSeparator} />

            <Link
              to="/examples/stripe/pausesubscription"
              style={styles.mainMenuButtonStyle}
            >
              {"PAUSE SUBSCRIPTION"}
              {/*
                        <IntlMessages id="pages.home.signin" />
                        */}
            </Link>

            <div style={styles.elementSeparator} />

            <Link
              to="/examples/stripe/cancelsubscription"
              style={styles.mainMenuButtonStyle}
            >
              {"CANCEL SUBSCRIPTION"}
              {/*
                      <IntlMessages id="pages.home.signin" />
                      */}
            </Link>

            <hr style={styles.hLine} />
          </div>

          <div style={styles.contentSection}>
            <p>COUPONS</p>

            <Link
              to="/examples/stripe/coupons"
              style={styles.mainMenuButtonStyle}
            >
              {""}
              {/*
                <IntlMessages id="pages.home.signin" />
              */}
            </Link>

            <hr style={styles.hLine} />
          </div>

          <div style={styles.contentSection}>
            <p>REFUNDS</p>

            <Link
              to="/examples/stripe/refunds"
              style={styles.mainMenuButtonStyle}
            >
              {""}
              {/*
                <IntlMessages id="pages.home.signin" />
              */}
            </Link>

            <hr style={styles.hLine} />
          </div>

          <div style={styles.contentSection}>
            <p>WEBHOOKS</p>

            <Link
              to="/examples/stripe/webhooks"
              style={styles.mainMenuButtonStyle}
            >
              {""}
              {/*
                <IntlMessages id="pages.home.signin" />
              */}
            </Link>
          </div>

          <div style={styles.contentSection}>
            <iframe
              src="https://carbon.now.sh/embed/"
              style={{
                transform: "scale(1.0)",
                width: "1024px",
                height: "473px",
                border: 0,
                overflow: "hidden"
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
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
)(StripeExamples);
