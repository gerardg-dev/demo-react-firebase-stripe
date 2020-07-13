// // Do whatever here, use it to test frontend apps
//
// import * as functions from "firebase-functions";
// // import { db } from "../../../config";
//
// export const basicHTTPTests = functions.https.onRequest((request, response) => {
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
