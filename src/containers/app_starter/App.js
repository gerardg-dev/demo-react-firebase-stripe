import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import "assets/app_starter/vendors/style";
import defaultTheme from "./themes/defaultTheme";
import localStorageItems from "../../localStorage/app_starter";

import { setInitUrl } from "../../actions/app_starter/Auth";

import appstarterURLs from "../../appURLs/app_starter";

import RTL from "util/RTL";
import asyncComponent from "util/asyncComponent";

import ExamplesFirebaseAuth from "../examples/firebaseAuth";

import ExamplesWeDevlopUIStripeElements from "../examples/components/wedevlopUI/StripeElements";
import ExamplesWeDevlopUIStripeOpAttachSource from "../examples/components/wedevlopUI/StripeElements/ops/AttachSource";
import ExamplesWeDevlopUIStripeOpCreateCharge from "../examples/components/wedevlopUI/StripeElements/ops/CreateCharge";
import ExamplesWeDevlopUIStripeOpCreateSubscription from "../examples/components/wedevlopUI/StripeElements/ops/CreateSubscription";
import ExamplesWeDevlopUIStripeMoreCustomer from "../examples/components/wedevlopUI/StripeElements/api/Customer";
import ExamplesWeDevlopUIStripeMoreCharges from "../examples/components/wedevlopUI/StripeElements/api/Charges";
import ExamplesWeDevlopUIStripeMoreSubscriptions from "../examples/components/wedevlopUI/StripeElements/api/Subscriptions";

const RestrictedRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  componentWillMount() {}

  render() {
    const {
      match,
      location,
      authUser,
      initURL
    } = this.props;

    if (location.pathname === "/") {
      if (authUser === null) {
        // User is not Auth
        return <Redirect to={appstarterURLs.examples.firebase.auth.home} />;
      } else {
        // User is Auth
        return <Redirect to={appstarterURLs.examples.components.wedevlopUI.stripeElements.home} />;
      }
    }
    const applyTheme = createMuiTheme(defaultTheme);

    return (
      <MuiThemeProvider theme={applyTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <IntlProvider
            locale={localStorage.getItem(localStorageItems.locale)}
            // messages={}
          >
            <RTL>
              <div className="app-main">
                <Switch>

                  {/* EXAMPLES - FIREBASE AUTH */}

                  <Route
                    exact
                    path={appstarterURLs.examples.firebase.auth.home}
                    component={ExamplesFirebaseAuth}
                  />

                  {/* EXAMPLES - STRIPE */}

                  <Route
                    exact
                    path={
                      appstarterURLs.examples.components.wedevlopUI
                        .stripeElements.home
                    }
                    component={ExamplesWeDevlopUIStripeElements}
                  />

                  <Route
                    exact
                    path={
                      appstarterURLs.examples.components.wedevlopUI
                        .stripeElements.ops.attachSource
                    }
                    component={ExamplesWeDevlopUIStripeOpAttachSource}
                  />
                  <Route
                    exact
                    path={
                      appstarterURLs.examples.components.wedevlopUI
                        .stripeElements.ops.createCharge
                    }
                    component={ExamplesWeDevlopUIStripeOpCreateCharge}
                  />
                  <Route
                    exact
                    path={
                      appstarterURLs.examples.components.wedevlopUI
                        .stripeElements.ops.createSubscription
                    }
                    component={ExamplesWeDevlopUIStripeOpCreateSubscription}
                  />

                  <Route
                    exact
                    path={
                      appstarterURLs.examples.components.wedevlopUI
                        .stripeElements.api.customer
                    }
                    component={ExamplesWeDevlopUIStripeMoreCustomer}
                  />
                  <Route
                    exact
                    path={
                      appstarterURLs.examples.components.wedevlopUI
                        .stripeElements.api.charges
                    }
                    component={ExamplesWeDevlopUIStripeMoreCharges}
                  />
                  <Route
                    exact
                    path={
                      appstarterURLs.examples.components.wedevlopUI
                        .stripeElements.api.subscriptions
                    }
                    component={ExamplesWeDevlopUIStripeMoreSubscriptions}
                  />

                  <Route
                    component={asyncComponent(() =>
                      import("components/materialUI/Error404")
                    )}
                  />
                </Switch>
              </div>
            </RTL>
          </IntlProvider>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser, initURL } = auth;
  return { authUser, initURL };
};

export default connect(mapStateToProps, { setInitUrl })(App);
