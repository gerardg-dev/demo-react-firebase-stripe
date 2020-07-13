"use strict";
// // efficient technique to load most recent posts using data duplication
// // here we can easily just save in the User model, the 3 most recetn posts model data
// // cause if a user wants to see its feed, we would have to load
// // all users he is following, and then load all posts from each user
// // then select the top 3 most recent
// // but if we embed the top most 3 recent in the User model, duplication here
// // but maybe inside the User create a recentPosts subcollection
// // that way if we open the feed, we will just load all users we follow
// // no need to load their posts and then query the recent ones
//
// import { db } from "./config";
// import * as firebase from "firebase/app";
// const remove = firebase.firestore.FieldValue.arrayRemove;
// const union = firebase.firestore.FieldValue.arrayUnion;
//
// export const follow = (followed, follower) => {
//   const followersRef = db.collection("followers").doc(followed);
//
//   followersRef.update({ users: union(follower) });
// };
//
// // 2. Unfollow User
//
// export const unfollow = (followed, follower) => {
//   const followersRef = db.collection("followers").doc(followed);
//
//   followersRef.update({ users: remove(follower) });
// };
//
// // 3. Get posts of followers
//
// export const getFeed = async () => {
//   const followedUsers = await db
//     .collection("followers")
//     .where("users", "array-contains", "jeffd23")
//     .orderBy("lastPost", "desc")
//     .limit(10)
//     .get();
//
//   const data = followedUsers.docs.map(doc => doc.data());
//
//   const posts = data.reduce((acc, cur) => acc.concat(cur.recentPosts), []);
//
//   const sortedPosts = posts.sort((a, b) => b.published - a.published);
//
//   // render sortedPosts in DOM
// };
//# sourceMappingURL=follower-feed.js.map