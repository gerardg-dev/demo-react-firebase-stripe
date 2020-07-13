"use strict";
// bascially save data from another collection into a collection
// example, s comment collection would save not only the userId
// but also that user username and profilePicUrl, that way when we load
// a comment, there is no need to load that userId data
// we avoid retrieving more data, in 5000 comments, we would have to
// retrieve 5000 userIds, but with duplocation there is no need,
// just load the 5000 comments and the basic userId info is there
// so no need to make another 5000 data retrieve
// Only duplicate data you know is not gonna change overtime
//# sourceMappingURL=duplication.js.map