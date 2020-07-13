// export const testFirebaseFunction = message => {
//   return async dispatch => {
//     const testFunc = firebaseFunctions.httpsCallable("testFunction");
//     // const response = await testFunc({ message: "Howdy!" });
//     const response = await testFunc({ message });
//     console.log("testCloudFunctionCall");
//     console.log(response);
//
//     // WE CAN ALSO CALL FIREBASE FUNCTIONS
//     // by using that function URL
//     // and a library like fetch or axios to do HTTP calls
//     // passing method, headers, body, etc
//
//     // fetch
//
//     // ### A simple GET operation would be:
//     // fetch('<Your Firebase Cloud Function URL>')
//     // ### A POST operation would be done this way:
//     // fetch('<Yout Firebase Cloud Function URL>', {
//     //     method: 'POST',
//     //     headers: {
//     //         ...
//     //     },
//     //     body: JSON.stringify({
//     //         ...
//     //     })
//     // })
//
//     // axios
//
//     // ### GET
//     // import axios from 'axios'
//     //
//     // axios.get('<Your Firebase Cloud Function URL>')
//
//     // ### POST
//
//     // axios.post('<Your Firebase Cloud Function URL>', {
//     //     ...
//     //     ...
//     // })
//
//     // dispatch({ type: XXXXX_XXXX, payload: response });
//   };
// };
