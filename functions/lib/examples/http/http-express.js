"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// import { db } from "../../config";
const express = require("express");
const cors = require("cors");
// Adding Express
// Make sure use the terminal to install express in the /functions folder
// npm install express
// Multi Route ExpressJS HTTP Function
const app = express();
// Custom Middleware
const auth = (request, response, next) => {
    if (!request.headers.authorization) {
        response.status(400).send("unauthorized");
    }
    next();
};
// CORS
// Use the CORS middleware to avoid testing errors due to the fact
// of using different URLs
app.use(cors({ origin: true }));
// Custom middleware useage
app.use(auth);
app.get("/cat", (request, response) => {
    response.send("CAT");
});
app.get("/dog", (request, response) => {
    response.send("DOG");
});
exports.exampleExpressAPI = functions.https.onRequest(app);
//# sourceMappingURL=http-express.js.map