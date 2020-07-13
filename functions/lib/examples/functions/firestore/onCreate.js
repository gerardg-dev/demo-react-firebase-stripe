"use strict";
// import * as functions from "firebase-functions";
// import { db } from "../../../config";
//
// // Basic example of data aggregation
//
// export const gameCount = functions.firestore
//   .document("test_games/{gameId}")
//   .onCreate(async (snapshot, context) => {
//     const data = snapshot.data();
//
//     const userRef = db.doc(`users/${data.uid}`);
//
//     const userSnap = await userRef.get();
//
//     const userData = userSnap.data();
//
//     return userRef.update({
//       gameCount: userData.gameCount + 1
//     });
//   });
//
// // Test function locally in the Firebase test suite
// // npm run shell
// // Then run this function in the firebase shell
// // firebase > gameCount({ uid: "foo" })
//# sourceMappingURL=onCreate.js.map