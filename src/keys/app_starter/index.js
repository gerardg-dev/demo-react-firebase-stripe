// export default {
//   firebase: {
//     apiKey: "AIzaSyBkPBtZSXBtr2dB4NOwZojXOv4BChpSGYk",
//     authDomain: "wedevlop-starter.firebaseapp.com",
//     databaseURL: "https://wedevlop-starter.firebaseio.com",
//     projectId: "wedevlop-starter",
//     storageBucket: "wedevlop-starter.appspot.com",
//     messagingSenderId: "934850151416",
//     appId: "1:934850151416:web:ad4523b37565dfc4344c0d",
//     measurementId: "G-BNPJEWXVDB"
//   },
//   stripe: {
//     publishableKey: "pk_test_tv5ByTwshOAll6nita4mBQZO00eFm3D23W",
//     secretKey: "sk_test_rVp2XRLojxcfi0llIMwDj9Xp00JxEIOZkD"
//   }
// };

export default {
  firebase: {
    apiKey: "AIzaSyBygD_30UNMzGBbN_pHSzDfS9yeKhmVn2I",
    authDomain: "app-starter-73c1a.firebaseapp.com",
    databaseURL: "https://app-starter-73c1a.firebaseio.com",
    projectId: "app-starter-73c1a",
    storageBucket: "app-starter-73c1a.appspot.com",
    messagingSenderId: "291041558418",
    appId: "1:291041558418:web:08b6e7e7c588818ea6cb4b",
    measurementId: "G-H72BBQ3RLH"
  },
  stripe: {
    publishableKey: "pk_test_tv5ByTwshOAll6nita4mBQZO00eFm3D23W",
    secretKey: "sk_test_rVp2XRLojxcfi0llIMwDj9Xp00JxEIOZkD",
    products: {
      goldPlan: {
        id: "prod_HctJLjMPjlcoAB",
        pricing_plans: {
          monthly: "price_1H3dWsHAENan7AfXVeh3ENin",
          yearly: "price_1H3dWsHAENan7AfXakz9bA5C"
        }
      },
      silverPlan: {
        id: "prod_HctLhKF2DrXWuA",
        pricing_plans: {
          monthly: "price_1H3dYqHAENan7AfXrXqCYtfd",
          yearly: "price_1H3dYrHAENan7AfXeY3SjFAZ"
        }
      },
      bronzePlan: {
        id: "prod_HctMH64LsWbR5v",
        pricing_plans: {
          monthly: "price_1H3da8HAENan7AfX7I9WNXSE",
          yearly: "price_1H3da8HAENan7AfXYw8EGjw4"
        }
      }
    }
  }
};
