// // http://twilio.com/docs/libraries/node
//
// // Install twilio in the /functions folder
// // npm i twilio
//
// // Set Twilio token and sid using the terminal
// // firebase functions:config:set twilio.sid="abc" twilio.token="xyz"
// // Check if Twilio config was set correctly
// // firebase functions:config:get
//
// import * as functions from "firebase-functions";
// import { db } from "../../../config";
//
// import * as Twilio from "twilio";
//
// const credentials = functions.config().twilio;
//
// const client = new Twilio(credentials.sid, credentials.token);
//
// export const sendText = functions.https.onCall(async (data, context) => {
//   const userId = context.auth.uid;
//
//   const userRef = db.doc(`users/${userId}`);
//
//   const userSnap = await userRef.get();
//
//   const number = userSnap.data().phoneNumber;
//
//   return client.messages.create({
//     body: data.message, // SMS Message, data coming from the frontend
//     to: number, // User's phone number
//     from: "+1234567890" // Your Twilio number
//   });
// });
//
// // This is by far easier that doing it from sratch in a NodeJS ExpressJS app
// // Also look how to implement this in the front end,
// // cause since it uses Firebase SDK, implementation is different than
// // generic javascript implementation
//
// // Using Callable Functions from the FrontEnd,
// // using Firebase SDK and plain javascript:
//
// // let app = firebase.app();
//
// // const funcName = "sendText";
// // const sendText = firebase.functions().httpCallable(funcName);
// // await sendText({ message: "Hello World" })
//
// // PRO TIPS
// // Testing - Jest (easiest)
// // Performance,
// // Cloud Functions, time limits, max mins, durations, sizes
// // Cron Jobs or Scheduled Function Calls: "gcloud alpha scheduler jobs"
