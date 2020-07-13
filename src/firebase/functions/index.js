import { firebase, auth, firestore, functions } from "../firebase";
import { stripe } from "./stripe";

// export const exampleFunction = async () => {
//   const func = firebaseFunctions.httpsCallable("testFunction");
//   const response = await func({ message });
// };

export const callableFunction = async (functionName, data) => {
  const func = functions.httpsCallable(functionName);
  return await func(data);
};

export const firebaseFunctions = {
  // exampleFunction,
  callableFunction,
  stripe
};
