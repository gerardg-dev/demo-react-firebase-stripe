// https://firebase.google.com/docs/reference/js/firebase.FirebaseError
//
// firebaseErrorObject
// ["code", "name", toString()]
// code: "unavailable"
// name: "FirebaseError"

// JS Error contains "name", "message"
// IN addition to this 2 props, Firebase Error contains "code",
// Firebase Error is a subclass of JS Error

export default function (code) {
  if (code === "" || code === null) return;
  // if (code === undefined)

  // FIREBASE AUTH ERRORS
  if (code === "auth/network-request-failed") return "error.auth.network-request-failed";
  if (code === "auth/user-not-found") return "error.auth.user-not-found";
  if (code === "auth/email-already-in-use") return "error.auth.email-already-in-use";
  if (code === "auth/wrong-password") return "error.auth.wrong-password";

  // Generic Error Message
  return "error.something-happened-try-later";
};
