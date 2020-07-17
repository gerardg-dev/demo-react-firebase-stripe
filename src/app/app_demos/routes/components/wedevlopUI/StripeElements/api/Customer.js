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

class Customer extends Component {
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
    console.log("this.props.stripeCustomerSources");
    console.log(this.props.stripeCustomerSources);
    console.log("this.props.stripeCustomerCharges");
    console.log(this.props.stripeCustomerCharges);
    console.log("this.props.stripeCustomerSubscriptions");
    console.log(this.props.stripeCustomerSubscriptions);
    console.log("this.props.stripeLoader");
    console.log(this.props.stripeLoader);
    console.log("this.props.stripeError");
    console.log(this.props.stripeError);

    // retrieve user id
    // get user document from datbase
    // get stripe user id from user document

    if (this.props.authUser !== null && this.props.userOdc !== null) {
      const { userDoc } = this.props;
      if (
        userDoc.stripe_customer_id !== undefined &&
        userDoc.stripe_customer_id !== null
      ) {
        await this.props.retrieveCustomer(userDoc.stripe_customer_id);
        // await this.props.retrieveCustomer(this.props.stripeCustomer.id);
      }
    }

    // if (
    //   this.props.stripeCustomer !== undefined &&
    //   this.props.stripeCustomer !== null
    // ) {
    //   await this.props.retrieveCustomer(this.props.stripeCustomer.id);
    // }
  }

  renderSources = sources => {
    if (sources === undefined || sources === null) return;
    if (sources.length === 0) return;
    //
    const renderSrc = srcs => {
      return srcs.map((src, index) => {
        return (
          <div style={styleObjects.card}>
            <Body text={`Source ID: ${src.id}`} />
            <Body text={`Stripe Customer ID: ${src.customer}`} />
            <Body
              text={`Created: ${new Date(src.created * 1000).toLocaleDateString(
                "en-US"
              )}`}
            />
            <Body text={`Currency: ${src.currency}`} />
            <Body text={`Card - Brand: ${src.card.brand}`} />
            <Body text={`Card - Last 4 Digits: ${src.card.last4}`} />
          </div>
        );
      });
    };
    //
    return <div>{renderSrc(sources)}</div>;
  };

  render() {
    return (
      <div style={styleObjects.container}>
        <div style={styleObjects.examplesContainer}>
          <h1 style={styleObjects.demo}>
            <strong>DEMO</strong>
          </h1>
          <Heading text="STRIPE CUSTOMER" />
          <Subheading text="CUSTOMER" />
          {this.props.stripeCustomer !== undefined &&
            this.props.stripeCustomer !== null && (
              <div>
                {this.props.stripeCustomer.id !== undefined && (
                  <Body text={`ID: ${this.props.stripeCustomer.id}`} />
                )}
                {this.props.stripeCustomer.metadata !== undefined &&
                  this.props.stripeCustomer.metadata.firebaseUID && (
                    <Body
                      text={`Firebase UID: ${this.props.stripeCustomer.metadata.firebaseUID}`}
                    />
                  )}
                {this.props.stripeCustomer.name !== undefined && (
                  <Body text={`Name: ${this.props.stripeCustomer.name}`} />
                )}
                {this.props.stripeCustomer.address !== undefined && (
                  <Body
                    text={`Address: ${this.props.stripeCustomer.address}`}
                  />
                )}
                {this.props.stripeCustomer.phone !== undefined && (
                  <Body text={`Phone: ${this.props.stripeCustomer.phone}`} />
                )}
                {this.props.stripeCustomer.email !== undefined && (
                  <Body text={`Email: ${this.props.stripeCustomer.email}`} />
                )}
                {this.props.stripeCustomer.description !== undefined && (
                  <Body
                    text={`Description: ${this.props.stripeCustomer.description}`}
                  />
                )}
                {this.props.stripeCustomer.created !== undefined && (
                  <Body
                    text={`Created: ${new Date(
                      this.props.stripeCustomer.created * 1000
                    ).toLocaleDateString("en-US")}`}
                  />
                )}
                {this.props.stripeCustomer.default_source !== undefined && (
                  <Body
                    text={`Default Source: ${this.props.stripeCustomer.default_source}`}
                  />
                )}
                <div style={styleObjects.columnCentered}>
                  <Subheading text="CUSTOMER SOURCES" />
                  {this.props.stripeCustomer.sources !== undefined &&
                    this.props.stripeCustomer.sources.data !== undefined && (
                      <Body
                        text={`Total: ${this.props.stripeCustomer.sources.data.length}`}
                      />
                    )}
                  {this.props.stripeCustomer.sources !== undefined &&
                    this.props.stripeCustomer.sources.data !== undefined &&
                    this.renderSources(this.props.stripeCustomer.sources.data)}
                </div>
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
    stripeCustomerSources: stripe.stripeCustomerSources,
    stripeCustomerCharges: stripe.stripeCustomerCharges,
    stripeCustomerSubscriptions: stripe.stripeCustomerSubscriptions,
    stripeLoader: stripe.stripeLoader,
    stripeError: stripe.stripeError
  };
};

export default connect(mapStateToProps, {
  retrieveCustomer,
  customerCharges,
  customerSubscriptions
})(Customer);

Customer.defaultProps = {};
