// // THIS EXAMPLE USES EXPRESS APP AND MIDDLEWARE THAT CHECKS AUTH HEADERS
//
// import * as functions from "firebase-functions";
// // import { db } from "../../../config";
// import * as express from "express";
// import * as cors from "cors";
//
// // Adding Express
// // Make sure use the terminal to install express in the /functions folder
// // npm install express
// // Multi Route ExpressJS HTTP Function
// const app = express();
//
// // Custom Middleware
// const auth = (request: any, response: any, next: any) => {
//   if (!request.headers.authorization) {
//     response.status(400).send("unauthorized");
//   }
//   next();
// };
//
// // CORS
// // Use the CORS middleware to avoid testing errors due to the fact
// // of using different URLs
// app.use(cors({ origin: true }));
//
// // Custom middleware useage
// app.use(auth);
//
// app.get("/cat", (request, response) => {
//   response.send("CAT");
// });
//
// app.get("/dog", (request, response) => {
//   response.send("DOG");
// });
//
// export const exampleExpressAPI = functions.https.onRequest(app);
