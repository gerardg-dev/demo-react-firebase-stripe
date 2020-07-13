"use strict";
// import { db } from "../../../config";
//
// // Single doc read
// // Access path to reference the data
// const ref = db.collection("posts").doc("postId");
//
// // Read it, To return it as a promise in javascript
// const ref = db
//   .collection("posts")
//   .doc("postId")
//   .get();
//
// // Read it, real time stream of the data
// const ref = db
//   .collection("posts")
//   .doc("postId")
//   .onSnapshot();
//
// // Subcollection Read
// const ref = db
//   .collection("posts")
//   .doc("postId")
//   .collection("tags");
//
// // Bucket Read
// const post = db.collection("posts").doc("postId");
// const tags = db.collection("tags").doc("postId");
//
// // Multi-document read
// // Reading multiple docs when you have an array of id's
// // Solution, an array of promises condensed in a Promise.all()
// const post = await db
//   .collection("posts")
//   .doc("postId")
//   .get();
// const tagIds = post.data().tags;
// const tagReads = tagIds.map(tag =>
//   db
//     .collection("tags")
//     .doc(tag)
//     .get()
// );
// const tags = await Promise.all(tagReads);
//
// // Reads an array of IDs from a collection concurrently
// const readIds = async (collection, ids) => {
//   const reads = ids.map(id => collection.doc(id).get());
//   const result = await Promise.all(reads);
//   return result.mao(v => v.data());
// };
//
// // The above works with .get() cause it reads with promises
// // but if we want it with .onSnapshot() realtime streams, use "rxjs?"
//# sourceMappingURL=read.js.map