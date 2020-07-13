import { ON_HIDE_LOADER } from "constants/app_starter/ActionTypes";

import {} from "actions/app_starter/Auth";

import {} from "../../actions/app_starter/Auth";

import { firebaseAuth } from "../../firebase/auth";
import { firebaseFirestore } from "../../firebase/firestore";
import { firebaseStorage } from "../../firebase/storage";
import { firebaseFunctions } from "../../firebase/functions";

// const firebaseStoragePath = "test_images/";
const firebaseStoragePath = "profile_pictures/";

export const uploadFile = (file, filename) => {
  return async dispatch => {
    try {
      const upload = await firebaseStorage.uploadFile(
        firebaseStoragePath,
        filename,
        file
      );
      console.log("thunks uploadFile upload");
      console.log(upload);
    } catch (e) {
      // you can do something with error,
      // and still return a promise.reject here
      console.log("thunks uploadFile error");
      console.log(e);
      return Promise.reject(e);
    }
  };
};
