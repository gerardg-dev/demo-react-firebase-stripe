import React, { Component } from "react";
import { connect } from "react-redux";

import demosURLs from "../../../../../../../appURLs/app_demos";

import {
  retrieveCustomer,
  customerCharges,
  customerSubscriptions
} from "../../../../../../../thunks/app_starter/Stripe";

import cssStyles from "../styles/css/default.css";
import cssModules from "../styles/css_modules/default.css";
import sassStyles from "../styles/sass/default.sass";
import scssStyles from "../styles/scss/default.scss";
import stylable from "../styles/stylable/default.st.css";
import styleObjects from "../styles/style_objects/index.js";
import styledComponents from "../styles/styled_components/index.js";

import Heading from "../ui/Heading";
import Subheading from "../ui/Subheading";
import Body from "../ui/Body";
import SeeCodeButton from "../ui/SeeCodeButton";
import ExternalComponent from "../ui/ExternalComponent";
import Modal from "../ui/Modal";
import Auth from "../ui/Auth";
import Loading from "../ui/Loading";

class Subscriptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    if (this.props.authUser === null) {
      this.props.history.push(demosURLs.firebase.auth.home);
    }

    console.log("this.props.authUser");
    console.log(this.props.authUser);
    console.log("this.props.firebaseUser");
    console.log(this.props.firebaseUser);
    console.log("this.props.userDoc");
    console.log(this.props.userDoc);
    console.log("this.props.stripeCustomer");
    console.log(this.props.stripeCustomer);
    console.log("this.props.stripeCustomerSubscriptions");
    console.log(this.props.stripeCustomerSubscriptions);
    console.log("this.props.stripeSubscriptions");
    console.log(this.props.stripeSubscriptions);
    console.log("this.props.stripeLoader");
    console.log(this.props.stripeLoader);
    console.log("this.props.stripeError");
    console.log(this.props.stripeError);

    if (this.props.authUser !== null && this.props.userOdc !== null) {
      const { userDoc } = this.props;
      if (
        userDoc.stripe_customer_id !== undefined &&
        userDoc.stripe_customer_id !== null
      ) {
        await this.props.retrieveCustomer(userDoc.stripe_customer_id);
        await this.props.customerSubscriptions(userDoc.stripe_customer_id);
        // await this.props.customerSubscriptions(this.props.stripeCustomer.id);
      }
    }

    // if (
    //   this.props.stripeCustomer !== undefined &&
    //   this.props.stripeCustomer !== null
    // ) {
    //   await this.props.customerSubscriptions(this.props.stripeCustomer.id);
    // }
  }

  renderSubscriptions = subscriptions => {
    if (subscriptions === undefined || subscriptions === null) return;
    if (subscriptions.length === 0) return;
    //
    const renderSubs = subs => {
      return subs.map((sub, index) => {
        return (
          <div
            style={{
              border: "solid white 1px",
              padding: "10px",
              margin: "5px"
            }}
          >
            <Body text={`Subscription ID: ${sub.id}`} />
            <Body text={`Stripe Customer ID: ${sub.customer}`} />
            <Body text={`Subscription Status: ${sub.status}`} />

            <Body
              text={`Billing Cycle Anchor: ${new Date(
                sub.billing_cycle_anchor * 1000
              ).toLocaleDateString("en-US")}`}
            />
            <Body
              text={`Created: ${new Date(sub.created * 1000).toLocaleDateString(
                "en-US"
              )}`}
            />
            <Body
              text={`Current Period Start: ${new Date(
                sub.current_period_start * 1000
              ).toLocaleDateString("en-US")}`}
            />
            <Body
              text={`Current Period End: ${new Date(
                sub.current_period_end * 1000
              ).toLocaleDateString("en-US")}`}
            />
            <Body
              text={`Start Date: ${new Date(
                sub.start_date * 1000
              ).toLocaleDateString("en-US")}`}
            />

            <Body text={`Trial Start: ${sub.trial_start}`} />
            <Body text={`Trial End: ${sub.trial_end}`} />
            <Body text={`Days Until Due: ${sub.days_until_due}`} />
            <Body text={`Cancel At: ${sub.cancel_at}`} />
            <Body text={`Cancel at Period End: ${sub.cancel_at_period_end}`} />
            <Body text={`Canceled At: ${sub.canceled_at}`} />
            <Body text={`Ended At: ${sub.ended_at}`} />

            <Body text={`Collection Method: ${sub.collection_method}`} />
            <Body text={`Default Method Due: ${sub.default_payment_due}`} />
            <Body text={`Default Source: ${sub.default_source}`} />
            <Body text={`Discount: ${sub.discount}`} />

            {sub.plan !== undefined && (
              <div>
                <Body text={`Plan - ID: ${sub.plan.id}`} />
                <Body text={`Plan - Active: ${sub.plan.active}`} />
                <Body text={`Plan - Product: ${sub.plan.product}`} />
                <Body
                  text={`Plan - Created: ${new Date(
                    sub.plan.created * 1000
                  ).toLocaleDateString("en-US")}`}
                />
                <Body text={`Plan - Amount: ${sub.plan.amount}`} />
                <Body
                  text={`Plan - Amount Decimal: ${sub.plan.amount_decimal}`}
                />
                <Body text={`Plan - Currency: ${sub.plan.currency}`} />
                <Body text={`Plan - Interval: ${sub.plan.interval}`} />
                <Body
                  text={`Plan - Trial Period Days: ${sub.plan.trial_period_days}`}
                />
              </div>
            )}
          </div>
        );
      });
    };
    //
    return <div>{renderSubs(subscriptions)}</div>;
  };

  render() {
    return (
      <div style={styleObjects.container}>
        <div style={styleObjects.examplesContainer}>
          <h1 style={styleObjects.demo}>
            <strong>DEMO</strong>
          </h1>
          <Heading text="CUSTOMER SUBSCRIPTIONS" />
          <Subheading text="CUSTOMER SUBSCRIPTIONS" />
          {this.props.stripeCustomerSubscriptions !== undefined &&
            this.props.stripeCustomerSubscriptions !== null && (
              <div style={styleObjects.columnCentered}>
                <Body
                  text={`Total: ${this.props.stripeCustomerSubscriptions.length}`}
                />
                {this.props.stripeCustomerSubscriptions.length > 0 &&
                  this.renderSubscriptions(
                    this.props.stripeCustomerSubscriptions
                  )}
              </div>
            )}
          {this.props.stripeCustomer === null && (
            <Body
              text={`NOT A STRIPE CUSTOMER, ATTACH A SOURCE TO CREATE STRIPE CUSTOMER`}
            />
          )}
        </div>
        {this.props.stripeLoader === true && <Loading />}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, stripe }) => {
  return {
    authUser: auth.authUser,
    firebaseUser: auth.firebaseUser,
    userDoc: auth.userDoc,
    stripeCustomer: stripe.stripeCustomer,
    stripeCustomerSubscriptions: stripe.stripeCustomerSubscriptions,
    stripeSubscriptions: stripe.stripeSubscriptions,
    stripeLoader: stripe.stripeLoader,
    stripeError: stripe.stripeError
  };
};

export default connect(mapStateToProps, {
  retrieveCustomer,
  customerCharges,
  customerSubscriptions
})(Subscriptions);

Subscriptions.defaultProps = {};
