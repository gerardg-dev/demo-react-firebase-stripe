"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
/**
Validates data payload of a callable function
*/
exports.assert = (data, key) => {
    if (!data[key]) {
        throw new functions.https.HttpsError("invalid-argument", `function called without ${key} data`);
    }
    else {
        return data[key];
    }
};
/**
Validates auth context for callable function
*/
exports.assertUID = (context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError("permission-denied", "function called without context.auth");
    }
    else {
        return context.auth.uid;
    }
};
/**
Sends a descriptive error response when running a callable function
*/
exports.catchErrors = async (promise) => {
    try {
        return await promise;
    }
    catch (err) {
        throw new functions.https.HttpsError("unknown", err);
    }
};
//# sourceMappingURL=errorHandlers.js.map