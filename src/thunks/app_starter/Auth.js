import {
  ON_HIDE_LOADER,
  SIGNUP_USER_SUCCESS,
  // SIGNIN_FACEBOOK_USER,
  // SIGNIN_GITHUB_USER,
  // SIGNIN_GOOGLE_USER,
  // SIGNIN_TWITTER_USER,
  // SIGNIN_USER,
  // SIGNOUT_USER,
  // SIGNUP_USER
  SIGNUP_EMPLOYER,
  SIGNUP_EMPLOYEE,
  SIGNIN_EMPLOYER,
  SIGNIN_EMPLOYEE,
  AUTH_ERROR,
  FORM_SUBMIT_SUCCESS,
  RESET_PASSWORD_EMAIL_LINK_SENT,
  VERIFY_EMAIL_LINK_SENT,
  AUTH_USER
} from "constants/app_starter/ActionTypes";

import { firebaseAuth } from "../../firebase/auth";
import { firebaseFirestore } from "../../firebase/firestore";
import { firebaseStorage } from "../../firebase/storage";
import { firebaseFunctions } from "../../firebase/functions";

import {
  showAuthMessage,
  userSignInSuccess,
  userSignOutSuccess,
  userSignUpSuccess
} from "actions/app_starter/Auth";

import {
  userFacebookSignInSuccess,
  userGithubSignInSuccess,
  userGoogleSignInSuccess,
  userTwitterSignInSuccess
} from "../../actions/app_starter/Auth";

import { firebase, auth, firestore, functions } from "firebase/firebase";

export const getAuthUser = () => {
  return async dispatch => {
    let user = await firebaseAuth.authUser();
    console.log("> thunks > getAuthUser() > onAuthStateChanged");
    console.log(user);
    dispatch({ type: AUTH_USER, payload: user });

    // BELOW GETS USER STATE DIRECTLY FROM FIREBASE, SYNCHRONOUS OP
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     // User is signed in.
    //     console.log("> THNUK > getAuthUser() > onAuthStateChanged");
    //     console.log(user);
    //     dispatch({ type: AUTH_USER, payload: user });
    //   } else {
    //     // No user is signed in.
    //     dispatch({ type: AUTH_USER, payload: null });
    //   }
    // });
  };
};

export const sendPasswordResetEmail = email => {
  return async dispatch => {
    try {
      await firebaseAuth.sendPasswordResetEmail(email);
      dispatch({ type: AUTH_ERROR, payload: "" });
      dispatch({ type: ON_HIDE_LOADER, payload: false });
      dispatch({ type: RESET_PASSWORD_EMAIL_LINK_SENT, payload: true });
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: e });
      dispatch({ type: ON_HIDE_LOADER, payload: false });
    }
  };
};

export const sendEmailVerification = () => {
  return async dispatch => {
    try {
      await firebaseAuth.sendEmailVerification();
      dispatch({ type: AUTH_ERROR, payload: "" });
      dispatch({ type: VERIFY_EMAIL_LINK_SENT, payload: true });
    } catch (e) {
      // dispatch({ type: AUTH_ERROR, payload: error });
      dispatch({ type: ON_HIDE_LOADER, payload: false });
    }
  };
};

// export const createUser = user => {
export const signupEmployee = employee => {
  return async dispatch => {
    try {
      const { email, password } = employee;
      const newUser = await firebaseAuth.createUserWithEmailAndPassword({
        email,
        password
      });
      const uid = newUser.user.uid;
      localStorage.setItem("user_id", uid);

      let newUserRecord = {
        id: uid,
        displayName: "new record displayName",
        // createdAt: firestore.FieldValue.serverTimestamp(),
        name: employee.name ? employee.name : "",
        lastName: employee.lastName ? employee.lastName : "",
        email: employee.email ? employee.email : ""
        // password: employee.password ? employee.password : ""
        // birthdate: employee.birthdate ? employee.birthdate : "",
        // country: employee.country ? employee.country : "",
        // zipCode: employee.zipCode ? employee.zipCode : "",
        // city: employee.city ? employee.city : "",
        // state: employee.state ? employee.state : "",
        // addressLine1: employee.addressLine1 ? employee.addressLine1 : "",
        // addressLine2: employee.addressLine2 ? employee.addressLine2 : "",
        // phone: employee.phone ? employee.phone : "",
        // position: employee.skill ? employee.skill : "",
        // positions: employee.skills ? employee.skills : ""
      };

      const newRecord = await firebaseFirestore.createRecordWithExistingID({
        collection: "users",
        docID: uid,
        recordObject: newUserRecord
      });
      // readRecord({})
      // updateRecord({})
      // deleteRecord({})

      await firebaseAuth.sendEmailVerification();

      dispatch({ type: ON_HIDE_LOADER, payload: false });
      dispatch({ type: AUTH_ERROR, payload: "" });
      dispatch({ type: SIGNUP_USER_SUCCESS, payload: newUser });
    } catch (error) {
      dispatch({ type: ON_HIDE_LOADER, payload: false });
      dispatch({ type: AUTH_ERROR, payload: error });
    }
  };
};

export const clearResetPasswordEmailLinkSent = () => {
  return dispatch => {
    dispatch({ type: RESET_PASSWORD_EMAIL_LINK_SENT, payload: false });
  };
};
export const clearVerifyEmailLinkSent = () => {
  return dispatch => {
    dispatch({ type: VERIFY_EMAIL_LINK_SENT, payload: false });
  };
};
export const clearAuthError = () => {
  return dispatch => {
    dispatch({ type: AUTH_ERROR, payload: "" });
  };
};
export const clearFormSubmitSuccess = () => {
  return dispatch => {
    dispatch({ type: FORM_SUBMIT_SUCCESS, payload: "" });
  };
};
export const formSubmitSuccess = message => {
  return dispatch => {
    dispatch({ type: FORM_SUBMIT_SUCCESS, payload: message });
  };
};

// https://firebase.google.com/docs/auth/web/auth-state-persistence
export const signinWithEmailAndPassword = ({ email, password }) => {
  return async dispatch => {
    try {
      // dispatch({ type: SHOW_LOADER });
      //
      const authUser = await auth.signInWithEmailAndPassword(email, password);
      const uid = authUser.user.uid;
      //
      const usersSnapshot = await firebase
        .firestore()
        .collection("users")
        // .orderBy("name", "asc")
        .get();
      //
      let userObject = {};
      usersSnapshot.docs.map(doc => {
        const docData = doc.data();
        if (docData.id.toString() === uid.toString()) {
          userObject = docData;
        }
      });
      //
      // localStorage.setItem(localStorageItems.userID, uid);
      //
      // dispatch({ type: AUTH_USER, payload: authUser.user });
      // dispatch({ type: AUTH_USER, payload: uid });
      // //
      // dispatch({ type: SET_USER_OBJECT, payload: userObject });
      // //
      // dispatch({ type: HIDE_LOADER });
    } catch (e) {
      console.log("thunks - Auth - error");
      console.log(e);
      // dispatch({ type: SET_AUTH_ERROR, payload: e });
      // dispatch({ type: HIDE_LOADER });
      // dispatch({ type: ERROR, payload: e });
      // return Promise.reject(e);
    }
  };
};

export const signout = () => {
  return async dispatch => {
    try {
      // dispatch({ type: SHOW_LOADER });
      const authUser = await auth.signOut();
      // localStorage.setItem(localStorageItems.userID, null);
      // dispatch({ type: AUTH_USER, payload: null });
      // dispatch({ type: SET_USER_OBJECT, payload: null });
      // dispatch({ type: RESET_STATE });
      // dispatch({ type: REHYDRATE });
      // dispatch({ type: HIDE_LOADER });
    } catch (e) {
      console.log("thunks - Auth - error");
      console.log(e);
      // dispatch({ type: SET_AUTH_ERROR, payload: e });
      // dispatch({ type: HIDE_LOADER });
      // dispatch({ type: ERROR, payload: e });
      // return Promise.reject(e);
    }
  };
};

export const signupWithEmailAndPassword = ({ email, password }) => {
  return async dispatch => {
    try {
      // dispatch({ type: CLEAR_AUTH_ERROR });
      // dispatch({ type: SHOW_LOADER });

      let newUser = await auth.createUserWithEmailAndPassword(email, password);

      console.log("newUser");
      console.log(newUser);

      // if (newUser instanceof Error || (newUser && newUser.message)) {
      //   throw (newUser);
      // };

      const uid = newUser.user.uid;
      // localStorage.setItem(localStorageItems.userID, uid);

      const dateNow = firebase.firestore.Timestamp.fromDate(new Date());

      let newUserObj = {
        // ...dbUserModel,
        ...{
          created_at: dateNow,
          id: uid,
          email
        }
      };

      console.log("newUserObj");
      console.log(newUserObj);

      const newRecord = await firebaseFirestore.createRecordWithExistingID({
        collection: "users",
        docID: uid,
        recordObject: newUserObj
      });

      console.log("newRecord");
      console.log(newRecord);

      // dispatch({ type: AUTH_USER, payload: uid });

      // dispatch({ type: SET_USER_OBJECT, payload: newRecord });
      // dispatch({ type: SET_USER_OBJECT, payload: newUserObj });

      await firebaseAuth.sendEmailVerification();

      // dispatch({ type: HIDE_LOADER });
    } catch (e) {
      console.log("thunks - Auth - error");
      console.log(e);
      // dispatch({ type: SET_AUTH_ERROR, payload: e });
      // dispatch({ type: HIDE_LOADER });
      // dispatch({ type: ERROR, payload: e });
      // return Promise.reject(e);
    }
  };
};
