export default {
  examples: {
    firebase: {
      auth: {
        home: "/examples/firebase-auth"
      }
    },
    components: {
      wedevlopUI: {
        myForm: {
          home: "/examples/components/wedevlop-ui/my-form"
        },
        stripeElements: {
          home: "/examples/components/wedevlop-ui/stripe-elements",
          ops: {
            attachSource:
              "/examples/components/wedevlop-ui/stripe-elements/ops/attach-source",
            createCharge:
              "/examples/components/wedevlop-ui/stripe-elements/ops/create-charge",
            createSubscription:
              "/examples/components/wedevlop-ui/stripe-elements/ops/create-subscription"
          },
          api: {
            customer:
              "/examples/components/wedevlop-ui/stripe-elements/api/customer",
            charges:
              "/examples/components/wedevlop-ui/stripe-elements/api/charges",
            subscriptions:
              "/examples/components/wedevlop-ui/stripe-elements/api/subscriptions"
          }
        }
      }
    }
  }
};
