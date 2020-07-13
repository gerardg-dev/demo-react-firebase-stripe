// // For locally serving or testing your functions,
// // in the terminal run:
// // firebase serve --only functions
// // or run the next, but make sure to be in the /functions directory:
// // npm run serve
// // you will be able to serve this functions locally at localhost:5000
// // I had an error running 2 commands above, it seems it cant read Stripe keys
// // Command below worked in Terminal in the /functions directory
// // firebase emulators:start --only functions
// // Above command was found at
// // https://firebase.google.com/docs/functions/local-emulator#invoke_https_callable_functions
// //
// // Or run:
// // firebase serve --only functions,hosting
// // https://firebase.google.com/docs/hosting/deploying
//
// import * as functions from "firebase-functions";
// // import { db } from "../../../config";
//
// export const basicHTTP = functions.https.onRequest((request, response) => {
//   const name = request.query.name;
//
//   if (!name) {
//     response.status(400).send("ERROR you must supply a name :(");
//   }
//
//   response.send(`hello ${name}`);
// });
//
// // Get this http function URL and pass the name parameter like this:
// // URL_HTTP_FUNCTION_HERE?name=john
