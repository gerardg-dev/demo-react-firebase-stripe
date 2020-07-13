import { firebase, auth } from "../firebase";

// export const createUserWithFacebook = async user => {};
// export const createUserWithGithub = async user => {};
// export const createUserWithGoogle = async user => {};
// export const createUserWithTwitter = async user => {};

export const signinWithEmailAndPassword = async (email, password) => {
  return new Promise(async function(resolve, reject) {
    const authUser = await auth.signInWithEmailAndPassword(email, password);
    const uid = authUser.user.uid;

    const usersSnapshot = await firebase
      .firestore()
      .collection("users")
      // .orderBy("name", "asc")
      .get();

    let userObject = {};
    usersSnapshot.docs.map(doc => {
      const docData = doc.data();
      if (docData.id.toString() === uid.toString()) {
        userObject = docData;
      }
    });

    if (authUser instanceof Error) {
      reject(authUser);
    } else {
      resolve(userObject);
    }
  });
};

export const createUserWithEmailAndPassword = async user => {
  const { email, password } = user;
  return new Promise(async function(resolve, reject) {
    // Create User
    let newUser = await auth.createUserWithEmailAndPassword(email, password);
    // Update User Profile Object
    // await newUser.user.updateProfile({
    //   displayName: user.name
    // });
    // Get User UID
    const uid = newUser.user.uid;
    // Return newUser object
    // return newUser;
    if (newUser instanceof Error || (newUser && newUser.message)) {
      reject(newUser);
    } else {
      resolve(newUser);
    }
  });
};

export const authUser = () => {
  return new Promise(function(resolve, reject) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // var refreshToken = user.refreshToken;
        // var uid = user.uid;
        // var displayName = user.displayName;
        // var photoURL = user.photoURL;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var phoneNumber = user.phoneNumber;
        // var isAnonymous = user.isAnonymous;
        // var tenantId = user.tenantId;
        // var metadata = user.metadata;
        // var metadataLastSignInTime = user.metadata.lastSignInTime;
        // var metadataCreationTime = user.metadata.creationTime;
        // var providerData = user.providerData;
        resolve(user);
      } else {
        // No user is signed in.
        resolve(null); // reject(Error("No Auth User"));
      }
    });
  });
};

export const sendEmailVerification = () => {
  const user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(function() {
      // return
    })
    .catch(function(error) {
      return error;
    });
};

export const sendPasswordResetEmail = email => {
  auth
    .sendPasswordResetEmail(email)
    .then(function() {
      // return
    })
    .catch(function(error) {
      return error;
    });
};

export const firebaseAuth = {
  createUserWithEmailAndPassword,
  authUser,
  sendEmailVerification,
  sendPasswordResetEmail
};
