import React, { Component } from "react";
import { connect } from "react-redux";

import appURLs from "../../../../../../appURLs/app_starter";

import {
  retrieveCustomer,
  customerCharges,
  customerSubscriptions
} from "../../../../../../thunks/app_starter/Stripe";

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

class Charges extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    if (this.props.authUser === null) {
      this.props.history.push(appURLs.examples.firebase.auth.home);
    }

    console.log("this.props.authUser");
    console.log(this.props.authUser);
    console.log("this.props.firebaseUser");
    console.log(this.props.firebaseUser);
    console.log("this.props.userDoc");
    console.log(this.props.userDoc);
    console.log("this.props.stripeCustomer");
    console.log(this.props.stripeCustomer);
    console.log("this.props.stripeCustomerCharges");
    console.log(this.props.stripeCustomerCharges);
    console.log("this.props.stripeCharges");
    console.log(this.props.stripeCharges);
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
        await this.props.customerCharges(userDoc.stripe_customer_id);
        // await this.props.customerCharges(this.props.stripeCustomer.id);
      }
    }

    // if (
    //   this.props.stripeCustomer !== undefined &&
    //   this.props.stripeCustomer !== null
    // ) {
    //   await this.props.customerCharges(this.props.stripeCustomer.id);
    // }
  }

  renderCharges = charges => {
    if (charges === undefined || charges === null) return;
    if (charges.length === 0) return;
    //
    const renderChs = chs => {
      return chs.map((ch, index) => {
        return (
          <div
            style={{
              border: "solid white 1px",
              padding: "10px",
              margin: "5px"
            }}
          >
            <Body text={`Ch Charge: ${ch.id}`} />
            <Body text={`Stripe Customer ID: ${ch.customer}`} />
            <Body
              text={`Created: ${new Date(ch.created * 1000).toLocaleDateString(
                "en-US"
              )}`}
            />
            <Body text={`Amount (cents): ${ch.amount}`} />
            <Body text={`Currency: ${ch.currency}`} />
            <Body text={`Paid: ${ch.paid}`} />
            <Body text={`Refunded: ${ch.refunded}`} />
            <Body text={`Amount Refunded: ${ch.amount_refunded}`} />
            <Body text={`Status: ${ch.status}`} />
            <Body text={`Payment method: ${ch.payment_method}`} />

            <Body text={`Payment Method Details - Card`} />
            <div style={styleObjects.card}>
              <Body
                text={`Card - Brand: ${ch.payment_method_details.card.brand}`}
              />
              <Body
                text={`Card - Last 4 Digits: ${ch.payment_method_details.card.last4}`}
              />
              <Body
                text={`Card - Country: ${ch.payment_method_details.card.country}`}
              />
              <Body
                text={`Card - Funding: ${ch.payment_method_details.card.funding}`}
              />
            </div>

            <Body text={`Source`} />
            <div style={styleObjects.card}>
              <Body text={`Source ID: ${ch.source.id}`} />
              <Body text={`Stripe Customer ID: ${ch.source.customer}`} />
              <Body
                text={`Created: ${new Date(
                  ch.source.created * 1000
                ).toLocaleDateString("en-US")}`}
              />
              <Body text={`Currency: ${ch.source.currency}`} />
            </div>
          </div>
        );
      });
    };
    //
    return <div>{renderChs(charges)}</div>;
  };

  render() {
    return (
      <div style={styleObjects.container}>
        <div style={styleObjects.examplesContainer}>
          <h1 style={styleObjects.demo}>
            <strong>DEMO</strong>
          </h1>
          <Heading text="STRIPE CHARGES" />
          <Subheading text="CUSTOMER CHARGES" />
          {this.props.stripeCustomerCharges !== undefined &&
            this.props.stripeCustomerCharges !== null && (
              <div style={styleObjects.columnCentered}>
                <Body
                  text={`Total: ${this.props.stripeCustomerCharges.length}`}
                />
                {this.props.stripeCustomerCharges.length > 0 &&
                  this.renderCharges(this.props.stripeCustomerCharges)}
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
    stripeCustomerCharges: stripe.stripeCustomerCharges,
    stripeCharges: stripe.stripeCharges,
    stripeLoader: stripe.stripeLoader,
    stripeError: stripe.stripeError
  };
};

export default connect(mapStateToProps, {
  retrieveCustomer,
  customerCharges,
  customerSubscriptions
})(Charges);

Charges.defaultProps = {};
