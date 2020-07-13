"use strict";
// import { db } from "../../../config";
//
// let lastWeek = "";
// let today = "";
//
// // Reference the collection
// // Then use a query method, most common is orderBy, default is "asc"
// const query = db.collection("posts").orderBy("date"); // default is "asc"
// const query = db.collection("posts").orderBy("date", "desc");
//
// // orderBy can be used as a filter as well
// const query = db.collection("posts").orderBy("published");
//
// // You can also chain any methods
// // Say we want to limit the results to 20 items
// const query = db
//   .collection("posts")
//   .orderBy("published")
//   .limit(20);
//
// // Pagination
//
// // startAfter
// // gets all data after lastWeek, but it doesnt include lastWeek data
// const query = db
//   .collection("posts")
//   .orderBy("data")
//   .startAfter(lastWeek);
//
// // startAt
// // if we want to include lastWeek data, then use startAt
// const query = db
//   .collection("posts")
//   .orderBy("data")
//   .startAt(lastWeek);
//
// // endAt
// // this is the inclusive version
// const query = db
//   .collection("posts")
//   .orderBy("data")
//   .endAt(lastWeek);
//
// // endBefore
// // this is the exclusive version
// const query = db
//   .collection("posts")
//   .orderBy("data")
//   .endBefore(lastWeek);
//
// // Where
// // 3 arguments
// // 1 - Field you want to filter by
// // 2 - operator <, <=, ==. >, >=. works on numbers, strings, etc
// // 3 - value you want to compare it to
// const query = db.collection("posts").where("date", "==", today);
//
// // chain multiple where statements together
// // logically is and &&, also we would need indexes
// // you can only use 1 range operator
// const query = db
//   .collection("posts")
//   .where("date", "==", today)
//   .where("name", "==", "john");
//
// // OR class, there is no support as in SQL
// // but we can always perform multiple queries
// // queries below is similar to an OR operator
// const query = db.collection("posts").where("name", "!=", "john");
// const above = db.collection("posts").where("age", ">", "21");
// const below = db.collection("posts").where("age", "<", "100");
// // always make simple indiviudal queries that one complex query
//
// // array-contains
// // to check if array contains a certain value
// // has the limitiation of check for only 1 value at a time
// const query = db.collection("posts").where("name", "array-contains", "cool");
//
// // RESUME **********************************************************************
//
// // Basic Where
// const rangeQuery = db.collection("users").where("age", ">=", 21);
//
// // AND
// const andQuery = db
//   .collection("users")
//   .where("age", "==", 21)
//   .where("sex", "==", "M");
//
// // OR
// const q1 = db.collection("users").where("age", "==", 21);
// const q2 = db.collection("users").where("age", "==", 25);
//
// // NOT
// const not1 = db.collection("users").where("age", ">", 21);
// const not2 = db.collection("users").where("age", "<", 21);
//# sourceMappingURL=queries.js.map