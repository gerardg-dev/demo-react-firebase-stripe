import React, { Component } from "react";
import { connect } from "react-redux";

import appURLs from "../../../../../appURLs/app_starter";
import projectKeys from "../../../../../keys/app_starter";

import {
  attachSource,
  createCharge,
  createSubscription
} from "../../../../../thunks/app_starter/Firebase/Stripe";

import StripeElements from "../../../../../components/wedevlopUI/StripeElementsV2";
import Form from "./Form";

import Heading from "./ui/Heading";
import Subheading from "./ui/Subheading";
import Body from "./ui/Body";
import SeeCodeButton from "./ui/SeeCodeButton";
import ExternalComponent from "./ui/ExternalComponent";
import Modal from "./ui/Modal";
import Auth from "./ui/Auth";
import Loading from "./ui/Loading";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import scss from "../../../../..//styles/app_starter/scss/main.scss";

class ExamplesWeDevlopUIStripeElements extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuth: true, isLoading: false };
  }

  componentDidMount() {
    if (this.props.authUser === null) {
      this.props.history.push(appURLs.examples.firebase.auth.home);
    }
  }

  render() {
    return (
      <div style={styleObjects.container}>
        <div style={styleObjects.examplesContainer}>
          <h1 style={styleObjects.demo}>
            <strong>DEMO</strong>
          </h1>

          <Heading text="REPO" />
          <Subheading text="GITHUB REPOSITORY" />
          <a style={styleObjects.button} href="" target="_blank">
            {"SEE REPO"}
          </a>

          {/* DEMO - REQUIREMENTS ------------------------------------------ */}

          <Heading text="REQUIREMENTS" />

          <Subheading text="YOUR FIREBASE PROJECT KEYS" />
          <Body text="Generate and add your Firebase project keys, set up Storage in the Firebase console." />

          <Subheading text="FIREBASE AUTH" />
          <Body text="You need to enable email authentication in your Firebase project." />

          <Subheading text="FIREBASE STORAGE RULES" />
          <Body text="Keep in mind to set read/write rules in your Firebase Storage project." />

          <Subheading text="FIREBASE BLAZE PLAN" />
          <Body text="You need this Firebase plan to be able to make API calls from Firebase to 3rd parties, in this case, from Firebase to the Stripe API." />

          <Subheading text="YOUR STRIPE API KEYS" />
          <Body text="Generate and add your Stripe project keys, set up an account in the Stripe website." />
          <Body text="STRIPE SECRET KEY" />
          <Body text="STRIPE PUBLISHABLE KEY" />

          <Subheading text="STRIPE SUBSCRIPTIONS" />
          <div>
            <Body text="Create a Product (I.E.: Gold Plan Product, Silver Plan Product, Bronze Plan Product)." />
            <Body text="Create Pricing Plans for a Product (I.E.: $99 Monthly Pricing Plan for the Gold Plan Product, $999 Yearly Pricing Plan for the Gold Plan Product)." />
            <Body text="Create a Subscription to a Pricing Plan (I.E.: Subscription to the $99 Monthly Pricing Plan of the Gold Plan Product)." />
            {/* Basic, Standard, Premium */}
          </div>

          <Subheading text="STRIPE TEST CARDS" />
          <a
            style={styleObjects.button}
            href="https://stripe.com/docs/testing#cards"
            target="_blank"
          >
            {"SEE TEST CARD NUMBERS"}
          </a>

          {/* DEMO - OPS --------------------------------------------------- */}

          <Heading text="STRIPE API - OPERATIONS" />

          <Subheading text="ATTACH SOURCE" />
          <Body text="Preview" />
          <a
            style={styleObjects.button}
            href={
              appURLs.examples.components.wedevlopUI.stripeElements.ops
                .attachSource
            }
            target="blank"
          >
            {"ATTACH A SOURCE"}
          </a>

          <Subheading text="CREATE CHARGE" />
          <Body text="Preview" />
          <a
            style={styleObjects.button}
            href={
              appURLs.examples.components.wedevlopUI.stripeElements.ops
                .createCharge
            }
            target="blank"
          >
            {"CREATE A CHARGE"}
          </a>

          <Subheading text="CREATE SUBSCRIPTION" />
          <Body text="Preview" />
          <a
            style={styleObjects.button}
            href={
              appURLs.examples.components.wedevlopUI.stripeElements.ops
                .createSubscription
            }
            target="blank"
          >
            {"CREATE A SUBSCRIPTION"}
          </a>

          {/* DEMO - API --------------------------------------------------- */}

          <Heading text="STRIPE API" />

          <Subheading text="RETRIEVE CUSTOMER" />
          <Body text="Preview" />
          <a
            style={styleObjects.button}
            href={
              appURLs.examples.components.wedevlopUI.stripeElements.api.customer
            }
            target="_blank"
          >
            {"SEE CUSTOMER"}
          </a>

          <Subheading text="CUSTOMER CHARGES" />
          <Body text="Preview" />
          <a
            style={styleObjects.button}
            href={
              appURLs.examples.components.wedevlopUI.stripeElements.api.charges
            }
            target="_blank"
          >
            {"SEE CHARGES"}
          </a>

          <Subheading text="CUSTOMER SUBSCRIPTIONS" />
          <Body text="Preview" />
          <a
            style={styleObjects.button}
            href={
              appURLs.examples.components.wedevlopUI.stripeElements.api
                .subscriptions
            }
            target="_blank"
          >
            {"SEE SUBSCRIPTIONS"}
          </a>

          <Heading text="STRIPE ELEMENTS - SET TEXT" />

          <Subheading text="TITLE, SUBTITLE, SUBMIT BUTTON AND FOOTNOTE" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={4}
            submitButtonStyleN={1}
            titleText="DEMO: TITLE"
            subtitleText="DEMO: Subtitle"
            submitText="DEMO: SUBMIT"
            footnoteText="DEMO: Footnote"
          />
          <SeeCodeButton href="https://carbon.now.sh/0vyxfeZxxX5h4J7Cg6kQ" />

          {/* DEMO - FORMS ------------------------------------------------- */}

          <Heading text="STRIPE ELEMENTS - FORM TYPES" />

          <Subheading text="FORM 1" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={1}
          />
          <SeeCodeButton href="https://carbon.now.sh/nckPxdLBVejPAgxVTShG" />

          <Subheading text="FORM 2" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={2}
          />
          <SeeCodeButton href="https://carbon.now.sh/7NFItRM210xcs2Gq98dJ" />

          <Subheading text="FORM 3" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={3}
          />
          <SeeCodeButton href="https://carbon.now.sh/lPbFV5LTL6jpyx6IggQf" />

          <Subheading text="FORM 4" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={4}
          />
          <SeeCodeButton href="https://carbon.now.sh/hgJVpBrTq0NWENF0vbm4" />

          <Subheading text="FORM 5" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={5}
            submitButtonStyleN={1}
          />
          <SeeCodeButton href="https://carbon.now.sh/EXQY5rCikBT8hC7LQcX6" />

          {/* DEMO - STYLING ----------------------------------------------- */}

          <Heading text="STRIPE ELEMENTS - INPUT LABEL" />

          <Subheading text="HIDE" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={5}
            submitButtonStyleN={1}
            showInputLabel={false}
          />
          <SeeCodeButton href="https://carbon.now.sh/LY4t0XauNdaZoAZOqwb2" />

          <Heading text="STRIPE ELEMENTS - INPUT STYLE" />

          <Subheading text="INPUT STYLE - RECT CORNERS" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={4}
            inputStyleN={1}
          />
          <SeeCodeButton href="https://carbon.now.sh/e5SmqNYNkBTLe5eeUY0z" />

          <Subheading text="INPUT STYLE - BOTTOM BORDER" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={4}
            inputStyleN={2}
          />
          <SeeCodeButton href="https://carbon.now.sh/smV8TocEj0tK08kKS7vF" />

          <Subheading text="INPUT STYLE - ROUND CORNERS" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={4}
            inputStyleN={3}
          />
          <SeeCodeButton href="https://carbon.now.sh/ZmVhZk8q73CTTBfTqRCh" />

          <Subheading text="INPUT STYLE - ROUND CORNERS AND BORDER" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={4}
            inputStyleN={4}
          />
          <SeeCodeButton href="https://carbon.now.sh/ySzBYjWDAk34GfmyIakG" />

          <Heading text="STRIPE ELEMENTS - SUBMIT BUTTON STYLE" />

          <Subheading text="SUBMIT BUTTON STYLE - RECT CORNERS" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={4}
            submitButtonStyleN={1}
          />
          <SeeCodeButton href="https://carbon.now.sh/TIdknogUs0ZgHV47VWEX" />

          <Subheading text="SUBMIT BUTTON STYLE - RECT CORNERS AND BORDER" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={4}
            submitButtonStyleN={2}
          />
          <SeeCodeButton href="https://carbon.now.sh/1IkUcXVJAWn9l8ToKTIx" />

          <Subheading text="SUBMIT BUTTON STYLE - ROUND CORNERS" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={4}
            submitButtonStyleN={3}
          />
          <SeeCodeButton href="https://carbon.now.sh/f62FTdidzGPGDOPddOAe" />

          <Subheading text="SUBMIT BUTTON STYLE - ROUND CORNERS AND BORDER" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={4}
            submitButtonStyleN={4}
          />
          <SeeCodeButton href="https://carbon.now.sh/fOLCdXRaHVBhfPHRlDFW" />

          <Heading text="STRIPE ELEMENTS - STYLING" />

          <Subheading text="STYLING WITH A STYLE OBJECT" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={5}
            inputStyleN={3}
            submitButtonStyleN={1}
            titleText="Lorem ipsum"
            subtitleText="Lorem ipsum"
            footnoteText="Lorem ipsum"
            showInputLabel={true}
            addStyle={{
              form: { border: "solid lightBlue 3px" },
              title: { border: "solid blue 3px" },
              subtitle: { border: "solid darkBlue 3px" },
              inputLabel: { border: "solid yellow 3px" },
              input: { border: "solid lightGreen 3px" },
              invalidInput: { border: "solid orange 3px" },
              placeholder: { border: "solid green 3px" },
              error: { border: "solid red 3px" },
              submitButton: { border: "solid lightGreen 3px" },
              footnote: { border: "solid green 3px" },
              verticalInputSeparatorHeight: { border: "solid pink 3px" },
              horizontalInputSeparatorWidth: { border: "solid purple 3px" },
              hr: { border: "solid lightGray 3px" },
              stripeElements: { border: "solid black 3px" }
            }}
          />
          <SeeCodeButton href="https://carbon.now.sh/SF3joPBDnkXniP1epLwM" />

          <Subheading text="STYLING WITH A CLASS NAME" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            formN={5}
            inputStyleN={3}
            submitButtonStyleN={1}
            titleText="Lorem ipsum"
            subtitleText="Lorem ipsum"
            footnoteText="Lorem ipsum"
            showInputLabel={true}
            addClassName={{
              form: "border-lightblue-3px",
              title: "border-blue-3px",
              subtitle: "border-darkblue-3px",
              inputLabel: "border-yellow-3px",
              input: "border-lightgreen-3px",
              invalidInput: "border-orange-3px",
              placeholder: "border-green-3px",
              error: "border-red-3px",
              submitButton: "border-lightgreen-3px",
              footnote: "border-green-3px",
              verticalInputSeparatorHeight: "border-pink-3px",
              horizontalInputSeparatorWidth: "border-purple-3px",
              hr: "border-lightgray-3px",
              stripeElements: "border-black-3px"
            }}
          />
          <SeeCodeButton href="https://carbon.now.sh/lYdkAf2ZlJTUGl6Mut9t" />

          <Heading text="MISC" />

          <Subheading text="PASS PROPS TO ANOTHER COMPONENT" />
          <Body text="Preview" />
          <Form
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="attachSource"
            attachFun={this.props.attachSource}
            onAttachSourceSuccessHandler={() => alert("DEMO: Source Attached!")}
            formN={4}
            submitButtonStyleN={1}
            showInputLabel={false}
          />

          <Heading text="STRIPE API DOCUMENTATION" />

          <Subheading text="ADD MORE STRIPE FUNCTIONALITY" />
          <a href="https://stripe.com/docs/api" target="blank">
            <Body text="CHECK THE STRIPE API DOCUMENTATION HERE." />
          </a>
        </div>
        {this.state.isLoading === true && <Loading />}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { authUser: auth.authUser };
};

export default connect(mapStateToProps, {
  attachSource,
  createCharge,
  createSubscription
})(ExamplesWeDevlopUIStripeElements);

ExamplesWeDevlopUIStripeElements.defaultProps = {};
