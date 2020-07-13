import { firebase, firestore } from "../firebase";

// export const uploadFile = async (storagePath, filename, file) => {
//   // var storageRef = firebase.storage().ref(`test_images/${filename}`);
//   var storageRef = firebase.storage().ref(`${storagePath}${filename}`);
//   storageRef
//     .put(file)
//     .then(function(snapshot) {
//       console.log("Uploaded a blob or file!");
//       console.log("Next, look at the snapshot below:");
//       console.log(snapshot);
//
//       // snapshot ref downloadURL
//       snapshot.ref.getDownloadURL().then(async function(downloadURL) {
//         console.log("File available at: ", downloadURL);
//         // console.log("snapshot ref downloadURL");
//         // const snapshotDownloadURL = snapshot.ref.getDownloadURL();
//         // console.log(snapshotDownloadURL);
//
//         // SAVE URL's ON THE DATABASE
//         // SET THIS IN A SEPARATE FUNCTIONS UNDER THE /firestore FOLDER
//         // await firestore.set(`workers/${uid}`, { ...newUser });
//         await firestore
//           .collection("fs_test_images")
//           .add({ name: filename, url: downloadURL });
//
//         console.log("File Upload Entire Process Success !!!");
//       });
//     })
//     .catch(error => {
//       console.log("/firebase uploadFile ERROR");
//       console.log(error);
//       return error;
//       // // A full list of error codes is available at
//       // // https://firebase.google.com/docs/storage/web/handle-errors
//       // switch (error.code) {
//       //   case 'storage/unauthorized':
//       //     // User doesn't have permission to access the object
//       //     break;
//       //   case 'storage/canceled':
//       //     // User canceled the upload
//       //     break;
//       //   ...
//       //   case 'storage/unknown':
//       //     // Unknown error occurred, inspect error.serverResponse
//       //     break;
//       // }
//     });
// };

export const uploadFile = async (storagePath, filename, file) => {
  return new Promise(function(resolve, reject) {
    var storageRef = firebase.storage().ref(`${storagePath}${filename}`);
    storageRef
      .put(file)
      .then(function(snapshot) {
        snapshot.ref.getDownloadURL().then(async function(downloadURL) {
          console.log("File available at: ", downloadURL);
          // await firestore
          //   .collection("fs_test_images")
          //   .add({ name: filename, url: downloadURL });
          // console.log("File Upload Entire Process Success !!!");
          resolve(downloadURL);
        });
      })
      .catch(error => {
        console.log("/firebase uploadFile ERROR");
        console.log(error);
        // return error;
        reject(error);
      });
  });
};

export const firebaseStorage = {
  uploadFile
};
