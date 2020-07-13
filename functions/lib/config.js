"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Initialize Firebase Admin
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Initialize Cloud Firestore Database
exports.db = admin.firestore();
const settings = { timestampsInSnapshots: true };
exports.db.settings(settings);

// ENV Variables
exports.stripeSecret = functions.config().stripe.secret;

// Export Stripe
const Stripe = require("stripe");
exports.stripe = new Stripe(exports.stripeSecret);

//# sourceMappingURL=config.js.map
