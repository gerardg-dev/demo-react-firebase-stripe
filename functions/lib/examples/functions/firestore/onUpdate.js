"use strict";
// import * as functions from "firebase-functions";
// import { db } from "../../../config";
//
// // beforeState and afterState
// // onCreate snapshot is "snapshot.data()"
// // onUpdate snapshot is "snapshot.before.data()" and "snapshot.after.data()"
// // we can validate their changes with this states
//
// export const userTrend = functions.firestore
//   .document("test_games/{gameId}")
//   .onCreate(async (snapshot, context) => {
//     const before = snapshot.before.data();
//     const after = snapshot.after.data();
//
//     let trend;
//
//     if (after.score >= before.score) {
//       trend = "You are improving! :)";
//     } else {
//       trend = "You are on the decline! :(";
//     }
//
//     const userRef = db.doc(`users/${after.uid}`);
//
//     return userRef.update({
//       trend
//     });
//   });
//
// // Test function locally in the Firebase test suite
// // npm run shell
// // Then run this function in the firebase shell
// // firebase > userTrend({ before: { uid: "foo", score: 500 }, after: { uid: "foo", score: 600 } } ... )
//
// // WARNING
// // In the use of this functions you may fall in a loop
// // Imagine we updated the same document that triggers this function
// // we would end up in an infinite loop where this function continues
// // to trigger itself over and over again
// // If we dont detect this, our Firebase bill will endup being very expensive
// // One Solution
// // We would need to give the function a termination point
// // basically if a certain condition is met we want to exit out
// // of the funciton, so we dont endup in an infinite loop situation
//# sourceMappingURL=onUpdate.js.map