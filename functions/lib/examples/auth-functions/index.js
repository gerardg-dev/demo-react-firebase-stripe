"use strict";
// Types of Auth Functions:
// • Cloud Firestore Triggers
// • Realtime Database Triggers
// • Firebase Authentication Triggers
// • Google Analytics for Firebase Triggers
// • Crashlytics Triggers
// • Cloud Storage Triggers
// • Cloud Pub/Sub Triggers
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const config_1 = require("../../config");
exports.createUserRecord = functions.auth
    .user()
    .onCreate((user, context) => {
    const userRef = config_1.db.doc(`users/${user.uid}`);
    return userRef.set({
        name: user.displayName,
        createdAt: context.timestamp,
        nickname: "bubba"
    });
});
//# sourceMappingURL=index.js.map