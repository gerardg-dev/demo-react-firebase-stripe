// export const uploadFile = (file, fileName) => {
//   return async dispatch => {
//     // *************************************************************************
//     // SAVE FILE IF USER IS AUTH
//
//     // const user = firebase.auth().currentUser;
//     // // const user = auth.currentUser;
//     //
//     // // Firestore Image Upload Path
//     // // get inside a user uid, and inside some folder save images
//     // const path = `${user.uid}/images`;
//     //
//     // const options = {
//     //   name: fileName
//     // };
//     //
//     // try {
//     //   // upload the file to firebase storage
//     //   let uploadedFile = await firebase.uploadFile(path, file, null, options);
//     //
//     //   // get url of image
//     //   let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
//     //
//     //   // get userdoc
//     //   let userDoc = await firestore.get(`users/${user.uid}`);
//     //
//     //   // check if user has photo, if not update profile
//     //   // if (!userDoc.data().photoURL) {
//     //   //   await firebase.updateProfile({
//     //   //     photoURL: downloadURL
//     //   //   });
//     //   //   await user.updateProfile({
//     //   //     photoURL: downloadURL
//     //   //   });
//     //   // }
//     //
//     //   // add the image to firestore
//     //   await firestore.add(
//     //     {
//     //       collection: "users",
//     //       doc: user.uid,
//     //       subcollections: [{ collection: "photos" }]
//     //     },
//     //     {
//     //       name: fileName,
//     //       url: downloadURL
//     //     }
//     //   );
//     //
//     //   console.log("File Upload Success");
//
//     // // *************************************************************************
//     // // SAVE FILE IF USER IS NOT AUTH
//     //
//     // // const user = firebase.auth().currentUser;
//     // // const user = auth.currentUser;
//     //
//     // // Firestore Image Upload Path
//     // // get inside a user uid, and inside some folder save images
//     // // const path = `${user.uid}/images`;
//     // const path = `test_uploads`;
//     //
//     // const options = {
//     //   name: fileName
//     // };
//     //
//     // try {
//     //   // upload the file to firebase storage
//     //   let uploadedFile = await firebase.uploadFile(path, file, null, options);
//     //   // let uploadedFile = await firestore.uploadFile(path, file, null, options);
//     //
//     //   // get url of image
//     //   let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
//     //
//     //   // get userdoc
//     //   // let userDoc = await firestore.get(`users/${user.uid}`);
//     //
//     //   // check if user has photo, if not update profile
//     //   // if (!userDoc.data().photoURL) {
//     //   //   await firebase.updateProfile({
//     //   //     photoURL: downloadURL
//     //   //   });
//     //   //   await user.updateProfile({
//     //   //     photoURL: downloadURL
//     //   //   });
//     //   // }
//     //
//     //   // add the image to firestore
//     //   await firestore.add(
//     //     {
//     //       collection: "test_uploads"
//     //       // doc: user.uid,
//     //       // subcollections: [{ collection: "photos" }]
//     //     },
//     //     {
//     //       name: fileName,
//     //       url: downloadURL
//     //     }
//     //   );
//     //
//     //   console.log("File Upload Success");
//     // } catch (error) {
//     //   console.log("File Upload Failed");
//     //   console.log(error);
//     // }
//
//     try {
//       // // FIREBASE STORAGE DOCS - CREATE REFERENCE ********************************
//       //
//       // // Points to the root reference
//       // var storageRef = firebase.storage().ref();
//       //
//       // // Points to 'images'
//       // var imagesRef = storageRef.child("test_images");
//       //
//       // // Points to 'images/space.jpg'
//       // // Note that you can use variables to create child values
//       // // var fileName = 'space.jpg';
//       // var spaceRef = imagesRef.child(fileName);
//       //
//       // // File path is 'images/space.jpg'
//       // var path = spaceRef.fullPath;
//       //
//       // // File name is 'space.jpg'
//       // var name = spaceRef.name;
//       //
//       // // Points to 'images'
//       // var imagesRef = spaceRef.parent;
//
//       // FIREBASE STORAGE DOCS - UPLOAD FILE *************************************
//       // Upload from a Blob or File
//
//       var storageRef = firebase.storage().ref(`test_images/${fileName}`);
//
//       // var file = ... // use the Blob or File API
//       // storageRef.put(file).then(function(snapshot) {
//       storageRef
//         // firebase
//         //   .storage()
//         //   .ref(`test_images/${fileName}`)
//         .put(file)
//         .then(function(snapshot) {
//           console.log("Uploaded a blob or file!");
//           console.log("Next, look at the snapshot below:");
//           console.log(snapshot);
//
//           // snapshot ref downloadURL
//           snapshot.ref.getDownloadURL().then(async function(downloadURL) {
//             console.log("File available at: ", downloadURL);
//             // console.log("snapshot ref downloadURL");
//             // const snapshotDownloadURL = snapshot.ref.getDownloadURL();
//             // console.log(snapshotDownloadURL);
//
//             // await firestore.set(`workers/${uid}`, { ...newUser });
//             await firestore
//               .collection("fs_test_images")
//               .add({ name: fileName, url: downloadURL });
//
//             console.log("File Upload Entire Process Success !!!");
//           });
//         });
//
//       // FIREBASE STORAGE DOCS - DOWNLOAD FILE ***********************************
//
//       // let downloadURL = "";
//       //
//       // // Get the download URL
//       // imagesRef
//       //   .getDownloadURL()
//       //   .then(function(url) {
//       //     // Insert url into an <img> tag to "download"
//       //     console.log("imagesRef.getDownloadURL url is:");
//       //     console.log(url);
//       //     downloadURL = url;
//       //   })
//       //   .catch(function(error) {
//       //     // A full list of error codes is available at
//       //     // https://firebase.google.com/docs/storage/web/handle-errors
//       //     switch (error.code) {
//       //       case "storage/object-not-found":
//       //         // File doesn't exist
//       //         console.log("storage/object-not-found");
//       //         break;
//       //
//       //       case "storage/unauthorized":
//       //         // User doesn't have permission to access the object
//       //         console.log("storage/unauthorized");
//       //         break;
//       //
//       //       case "storage/canceled":
//       //         // User canceled the upload
//       //         console.log("storage/canceled");
//       //         break;
//       //
//       //       case "storage/unknown":
//       //         // Unknown error occurred, inspect the server response
//       //         console.log("storage/unknown");
//       //         break;
//       //     }
//       //   });
//
//       // FIREBASE STORAGE DOCS - SAVE FIRESTORE **********************************
//
//       // add the image to firestore
//       // await firestore.add(
//       //   {
//       //     collection: "test_uploads"
//       //     // doc: user.uid,
//       //     // subcollections: [{ collection: "photos" }]
//       //   },
//       //   {
//       //     name: fileName,
//       //     url: downloadURL
//       //   }
//       // );
//
//       // dispatch({ type: SOME_ACTION, payload: somePayload });
//     } catch (error) {
//       console.log("Error uploading file at Auth Thunk");
//       console.log(error);
//     }
//     //
//   };
// };
