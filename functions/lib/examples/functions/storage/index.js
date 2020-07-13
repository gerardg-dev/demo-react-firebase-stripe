"use strict";
// import * as functions from "firebase-functions";
// import { db } from "../../../config";
//
// // Gives us access to the entire Storage SDK
// // so we can manipulate files and buckets thru our project
// import * as Storage from "@google-cloud/storage";
// const gcs = Storage();
//
// // Common use cases for storage functions is one of the next
// // User uploads an image and we resize it to 100px
//
// // Library for working with the nodejs filesystem
// // Is promised-based so you can use async/await
// // Install
// // npm i fs-extra
// // npm i -D @types/fs-extra
// import * as fs from "fs-extra";
//
// // Cloud Functions by default have filesystem functions
// // Temporary directory to save files to, and join for joining paths
// // together and save files in different locations
// import { tmpdir } from "os";
// import { join } from "path";
//
// // imagemagic.org
// // Cloud Funcitons by default comes with this package
// // For manipulating images, butis annoying to use, usage in the command line
// // On the contrary, library sharp is faster and easier to use
// // Is promised-based so you can use async/await
// // Install
// // npm i sharp
// import * as sharp from "sharp";
//
// // Our finalize function
// export const resizeAvatar = functions.storage
//   .object()
//   .onFinalize(async object => {
//     // Change "object.bucket" if you are using another bucket name
//     const bucket = gcs.bucket(object.bucket);
//
//     const filePath = object.name;
//     const fileName = filePath.split("/").pop();
//     const tmpFilePath = join(tmpdir(), object.name);
//
//     const avatarFileName = "avatar_" + fileName;
//     const tmpAvatarPath = join(tmpdir(), avatarFileName);
//
//     // Function termination point to avoid an infinite loop
//     // If this condition is met we want to exit out
//     if (fileName.includes("avatar_")) {
//       console.log("Exiting Function");
//       return false;
//     }
//
//     await bucket.file(filePath).download({
//       destination: tmpFilePath
//     });
//
//     await sharp(tmpFilePath)
//       .resize(100, 100)
//       .toFile(tmpAvatarPath);
//
//     // At this point we just need to take the temp avatar path and
//     // upload it to the bucket. In this case we wil upload it to the
//     // exact same location of the existing file with the avatar file name
//     // Since this is the last operation of the function we can return this
//     return bucket.upload(tmpAvatarPath, {
//       destination: join(dirname(filePath), avatarFileName)
//     });
//   });
//# sourceMappingURL=index.js.map