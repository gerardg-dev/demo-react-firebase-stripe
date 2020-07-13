// export const signupEmployeeOLD = employee => {
//   // return dispatch => {
//   //     dispatch({ type: SIGN_UP_USER, payload: { credentials } });
//   // };
//
//   const { email, password } = employee;
//   let displayName = employee.name;
//
//   return async dispatch => {
//     // dispatch({ type: SIGN_UP_USER, payload: { credentials } });
//
//     try {
//       let createdUser = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       console.log("createdUser");
//       console.log(createdUser);
//
//       await createdUser.user.updateProfile({
//         displayName: displayName
//       });
//
//       let authUser = createdUser;
//
//       const uid = createdUser.user.uid;
//
//       localStorage.setItem("user_id", uid);
//
//       /*
//                   isPhoneConfirmed
//                   isEmailConfirmed
//                   isRegistrationComplete
//               */
//
//       // This is the object saved to the Collection at the Firestore Database
//       let newUser = {
//         id: uid,
//         displayName: displayName,
//         // createdAt: firestore.FieldValue.serverTimestamp(),
//
//         name: employee.name ? employee.name : "",
//         lastName: employee.lastName ? employee.lastName : "",
//         email: employee.email ? employee.email : ""
//         // password: employee.password ? employee.password : ""
//         // birthdate: employee.birthdate ? employee.birthdate : "",
//         // country: employee.country ? employee.country : "",
//         // zipCode: employee.zipCode ? employee.zipCode : "",
//         // city: employee.city ? employee.city : "",
//         // state: employee.state ? employee.state : "",
//         // addressLine1: employee.addressLine1 ? employee.addressLine1 : "",
//         // addressLine2: employee.addressLine2 ? employee.addressLine2 : "",
//         // phone: employee.phone ? employee.phone : "",
//         // position: employee.skill ? employee.skill : "",
//         // positions: employee.skills ? employee.skills : ""
//       };
//
//       // use firestore.set when you have a uid, use firestore.add when not
//       // await firestore.set(`workers/${uid}`, { ...newUser });
//       // -----------------------------------------------------------------------
//       // this one creates a new id at /users/newID
//       // we already have one when we created user at "createdUser.user.uid;"
//       // await firestore.collection("users").add(newUser);
//       // -----------------------------------------------------------------------
//       // since we already have a userID, use code below to create
//       // record using that existent userID
//       await firestore
//         .collection("users")
//         .doc(uid)
//         .set(newUser);
//
//       // ***********************************************************************
//       // Email Verification
//
//       const user = firebase.auth().currentUser;
//       user
//         .sendEmailVerification()
//         .then(function() {
//           console.log("sendEmailVerification .then");
//         })
//         .catch(function(error) {
//           console.log("sendEmailVerification .catch error");
//           console.log(error);
//         });
//
//       // // ***********************************************************************
//       // // Password Reset Email
//       //
//       // // var auth = firebase.auth();
//       // var emailAddress = "gerardg.dev@gmail.com";
//       //
//       // auth
//       //   .sendPasswordResetEmail(emailAddress)
//       //   .then(function() {
//       //     // Email sent.
//       //     console.log("Reset Password Email Was Sent");
//       //   })
//       //   .catch(function(error) {
//       //     // An error happened.
//       //     console.log("Reset Password Email Was NOT Sent");
//       //     console.log(error);
//       //   });
//       //
//       // // ***********************************************************************
//
//       dispatch({ type: ON_HIDE_LOADER, payload: false });
//       // dispatch({ type: SIGNUP_USER_SUCCESS, payload: authUser });
//       dispatch({ type: SIGNUP_USER_SUCCESS, payload: newUser });
//
//       dispatch({ type: AUTH_ERROR, payload: "" });
//     } catch (error) {
//       console.log(
//         "************************************************************"
//       );
//       console.log("ERROR at firebaseSignUp - EMPLOYEE");
//       console.log(error);
//       // dispatch({
//       //     type: REDUX_FORM_ERROR, // AUTH ERROR
//       //     payload: error.message,
//       // });
//       dispatch({ type: AUTH_ERROR, payload: error });
//
//       dispatch({ type: ON_HIDE_LOADER, payload: false });
//     }
//   };
//
//   // return async (dispatch, getState, { getFirebase, getFirestore }) => {
//   //   const firebase = getFirebase();
//   //   const firestore = getFirestore();
//   //
//   //   try {
//   //     let createdUser = await firebase
//   //       .auth
//   //       .createUserWithEmailAndPassword(email, password);
//   //     console.log(createdUser);
//   //
//   //     await createdUser.user.updateProfile({
//   //       displayName: displayName
//   //     });
//   //
//   //     /*
//   //               isPhoneConfirmed
//   //               isEmailConfirmed
//   //               isRegistrationComplete
//   //           */
//   //
//   //     // This is the object saved to the Collection at the Firestore Database
//   //     let newUser = {
//   //       displayName: displayName,
//   //       createdAt: firestore.FieldValue.serverTimestamp(),
//   //
//   //       name: employee.name ? employee.name : "",
//   //       lastName: employee.lastName ? employee.lastName : "",
//   //       email: employee.email ? employee.email : "",
//   //       password: employee.password ? employee.password : "",
//   //       birthdate: employee.birthdate ? employee.birthdate : "",
//   //       country: employee.country ? employee.country : "",
//   //       zipcode: employee.zipCode ? employee.zipCode : "",
//   //       city: employee.city ? employee.city : "",
//   //       state: employee.state ? employee.state : "",
//   //       addressLine1: employee.addressLine1 ? employee.addressLine1 : "",
//   //       addressLine2: employee.addressLine2 ? employee.addressLine2 : "",
//   //       phone: employee.phone ? employee.phone : "",
//   //       position: employee.skill ? employee.skill : "",
//   //       positions: employee.skills ? employee.skills : ""
//   //     };
//   //
//   //     const uid = createdUser.user.uid;
//   //
//   //     // use firestore.set when you have a uid, use firestore.add when not
//   //     await firestore.set(`employees/${uid}`, { ...newUser });
//   //   } catch (error) {
//   //     // dispatch({
//   //     //     type: REDUX_FORM_ERROR,
//   //     //     payload: error.message,
//   //     // });
//   //   }
//   // };
//
// };
//
//
// /*
//
// USERS
// id
// role "owner" "admin" "recruiter" "employer" "worker"
// personal info
// billing info
// permissions: [
//   {
//     module: employees,
//     actions: [
//       {
//         name: "general",
//         create: true,
//         read: true,
//         update: true,
//         delete: true
//       },
//       // or
//       {
//         name: "general_create",
//         access: true`
//       },
//       {
//         name: "general_read",
//         access: true`
//       },
//       {
//         name: "general_update",
//         access: true`
//       },
//       {
//         name: "general_delete",
//         access: true`
//       },
//       {
//         name: "edit_name",
//         access: true
//       },
//       {
//         name: "edit_profile_photo",
//         access: true
//       }
//     ]
//   }
// ]
//
// MEMBERSHIPS
// id
//
// INDUSTRIES
// id
//
// SERVICES
// id
// name
// description
// price
// tax
//
// PRODUCTS
// id
// name
// description
// price
// tax
//
// */
