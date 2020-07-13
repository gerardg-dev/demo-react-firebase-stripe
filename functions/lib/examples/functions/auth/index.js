"use strict";
// // Types of Auth Functions:
// // • Cloud Firestore Triggers
// // • Realtime Database Triggers
// // • Firebase Authentication Triggers
// // • Google Analytics for Firebase Triggers
// // • Crashlytics Triggers
// // • Cloud Storage Triggers
// // • Cloud Pub/Sub Triggers
//
// import * as functions from "firebase-functions";
// import { db } from "../../../config";
//
// export const createUserRecord = functions.auth
//   .user()
//   .onCreate((user, context) => {
//     const userRef = db.doc(`users/${user.uid}`);
//
//     return userRef.set({
//       name: user.displayName,
//       createdAt: context.timestamp,
//       nickname: "bubba"
//     });
//   });
//# sourceMappingURL=index.js.map