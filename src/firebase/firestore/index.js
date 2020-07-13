import { firebase, firestore } from "../firebase";

export const createRecordWithExistingID = async data => {
  return new Promise(async function(resolve, reject) {
    const { collection, docID, recordObject } = data;
    const newRecord = await firestore
      .collection(collection)
      .doc(docID)
      .set(recordObject);
    resolve(newRecord);
    // throw { name: "That username is taken" };
    // Any error thrown is automatically converted to a rejection of the promise
  });
};

// export const createRecordWithExistingID = async data => {
//   const { collection, docID, recordObject } = data;
//   const newRecord = await firestore
//     .collection(collection)
//     .doc(docID)
//     .set(recordObject);
//   return newRecord;
// };

export const createRecord = async data => {
  return new Promise(async function(resolve, reject) {
    const { collection, recordObject } = data;
    const newRecord = await firestore.collection(collection).add(recordObject);
    // return newRecord;
    resolve(newRecord);
  });
};

// export const firebaseFirestore = {
export const firebaseFirestore = {
  createRecord,
  createRecordWithExistingID
};
