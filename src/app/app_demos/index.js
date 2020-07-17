import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { isIOS, isMobile } from "react-device-detect";
import asyncComponent from "util/asyncComponent";

import demosURLs from "../../appURLs/app_demos";

import FirebaseAuth from "./routes/firebase/auth";

import StripeElements from "./routes/components/wedevlopUI/StripeElements";
import StripeAttachSource from "./routes/components/wedevlopUI/StripeElements/ops/AttachSource";
import StripeCreateCharge from "./routes/components/wedevlopUI/StripeElements/ops/CreateCharge";
import StripeCreateSubscription from "./routes/components/wedevlopUI/StripeElements/ops/CreateSubscription";
import StripeAPICustomer from "./routes/components/wedevlopUI/StripeElements/api/Customer";
import StripeAPICustomerCharges from "./routes/components/wedevlopUI/StripeElements/api/Charges";
import StripeAPICustomerSubscriptions from "./routes/components/wedevlopUI/StripeElements/api/Subscriptions";

import scssStyles from "../../styles/app_starter/scss/main.scss";

class App extends React.Component {
  render() {
    const {
      match,
      drawerType,
      navigationStyle,
      horizontalNavPosition
    } = this.props;

    return (
      <Switch>
        <Route
          exact
          path={`${match.url}`}
          component={asyncComponent(() => import("./routes/index"))}
        />

        {/* FIREBASE AUTH */}

        <Route
          exact
          path={`${demosURLs.firebase.auth.home}`}
          component={FirebaseAuth}
        />

        {/* STRIPE ELEMENTS */}

        <Route
          exact
          path={`${demosURLs.components.wedevlopUI.stripeElements.home}`}
          component={StripeElements}
        />
        <Route
          path={`${demosURLs.components.wedevlopUI.stripeElements.ops.attachSource}`}
          component={StripeAttachSource}
        />
        <Route
          path={`${demosURLs.components.wedevlopUI.stripeElements.ops.createCharge}`}
          component={StripeCreateCharge}
        />
        <Route
          path={`${demosURLs.components.wedevlopUI.stripeElements.ops.createSubscription}`}
          component={StripeCreateSubscription}
        />
        <Route
          path={`${demosURLs.components.wedevlopUI.stripeElements.api.customer}`}
          component={StripeAPICustomer}
        />
        <Route
          path={`${demosURLs.components.wedevlopUI.stripeElements.api.charges}`}
          component={StripeAPICustomerCharges}
        />
        <Route
          path={`${demosURLs.components.wedevlopUI.stripeElements.api.subscriptions}`}
          component={StripeAPICustomerSubscriptions}
        />

        {/* NOT FOUND */}

        <Route
          component={asyncComponent(() =>
            import("components/materialUI/Error404")
          )}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { drawerType, navigationStyle, horizontalNavPosition } = settings;
  return { drawerType, navigationStyle, horizontalNavPosition };
};
export default withRouter(connect(mapStateToProps)(App));
