import * as TestFunctions from "firebase-functions-test";
import projectKeys from "../keys";

const firebaseConfig = {
  databaseURL: projectKeys.firebase.databaseURL,
  projectId: projectKeys.firebase.projectId,
  storageBucket: projectKeys.firebase.storageBucket
};

const envConfig = {
  stripe: { secret: projectKeys.stripe.secretKey }
};

const fun = TestFunctions(firebaseConfig, "service-account.json");

fun.mockConfig(envConfig);

export { fun };
